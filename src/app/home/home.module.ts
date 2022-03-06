import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeRootComponent } from './home-root/home-root.component';
import { TextComponent } from './components/text/text.component';
import { FunctionButtonsComponent } from './components/function-buttons/function-buttons.component';
import { BasicModule } from '../shared/modules/basic/basic.module';
import { FunctionButtonComponent } from './components/function-buttons/function-button/function-button.component';


@NgModule({
  declarations: [
    HomeRootComponent,
    TextComponent,
    FunctionButtonsComponent,
    FunctionButtonComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BasicModule
  ]
})
export class HomeModule { }
