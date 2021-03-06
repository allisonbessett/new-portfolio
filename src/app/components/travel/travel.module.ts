import { TravelPhotosComponent } from './travel-photos/travel-photos.component';
import { TravelAlbumComponent } from './travel-album/travel-album.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatGridListModule } from '@angular/material';
import { TravelService } from './travel.service';
import { TravelComponent } from './travel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'travel',
    component: TravelComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  declarations: [
    TravelComponent,
    TravelPhotosComponent,
    TravelAlbumComponent

  ],
  providers: [
    TravelService
  ]
})

export class TravelModule {}
