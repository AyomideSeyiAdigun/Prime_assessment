import { Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { TaskFourComponent } from '../pages/tasks/task-four/task-four.component';
import { TaskOneComponent } from '../pages/tasks/task-one/task-one.component';
import { TaskThreeComponent } from '../pages/tasks/task-three/task-three.component';
import { TaskTwoComponent } from '../pages/tasks/task-two/task-two.component';

export const routes: Routes = [
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"home",
    component:HomePageComponent
  },
    {
    path:"task-one",
    component:TaskOneComponent
  },
    {
    path:"task-two",
    component:TaskTwoComponent
  },
    {
    path:"task-three",
    component:TaskThreeComponent
  },
    {
    path:"task-four",
    component:TaskFourComponent
  },
];
