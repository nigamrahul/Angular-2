import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TranslateModule } from 'ng2-translate';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot(),
    // RouterModule.forRoot([{

    // }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
