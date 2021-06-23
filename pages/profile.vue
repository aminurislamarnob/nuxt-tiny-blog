<template>
  <div>
    <section>
        <BreadCrumb pageTitle="My Profile" subTitle="Profile Details"/>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb-5 mt-5">
                        <div class="shadow-sm p-5 mb-5 mt-5 bg-body rounded">
                            <strong>Name:</strong> {{ $auth.user.name }}<br>
                            <strong>Email:</strong> {{ $auth.user.email }}
                        </div>
                    </div>
                </div>
            </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
