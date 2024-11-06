import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { AlbumDetailComponent } from './pages/album-details/album-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'master',
    pathMatch: 'full',
  },
  {
    path: 'master',
    component: MasterComponent,
  },
  {
    path: 'album',
    component: AlbumsComponent,
  },
  {
    path: 'album/:id',
    component: AlbumDetailComponent,
  },
  {
    path: 'comment',
    component: CommentsComponent,
  },
];
