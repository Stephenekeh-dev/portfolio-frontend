import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  projects = [
    {
      title: 'End-to-end encryption for secure credit card transaction & fraud detection',
      image: 'assets/largeportfoli.png',
      
      github: 'https://github.com/Stephenekeh-dev/secured-card-transact-system',
      demo: 'https://angular-vercel-app-tau.vercel.app'
    },
   
    {
      title: 'SaaS project Management System',
      image: 'assets/login-monit.png',
     
      github: 'https://github.com/Stephenekeh-dev/saas-project-management-backend',
      demo: 'http://saasapp-env.eba-i334tgjp.us-east-1.elasticbeanstalk.com/swagger-ui/index.html'
    },
     {
      title: 'MFA User Authen. with JWT Spring Security',
      image: 'assets/screenshot6.png',
      
      github: 'https://github.com/Stephenekeh-dev/secure-auth',
      demo: 'http://44.197.32.193:8080/swagger-ui/index.html'
    }
    
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = this.el.nativeElement.querySelectorAll('.project-card');
    cards.forEach((card: Element) => observer.observe(card));
  }
}
