import { h, createApp } from './node_modules/vue/dist/vue.esm-browser.prod.js';

const Login = {
    data() {
        return {
            username: 'alex',
            password: 'sarah'
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

                    alert('Login attempt:' + " " + this.username + " " + this.password);
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
                        h('article', [
                            h('label', {
                                class: 'text-md font-medium',
                                for: 'username'
                            }, 'Username: '),
                            h('input', {
                                id: 'username',
                                name: 'username',
                                autocomplete: 'username',
                                type: 'text',
                                class: 'border border-input bg-transparent px-3 py-1 text-base shadow-sm rounded-md w-full',
                                placeholder: "Entre ton Nom chacal",
                                value: this.username,
                                required: true,
                                onInput: (e) => this.username = e.target.value
                            })
                        ]),
                        h('article', [
                            h('label', {
                                class: 'text-md font-medium',
                                for: 'password'
                            }, 'Password: '),
                            h('input', {
                                id: 'password',
                                name: 'password',
                                autocomplete: 'current-password',
                                class: 'border border-input bg-transparent px-3 py-1 text-base shadow-sm rounded-md w-full',
                                type: 'password',
                                placeholder: "Mot de passe",
                                value: this.password,
                                required: true,
                                onInput: (e) => this.password = e.target.value
                            })
                        ]),
                        h('button', {
                            class: 'rounded-md text-md font-medium bg-gray-50 text-gray-950 hover:bg-gray-50/70 py-2 w-full mt-4',
                            type: 'submit',
                        }, 'Login')
                    ])
            ])
        );
    }
};

createApp(Login).mount('#app');