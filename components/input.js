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
        },
        attributes: {
            identifier: {
                type: String,
                required: true
            },
            label: {
                type: String,
                required: true
            },
            defaultValue: {
                type: String,
                required: false
            },
            type: {
                type: String,
                required: true
            },
            autocompleteType: {
                type: String,
                required: true
            },
            placeholder: {
                type: String,
                required: true
            },
            onInput: {
                type: Function,
                required: true
            },
            required: {
                type: Boolean,
                default: false
            }
        }
    },

    data() {
        console.log(this.credentials)
        return {
            identifier: this.attributes.identifier,
            label: this.attributes.label,
            defaultValue: this.attributes.defaultValue,
            type: this.attributes.type,
            autocompleteType: this.attributes.autocompleteType,
            placeholder: this.attributes.placeholder,
            onInput: this.attributes.onInput,
            required: this.attributes.required,
            defaultValue: this.credentials[this.attributes.identifier]
        }
    },
    template: `
    <article>
        <label class="text-md font-medium" :for="identifier">{{ label }}: </label>
        <input
            class="border border-input bg-transparent px-3 py-1 text-base shadow-sm rounded-md w-full"
            :id="identifier"
            :name="identifier"
            :autocomplete="autocompleteType"
            :type="type"
            :placeholder="placeholder"
            :value="defaultValue"
            :required="required"
            @input="onInput"
        />
    </article>
    `,
}