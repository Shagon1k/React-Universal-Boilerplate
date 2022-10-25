import { type EnhancedStore as IEnhancedStore } from '@reduxjs/toolkit';
import { type IServices } from '@services';

export interface ICreateAppStoreOptions {
    initialState?: object;
    isServer: boolean; // whether Store is created on Server side or not
    services: IServices;
}

export interface ICreateAppStore {
    (object: ICreateAppStoreOptions): Promise<IEnhancedStore>;
}
