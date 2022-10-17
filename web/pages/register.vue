<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        Register User
                    </div>

                    <div class="card-body">
                        <form @submit.prevent="registerUser">
                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                                <div class="col-md-6">
                                    <input
                                        id="name"
                                        v-model="userForm.name"
                                        type="text"
                                        class="form-control"
                                        name="name"
                                        autocomplete="name"
                                        required
                                    >
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input
                                        id="email"
                                        v-model="userForm.email"
                                        type="email"
                                        class="form-control"
                                        name="email"
                                        autocomplete="email"
                                        required
                                    >
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input
                                        id="password"
                                        v-model="userForm.password"
                                        type="password"
                                        class="form-control"
                                        name="password"
                                        autocomplete="new-password"
                                        required
                                    >
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    auth: false,
    data () {
        return {
            userForm: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async registerUser () {
            await this.$axios.post('register', this.userForm)

            this.$auth.login({
                data: {
                    email: this.userForm.email,
                    password: this.userForm.password
                }
            })
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>
