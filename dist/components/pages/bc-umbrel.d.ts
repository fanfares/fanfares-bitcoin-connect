import { BitcoinConnectElement } from '../BitcoinConnectElement';
import '../internal/bci-button';
declare const UmbrelPage_base: typeof BitcoinConnectElement;
export declare class UmbrelPage extends UmbrelPage_base {
    render(): import("lit-html").TemplateResult<1>;
    private onConnect;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-umbrel': UmbrelPage;
    }
}
export {};
