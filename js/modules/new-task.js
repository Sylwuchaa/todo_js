function addNewTasks(title) {
    var taskLi = document.createElement('li');

    taskLi.classList.add('single-task');
    taskLi.innerHTML = prepareTaskHTML(title);
    // Add task to DOM 
    tasksContainer.appendChild(taskLi);
} 

function prepareTaskHTML(title) {
  return  '<div class="input-group">' +
        '<span class="input-group-btn">' +
            '<button class="btn btn-light toggle-complete_btn">' +
            '<i class="fa fa-check"></i></button>' +
        '</span>' +
    
    '<input type="text" class="form-control" placeholder="Tytył zadania..." value="Pójść do sklepu">' +
        '<span class="input-group-btn">' +
            '<button class="btn btn-danger delete-task-btn">' +
            '<i class="fa fa-times"></i></button>' +
        '</span>' +
    '</div>';
}