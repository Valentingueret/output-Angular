import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    onomatopoeiaList: string[] = []


    onReceiveNewOnomatopia(event: string) {
        this.onomatopoeiaList.push(event);
      
    }
  }