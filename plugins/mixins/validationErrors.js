import Vue from "vue";
import { mapGetters } from "vuex";

const ValidationErros = {
    install(Vue, options){
        Vue.mixin({
            computed: {
                ...mapGetters({
                    errors: "validation/errors"
                })
            }
        });
    }
};

Vue.use(ValidationErros);