import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    imports:[
        MatTableModule,
        MatButtonModule,
        MatCheckboxModule
    ],
    exports: [
        MatTableModule,
        MatButtonModule,
        MatCheckboxModule
    ]
})
export class MaterialExampleModule { }
