const message = 'message';

class FormGroup {
  public field: JQuery<HTMLElement>
  private input: JQuery<HTMLElement>
  constructor(type: string, label: string) {
    const $input = type === message ? $('<textarea>').attr('rows', '3') : $('<input>').attr({type});
    this.input = $input
    $input.addClass('form-control')
    const $label = $('<label>').text(label)
    const $fs = $('<fieldset>').addClass('form-group').append($label, $input)
    this.field = $fs
  }

  get data(): string {
    return this.input.val() as string
  }
}

class Form {
  public name: FormGroup
  public email: FormGroup
  public message: FormGroup
  constructor() {
    this.name = new FormGroup('text', 'Name')
    this.email = new FormGroup('email', 'E-mail')
    this.message = new FormGroup(message, 'Message')
  }
}

class SubmitBtn {
  public btn: JQuery<HTMLElement>;
  constructor(fn: Function) {
    const $btn = $('<button>').addClass('btn btn-primary mx-auto').attr({type: 'button'}).text('Submit')
    $btn.on('click', fn as JQuery.EventHandler<any, any>)
    this.btn = $btn
  }
}

export class Contact {
  private form: Form;
  public formElement: JQuery<HTMLElement>
  public button: JQuery<HTMLElement>;

  constructor() {
    this.form = new Form()
    const $form = $('<form>').append(this.form.name.field, this.form.email.field, this.form.message.field)
    this.formElement = $form
    this.button = new SubmitBtn(this.submit).btn
  }

  private submit(): void {
    console.log('click!')
  }
}