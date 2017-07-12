const $button = $('<button>').addClass('close').attr({'data-dismiss': 'modal', type: 'button', 'aria-label': 'close'});
const $span = $('<span>').html('&times;').prop('aria-hidden', true);

export class CloseIcon {
  public btn: JQuery<HTMLButtonElement> = $button.append($span) as JQuery<HTMLButtonElement>;
}

export class CloseBtn {
  public btn: JQuery<HTMLButtonElement> = $button.text('close') as JQuery<HTMLButtonElement>;
}
