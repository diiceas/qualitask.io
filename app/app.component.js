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
        this.many.push({
            innerText: this.urlify(value),
            progressBarValue: 0
        });
        this.newTodo = null;
    };
    AppComponent.prototype.keyPressEventHandler = function (event, newTodo) {
        if (event.keyCode === 13) {
            this.addNewTodo(newTodo);
        }
    };
    AppComponent.prototype.todoItemOnClick = function (event, taskItem) {
        event.srcElement.style.textDecoration = "line-through";
        event.srcElement.style.background = "orange";
        taskItem.progressBarValue = 100;
    };
    AppComponent.prototype.urlify = function (text) {
        var urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, function (url) {
            return '<a href="' + url + '">' + url + '</a>';
        });
    };
    AppComponent.prototype.addLearningResources = function () {
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
    };
    AppComponent.prototype.addMeetingResources = function () {
        this.many2.push(this.urlify("meeting facilitator #1 - 3 min"));
        this.many2.push(this.urlify("developer #1 - 5 min - status"));
        this.many2.push(this.urlify("developer #2 - 7 min - status"));
        this.many2.push(this.urlify("QA #1 - 4 min"));
        this.many2.push(this.urlify("product owner - 5 min"));
        this.many2.push(this.urlify("client - 10 min"));
        this.many2.push(this.urlify("summary - 5 min"));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [ng2_dragula_1.Dragula, progress_bar_1.MdProgressBar],
            viewProviders: [ng2_dragula_1.DragulaService],
            styleUrls: ['app/app.component.css'],
        }), 
        __metadata('design:paramtypes', [ng2_dragula_1.DragulaService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map