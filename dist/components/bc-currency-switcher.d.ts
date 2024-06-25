import { BitcoinConnectElement } from './BitcoinConnectElement';
import './internal/bci-button';
import './bc-connector-list';
import './bc-balance';
declare const CurrencySwitcher_base: typeof BitcoinConnectElement;
export declare class CurrencySwitcher extends CurrencySwitcher_base {
    _isSwitchingCurrency: boolean;
    _selectedCurrency: string | undefined;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    private _toggleSelectVisibility;
    private _handleCurrencyChange;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-currency-switcher': CurrencySwitcher;
    }
}
export {};
