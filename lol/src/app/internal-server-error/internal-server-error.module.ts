import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalServerErrorRoutingModule } from './internal-server-error-routing.module';
import { InternalServerErrorComponent } from './internal-server-error.component';

@NgModule({
  imports: [
    CommonModule,
    InternalServerErrorRoutingModule
  ],
  declarations: [InternalServerErrorComponent]
})
export class InternalServerErrorModule { }
