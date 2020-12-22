import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ButtonRendererComponent } from './button-renderer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumService } from './services/album.service';
import { AddDetailComponent } from './album/add-detail/add-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditDetailComponent } from './album/edit-detail/edit-detail.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            AlbumComponent, ButtonRendererComponent, AddDetailComponent, EditDetailComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            ToastrModule.forRoot(),
            BrowserAnimationsModule,
            ReactiveFormsModule,
            AgGridModule.withComponents([ButtonRendererComponent])
        ],
        providers: [AlbumService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map