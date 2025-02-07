import Input from "./input.js"

export default {
    props: {
        credentials: {
            username: {
                type: String,
                required: false
            },
            password: {
                type: String,
                required: false
            }
        }
    },
    data() {
        return {
            credentials: this.credentials,
            inputs: [
                {
                    identifier: 'username',
                    autocompleteType: 'username',
                    type: 'text',
                    label: 'Username',
                    placeholder: 'Enter your username',
                    onInput: (event) => this.credentials.username = event.target.value,
                    required: true
                },
                {
                    identifier: 'password',
                    autocompleteType: 'current-password',
                    type: 'password',
                    label: 'Password',
                    placeholder: 'Enter your password',
                    onInput: (event) => this.credentials.password = event.target.value,
                    required: true
                }
            ],
            onSubmit: (event) => {
                event.preventDefault();
                alert(`Username: ${
                    this.credentials.username
                }\nPassword: ${
                    this.credentials.password
                }`);
            }
        }
    },

    components: {
        Input: Input
    },

    template: `
        <form class="translate-y-[-25%]" @submit="onSubmit">
        <fieldset
            class="flex items-center justify-center flex-col p-4 gap-4 rounded-xl border bg-neutral-950 text-card-foreground shadow">
            <legend class="text-xl font-semibold px-2">
                Login
            </legend>

            <template v-for="input in inputs">
                <Input v-bind:attributes="input" v-bind:credentials="credentials" />
            </template>
            <button
                class="rounded-md text-md font-medium bg-gray-50 text-gray-950 hover:bg-gray-50/70 px-4 py-2 w-full mt-4"
                type="submit">
                Login
            </button>
        </fieldset>
    </form>
    `,
}
