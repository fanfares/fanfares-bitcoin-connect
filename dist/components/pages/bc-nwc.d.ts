import { BitcoinConnectElement } from '../BitcoinConnectElement';
import '../internal/bci-button';
declare const NWCPage_base: typeof BitcoinConnectElement;
export declare class NWCPage extends NWCPage_base {
    private _nwcUrl;
    render(): import("lit-html").TemplateResult<1>;
    private nwcUrlChanged;
    private onConnect;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-nwc': NWCPage;
    }
}
export {};
