import { Injectable, InjectionToken, Injector } from '@angular/core';

export const DEFAULT_LANGUAGE = new InjectionToken<string>('app:DefaultLanguage');
export const LANG_FOLDER = new InjectionToken<string>('app:LangFolder');
