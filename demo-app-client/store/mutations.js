export default {
    getTask (state, task) {
        state.newTask = task
    },
    addTask (state) {
        if (state.newTask.trim()) {
            state.tasks.push({
                body: state.newTask,
                completed: false
            })
        }
    },
    editTask (state, task) {
        const tasks = state.tasks
        tasks.splice(tasks.indexOf(task), 1)
        state.tasks = tasks
        state.newTask = task.body
    },
    removeTask (state, task) {
        const tasks = state.tasks
        tasks.splice(tasks.indexOf(task), 1)
    },
    completeTask (state, task) {
        task.completed = !task.completed
    },
    clearTask (state) {
        state.newTask = ''
    }
}
