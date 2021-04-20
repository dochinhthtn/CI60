const $template = document.createElement('template');
$template.innerHTML = `

`;

export default class RegisterForm extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('register-form', RegisterForm);