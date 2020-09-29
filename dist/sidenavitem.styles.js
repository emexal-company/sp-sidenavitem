/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

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
import { css } from 'lit-element';
export default css `*{--spectrum-sidenav-item-gap: var(--spectrum-global-dimension-size-50);--spectrum-sidenav-item-height: var(--spectrum-alias-single-line-height);--spectrum-sidenav-item-padding-x: var(--spectrum-global-dimension-size-150);--spectrum-sidenav-item-border-radius: var(--spectrum-alias-border-radius-regular);--spectrum-sidenav-item-text-size: var(--spectrum-alias-font-size-default);--spectrum-sidenav-item-font-weight: var(--spectrum-global-font-weight-regular);--spectrum-tabs-focus-ring-size: var(--spectrum-alias-border-size-thick);--spectrum-sidenav-icon-gap: var(--spectrum-global-dimension-size-100);--spectrum-sidenav-header-height: var(--spectrum-alias-single-line-height);--spectrum-sidenav-header-gap-top: var(--spectrum-global-dimension-size-200);--spectrum-sidenav-header-gap-bottom: var(--spectrum-global-dimension-size-50);--spectrum-sidenav-header-padding-x: var(--spectrum-global-dimension-size-150);--spectrum-sidenav-header-border-radius: var(--spectrum-alias-border-radius-regular);--spectrum-sidenav-header-text-size: var(--spectrum-global-dimension-font-size-50);--spectrum-sidenav-header-font-weight: var(--spectrum-global-font-weight-medium);--spectrum-sidenav-header-letter-spacing: var(--spectrum-global-font-letter-spacing-medium);--spectrum-sidenav-multilevel-main-item-font-weight: var(--spectrum-global-font-weight-bold);--spectrum-sidenav-multilevel-item-indentation-level1: var(--spectrum-global-dimension-size-150);--spectrum-sidenav-multilevel-item-indentation-level2: var(--spectrum-global-dimension-size-300);--spectrum-sidenav-item-text-color-selected: var(--spectrum-alias-text-color-hover);--spectrum-sidenav-item-background-color-selected: var(--spectrum-alias-highlight-hover);--spectrum-sidenav-item-background-color-down: var(--spectrum-alias-highlight-hover);--spectrum-sidenav-item-background-color-disabled: var(--spectrum-alias-background-color-transparent);--spectrum-sidenav-item-text-color-disabled: var(--spectrum-alias-text-color-disabled);--spectrum-sidenav-item-background-color: var(--spectrum-alias-background-color-transparent);--spectrum-sidenav-item-text-color: var(--spectrum-alias-text-color);--spectrum-sidenav-item-background-color-hover: var(--spectrum-alias-highlight-hover);--spectrum-sidenav-item-text-color-hover: var(--spectrum-alias-text-color-hover);--spectrum-sidenav-item-background-color-key-focus: var(--spectrum-alias-highlight-hover);--spectrum-sidenav-item-text-color-key-focus: var(--spectrum-alias-text-color-hover);--spectrum-sidenav-item-border-color-key-focus: var(--spectrum-alias-border-color-focus);--spectrum-sidenav-header-text-color: var(--spectrum-global-color-gray-700)}.spectrum-SideNav-item{list-style-type:none;margin:var(--spectrum-sidenav-item-gap, var(--spectrum-global-dimension-size-50)) 0}.spectrum-SideNav-itemLink{position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:left;justify-content:left;box-sizing:border-box;width:100%;min-height:var(--spectrum-sidenav-item-height, var(--spectrum-alias-single-line-height));padding:var(--spectrum-global-dimension-size-65) var(--spectrum-sidenav-item-padding-x, var(--spectrum-global-dimension-size-150));border-radius:var(--spectrum-sidenav-item-border-radius, var(--spectrum-alias-border-radius-regular));font-size:var(--spectrum-sidenav-item-text-size, var(--spectrum-alias-font-size-default));font-weight:var(--spectrum-sidenav-item-font-weight, var(--spectrum-global-font-weight-regular));font-style:normal;text-decoration:none;word-break:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;cursor:pointer;transition:background-color var(--spectrum-global-animation-duration-100, 130ms) ease-out,color var(--spectrum-global-animation-duration-100, 130ms) ease-out}.spectrum-SideNav-itemLink:focus{outline:none}.spectrum-SideNav-itemLink.focus-ring::before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;border:var(--spectrum-tabs-focus-ring-size, var(--spectrum-alias-border-size-thick)) solid transparent;border-radius:var(--spectrum-sidenav-item-border-radius, var(--spectrum-alias-border-radius-regular))}.spectrum-SideNav-itemLink .spectrum-SideNav-itemIcon{margin-right:var(--spectrum-sidenav-icon-gap, var(--spectrum-global-dimension-size-100))}.spectrum-SideNav-itemLink{background-color:var(--spectrum-sidenav-item-background-color, var(--spectrum-alias-background-color-transparent));color:var(--spectrum-sidenav-item-text-color, var(--spectrum-alias-text-color))}.spectrum-SideNav-itemLink:hover{background-color:var(--spectrum-sidenav-item-background-color-hover, var(--spectrum-alias-highlight-hover));color:var(--spectrum-sidenav-item-text-color-hover, var(--spectrum-alias-text-color-hover))}.spectrum-SideNav-itemLink:active{background-color:var(--spectrum-sidenav-item-background-color-down, var(--spectrum-alias-highlight-hover))}.spectrum-SideNav-itemLink.focus-ring{background-color:var(--spectrum-sidenav-item-background-color-key-focus, var(--spectrum-alias-highlight-hover));color:var(--spectrum-sidenav-item-text-color-key-focus, var(--spectrum-alias-text-color-hover))}.spectrum-SideNav-itemLink.focus-ring::before{border-color:var(--spectrum-sidenav-item-border-color-key-focus, var(--spectrum-alias-border-color-focus))}.spectrum-SideNav-item.is-selected>.spectrum-SideNav-itemLink{color:var(--spectrum-sidenav-item-text-color-selected, var(--spectrum-alias-text-color-hover));background-color:var(--spectrum-sidenav-item-background-color-selected, var(--spectrum-alias-highlight-hover))}.spectrum-SideNav-item .is-active>.spectrum-SideNav-itemLink{background-color:var(--spectrum-sidenav-item-background-color-down, var(--spectrum-alias-highlight-hover))}.spectrum-SideNav-item.is-disabled .spectrum-SideNav-itemLink{background-color:var(--spectrum-sidenav-item-background-color-disabled, var(--spectrum-alias-background-color-transparent));color:var(--spectrum-sidenav-item-text-color-disabled, var(--spectrum-alias-text-color-disabled));cursor:default;pointer-events:none}`;
//# sourceMappingURL=sidenavitem.styles.js.map