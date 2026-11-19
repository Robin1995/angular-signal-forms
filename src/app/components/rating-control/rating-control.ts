import { Component, computed, input, model, output } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'app-rating-control',
  host: { '(focusout)': 'touch.emit()' },
  template: `
    @for (star of stars(); track star) {
      <button
        type="button"
        class="star"
        [class.filled]="star <= value()"
        [disabled]="disabled()"
        (click)="select(star)"
      >
        ★
      </button>
    }
  `,
  styleUrl: './rating-control.css',
})
export class RatingControl implements FormValueControl<number> {
  readonly value = model(0);
  readonly disabled = input(false);
  readonly max = input<number | undefined>(5);
  readonly touch = output<void>();

  protected readonly stars = computed(() =>
    Array.from({ length: this.max() ?? 5 }, (_, index) => index + 1),
  );

  protected select(star: number): void {
    this.value.set(star === this.value() ? 0 : star);
    this.touch.emit();
  }
}
