import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {  AfterViewInit, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    
  ], // ✅ USE THIS INSTEAD OF THE MODULE
  
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('bubbleContainer', { static: false }) bubbleContainerRef!: ElementRef;

 ngAfterViewInit(): void {
  const bubbleContainer = this.bubbleContainerRef?.nativeElement;
  if (!bubbleContainer) return;

  const numberOfBubbles = 30;

  for (let i = 0; i < numberOfBubbles; i++) {
    const bubble = document.createElement('span');
    const randomLeft = Math.random() * 100;
    const randomDuration = Math.random() * 10 + 5;
    const randomSize = Math.random() * 20 + 10;

    bubble.style.left = `${randomLeft}%`;
    bubble.style.width = `${randomSize}px`;
    bubble.style.height = `${randomSize}px`;
    bubble.style.position = 'absolute';
    bubble.style.bottom = '-150px';
    bubble.style.background = 'rgba(255, 255, 255, 0.15)';
    bubble.style.borderRadius = '50%';
    bubble.style.opacity = '0.5';
    bubble.style.animation = `rise ${randomDuration}s linear infinite`;

    bubbleContainer.appendChild(bubble);
  }
}
}