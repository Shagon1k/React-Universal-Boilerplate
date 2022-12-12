import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_LANGUAGE_CODE, ILanguageCodes } from '@services';

const initialState = {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    language: DEFAULT_LANGUAGE_CODE,
};
export interface AppInfoState {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    language: ILanguageCodes;
}

interface IDeviceInfo {
    isMobile?: boolean;
    isTablet?: boolean;
    isDesktop?: boolean;
}

const appInfoSlice = createSlice({
    name: 'appInfo',
    initialState,
    reducers: {
        // Sets provided information about device (is mobile/desktop/tablet)
        setDeviceInfo(state: AppInfoState, action: { payload: IDeviceInfo }) {
            const { payload } = action;
            state.isMobile = payload.isMobile || false;
            state.isTablet = payload.isTablet || false;
            state.isDesktop = payload.isDesktop || false;
        },
        // Sets provided language as application language
        setAppLanguage(state: AppInfoState, action: { payload: ILanguageCodes }) {
            const { payload } = action;
            state.language = payload;
        },
    },
});

export const { setDeviceInfo, setAppLanguage } = appInfoSlice.actions;
export default appInfoSlice.reducer;
