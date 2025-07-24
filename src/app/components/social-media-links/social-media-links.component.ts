import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-media-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-media-links.component.html',
  styleUrls: ['./social-media-links.component.css']
})
export class SocialMediaLinksComponent {
  socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Stephenekeh-dev',
    icon: 'fab fa-github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/stephen-ekeh-0b7897127',
    icon: 'fab fa-linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/your-handle',
    icon: 'fab fa-twitter'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/yourchannel',
    icon: 'fab fa-youtube'
  }
];

}
