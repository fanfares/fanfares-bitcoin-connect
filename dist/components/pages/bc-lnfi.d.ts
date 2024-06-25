import { BitcoinConnectElement } from '../BitcoinConnectElement';
import '../internal/bci-button';
declare const LnfiNWCPage_base: typeof BitcoinConnectElement;
export declare class LnfiNWCPage extends LnfiNWCPage_base {
    private _nwcUrl;
    render(): import("lit-html").TemplateResult<1>;
    private nwcUrlChanged;
    private onConnect;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-lnfi': LnfiNWCPage;
    }
}
export {};
