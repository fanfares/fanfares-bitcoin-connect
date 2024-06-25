import { BitcoinConnectElement } from './BitcoinConnectElement.js';
declare const Balance_base: typeof BitcoinConnectElement;
/**
 * Displays the balance of the connected wallet (could be sats or fiat)
 */
export declare class Balance extends Balance_base {
    _balance: string | undefined;
    _balanceSats: number | undefined;
    _selectedCurrency: string | undefined;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    private _convertBalance;
    private _loadBalance;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-balance': Balance;
    }
}
export {};
