import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IgxIconModule } from 'igniteui-angular';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [IgxIconModule,CommonModule,RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
