/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { query, customElement, property} from 'lit-element';

import { Base } from '@spectrum/sp-base';

import sidenavitemStyles from './sidenavitem.styles';
import template from './sidenavitem.template';

@customElement('sp-sidenavitem')
export class SideNavItem extends Base {
  public static componentStyles = [sidenavitemStyles];

  @property({ type: Boolean, attribute: 'multi-level' }) public multiLevel: boolean = false;
  @property({ type: Boolean, attribute: 'first-level' }) public firstLevel: boolean = false;
  @property({ type: Boolean, attribute: 'second-level' }) public secondLevel: boolean = false;
  @property({ type: Boolean, attribute: 'selected' }) public selected: boolean = false;
  @property({ type: Boolean, attribute: 'disabled' }) public disabled: boolean = false;
  @property({ type: String, attribute: 'href' }) public href: string = '#';

  @property({ type: String }) public label: string = '';

  @query('slot') protected items!: HTMLElement;

  protected render() {
    return template.call(this);
  }

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

declare global {
  interface HTMLElementTagNameMap {
    'sp-sidenavitem': SideNavItem;
  }
}
