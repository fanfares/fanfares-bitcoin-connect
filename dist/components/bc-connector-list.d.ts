import { TemplateResult } from 'lit';
import { BitcoinConnectElement } from './BitcoinConnectElement.js';
import './connectors/index.js';
import { ConnectorFilter } from '../types/ConnectorFilter';
declare const ConnectorList_base: typeof BitcoinConnectElement;
/**
 * A list of available connectors
 */
export declare class ConnectorList extends ConnectorList_base {
    f(x: ConnectorFilter): boolean;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bc-connector-list': ConnectorList;
    }
}
export {};
