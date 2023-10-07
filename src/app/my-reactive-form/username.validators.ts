import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }

    return null;
  }

  /* customMinLength(control: AbstractControl): ValidationErrors | null {
    return {
      minlength: {
        requiredLength: 10,
        actualLength: control.value.length
      }
    }
  } */

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    // We use setTimeout as asynchronous operation to simulate a call to the server
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'mosh') {
          resolve({ shouldBeUnique: true });
        } else {
          reject(null);
        }
      }, 2000);
    });
  }
}
