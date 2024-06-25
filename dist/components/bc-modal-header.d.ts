import { BitcoinConnectElement } from './BitcoinConnectElement';
declare const ModalHeader_base: typeof BitcoinConnectElement;
export declare class ModalHeader extends ModalHeader_base {
    closable?: boolean;
    showHelp?: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private _handleClose;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-modal-header': ModalHeader;
    }
}
export {};
