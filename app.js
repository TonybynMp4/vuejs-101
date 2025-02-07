import { h, createApp } from '/node_modules/vue/dist/vue.esm-browser.prod.js';
import Input from '/components/input.js';

const Login = {
    data() {
        return {
            username: 'Antony',
            password: 'motDePasseSuperSécurisé',
            inputs: [
                {
                    identifier: 'username',
                    autocompleteType: 'username',
                    type: 'text',
                    label: 'Username',
                    placeholder: 'Enter your username',
                    onInput: (value) => this.username = value,
                    required: true
                },
                {
                    identifier: 'password',
                    autocompleteType: 'current-password',
                    type: 'password',
                    label: 'Password',
                    placeholder: 'Enter your password',
                    onInput: (value) => this.password = value,
                    required: true
                }
            ]
        };
    },
    render() {
        /*
            la fonction h prend trois arguments:
            - le nom de la balise HTML (div, span, h1, etc.)
            - une table des attributs a lui donner
            - une table des enfants de la balise
        */
        return h('main', h('form',
            //attributs (fonctions on[...], type d'input etc)
            {
                class: 'translate-y-[-25%]',
                onSubmit: (e) => {
                    e.preventDefault();

                    alert(`Username: ${this.username}\nPassword: ${this.password}`);
                }
            },
            //enfants de la balise (comme en React enft)
            [
                h('fieldset', {
                    class: 'flex items-center justify-center flex-col p-4 gap-4 rounded-xl border bg-neutral-950 text-card-foreground shadow'
                },
                    [
                        h('legend', {
                            class: 'text-xl font-semibold px-2'
                        }, 'Login'),
                        ...this.inputs.map(args => h(Input, {
                            defaultValue: this[args.identifier], // on ajoute a la main car c'est innaccessible dans data()
                            ...args
                        })),
                        h('button', {
                            class: 'rounded-md text-md font-medium bg-gray-50 text-gray-950 hover:bg-gray-50/70 px-4 py-2 w-full mt-4',
                            type: 'submit',
                        }, 'Login')
                    ])
            ])
        );
    }
};

createApp(Login).mount('#app');