<template>
    <div class="container">
        <div v-if="$auth.loggedIn">
            <h1>Hello {{ user.name }}!</h1>
            <div class="row">
                <div class="col-md-6">
                    <ListTask />
                </div>
                <div class="col-md-6">
                    <CompleteTask />
                </div>
            </div>
            <GetTask />
        </div>
        <h1 v-if="!$auth.loggedIn">Please sign in!</h1>
    </div>
</template>
