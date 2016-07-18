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
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>My First Angular 2 App</h1>\n      <div>\n        <div class='wrapper'>\n          <div class='container' [dragula]='\"first-bag\"'>\n            <div>Drag/drop item 1</div>\n          </div>\n          <div class='container' [dragula]='\"first-bag\"'>\n            <div>Drag/drop item 2</div>\n          </div>\n        </div>\n      </div>\n    ",
            directives: [ng2_dragula_1.Dragula],
            viewProviders: [ng2_dragula_1.DragulaService],
            styles: ["\n    .wrapper {\n      display: table;\n    }\n    .container {\n      display: table-cell;\n      background-color: rgba(255, 255, 255, 0.2);\n      width: 50%;\n    }\n    .container:nth-child(odd) {\n      background-color: rgba(0, 0, 0, 0.2);\n    }\n    .container div,\n    .gu-mirror {\n      margin: 10px;\n      padding: 10px;\n      background-color: rgba(0, 0, 0, 0.2);\n      transition: opacity 0.4s ease-in-out;\n    }\n    .container div {\n      cursor: move;\n      cursor: grab;\n      cursor: -moz-grab;\n      cursor: -webkit-grab;\n    }\n    .gu-mirror {\n      cursor: grabbing;\n      cursor: -moz-grabbing;\n      cursor: -webkit-grabbing;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map