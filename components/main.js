import FormComponent from './form.js'

export default {
    props: {
        username: {
            type: String,
            required: false
        },
        password: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            credentials: {
                username: this.username,
                password: this.password
            }
        }
    },
    components: {
        FormComponent
    },
    template: `
        <main>
            <form-component v-bind:credentials="credentials" />
        </main>
    `,
}
