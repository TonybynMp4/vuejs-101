import { h } from '/node_modules/vue/dist/vue.esm-browser.prod.js';

export default {
    props: {
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
    },

    render() {
        return  h('article', [
            h('label', {
                class: 'text-md font-medium',
                for: this.identifier
            }, this.label + ': '),
            h('input', {
                id: this.identifier,
                name: this.identifier,
                autocomplete: this.autocompleteType,
                type: this.type,
                class: 'border border-input bg-transparent px-3 py-1 text-base shadow-sm rounded-md w-full',
                placeholder: this.placeholder,
                value: this.defaultValue,
                required: this.required,
                onInput: (e) => this.onInput(e.target.value)
            })
        ])
    }
}