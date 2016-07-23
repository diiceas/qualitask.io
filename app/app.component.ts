import { Component, OnInit } from '@angular/core';

import { Dragula, DragulaService } from 'ng2-dragula/ng2-dragula';
import { MdProgressBar } from '@angular2-material/progress-bar';
import { TaskItem } from './taskItem';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [Dragula, MdProgressBar],
  viewProviders: [DragulaService],
  styleUrls: ['app/app.component.css'],
})
export class AppComponent {
  newTodo: string;
  audio: HTMLAudioElement;

  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions('another-bag', {
      copy: true,
      copySortSource: true,             // elements in copy-source containers can be reordered
    });
  }

  addNewTodo(value: string) {
    this.many.push(new TaskItem(this.urlify(value), 1));
    this.newTodo = null;
  }

  keyPressEventHandler(event, newTodo) {
    if (event.keyCode === 13) {
      this.addNewTodo(newTodo);
    }
  }

  todoItemOnClick(event, taskItem: TaskItem) {
    event.srcElement.style.textDecoration = "line-through";
    event.srcElement.style.background = "#E1E1E1";
    taskItem.progressBarValue = 100;
  }

  urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
      return '<a href="' + url + '">' + url + '</a>';
    })
  }

  startTaskItem(taskItem: TaskItem) {
    if (taskItem.timer == undefined) { //prevent two intervals running at the same time

      this.stopOtherTaskItems(); //allow only one running task at a time

      taskItem.timer = setInterval(() => {
        ++taskItem.lastTick;
        taskItem.progressBarValue = taskItem.lastTick / taskItem.taskLengthSeconds * 100;
        console.log("timer for " + taskItem.innerText + ": " + taskItem.lastTick);
        if (taskItem.progressBarValue === 100) {
          this.audio.play();
        }
      }, 1000);
    }
  }

  stopTaskItem(taskItem: TaskItem) {
    if (taskItem.timer != undefined) {
      clearInterval(taskItem.timer);
      console.log("timer for " + taskItem.innerText + " has been deactivated..");
      setTimeout(null, 3000); //handle the case when user constantly and quickly pushes the stop button
      taskItem.timer = undefined;
    }
  }

  stopOtherTaskItems() {
    this.many2.forEach(element => {
      this.stopTaskItem(element);
    });
  }

  getFormattedTimeBySeconds(seconds: number) {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
  }

  getCurrentSecondStr(taskItem: TaskItem) {
    return taskItem.currentTimeStr = this.getFormattedTimeBySeconds(taskItem.lastTick);
  }

  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = "http://localhost:3000/assets/finish.mp3"; //replace with relative path later
    this.audio.load();
    console.log("this.audio element has been initialized");
  }

  addLearningResources() {
    this.many2.push(new TaskItem(this.urlify("https://lingvist.io - 3 min"), 3));
    this.many2.push(new TaskItem(this.urlify("rest - 1 mins"), 1));
    this.many2.push(new TaskItem(this.urlify("https://duolingo.com - 2 min"), 2));
    this.many2.push(new TaskItem(this.urlify("test - 0.2 min"), 0.2)); //delete later
  }

  addMeetingResources() {
    this.many2.push(new TaskItem(this.urlify("meeting facilitator #1 - 3 min"), 3));
    this.many2.push(new TaskItem(this.urlify("developer #1 - status - 1 min "), 1));
    this.many2.push(new TaskItem(this.urlify("developer #2 - status - 1 min"), 1));
    this.many2.push(new TaskItem(this.urlify("QA #1 - 1 min"), 1));
    this.many2.push(new TaskItem(this.urlify("product owner - 1 min"), 1));
    this.many2.push(new TaskItem(this.urlify("client - 1 min"), 1));
    this.many2.push(new TaskItem(this.urlify("summary - 1 min"), 1));
  }

  public many: Array<TaskItem> = [];
  public many2: Array<TaskItem> = [];

  getTotalTime() {
    let totalTaskLength = 0;
    this.many2.forEach((item) => { totalTaskLength += item.taskLengthSeconds });
    return totalTaskLength;
  }

  getTotalSpentTime() {
    let totalValue = 0;
    this.many2.forEach((item) => { totalValue += item.lastTick });
    return totalValue;
  }

  getTotalOverdueTime() {
    let totalValue = 0;
    this.many2.forEach((item) => {
      if (item.lastTick > item.taskLengthSeconds) {
        totalValue += (item.lastTick - item.taskLengthSeconds);
      }
    });
    return totalValue;
  }

  getTotalOverdueTimePercent() {
    if (this.getTotalSpentTime() > 0 && this.getTotalOverdueTime() > 0) {
      return this.getTotalOverdueTime() / this.getTotalSpentTime() * 100;
    }

    return 0;
  }
}