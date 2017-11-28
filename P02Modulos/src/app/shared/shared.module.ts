import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent, HeadComponent],
  exports: [FooterComponent, HeadComponent]
})
export class SharedModule {}
