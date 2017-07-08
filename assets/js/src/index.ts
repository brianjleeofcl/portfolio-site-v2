import { URLs, Card } from './card-gen'

interface Project {
  title: string
  desc: string
  url: URLs
  img?: string
}

const $projects: JQuery<HTMLElement> = $('#projects-container');

$.ajax('http://api.brianjlee.net/v1/projects/', {
  method: 'GET'
}).then(data => {
  const projects: Project[] = data;
  $projects.find('object.loader').remove();
  $projects.append(...projects.map(({title, desc, url, img}) => new Card(title, desc, url, img).div));
})
