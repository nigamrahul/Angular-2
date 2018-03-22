import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HttpModule} from '@angular/http';
import { ProductsComponent } from './products/products.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path:"",component:HomeComponent },
      { path:"product",component:ProductsComponent },
      { path:"updateProduct/:id",component:UpdateproductComponent }

    ]),
    HttpModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
