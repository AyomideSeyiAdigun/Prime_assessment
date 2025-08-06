import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxActionStripComponent, IgxColumnComponent, IgxGridEditingActionsComponent, IgxGridModule } from 'igniteui-angular';

@Component({
  selector: 'app-task-one',
  standalone: true,
  imports: [IgxGridModule,CommonModule,FormsModule,IgxGridEditingActionsComponent,IgxActionStripComponent,IgxColumnComponent],
  templateUrl: './task-one.component.html',
  styleUrl: './task-one.component.scss'
})
export class TaskOneComponent {
activeGrid = 'grid1';

  data = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 22 },
    { id: 4, name: 'Diana', age: 28 },
    { id: 5, name: 'Ethan', age: 35 },
    { id: 6, name: 'Fiona', age: 26 },
    { id: 7, name: 'George', age: 31 },
  ];
}
