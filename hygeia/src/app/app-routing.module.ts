import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { RespComponent } from './resp/resp.component';

const routes: Routes = [
  { path: '', component: PageComponent},
  { path: 'resp', component: RespComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
