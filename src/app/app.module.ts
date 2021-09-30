import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { AppRoutingModule} from './app-routing.module';
import { NavigationComponent } from './Home/navigation/navigation.component';
import {HomeRoutingModule} from './Home/home-routing.module'
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DockModule} from 'primeng/dock';
import {TabMenuModule} from 'primeng/tabmenu';
import { HomeModule } from './Home/home.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    // HomepageComponent,
    // NavigationComponent
  ],
  imports: [
    HttpClientModule,
    HomeModule,
    TabMenuModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    DockModule
    
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
