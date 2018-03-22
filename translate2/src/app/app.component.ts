import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

// import { Subscription } from 'rxjs';
// import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // private subscription:Subscription;
  constructor(private translate: TranslateService, /*private activatedRoute:ActivatedRoute*/) {
    translate.addLangs(["ch", "en", "fn", "hi"]);
    translate.setDefaultLang("en");
    let browserLang = translate.getBrowserLang();
    console.log(browserLang,'browserLang')
    translate.use(browserLang.match(/en|hi|fn|ch|tg/) ? browserLang : "en");
    // translate.use("fn");
  }
  changeLanguage(lang){
    this.translate.use(lang);
  }

  // ngOnInit(){
  //   this.subscription = this.activatedRoute.queryParams.subscribe(
  //     (param:any)=>{
  //       let locale = param['locale'];
  //       if(locale != undefined){
  //         this.translate.use(locale);
  //       }
  //     }
  //   )
  // }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }

}
