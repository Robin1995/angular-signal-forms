import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SignalForms } from './components/signal-forms/signal-forms';

@Component({
  selector: 'app-root',
  imports: [SignalForms],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <app-signal-forms/>
  `,
})
export class App {}
