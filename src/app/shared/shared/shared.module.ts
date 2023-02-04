import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from '../grid/grid.component';
import { GridColumnComponent } from '../grid/grid-column/grid-column.component';
import { MaterialModule } from 'src/app/material.module';
import { CardComponent } from '../card/card.component';

const components = [
  GridComponent,
  GridColumnComponent,
  CardComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [...components]
})
export class SharedModule { }
