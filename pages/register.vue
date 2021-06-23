<template>
    <section>
        <BreadCrumb pageTitle="Register" subTitle="Register with correct info"/>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 mb-5 mt-5">
                    <div class="shadow p-5 mb-5 mt-5 bg-body rounded">
                        <form @submit.prevent="userRegister">
                            <div class="form-header mb-4">
                                <h3 class="mb-1">Register Now</h3>
                                <p>Register with correct information</p>
                            </div>
                            <div class="mb-3">
                                <label for="name" class="form-label">Full Name</label>
                                <input type="name" class="form-control" :class=" errors.name ? 'is-invalid' : '' " id="name" v-model.trim="formData.name">
                                <div id="name" class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
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
                    name: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            async userRegister(){
                try {
                    //logoin with local
                    await this.$axios.$post('register', this.formData)
                    await this.$auth.loginWith('local', { 
                        data: {
                            email: this.formData.email,
                            password: this.formData.password,
                        }
                    })
                    await this.$router.push('/');
                } catch (error) {
                    console.log(error.response);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>