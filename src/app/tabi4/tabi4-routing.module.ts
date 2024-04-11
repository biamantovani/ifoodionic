import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tabi4Page } from './tabi4.page';

const routes: Routes = [
  {
    path: '',
    component: Tabi4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tabi4PageRoutingModule {}
