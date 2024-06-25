import { Connector } from './Connector';
import { ConnectorConfig } from '../types/ConnectorConfig';
import { WebLNProvider } from '@webbtc/webln-types';
export declare class ExtensionConnector extends Connector {
    constructor(config: ConnectorConfig);
    init(): Promise<WebLNProvider>;
}
