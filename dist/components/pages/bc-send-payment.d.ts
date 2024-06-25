import { PropertyValues } from 'lit';
import { BitcoinConnectElement } from '../BitcoinConnectElement.js';
import '../connectors/index.js';
import '../internal/bci-button.js';
import '../bc-button.js';
import { PaymentMethods } from '../../types/PaymentMethods.js';
declare const SendPayment_base: typeof BitcoinConnectElement;
export declare class SendPayment extends SendPayment_base {
    _hasCopiedInvoice: boolean;
    _isPaying: boolean;
    _showQR: boolean;
    _qr: QRCode | null;
    invoice?: string;
    paid?: boolean;
    paymentMethods: PaymentMethods;
    protected updated(changedProperties: PropertyValues): void;
    private renderHeading;
    private renderPaidState;
    private renderPayingState;
    private renderPaymentConfirmation;
    private renderWaitingForPayment;
    private renderConnectWalletMobile;
    private renderConnectWalletDesktop;
    private renderQR;
    render(): import("lit-html").TemplateResult<1> | null;
    private _onClickConnectWallet;
    private _copyAndDisplayInvoice;
    private _copyInvoice;
    private _payInvoice;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-send-payment': SendPayment;
    }
}
export {};
