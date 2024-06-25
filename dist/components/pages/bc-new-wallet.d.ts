import { BitcoinConnectElement } from '../BitcoinConnectElement';
import '../internal/bci-button';
declare const NewWalletPage_base: typeof BitcoinConnectElement;
export declare class NewWalletPage extends NewWalletPage_base {
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-new-wallet': NewWalletPage;
    }
}
export {};
