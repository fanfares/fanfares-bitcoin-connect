import { InternalElement } from './InternalElement';
declare const Button_base: typeof InternalElement;
export declare class Button extends Button_base {
    variant: 'primary' | 'secondary' | 'neutral';
    ghost: boolean;
    block: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bci-button': Button;
    }
}
export {};
