import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {RouterModule} from "@angular/router";
import { ProfileGalleryComponent } from './profile-gallery/profile-gallery/profile-gallery.component';
import {PetService} from "./service/pet.service";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProfileGalleryComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([]),

  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
