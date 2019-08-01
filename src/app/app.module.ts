import {  BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import {  HttpClientModule} from '@angular/common/http';
import {  AppRoutingModule } from './app-routing.module';
import {  AppComponent } from './app.component';
import {  AnimateWatermarkComponent} from './animation/animate-watermark.component';
import {  HeaderComponent} from './header/header.component';
import {  NavComponent } from './nav/nav.component';
import {ShareDataService} from './service/share-data.service';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent, AnimateWatermarkComponent, HeaderComponent, NavComponent, ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
