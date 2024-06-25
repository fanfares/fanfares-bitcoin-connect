import { BitcoinConnectElement } from '../BitcoinConnectElement';
import '../internal/bci-button';
import '../internal/bci-connecting';
import '../bc-modal-header';
import '../bc-router-outlet';
import { PaymentMethods } from '../../types/PaymentMethods';
declare const SendPaymentFlow_base: typeof BitcoinConnectElement;
export declare class SendPaymentFlow extends SendPaymentFlow_base {
    static styles: import("lit").CSSResult[];
    closable?: boolean;
    invoice?: string;
    paymentMethods: PaymentMethods;
    paid?: boolean;
    _showConnect: boolean;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    private _onClickConnectWallet;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-payment': SendPaymentFlow;
    }
}
export {};
