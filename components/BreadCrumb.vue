<template>
    <section class="breadcrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="page-title">{{ pageTitle }}</h1>
                    <p class="page-subtitle m-0">{{ subTitle }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
       props: ['pageTitle', 'subTitle'] 
    }
</script>

<style lang="scss" scoped>

</style>