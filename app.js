import { h, createApp } from '/node_modules/vue/dist/vue.esm-browser.prod.js';
import Main from './components/main.js';

const Login = {
    data() {
        return {
            username: 'Antony',
            password: 'motDePasseSuperSécurisé'
        };
    },
    render() {
        return h(Main , {
            username: this.username,
            password: this.password
        });
    }
};

createApp(Login).mount('#app');