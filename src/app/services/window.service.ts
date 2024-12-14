import { Injectable } from '@angular/core';
import { InjectionToken } from '@angular/core';

@Injectable({
  providedIn: 'root', // This makes the service globally available
})
export class WindowService {
  get nativeWindow(): Window | null {
    return typeof window !== 'undefined' ? window : null;
  }
}
export const WINDOW = new InjectionToken<Window | null>('Window', {
    providedIn: 'root',
    factory: () => (typeof window !== 'undefined' ? window : null),
  });