import { BitcoinConnectElement } from '../BitcoinConnectElement';
import '../internal/bci-button';
declare const HelpPage_base: typeof BitcoinConnectElement;
export declare class HelpPage extends HelpPage_base {
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-help': HelpPage;
    }
}
export {};
