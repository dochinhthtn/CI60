const $template = document.createElement('template');
$template.innerHTML = `
    <div class="message-list">
        <message-container content="Hello" owned="true"></message-container>
        <message-container content="Hi there" owned="false"></message-container>
        <message-container content="How are you?" owned="true"></message-container>
        <message-container content="I'm khỏe" owned="false"></message-container>
    </div>
`;

export default class MessageList extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$list = this.querySelector('.message-list');
    }

    static get observedAttributes() {
        return ['messages'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'messages') {
            
        }
    }
}

window.customElements.define('message-list', MessageList);