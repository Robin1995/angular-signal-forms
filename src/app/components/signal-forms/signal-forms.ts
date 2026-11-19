import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  signal
} from "@angular/core";
import { form, FormField } from "@angular/forms/signals";
import { RatingControl } from "../rating-control/rating-control";
import { initialData, subcriptionSchema, Subscription } from "../subscription";
@Component({
  selector: "app-signal-forms",
  imports: [FormField, RatingControl],
  templateUrl: "./signal-forms.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ``,
})
export class SignalForms {
  subscribeModel = signal<Subscription>(initialData);

  subscribeForm = form(this.subscribeModel, subcriptionSchema);

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
