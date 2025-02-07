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
        return h('form',
        //attributs (fonctions on[...], type d'input etc)
        {
            onSubmit: (e) => {
                e.preventDefault();

                alert('Login attempt:' + " " + this.username + " " + this.password);
            }
        },
        //enfants de la balise (comme en React enft)
        [
            h('fieldset', [
            h('legend', 'Login'),
            h('div', [
                h('label', 'Username: '),
                h('input', {
                    type: 'text',
                    placeholder: "Entre ton Nom chacal",
                    value: this.username,
                    onInput: (e) => this.username = e.target.value
                })
            ]),
            h('div', [
                h('label', 'Password: '),
                h('input', {
                    type: 'password',
                    placeholder: "Mot de passe",
                    value: this.password,
                    onInput: (e) => this.password = e.target.value
                })
            ]),
            h('button', {
                type: 'submit',
            }, 'Login')
            ])
        ])
    }
};

createApp(Login).mount('#app');