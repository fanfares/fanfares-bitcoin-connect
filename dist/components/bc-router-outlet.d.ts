import { BitcoinConnectElement } from './BitcoinConnectElement';
declare const RouterOutlet_base: typeof BitcoinConnectElement;
export declare class RouterOutlet extends RouterOutlet_base {
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-router-outlet': RouterOutlet;
    }
}
export {};
