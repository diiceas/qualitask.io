import { Component } from '@angular/core';

import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
      <div>
        <div class='wrapper'>
          <div class='container' [dragula]='"first-bag"'>
            <div>Drag/drop item 1</div>
          </div>
          <div class='container' [dragula]='"first-bag"'>
            <div>Drag/drop item 2</div>
          </div>
        </div>
      </div>
    `,
    directives: [Dragula],
    viewProviders: [DragulaService],
    styles: [`
    .wrapper {
      display: table;
    }
    .container {
      display: table-cell;
      background-color: rgba(255, 255, 255, 0.2);
      width: 50%;
    }
    .container:nth-child(odd) {
      background-color: rgba(0, 0, 0, 0.2);
    }
    .container div,
    .gu-mirror {
      margin: 10px;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.2);
      transition: opacity 0.4s ease-in-out;
    }
    .container div {
      cursor: move;
      cursor: grab;
      cursor: -moz-grab;
      cursor: -webkit-grab;
    }
    .gu-mirror {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing;
    }
    `]
})
export class AppComponent { }