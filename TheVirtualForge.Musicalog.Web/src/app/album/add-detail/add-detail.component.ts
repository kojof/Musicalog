import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})

export class AddDetailComponent implements OnInit {
  submitted = false;
  albumForm: any;

  constructor(private formBuilder: FormBuilder, private albumService: AlbumService, private router: Router,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.albumForm = this.formBuilder.group({
        Name : [ '', Validators.required],
        Stock : [ '', Validators.required],
        Artist : [ '', Validators.required],
        Label : [ '', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.albumForm.invalid) {
      return;
    }

    this.albumService.addAlbum(this.albumForm.value)
      .subscribe( data => {
        this.toastr.success('success', 'Record saved');
        this.router.navigate(['albums']);
      });
  }

  Cancel(): void
  {
      this.router.navigate(['albums']);
  }
}