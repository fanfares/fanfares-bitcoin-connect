import { BitcoinConnectElement } from '../BitcoinConnectElement';
import '../internal/bci-button';
import '../internal/bci-connecting';
import '../bc-modal-header';
import '../bc-router-outlet';
declare const ConnectFlow_base: typeof BitcoinConnectElement;
export declare class ConnectFlow extends ConnectFlow_base {
    static styles: import("lit").CSSResult[];
    closable?: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-connect': ConnectFlow;
    }
}
export {};
