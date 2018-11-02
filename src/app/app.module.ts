import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule, routingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { AddComponent } from './header/add/add.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import { DataTableModule } from 'primeng/primeng';
import {CalendarModule} from 'primeng/calendar';
import { UpdateComponent } from './table/update/update.component';
import {GrowlModule,Message} from 'primeng/primeng';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    AddComponent,
    routingModule,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    SharedModule,
    HttpModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    DataTableModule,
    BrowserAnimationsModule,
    CalendarModule,
    GrowlModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
