import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'exemplo1', loadChildren: './exemplo1/exemplo1.module#Exemplo1PageModule' },
  { path: 'exemplo2', loadChildren: './exemplo2/exemplo2.module#Exemplo2PageModule' },
  { path: 'exemplo3', loadChildren: './exemplo3/exemplo3.module#Exemplo3PageModule' },
  { path: 'exemplo4', loadChildren: './exemplo4/exemplo4.module#Exemplo4PageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
