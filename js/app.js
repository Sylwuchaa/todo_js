// Varibles
var newTaskForm = document.querySelector('.new-task-container form');
var tasksContainer = document.querySelector('.tasks-container ul');

// On DOM load, sprawdzamy czy dewo dom jest gotowy byśmy mogli na nim pracować
document.addEventListener('DOMContentLoaded', function() {
    bindAddTaskEvents();
// odwołujemy sie do funkcji ''showTasks''
    showTasks();
});
