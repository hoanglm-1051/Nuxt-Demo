<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="#">
                    Demo - App
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <template v-if="!loggedIn">
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/login">Login</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/register">Register</NuxtLink>
                            </li>
                        </template>
                        <template v-if="loggedIn">
                            <li class="nav-item">
                                <a class="nav-link" @click.prevent="logout" href="#">
                                    Logout
                                </a>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        logout () {
            this.$auth.logout()
            this.$router.push({
                path: '/login'
            })
        }
    }
}
</script>
