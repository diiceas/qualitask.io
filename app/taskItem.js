"use strict";
var TaskItem = (function () {
    function TaskItem(innerText, taskTimeMin) {
        this.progressBarValue = 0;
        this.currentTimeStr = "00:00:00";
        this.lastTick = 0;
        this.innerText = innerText;
        this.taskLengthSeconds = taskTimeMin * 60;
    }
    return TaskItem;
}());
exports.TaskItem = TaskItem;
//# sourceMappingURL=taskItem.js.map