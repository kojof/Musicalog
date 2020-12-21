import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GridApi, GridOptions } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { Album } from '../model/album';
import { ButtonRendererComponent } from './../button-renderer.component';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit  {

    title = 'Musicalog - Music Catalog Web';

    gridApi: GridApi;
    private getRowNodeId;
    private rowData;
    public albums: Album[];
    frameworkComponents: any;

    gridOptions: GridOptions = {

        paginationPageSize: environment.gridPageSize
    }; 

    columnDefs = [
        { headerName: 'Id', field: 'Id', sortable: true, filter: true },
        { headerName: 'Album Name', field: 'Name', sortable: true, filter: true },
        { headerName: 'Artist', field: 'Artist', sortable: true, filter: true },
        { headerName: 'Type', field: 'AlbumType.Name', sortable: true, filter: true },
        { headerName: 'Stock', field: 'Stock', sortable: true, filter: true },
        { headerName: 'Edit', field: 'Id', sortable: true, cellRenderer: this.createHyperLink.bind(this), },
        {
            headerName: 'Delete',
            cellRenderer: 'buttonRenderer',
            cellRendererParams: {
                onClick: this.onDeleteButtonClick.bind(this),
                label: 'Remove from Catalog'
            }
        }
    ];

    constructor(private readonly albumService: AlbumService, private router: Router, private toastr: ToastrService) {
        this.frameworkComponents = {
            buttonRenderer: ButtonRendererComponent,
        };

        this.getRowNodeId = (params) => {
            return params.id;
        };
    }

    ngOnInit(): void {
        this.albumService.getAll().subscribe(
          data => {
            this.albums = data;
            console.log(this.albums)
          }
        );

    //     this.albumService.getAll().subscribe( data => this.albums = data);
      }

    removeRowData = () => {
        const focusedNode = this.gridApi.getSelectedRows()[0];
        const newRowData = this.rowData.filter(row => {
            return row !== focusedNode;
        });
        this.rowData = newRowData;
    }

    onDeleteButtonClick(params): void {
        console.log(params.data.Id);
        const id = params.data.Id;

      //  const selectedRows =  this.gridApi.getSelectedRows();

        // if (selectedRows.length == 0) {
        //   this.toastr.error("error", "Please select an Album for deletion");
        //   return;
        // }

        // this.albumService.deleteAlbum(id).subscribe(data =>{
        //     this.toastr.success("success", data);
        //     this.ngOnInit();
        //     this.gridApi.refreshRows(null);
        //   });

        if (id != null) {
            //  debugger;
            this.albumService.deleteAlbum(id);
            this.ngOnInit();
            this.gridApi.refreshRows(null);
            this.router.navigate(['albums']);
        }
    }

    onGridReady(params): void  {
        this.gridApi = params.api;
    }

    createHyperLink(params): any {
        if (!params.data) {
            return;
        }
     
        const spanElement = document.createElement('span');
        spanElement.innerHTML = `<a href="${this.editAlbumDetailUrl(params.data.Id)}">Edit</a> `;
        spanElement.addEventListener('click',
            ($event) => {
                $event.preventDefault();
                this.router.navigate([this.editAlbumDetailUrl(params.data.Id)]);
            });
        return spanElement;
    }


    AddAlbum(): void {
        this.router.navigate(['addDetail']);
    }

    editAlbumDetailUrl(id: string): string {
        return 'editDetail/' + id;
    }
}



