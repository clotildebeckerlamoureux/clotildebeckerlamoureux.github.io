import { Component } from '@angular/core';
import { ProjectcardComponent } from '../../projectcard/projectcard/projectcard.component';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ProjectcardComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects: Project[] = [
    {
      name: "Did you beat it?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
      githubLink: "https://github.com/WildCodeSchool/did-you-beat-it"
    },
    {
      name: "Anciens meubles pour une nouvelle vie",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
      githubLink: "https://github.com/clotildebeckerlamoureux/PC-anciens-meubles-pour-une-nouvelle-vie-FRONT"
    },
    {
      name: "Ghibli movies",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
      githubLink: "https://github.com/clotildebeckerlamoureux/Projet-collectif-Dataviz-OJC"
    }

  ]

}
