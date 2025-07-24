import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { NgsRevealModule } from 'ngx-scrollreveal';





export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([]),
    importProvidersFrom(NgsRevealModule)// Only this is required
     
  ]
};
