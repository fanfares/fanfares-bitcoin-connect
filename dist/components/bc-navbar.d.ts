import { BitcoinConnectElement } from './BitcoinConnectElement';
declare const Navbar_base: typeof BitcoinConnectElement;
export declare class Navbar extends Navbar_base {
    heading?: string;
    render(): import("lit-html").TemplateResult<1>;
    private _goBack;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-navbar': Navbar;
    }
}
export {};
