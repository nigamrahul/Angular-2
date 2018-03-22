import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { EqualValidator } from './customvalidator.directive';  // import validator
import { NavbarService } from './navbar.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
// import { PopupModule } from 'ng2-opd-popup';


@NgModule({
  declarations: [
    AppComponent,
    EqualValidator,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    ContactDetailsComponent,
    LogoutComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // PopupModule.forRoot(),
    RouterModule.forRoot([
      {path: "", redirectTo:"home", pathMatch: "full"},
      {path:"header", component:HeaderComponent},
      {path:"home", component:HomeComponent},
      {path:"about", component:AboutComponent},
      {path:"register", component:RegisterComponent},
      {path:"login", component:LoginComponent},
      {path:"contact-detail", component:ContactDetailsComponent},
      {path:"logout", component:LogoutComponent},      
    ])
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
