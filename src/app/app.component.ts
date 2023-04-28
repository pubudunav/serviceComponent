import { Component } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-root',
  template: `<p>{{ message }}</p>`
})
export class AppComponent {
  message: string;

  constructor(private myService: MyService) {
    this.message = myService.getData();
  }
}
