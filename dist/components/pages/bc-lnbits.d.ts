import { BitcoinConnectElement } from '../BitcoinConnectElement';
import '../internal/bci-button';
declare const lnbitsPage_base: typeof BitcoinConnectElement;
export declare class lnbitsPage extends lnbitsPage_base {
    private _lnbitsAdminKey;
    private _lnbitsUrl;
    render(): import("lit-html").TemplateResult<1>;
    private _lnbitsAdminKeyChanged;
    private _lnbitsUrlChanged;
    private onConnect;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-lnbits': lnbitsPage;
    }
}
export {};
