import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FirstService } from './first.service';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SortPipe } from './app.sort';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    ProductComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
