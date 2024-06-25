import { PropertyValues } from 'lit';
import { BitcoinConnectElement } from './BitcoinConnectElement.js';
import './bc-balance.js';
import { PaymentMethods } from '../types/PaymentMethods.js';
declare const PayButton_base: typeof BitcoinConnectElement;
/**
 * A button that when clicked launches a modal to pay an invoice.
 */
export declare class PayButton extends PayButton_base {
    title: string;
    invoice?: string;
    paymentMethods: PaymentMethods;
    preimage?: string;
    /**
     * This will be set to true if the button was clicked
     * when no invoice is set on the button. The loading
     * state will show until an invoice is set.
     */
    _waitingForInvoice: boolean;
    _paid: boolean;
    private _setPaid?;
    protected updated(changedProperties: PropertyValues): void;
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
    private _launchModal;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-pay-button': PayButton;
    }
}
export {};
