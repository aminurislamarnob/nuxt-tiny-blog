<template>
    <header id="header" class="site-header ai-bg-white">
        <div class="header-menu-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-md-6 col-6">
                        <NuxtLink to="/" class="logo">
                            <Logo />
                        </NuxtLink>
                    </div>
                    <div class="col-lg-9 col-md-6 col-6 text-right">
                        <div class="main-menu-wrapper d-flex justify-content-end align-items-center">
                            <div id="MainMenu" class="primary-menu main-top-navigation">
                                <ul class="main-menu">
                                    <li><NuxtLink to="/">Home</NuxtLink></li>
                                    <li><NuxtLink to="/blog">Blog</NuxtLink></li>

                                    <template v-if="$auth.loggedIn">
                                    <li class="menu-item-has-children">
                                        <a href="#">My Account</a>
                                        <ul class="sub-menu">
                                            <li><NuxtLink to="/profile"><i class="icon-wordpress"></i>Profile</NuxtLink></li>
                                            <li><a href="#"><i class="icon-wordpress"></i>All Posts</a></li>
                                            <li><a @click.prevent="logOut"><i class="icon-html5"></i>Logout</a></li>
                                        </ul>
                                    </li>
                                    </template>

                                    <template v-if="!$auth.loggedIn">
                                    <li><NuxtLink to="/login">Login</NuxtLink></li>
                                    <li><NuxtLink to="/register">Register</NuxtLink></li>
                                    </template>
                                </ul>
                            </div>
                            <div id="menuTrigger" class="mobile-menu-trigger d-block d-lg-none">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        methods: {
            async logOut(){
                await this.$auth.logout();
                await this.$router.push('/login');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>