import { URLs, Card } from './card-gen';
import { Modal } from './modal-gen';
import { Contact } from './contact-form';

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
  $contactModal.empty()
  $contactModal.append($modal)
})