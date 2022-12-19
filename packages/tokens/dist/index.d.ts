declare const colors: {
    readonly white: "#FFF";
    readonly black: "#000";
    readonly gray100: "#E1E1E6";
    readonly gray200: "#A9A9B2";
    readonly gray400: "#7C7C8A";
    readonly gray500: "#505059";
    readonly gray600: "#323238";
    readonly gray700: "#29292E";
    readonly gray800: "#202024";
    readonly gray900: "#121214";
    readonly ignite300: "#00B37E";
    readonly ignite500: "#00875F";
    readonly ignite700: "#015F43";
    readonly ignite900: "#00291D";
};

declare const space: {
    readonly 1: "0.25rem";
    readonly 2: "0.5rem";
    readonly 3: "0.75rem";
    readonly 4: "1rem";
    readonly 5: "1.25rem";
    readonly 6: "1.5rem";
    readonly 7: "1.75rem";
    readonly 8: "2rem";
    readonly 10: "2.5rem";
    readonly 12: "3rem";
    readonly 16: "4rem";
    readonly 20: "5rem";
    readonly 40: "10rem";
    readonly 64: "16rem";
    readonly 80: "20rem";
};

declare const radii: {
    readonly px: "1px";
    readonly xs: "4px";
    readonly sm: "6px";
    readonly md: "8px";
    readonly lg: "16px";
    readonly full: "99999px";
};

declare const fonts: {
    readonly default: "Roboto, sans-serif";
    readonly code: "monospace";
};

declare const fontSizes: {
    readonly xxs: "0.625rem";
    readonly xs: "0.75rem";
    readonly sm: "0.875rem";
    readonly md: "1rem";
    readonly lg: "1.125rem";
    readonly xl: "1.25rem";
    readonly '2xl': "1.5rem";
    readonly '4xl': "2rem";
    readonly '5xl': "2.25rem";
    readonly '6xl': "3rem";
    readonly '7xl': "4rem";
    readonly '8xl': "4.5rem";
    readonly '9xl': "6rem";
};

declare const fontWeights: {
    readonly regular: "400";
    readonly medium: "500";
    readonly bold: "700";
};

declare const lineHeights: {
    readonly shorter: "125%";
    readonly short: "140%";
    readonly base: "160%";
    readonly tall: "180%";
};

export { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space };
