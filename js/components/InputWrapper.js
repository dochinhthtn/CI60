const $template = document.createElement('template');
$template.innerHTML = `
    <div class="input-wrapper">
        <input type="text" class="input-main">
        <div class="input-error">Input error message</div>
    </div>
`;

export default class InputWrapper extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$main = this.querySelector(".input-main");
        this.$error = this.querySelector(".input-error");
    }

    static get observedAttributes() {
        return ['placeholder', 'error', 'type'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if(attrName == 'placeholder') {
            this.$main.placeholder = newValue;
        } else if(attrName == 'error') {
            this.$error.innerHTML = newValue;
        } else if(attrName == 'type') {
            this.$main.type = newValue;
        }
    }
}

window.customElements.define('input-wrapper', InputWrapper);