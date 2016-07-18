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
        this.many.push(value);
        this.newTodo = null;
    };
    AppComponent.prototype.eventHandler = function (event, newTodo) {
        if (event.keyCode === 13) {
            this.addNewTodo(newTodo);
        }
    };
    AppComponent.prototype.todoItemOnClick = function (event) {
        event.srcElement.style.textDecoration = "line-through";
        event.srcElement.style.background = "orange";
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [ng2_dragula_1.Dragula],
            viewProviders: [ng2_dragula_1.DragulaService],
            styleUrls: ['app/app.component.css'],
        }), 
        __metadata('design:paramtypes', [ng2_dragula_1.DragulaService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map