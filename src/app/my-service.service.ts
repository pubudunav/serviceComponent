import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor() {}

  getData(): string {

    const date = new Date();
    return date.toLocaleTimeString();
  }
}
