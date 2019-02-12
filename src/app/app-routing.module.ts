import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // "/" -> "/home"
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // "/home"
  { path: 'home', component: HomeComponent },
  // "/about"
  { path: 'about', component: AboutComponent },
  // "/xyz" -> "/home"
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
