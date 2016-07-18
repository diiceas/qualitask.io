import { Component } from '@angular/core';

import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [Dragula],
  viewProviders: [DragulaService],
  styleUrls: ['app/app.component.css'],
})
export class AppComponent {
  newTodo: string;
  

  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions('another-bag', {
      copy: true,
      copySortSource: true,             // elements in copy-source containers can be reordered
    });    
  }

  addNewTodo(newTodo: string){
    this.many.push(newTodo);
  }

  public many: Array<string> = [];
  public many2: Array<string> = [];
}