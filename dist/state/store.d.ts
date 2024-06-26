import { ConnectorConfig } from '../types/ConnectorConfig';
import { Connector } from '../connectors/Connector';
import { Route } from '../components/routes';
import { GetInfoResponse, WebLNMethod, WebLNProvider } from '@webbtc/webln-types';
import { BitcoinConnectConfig } from '../types/BitcoinConnectConfig';
interface Store {
    readonly route: Route;
    readonly routeHistory: Route[];
    readonly connected: boolean;
    readonly connecting: boolean;
    readonly connectorName: string | undefined;
    readonly error: string | undefined;
    readonly modalOpen: boolean;
    readonly provider: WebLNProvider | undefined;
    readonly currency: string | undefined;
    readonly connector: Connector | undefined;
    readonly connectorConfig: ConnectorConfig | undefined;
    readonly bitcoinConnectConfig: BitcoinConnectConfig;
    readonly info: GetInfoResponse | undefined;
    connect(config: ConnectorConfig): void;
    disconnect(): void;
    pushRoute(route: Route): void;
    popRoute(): void;
    setBitcoinConnectConfig(bitcoinConnectConfig: BitcoinConnectConfig): void;
    setError(error: string | undefined): void;
    clearRouteHistory(): void;
    setModalOpen(modalOpen: boolean): void;
    setCurrency(currency: string | undefined): void;
    supports(weblnMethod: WebLNMethod): boolean;
}
declare const store: import("zustand/vanilla").StoreApi<Store>;
export default store;
