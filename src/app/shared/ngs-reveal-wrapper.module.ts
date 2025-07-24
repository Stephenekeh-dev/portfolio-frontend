// src/app/shared/ngs-reveal-wrapper.module.ts

import { NgModule } from '@angular/core';
import { NgsRevealModule } from 'ngx-scrollreveal';

@NgModule({
  exports: [NgsRevealModule]  // Makes the directive usable in components that import this module
})
export class NgsRevealWrapperModule {}
