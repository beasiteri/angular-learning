import { Component } from "@angular/core";

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent {
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'},
  ];

  animals = [
    {id: 1, name: 'Cat'},
    {id: 2, name: 'Dog'},
  ];

  log(x: any) {
    console.log(x);
  }

  submit(myForm: any) {
    console.log(myForm);
  }
}
