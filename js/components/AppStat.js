const $template = document.createElement('template');
$template.innerHTML = `
    <div class="app-stat">
        <div class="stat">
            <i class="fas fa-users"></i>
            <span class="free-user-count">100</span>
        </div>
            
        <div class="stat">
            <i class="fas fa-comments"></i>
            <span class="chatting-user-count">20</span>
        </div>

        <div class="stat">
            <i class="fas fa-heart"></i>
            <span class="flirting-user-count">20</span>
        </div>
    </div>
`;

export default class AppStat extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('app-stat', AppStat);