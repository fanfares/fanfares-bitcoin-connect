import { BitcoinConnectElement } from './BitcoinConnectElement';
import './bc-router-outlet.js';
import './internal/bci-connecting';
import './bc-modal-header';
declare const Modal_base: typeof BitcoinConnectElement;
export declare class Modal extends Modal_base {
    render(): import("lit-html").TemplateResult<1>;
    private _handleClose;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-modal': Modal;
    }
}
export {};
