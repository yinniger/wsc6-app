import {Component, Input} from '@angular/core';

/**
 * Generated class for the BottomButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bottom-button',
  templateUrl: 'bottom-button.html'
})
export class BottomButtonComponent {

  @Input() text: string;
  @Input() disabled: boolean = false;

  constructor() {}

  getButtonStyle() {
    return {
      'opacity': this.disabled ? 0.5 : 1
    }
  }

}
