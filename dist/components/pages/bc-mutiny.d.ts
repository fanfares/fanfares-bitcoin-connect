import { BitcoinConnectElement } from '../BitcoinConnectElement';
import '../internal/bci-button';
declare const MutinyPage_base: typeof BitcoinConnectElement;
export declare class MutinyPage extends MutinyPage_base {
    private _nwcUrl;
    render(): import("lit-html").TemplateResult<1>;
    private nwcUrlChanged;
    private onClickConnect;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-mutiny': MutinyPage;
    }
}
export {};
