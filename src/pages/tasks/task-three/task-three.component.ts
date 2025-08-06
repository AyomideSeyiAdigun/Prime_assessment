import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IgxIconModule } from 'igniteui-angular';
@Component({
  selector: 'app-task-three',
  standalone: true,
  imports: [IgxIconModule,FormsModule,CommonModule,RouterModule],
  templateUrl: './task-three.component.html',
  styleUrl: './task-three.component.scss',
    animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class TaskThreeComponent {
  goBack() {
    window.history.back(); // or use Angular Router to navigate back
  }
}
