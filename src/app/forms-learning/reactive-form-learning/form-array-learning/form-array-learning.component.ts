import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'form-array-learning',
  templateUrl: './form-array-learning.component.html',
})
export class FormArrayLearningComponent {
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