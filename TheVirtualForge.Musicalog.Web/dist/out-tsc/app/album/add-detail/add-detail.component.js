import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let AddDetailComponent = class AddDetailComponent {
    constructor(formBuilder, albumService, router, toastr) {
        this.formBuilder = formBuilder;
        this.albumService = albumService;
        this.router = router;
        this.toastr = toastr;
        this.submitted = false;
    }
    ngOnInit() {
        this.albumForm = this.formBuilder.group({
            Name: ['', Validators.required],
            Stock: ['', Validators.required],
            Artist: ['', Validators.required],
            Label: ['', Validators.required]
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.albumForm.invalid) {
            return;
        }
        this.albumService.addAlbum(this.albumForm.value)
            .subscribe(data => {
            this.toastr.success('success', 'Record saved');
            this.router.navigate(['albums']);
        });
    }
    Cancel() {
        this.router.navigate(['albums']);
    }
};
AddDetailComponent = __decorate([
    Component({
        selector: 'app-add-detail',
        templateUrl: './add-detail.component.html',
        styleUrls: ['./add-detail.component.css']
    })
], AddDetailComponent);
export { AddDetailComponent };
//# sourceMappingURL=add-detail.component.js.map