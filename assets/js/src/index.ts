import { URLs, Card } from './card-gen'

interface Project {
  title: string
  desc: string
  url: URLs
  img?: string
}

const projects: Project[] = [{title: 'Sample', desc: 'Sample', url: {github: '', site: ''}, img: 'https://www.placecage.com/c/300/300'}]
const $projects: JQuery<HTMLElement> = $('#projects-container');

$projects.append(...projects.map(({title, desc, url, img}) => new Card(title, desc, url, img).div))