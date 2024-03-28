<template>
    <div id="completed-tasks">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">
                    Completed Task -
                    <span v-if="completed.length > 0" class="badge badge-success">{{ completed.length }}</span>
                    <span v-else class="badge badge-success">0</span>
                </h3>
            </div>
            <div class="panel-body">
                <ul
                    is="transition-group"
                    class="list-group"
                    name="slide-fade"
                    enter-active-class="animated tada"
                    leave-active-class="animated bounceOutRight"
                >
                    <li v-for="(task, index) in completed" :key="index" class="list-group-item">
                        {{ task.body }}
                        <div class="btn-group">
                            <button type="button" class="btn btn-danger btn-sm" @click="remove(task)">
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
        completed() {
            return this.$store.getters.completeTask
        },
    },
    methods: {
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
