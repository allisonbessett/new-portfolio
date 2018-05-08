import { TravelPhotosComponent } from './components/travel-photos/travel-photos.component';
import { TravelComponent } from './components/travel/travel.component';
import { LandingComponent } from './components/landing/landing.component';
import { appRoutes } from './page-routes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TravelComponent,
    TravelPhotosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatGridListModule,
    MatCardModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

