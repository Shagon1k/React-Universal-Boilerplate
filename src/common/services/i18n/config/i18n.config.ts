// Note: Single source of truth map. Could be used e.g. for Change Language UI.
export const SUPPORTED_LANGUAGES_CONFIG = {
    en: {
        code: 'en',
        imageUrl: '/url/to/EnLangFlagImg',
    },
    ru: {
        code: 'ru',
        imageUrl: '/url/to/RuLangFlagImg',
    },
} as const;
export const SUPPORTED_LANGUAGES_CODES = Object.values(SUPPORTED_LANGUAGES_CONFIG).map((l) => l.code);
export const DEFAULT_LANGUAGE_CODE = SUPPORTED_LANGUAGES_CONFIG.en.code;

/**
 * Used default interpolation options.
 * To work with interpolation use "{{word}}" syntax.
 */
export const I18N_BASE_OPTIONS = {
    interpolation: {
        escapeValue: false, // Note: Not needed as React use XSS by default
    },
};
