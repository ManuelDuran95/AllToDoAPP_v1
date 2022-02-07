import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TodayComponent } from './pages/today/today.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'today', component: TodayComponent 
      },
      {
        path: '**', redirectTo: 'dashboard'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
