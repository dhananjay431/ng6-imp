import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TreeTableModule} from "ng-treetable";
@NgModule({
  imports: [
    CommonModule,
    TreeTableModule
  ],
  declarations: [],
  exports: [
 	 TreeTableModule
  ]
})
export class SharedModule { }
