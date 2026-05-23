import { Component } from '@angular/core';
import { SignalForms } from './components/signal-forms/signal-forms';

@Component({
  selector: 'app-root',
  imports: [SignalForms],
  template: `
    <app-signal-forms/>
  `,
})
export class App {}
