import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
export default function template() {
    const classes = {
        'is-disabled': this.disabled,
        'is-selected': this.selected,
    };
    return html `
        <li
            ?multi-level="${this.multiLevel}"
            ?first-level="${this.firstLevel}"
            ?second-level="${this.secondLevel}"
            class="spectrum-SideNav-item ${classMap(classes)}">
            <a href="${this.href}" class="spectrum-SideNav-itemLink ${classMap(classes)}">${this.label}</a>
            <slot></slot>
        </li>
        `;
}
//# sourceMappingURL=sidenavitem.template.js.map