export class Button {
  public btn: JQuery<HTMLButtonElement>;
  constructor(text: string | JQuery<HTMLElement>) {
    const $button = $('<button>')
    typeof text == 'string' ? $button.text(text) : $button.append(text)
    this.btn = $button as JQuery<HTMLButtonElement>
  }
}