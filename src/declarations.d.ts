// TS Style files extensions support
declare module '*.scss';
declare module '*.css';

declare module '*.svg?url' {
    // declaration of import SVG to use as url (e.g. in <img> tag)
    const content: string;
    export default content;
}
declare module '*.svg' {
    // declaration of import SVG to use as React Component (e.g. <SVG />)
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.png' {
    // declaration of import PNG to use as url (e.g. in <img> tag)
    const content: string;
    export default content;
}

// TS NPM modules declarations
declare module 'uuid';

// TS App Globals support
declare const WITH_SSR: boolean;
declare const WITH_PWA: boolean;
declare const IS_SERVER: boolean;
declare const IS_CLIENT: boolean;

// Window fields enhancement
interface Window {
    __PRELOADED_STATE__?: object;
}
