import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IgxIconModule } from 'igniteui-angular';

@Component({
  selector: 'app-task-two',
  standalone: true,
  imports: [IgxIconModule,FormsModule,CommonModule,RouterModule],
  templateUrl: './task-two.component.html',
  styleUrl: './task-two.component.scss',
    animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],

})
export class TaskTwoComponent {
 activeTab: string = 'away';
}
