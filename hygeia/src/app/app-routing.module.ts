import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { RespComponent } from './resp/resp.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'home', component: PageComponent},
  { path: 'resp', component: RespComponent},
  { path: 'about', component: AboutComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }