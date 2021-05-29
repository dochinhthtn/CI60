import { listenCurrentUser } from "../models/user.js";

const $template = document.createElement('template');
$template.innerHTML = `
    <div class="chat-screen">
        <div class="aside-left">
            <app-stat></app-stat>
            <user-actions></user-actions>
        </div>

        <div class="chat-container">
            <!-- Hiển thị tin nhắn -->
            <!-- Form gửi tin nhắn -->
        </div>
    </div>
`;

export default class ChatScreen extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
    }

    connectedCallback() {
        listenCurrentUser();
    }
}

window.customElements.define('chat-screen', ChatScreen);