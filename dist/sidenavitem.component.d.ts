import { Base } from '@spectrum/sp-base';
export declare class SideNavItem extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    multiLevel: boolean;
    firstLevel: boolean;
    secondLevel: boolean;
    selected: boolean;
    disabled: boolean;
    href: string;
    label: string;
    protected items: HTMLElement;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-sidenavitem': SideNavItem;
    }
}
