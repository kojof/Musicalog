import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDetailComponent } from './album/add-detail/add-detail.component';
import { AlbumComponent } from './album/album.component';
import { EditDetailComponent } from './album/edit-detail/edit-detail.component';

const routes: Routes = [
  {path: 'albums',  component: AlbumComponent},
  {path: '', component: AlbumComponent},
  {path: 'addDetail', component: AddDetailComponent},
  {path: 'editDetail/:id', component: EditDetailComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
