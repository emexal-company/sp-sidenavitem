import { __decorate, __metadata } from "tslib";
import { query, customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import sidenavitemStyles from './sidenavitem.styles';
import template from './sidenavitem.template';
let SideNavItem = class SideNavItem extends Base {
    constructor() {
        super(...arguments);
        this.multiLevel = false;
        this.firstLevel = false;
        this.secondLevel = false;
        this.selected = false;
        this.disabled = false;
        this.href = '#';
        this.label = '';
        /*protected firstUpdated() {
          const items = this.getItems();
          items.forEach((item) => {
            item.multiLevel = this.multiLevel;
            if (this.firstLevel) {
              item.secondLevel = true;
            } else {
              item.firstLevel = true;
            }
          });
        }*/
        /*private getItems(): SideNav[] {
          return (this.items as HTMLSlotElement)
            .assignedNodes({ flatten: true })
            .filter((e: Node) => e instanceof SideNav) as any as SideNav[];
        }*/
    }
    render() {
        return template.call(this);
    }
};
SideNavItem.componentStyles = [sidenavitemStyles];
__decorate([
    property({ type: Boolean, attribute: 'multi-level' }),
    __metadata("design:type", Boolean)
], SideNavItem.prototype, "multiLevel", void 0);
__decorate([
    property({ type: Boolean, attribute: 'first-level' }),
    __metadata("design:type", Boolean)
], SideNavItem.prototype, "firstLevel", void 0);
__decorate([
    property({ type: Boolean, attribute: 'second-level' }),
    __metadata("design:type", Boolean)
], SideNavItem.prototype, "secondLevel", void 0);
__decorate([
    property({ type: Boolean, attribute: 'selected' }),
    __metadata("design:type", Boolean)
], SideNavItem.prototype, "selected", void 0);
__decorate([
    property({ type: Boolean, attribute: 'disabled' }),
    __metadata("design:type", Boolean)
], SideNavItem.prototype, "disabled", void 0);
__decorate([
    property({ type: String, attribute: 'href' }),
    __metadata("design:type", String)
], SideNavItem.prototype, "href", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], SideNavItem.prototype, "label", void 0);
__decorate([
    query('slot'),
    __metadata("design:type", HTMLElement)
], SideNavItem.prototype, "items", void 0);
SideNavItem = __decorate([
    customElement('sp-sidenavitem')
], SideNavItem);
export { SideNavItem };
//# sourceMappingURL=sidenavitem.component.js.map