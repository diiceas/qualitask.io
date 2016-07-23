import { Observable } from 'rxjs/Rx';

export class TaskItem{
    innerText: string;
    progressBarValue: number = 0;
    currentTimeStr: string = "00:00:00";    
    taskLengthSeconds: number;
    lastTick: number = 0;
    timer: NodeJS.Timer;    
    constructor(innerText: string, taskTimeMin: number){
        this.innerText = innerText;        
        this.taskLengthSeconds = taskTimeMin * 60;
    }
}