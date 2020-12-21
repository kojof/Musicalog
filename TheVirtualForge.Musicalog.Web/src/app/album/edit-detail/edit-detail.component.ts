import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Album } from 'src/app/model/album';
import { AlbumService } from 'src/app/services/album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent implements OnInit {
  submitted = false;
  albumForm: any;
  album: Album;
  id: any;

  constructor(private formBuilder: FormBuilder,
      private albumService: AlbumService,
      private router: Router,
      private toastr: ToastrService,
      private route: ActivatedRoute) {}

    ngOnInit(): void {

        this.id = this.route.snapshot.paramMap.get('id');
      
        if (this.id) {
          
            this.albumService.getAlbumById(this.id).subscribe(
                data => {
                    this.album = data;

                    this.albumForm = this.formBuilder.group({
                    Name: ['', Validators.required],
                    Stock: ['', Validators.required],
                    Artist: ['', Validators.required],
                    Label: ['', Validators.required]
                });

                    this.albumForm = new FormGroup({

                        Artist: new FormControl(this.album.Artist),
                        Stock: new FormControl(this.album.Stock),
                        Label: new FormControl(this.album.Label),
                        Name: new FormControl(this.album.Name),
                        Id: new FormControl(this.album.Id),
                    });
                });
        }
    }

  onSubmit(): void {
    this.submitted = true;

    if (this.albumForm.invalid) {
      return;
   }

    this.albumService.editAlbum(this.albumForm.value)
      .subscribe( data => {
        this.toastr.success('success', 'Record updated');
        this.router.navigate(['albums']);
      });
  }

  Cancel(): void
  {
      this.router.navigate(['albums']);
  }
}