export class FontFaceObject {
    constructor(translatedData: any, { disableFontFace, ignoreErrors, onUnsupportedFeature, fontRegistry, }: {
        disableFontFace?: boolean | undefined;
        ignoreErrors?: boolean | undefined;
        onUnsupportedFeature: any;
        fontRegistry?: null | undefined;
    });
    compiledGlyphs: any;
    disableFontFace: boolean;
    ignoreErrors: boolean;
    _onUnsupportedFeature: any;
    fontRegistry: any;
    createNativeFontFace(): FontFace | null;
    createFontFaceRule(): string | null;
    getPathGenerator(objs: any, character: any): any;
}
export let FontLoader: any;
