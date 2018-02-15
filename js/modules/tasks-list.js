// ta funkcja odwołuję sie do zmiennej 'tasks' która jest tablicą przechowywująca zadania
function showTasks() {
    // bierzemy pojedynczy element naszego zadania, pojedynczy tytuł i przesyłamy ten tytuł do funkcji 'add new task'
    tasks.forEach(function(title) {
       addNewTask(title);
    });
}

// //przełaczenie wykonania zadania
   function toggleTaskComplete(task){
        task.classList.toggle('btn-success');
    }
// //usunięcie zadania
function deleteTask(task) {
     var liToDelete = task.closest('li');
     task.closest('ul').removeChild(liToDelete);
   }
