import { BitcoinConnectElement } from './BitcoinConnectElement';
import './internal/bci-button';
import './bc-connector-list';
import './bc-balance';
import './bc-currency-switcher';
declare const Start_base: typeof BitcoinConnectElement;
export declare class Start extends Start_base {
    protected _showBalance: boolean | undefined;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-start': Start;
    }
}
export {};
