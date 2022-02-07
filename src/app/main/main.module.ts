import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TodayComponent } from './pages/today/today.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TodayComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
