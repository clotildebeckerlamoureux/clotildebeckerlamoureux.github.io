import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projectcard',
  standalone: true,
  imports: [],
  templateUrl: './projectcard.component.html',
  styleUrl: './projectcard.component.css'
})
export class ProjectcardComponent {
  @Input() projectName: string = "";
  @Input() projectDescription: string = "";
  @Input() projectImage: string = "";
  @Input() projectLink: string = "";
}
