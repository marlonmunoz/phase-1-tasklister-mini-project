document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.getElementById('create-task-form')

  createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const tasksList = document.getElementById('tasks')
    const taskLI = document.createElement('li')
    const newTaskDescriptionInputElement = document.getElementById('new-task-description')
    taskLI.append(newTaskDescriptionInputElement.value + " ")
    const deleteTaskButton = document.createElement('button')
    deleteTaskButton.textContent = "X"
    deleteTaskButton.setAttribute('data-description', newTaskDescriptionInputElement.value)
    deleteTaskButton.addEventListener('click', () => {
      taskLI.remove()
    })

    taskLI.append(deleteTaskButton)
    tasksList.appendChild(taskLI)
    createTaskForm.reset()
  })
});

















``


























