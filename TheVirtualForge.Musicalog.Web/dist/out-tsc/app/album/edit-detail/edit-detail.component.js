import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
let EditDetailComponent = class EditDetailComponent {
    constructor(formBuilder, albumService, router, toastr, route) {
        this.formBuilder = formBuilder;
        this.albumService = albumService;
        this.router = router;
        this.toastr = toastr;
        this.route = route;
        this.submitted = false;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.albumService.getAlbumById(this.id).subscribe(data => {
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
    onSubmit() {
        this.submitted = true;
        if (this.albumForm.invalid) {
            return;
        }
        this.albumService.editAlbum(this.albumForm.value)
            .subscribe(data => {
            this.toastr.success('success', 'Record updated');
            this.router.navigate(['albums']);
        });
    }
    Cancel() {
        this.router.navigate(['albums']);
    }
};
EditDetailComponent = __decorate([
    Component({
        selector: 'app-edit-detail',
        templateUrl: './edit-detail.component.html',
        styleUrls: ['./edit-detail.component.css']
    })
], EditDetailComponent);
export { EditDetailComponent };
//# sourceMappingURL=edit-detail.component.js.map