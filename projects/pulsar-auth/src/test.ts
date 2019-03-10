/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Global imports
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';

// Platform imports
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

/* ––
 * –––– Type declaration
 * –––––––––––––––––––––––––––––––––– */
declare const require: any;

/* ––
 * –––– Environment setup
 * –––––––––––––––––––––––––––––––––– */
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

const context = require.context('./', true, /\.spec\.ts$/);

context.keys().map(context);
