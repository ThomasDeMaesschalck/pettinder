import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {RouterModule} from "@angular/router";
import { ProfileGalleryComponent } from './profile-gallery/profile-gallery/profile-gallery.component';
import {PetService} from "./service/pet.service";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { NameFilterPipe } from './pipes/name-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SetupDateComponent } from './date/setup-date/setup-date.component';
import { PopularityPipe } from './pipes/popularity.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileGalleryComponent,
    NameFilterPipe,
    SetupDateComponent,
    PopularityPipe
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),

  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
