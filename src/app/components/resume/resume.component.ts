import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, MatCardModule,  MatIconModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements AfterViewInit {
  education = [
    {
      degree: 'B.Tech (Hons) in Computer Science – Second Class Upper Division',
      institution: 'Federal University Of Technology Owerri',
      year: '2010 - 2015'
    },
    {
      degree: 'CISCO Certified Network Associate',
      institution: 'National Institute of Information Technology',
      year: '2015 - 2016'
    },
    {
      degree: 'Basic Computer Maintenance and Repair(Comptia A/N+)',
      institution: 'National Institute of Information Technology',
      year: '2017 - 2018'
    }
  ];

  experience = [
    {
      role: 'Frontend Developer',
      company: 'National Institute of Information Technology',
      duration: '2018 - 2024',
      description: 'Developing responsive Angular web applications and custom dashboards.'
    },
    {
      role: 'Java/Python Developer',
      company: 'Admas IT Place ',
      duration: '2019 - 2024',
      description: 'Contributed in building and Deploying secured and Complex Backend Systems.'
    },
    {
      role: 'Full Stack Engineer',
      company: 'Freelance/Private IT Contractor',
      duration: '2019- Till Date',
      description: 'Contributed in building and Deploying secured, Complex  and Maintainable Full Stack Systems.'
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
      { threshold: 0.1 }
    );

    const cards = this.el.nativeElement.querySelectorAll('.resume-card');
    cards.forEach((card: Element) => observer.observe(card));
  }
}
