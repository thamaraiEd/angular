import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HerosComponent } from './heros/heros.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { FansComponent } from './fans/fans.component';

//const routes: Routes = [];

const routes: Routes = [  
  { path: '', pathMatch: 'full', component: DashboardComponent  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HerosComponent },
  { path: 'fans', component: FansComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
