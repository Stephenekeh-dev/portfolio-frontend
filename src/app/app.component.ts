import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {AboutComponent} from './components/about/about.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ProjectsComponent}  from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AboutComponent,SkillsComponent, ProjectsComponent,ResumeComponent, ContactComponent, FooterComponent], // This is fine
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YourApp';
}
