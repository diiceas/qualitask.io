import { Component } from '@angular/core';

import { Dragula, DragulaService } from 'ng2-dragula/ng2-dragula';
import { MdProgressBar } from '@angular2-material/progress-bar';
import { TaskItem } from './taskItem';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [Dragula, MdProgressBar],
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
    this.many.push({
      innerText: this.urlify(value),
      progressBarValue: 0
    });
    this.newTodo = null;
  }

  keyPressEventHandler(event, newTodo) {
    if (event.keyCode === 13) {
      this.addNewTodo(newTodo);
    }
  }

  todoItemOnClick(event, taskItem: TaskItem) {
    event.srcElement.style.textDecoration = "line-through";
    event.srcElement.style.background = "orange";
    taskItem.progressBarValue = 100;
  }

  urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
      return '<a href="' + url + '">' + url + '</a>';
    })
  }

  addLearningResources() {
    this.many2.push({ 
      innerText: this.urlify("https://lingvist.io - 30 min"), 
      progressBarValue: 0 
    });
    this.many2.push({ 
      innerText: this.urlify("rest - 10 mins"), 
      progressBarValue: 0 
    });
    this.many2.push({ 
      innerText: this.urlify("https://duolingo.com - 30 min"), 
      progressBarValue: 0 
    });
  }

  addMeetingResources() {
    this.many2.push(this.urlify("meeting facilitator #1 - 3 min"));
    this.many2.push(this.urlify("developer #1 - 5 min - status"));
    this.many2.push(this.urlify("developer #2 - 7 min - status"));
    this.many2.push(this.urlify("QA #1 - 4 min"));
    this.many2.push(this.urlify("product owner - 5 min"));
    this.many2.push(this.urlify("client - 10 min"));
    this.many2.push(this.urlify("summary - 5 min"));
  }

  public many: Array<TaskItem> = [];
  public many2: Array<TaskItem> = [];
}