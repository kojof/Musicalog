import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddDetailComponent } from './album/add-detail/add-detail.component';
import { AlbumComponent } from './album/album.component';
import { EditDetailComponent } from './album/edit-detail/edit-detail.component';
const routes = [
    { path: 'albums', component: AlbumComponent },
    { path: '', component: AlbumComponent },
    { path: 'addDetail', component: AddDetailComponent },
    { path: 'editDetail/:id', component: EditDetailComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map