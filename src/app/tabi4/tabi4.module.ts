import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tabi4PageRoutingModule } from './tabi4-routing.module';

import { Tabi4Page } from './tabi4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tabi4PageRoutingModule
  ],
  declarations: [Tabi4Page]
})
export class Tabi4PageModule {}
