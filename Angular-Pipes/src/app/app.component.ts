import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FirstService } from './first.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirstService]
})
export class AppComponent {
  title = 'App';
  date = new Date().getTime();
  arr = [5, 8, 7, 2, 1, 6];

  constructor(private firstSer: FirstService) { }
  form;
  details = [];
  details1;
  numberconvertorform;
  ngOnInit() {
    this.numberconvertorform = new FormGroup({
      decimal: new FormControl(""),
      binary: new FormControl(""),
      octal: new FormControl(""),
      hexadecimal: new FormControl("")
    })

    this.form = new FormGroup({
      firstname: new FormControl("Rahul"),
      lastname: new FormControl("Nigam"),
      email: new FormControl("nigamrahul1992@yahoo.com")
    })
    // this.firstSer.obj.name="Raj";
    // console.log(this.firstSer.obj);
    this.firstSer.fecthData();
    this.firstSer.success();
    this.showData();
    this.showData1();
  }

  /* Accessing the Service function & variable in Component */
  showData() {
    this.firstSer.fecthData()
      .subscribe(res => {
        console.log(res, 'res')
        this.details = res;
      });
    }


/* Accessing the Service function & variable in Component */
showData1() {
  this.details1 = this.firstSer.success()
  console.log(this.details1,'this')
}

  onSubmit(formdetails) {
    console.log('details', formdetails)
  }

  decimalChanged(oldValue, newValue) {
    if (newValue != "") {
      this.numberconvertorform.patchValue({ binary: parseInt(newValue, 10).toString(2) });
      this.numberconvertorform.patchValue({ octal: parseInt(newValue, 10).toString(8) });
      this.numberconvertorform.patchValue({ hexadecimal: parseInt(newValue, 10).toString(16) });
    } else {
      this.numberconvertorform.patchValue({ binary: "" });
      this.numberconvertorform.patchValue({ octal: "" });
      this.numberconvertorform.patchValue({ hexadecimal: "" });
    }
  }

  b = 0;
  o = 0;
  h = 0;

  binaryChanged(oldvalue, newValue) {
    this.b = this.b + 1;
    if (this.b == 1) {
      if (newValue != "") {
        this.numberconvertorform.patchValue({ decimal: parseInt(newValue, 2).toString(10) });
      } else {
        this.numberconvertorform.patchValue({ decimal: "" });
      }
      this.b = 0;
    }
  }

  octalChanged(oldvalue, newValue) {
    this.o = this.o + 1;
    if (this.o == 1) {
      if (newValue != "") {
        this.numberconvertorform.patchValue({ decimal: parseInt(newValue, 8).toString(10) });
      } else {
        this.numberconvertorform.patchValue({ decimal: "" });
      }
      this.o = 0;
    }
  }

  hexaDecimalChanged(oldvalue, newValue) {
    this.h = this.h + 1;
    if (this.h == 1) {
      if (newValue != "") {
        this.numberconvertorform.patchValue({ decimal: parseInt(newValue, 16).toString(10) });
      } else {
        this.numberconvertorform.patchValue({ decimal: "" });
      }
      this.h = 0;
    }
  }


}
