import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieLisComponent } from './serie-lis/serie-lis.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SerieLisComponent],
  declarations: [SerieLisComponent]
})
export class SerieModule { }
