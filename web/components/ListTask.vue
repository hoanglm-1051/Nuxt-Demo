<template>
    <div id="list-tasks">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel title">
                    My Tasks -
                    <span v-if="tasks.length > 0" class="badge badge-info">{{ tasks.length }}</span>
                    <span v-else class="badge badge-info">0</span>
                </h3>
            </div>
            <div class="panel-body">
                <ul
                    is="transition-group"
                    class="list-group"
                    name="custom-classes-transition"
                    enter-active-class="animated tada"
                    leave-active-class="animated bounceOutRight"
                >
                    <li v-for="(task, index) in tasks" :key="index" class="list-group-item">
                        {{ task.body }}
                        <div class="btn-group">
                            <button class="btn btn-default btn-sm" type="button" @click="edit(task)">
                                <span class="glyphicon glyphicon-edit" /> Edit
                            </button>
                            <button class="btn btn-default btn-sm" type="button" @click="complete(task)">
                                <span class="glyphicon glyphicon-ok-circle" /> Complete
                            </button>
                            <button class="btn btn-default btn-sm" type="button" @click="remove(task)">
                                <span class="glyphicon glyphicon-remove-circle" /> Remove
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        tasks() {
            return this.$store.getters.tasks
        },
        newTask() {
            return this.$store.getters.newTask
        },
    },
    methods: {
        edit(task) {
            this.$store.dispatch('editTask', task)
        },
        complete(task) {
            this.$store.dispatch('completeTask', task)
        },
        remove(task) {
            this.$store.dispatch('removeTask', task)
        },
    },
}
</script>

<style>
.btn-group {
    float: right;
}
</style>
