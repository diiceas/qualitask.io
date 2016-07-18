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

  addNewTodo(value: string) {
    this.many.push(this.urlify(value));
    this.newTodo = null;
  }

  eventHandler(event, newTodo) {
    if (event.keyCode === 13) {
      this.addNewTodo(newTodo);
    }
  }

  todoItemOnClick(event) {
    event.srcElement.style.textDecoration = "line-through";
    event.srcElement.style.background = "orange";
  }

  urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
      return '<a href="' + url + '">' + url + '</a>';
    })
  }

  addLearningResources(){
    this.many2.push(this.urlify("https://lingvist.io - 30 min"));
    this.many2.push(this.urlify("rest - 10 mins"));
    this.many2.push(this.urlify("https://duolingo.io - 20 min"));
  }

  addMeetingResources(){
    this.many2.push(this.urlify("meeting facilitator #1 - 3 min"));
    this.many2.push(this.urlify("developer #1 - 5 min - status"));
    this.many2.push(this.urlify("developer #2 - 7 min - status"));
    this.many2.push(this.urlify("QA #1 - 4 min"));
    this.many2.push(this.urlify("product owner - 5 min"));
    this.many2.push(this.urlify("client - 10 min"));
    this.many2.push(this.urlify("summary - 5 min"));
  }

  public many: Array<string> = [];
  public many2: Array<string> = [];
}