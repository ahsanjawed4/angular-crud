import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCrudComponent } from './user-crud/user-crud.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UserCrudComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    UserCrudComponent
  ]
})
export class UserModule {
  USER_ID?: string = '' ;
  USER_ROLE?: number = 0 ;
  USER_NAME?: string = '' ;
  BRANCH_CODE?: string = '' ;
  ACTION_ID?: number = 0 ;
  ACTION_NAME?: string = '' ;
  ACTION_EVENT?: string = '' ;
  ACTION_DATE?: string = '' ;

 }
