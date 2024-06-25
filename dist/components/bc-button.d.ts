import { BitcoinConnectElement } from './BitcoinConnectElement.js';
import './bc-balance';
declare const Button_base: typeof BitcoinConnectElement;
/**
 * A button that when clicked launches the modal.
 */
export declare class Button extends Button_base {
    title: string;
    protected _showBalance: boolean | undefined;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-button': Button;
    }
}
export {};
