import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'my-form-array',
  templateUrl: './my-form-array.component.html',
})
export class MyFormArrayComponent {
	form = new FormGroup({
		topics: new FormArray([])
	})

	addTopic(topic: HTMLInputElement) {
		this.topics.push(new FormControl(topic.value));
		topic.value = '';
	}

	removeTopic(topic: AbstractControl) {
		if (topic instanceof FormControl) {
			let index = this.topics.controls.indexOf(topic);
			this.topics.removeAt(index);
		}
	}

	get topics() {
		return this.form.get('topics') as FormArray;
	}
}