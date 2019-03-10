/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
//  Platform imports
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

/* ––
 * –––– Type definition
 * –––––––––––––––––––––––––––––––––– */
declare const require: any;

/* ––
 * –––– Testing environment setup
 * –––––––––––––––––––––––––––––––––– */
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

const context = require.context('./', true, /\.spec\.ts$/);

context.keys().map(context);
