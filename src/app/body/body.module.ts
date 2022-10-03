import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Block1Component } from './block1/block1.component';
import { Block2Component } from './block2/block2.component';
import { Block3Component } from './block3/block3.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Block1Component, Block2Component, Block3Component],
  exports: [Block1Component, Block2Component, Block3Component],
})
export class BodyModule {}
