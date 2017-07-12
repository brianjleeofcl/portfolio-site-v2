import { URLs, Card } from './card-gen';
import { Modal } from './modal-gen';
import { Contact } from './contact-form';
import { Btn } from './button';

interface Project {
  title: string
  desc: string
  url: URLs
  img?: string
}

// const $body: JQuery<HTMLElement> = $('body')

const $projects: JQuery<HTMLElement> = $('#projects-container');

$.ajax('http://api.brianjlee.net/v1/projects/', {
  method: 'GET'
}).then(data => {
  const projects: Project[] = data;
  $projects.siblings('object.loader').remove();
  $projects.append(...projects.map(({title, desc, url, img}) => new Card(title, desc, url, img).div));
})

const $contactModalBtn: JQuery<HTMLElement> = $('.contact-modal-loader')
const $contactModal: JQuery<HTMLElement> = $('#contact-modal')

$contactModalBtn.on('click', () => {
  const $contactForm = new Contact();
  const $modal = new Modal('Message', [$contactForm.formElement], [$contactForm.button]).modal;
  $contactForm.on('POST_SENT', () => {
    $('div.modal-body').empty().append($('<object>').attr({data: '/assets/img/loading.svg'}).addClass('loader mx-auto'))
    const $sendingBtn = new Btn('Sending...')
    $('div.modal-footer').empty().append($sendingBtn.btn.prop('disabled', true).addClass('mx-auto'))
  })
  $contactForm.on('POST_SUCCESS', () => {
    const $modalBody = $('div.modal-body')
    $modalBody
  })
  $contactModal.empty().append($modal)
})