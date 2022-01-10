import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasicModule } from '../shared/modules/basic/basic.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { LayoutRootComponent } from './components/layout-root/layout-root.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [
    LayoutRootComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, BasicModule],
})
export class LayoutModule {}
