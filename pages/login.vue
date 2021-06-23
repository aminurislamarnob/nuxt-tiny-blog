<template>
    <section>
        <BreadCrumb pageTitle="Login" subTitle="Login with email & password"/>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 mb-5 mt-5">
                    <div class="shadow p-5 mb-5 mt-5 bg-body rounded">
                        <form @submit.prevent="login">
                            <div class="form-header mb-4">
                                <h3 class="mb-1">Login Now</h3>
                                <p>Login with email & password</p>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" :class=" errors.email ? 'is-invalid' : '' " id="email" v-model.trim="formData.email">
                                <div id="email" class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" :class=" errors.password ? 'is-invalid' : '' " id="password" v-model.trim="formData.password">
                                <div id="password" class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                            </div>
                            <button type="submit" class="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        auth: 'guest',
        data(){
            return{
                formData: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            async login(){
                try {
                    //logoin with local
                    await this.$auth.loginWith('local', { data: this.formData });
                    await this.$router.push('/');
                } catch (error) {
                    console.log('something went wrong!');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>