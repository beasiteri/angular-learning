import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
})
export class MyReactiveFormComponent {
  myForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), UsernameValidators.cannotContainSpace], UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)
  });

  // For nested FormGroups we should have
  /* myForm = new FormGroup({
      account = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(3)], UsernameValidators.shouldBeUnique),
        password: new FormControl('', Validators.required)
      })
  }); */


  login() {
    // We use this when we have a service .............................................
    /* let isValid = authService.login(this.myForm.value);
    if (!isValid) {
      // at form level - for login we do not know which is invalid username or password
      this.myForm.setErrors({
        invalidLogin: true
      })
      // at individual level ex. only for username
      // this.username.setErrors()
    }*/

    // Now we do not have a service so we just add this to work:
    this.myForm.setErrors({
      invalidLogin: true
    });

  }

  get username() {
    // For nested FormGoups we have to add the full path
    /** return this.myForm.get('account.username'); */
    return this.myForm.get('username');
  }
}
