"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var progress_bar_1 = require('@angular2-material/progress-bar');
var button_1 = require('@angular2-material/button');
var input_1 = require('@angular2-material/input');
var taskItem_1 = require('./taskItem');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var components_1 = require('angular2-fontawesome/components');
var AppComponent = (function () {
    function AppComponent(dragulaService) {
        this.dragulaService = dragulaService;
        this.many = [];
        this.many2 = [];
        dragulaService.setOptions('another-bag', {
            copy: true,
            copySortSource: true,
        });
    }
    AppComponent.prototype.addNewTodo = function (value) {
        this.many.push(new taskItem_1.TaskItem(this.urlify(value), 1));
        this.newTodo = null;
    };
    AppComponent.prototype.keyPressEventHandler = function (event, newTodo) {
        if (event.keyCode === 13) {
            this.addNewTodo(newTodo);
        }
    };
    AppComponent.prototype.completeCheckBoxOnClick = function (event, taskItem) {
        taskItem.progressBarValue = 100;
        this.toggleTaskItemCompleteStatus(taskItem);
    };
    AppComponent.prototype.toggleTaskItemCompleteStatus = function (taskItem) {
        taskItem.complete = !taskItem.complete;
    };
    AppComponent.prototype.urlify = function (text) {
        var urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, function (url) {
            return '<a target="_blank" href="' + url + '"> link </a>';
        });
    };
    AppComponent.prototype.startTaskItem = function (taskItem) {
        var _this = this;
        if (taskItem.timer == undefined) {
            this.stopOtherTaskItems(); //allow only one running task at a time
            taskItem.timer = setInterval(function () {
                ++taskItem.lastTick;
                taskItem.progressBarValue = taskItem.lastTick / taskItem.taskLengthSeconds * 100;
                console.log("timer for " + taskItem.innerText + ": " + taskItem.lastTick);
                if (taskItem.progressBarValue === 100) {
                    _this.audio.play();
                }
            }, 1000);
        }
    };
    AppComponent.prototype.stopTaskItem = function (taskItem) {
        if (taskItem.timer != undefined) {
            clearInterval(taskItem.timer);
            console.log("timer for " + taskItem.innerText + " has been deactivated..");
            setTimeout(null, 3000); //handle the case when user constantly and quickly pushes the stop button
            taskItem.timer = undefined;
        }
    };
    AppComponent.prototype.stopOtherTaskItems = function () {
        var _this = this;
        this.many2.forEach(function (element) {
            _this.stopTaskItem(element);
        });
    };
    AppComponent.prototype.getFormattedTimeBySeconds = function (seconds) {
        return new Date(seconds * 1000).toISOString().substr(11, 8);
    };
    AppComponent.prototype.getCurrentSecondStr = function (taskItem) {
        return taskItem.currentTimeStr = this.getFormattedTimeBySeconds(taskItem.lastTick);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.audio = new Audio();
        this.audio.src = "http://localhost:3000/assets/finish.mp3"; //replace with relative path later
        this.audio.load();
        console.log("this.audio element has been initialized");
    };
    AppComponent.prototype.addExam1tems = function () {
        this.many2.push(new taskItem_1.TaskItem(this.urlify("exam 1 - 25 min"), 25));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("break - 5 min"), 5));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("exam 1 - 25 min"), 25));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("break - 5 min"), 5));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("exam 1 - 25 min"), 25));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("break - 10 min"), 10));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("exam 1 - 25 min"), 25));
    };
    AppComponent.prototype.addExam2tems = function () {
        this.many2.push(new taskItem_1.TaskItem(this.urlify("exam 2 - 25 min"), 25));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("break - 10 min"), 10));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("exam 2 - 25 min"), 25));
    };
    AppComponent.prototype.addExam3tems = function () {
        this.many2.push(new taskItem_1.TaskItem(this.urlify("exam 3 - 10 min"), 10));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("break - 5 min"), 5));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("exam 3 - 15 min"), 15));
    };
    AppComponent.prototype.clearAlltems = function () {
        this.many2.length = 0;
    };
    AppComponent.prototype.addLearningResources = function () {
        this.many2.push(new taskItem_1.TaskItem(this.urlify("lingvist.io https://lingvist.io - 3 min"), 3));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("rest - 1 mins"), 1));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("duolingo.com https://duolingo.com - 2 min"), 2));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("test - 0.2 min"), 0.2)); //delete later    
    };
    AppComponent.prototype.addMeetingResources = function () {
        this.many2.push(new taskItem_1.TaskItem(this.urlify("meeting facilitator #1 - 3 min"), 3));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("developer #1 - status - 1 min "), 1));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("developer #2 - status - 1 min"), 1));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("QA #1 - 1 min"), 1));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("product owner - 1 min"), 1));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("client - 1 min"), 1));
        this.many2.push(new taskItem_1.TaskItem(this.urlify("summary - 1 min"), 1));
    };
    AppComponent.prototype.getTotalTime = function () {
        var totalTaskLength = 0;
        this.many2.forEach(function (item) { totalTaskLength += item.taskLengthSeconds; });
        return totalTaskLength;
    };
    AppComponent.prototype.getTotalSpentTime = function () {
        var totalValue = 0;
        this.many2.forEach(function (item) { totalValue += item.lastTick; });
        return totalValue;
    };
    AppComponent.prototype.getTotalOverdueTime = function () {
        var totalValue = 0;
        this.many2.forEach(function (item) {
            if (item.lastTick > item.taskLengthSeconds) {
                totalValue += (item.lastTick - item.taskLengthSeconds);
            }
        });
        return totalValue;
    };
    AppComponent.prototype.getTotalOverdueTimePercent = function () {
        if (this.getTotalSpentTime() > 0 && this.getTotalOverdueTime() > 0) {
            return this.getTotalOverdueTime() / this.getTotalSpentTime() * 100;
        }
        return 0;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [
                ng2_dragula_1.Dragula,
                progress_bar_1.MD_PROGRESS_BAR_DIRECTIVES,
                button_1.MD_BUTTON_DIRECTIVES,
                input_1.MD_INPUT_DIRECTIVES,
                ng2_bootstrap_1.AlertComponent,
                components_1.FaComponent
            ],
            viewProviders: [ng2_dragula_1.DragulaService],
            styleUrls: ['app/app.component.css'],
        }), 
        __metadata('design:paramtypes', [ng2_dragula_1.DragulaService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map