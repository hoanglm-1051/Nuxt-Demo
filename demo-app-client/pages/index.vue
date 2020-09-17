<template>
    <div class="container">
        <p v-if="$auth.loggedIn">
            Hello {{ user.name }}
        </p>
        <p v-if="!$auth.loggedIn">
            Please sign in
        </p>
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
</template>
