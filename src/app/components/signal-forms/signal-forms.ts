import { Component, effect, signal } from '@angular/core';
import { initialData, subcriptionSchema, Subscription } from '../subscription';
import { Field, form } from '@angular/forms/signals';
@Component({
  selector: 'app-signal-forms',
  imports: [Field],
  templateUrl: './signal-forms.html',
  styles: ``,
})
export class SignalForms {
  subscribeModel = signal<Subscription>(initialData);

  subscribeForm = form(this.subscribeModel, subcriptionSchema);

  eff = effect(() => console.log('Email', this.subscribeModel().email));
  showSuccessAlert = signal<boolean>(false);
  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.subscribeForm().value());
    this.showSuccessAlert.set(true);
    setTimeout(() => {
      this.showSuccessAlert.set(false);
    }, 2500);
  }
}
