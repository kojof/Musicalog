import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ButtonRendererComponent } from './../button-renderer.component';
let AlbumComponent = class AlbumComponent {
    constructor(albumService, router, toastr) {
        this.albumService = albumService;
        this.router = router;
        this.toastr = toastr;
        this.title = 'Musicalog - Music Catalog Web';
        this.gridOptions = {
            paginationPageSize: environment.gridPageSize
        };
        this.columnDefs = [
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
        this.removeRowData = () => {
            const focusedNode = this.gridApi.getSelectedRows()[0];
            const newRowData = this.rowData.filter(row => {
                return row !== focusedNode;
            });
            this.rowData = newRowData;
        };
        this.frameworkComponents = {
            buttonRenderer: ButtonRendererComponent,
        };
        this.getRowNodeId = (params) => {
            return params.id;
        };
    }
    ngOnInit() {
        this.albumService.getAll().subscribe(data => {
            this.albums = data;
            console.log(this.albums);
        });
        //     this.albumService.getAll().subscribe( data => this.albums = data);
    }
    onDeleteButtonClick(params) {
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
    onGridReady(params) {
        this.gridApi = params.api;
    }
    createHyperLink(params) {
        if (!params.data) {
            return;
        }
        const spanElement = document.createElement('span');
        spanElement.innerHTML = `<a href="${this.editAlbumDetailUrl(params.data.Id)}">Edit</a> `;
        spanElement.addEventListener('click', ($event) => {
            $event.preventDefault();
            this.router.navigate([this.editAlbumDetailUrl(params.data.Id)]);
        });
        return spanElement;
    }
    AddAlbum() {
        this.router.navigate(['addDetail']);
    }
    editAlbumDetailUrl(id) {
        return 'editDetail/' + id;
    }
};
AlbumComponent = __decorate([
    Component({
        selector: 'app-album',
        templateUrl: './album.component.html',
        styleUrls: ['./album.component.css']
    })
], AlbumComponent);
export { AlbumComponent };
//# sourceMappingURL=album.component.js.map