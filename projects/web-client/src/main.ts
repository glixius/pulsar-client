/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// App imports
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/* ––
 * –––– App setup
 * –––––––––––––––––––––––––––––––––– */

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
