//Axios Error Plugin
export default function ({ $axios, store }) {
    $axios.onRequest(() => {
        store.dispatch("validation/clearErrors")
    })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 422) {
            store.dispatch("validation/setErrors", error.response.data.errors)
        }
        return Promise.reject(error);
    })
}