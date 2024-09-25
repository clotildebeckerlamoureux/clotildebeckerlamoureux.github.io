import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer/footer.component';
import { ProjectComponent } from './component/project/project/project.component';
import { PresentationComponent } from './component/presentation/presentation/presentation.component';
import { SkillsComponent } from './component/skills/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ProjectComponent, PresentationComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
