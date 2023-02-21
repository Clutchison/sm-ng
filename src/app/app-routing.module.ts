import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMonsterComponent } from './features/create-monster/create-monster.component';

const routes: Routes = [
  { path: 'create-monster', component: CreateMonsterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
