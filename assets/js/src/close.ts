import { Button } from './button';

export class CloseIcon extends Button {
  public btn: JQuery<HTMLButtonElement>
  
  constructor() {
    super($('<span>').html('&times;').prop('aria-hidden', true))
    this.btn.addClass('close btn').attr({'data-dismiss': 'modal', type: 'button', 'aria-label': 'close'})
  }
}

export class CloseBtn extends Button {
  public btn: JQuery<HTMLButtonElement>;
  constructor() {
    super('close')
    this.btn.addClass('close btn').attr({'data-dismiss': 'modal', type: 'button', 'aria-label': 'close'})
  }
}
