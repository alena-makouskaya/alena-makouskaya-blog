import { table } from "console";

export const theme = {
    colors: {
        lightTheme: {
            background: {
                backgroundLight: "#ffffff",
                backgroundDark: "#181818",
            } ,
            border: "#F2F2F2",
            text: {
                textPrimary: "#181818",
                textSecondary: "#474747",
                textTertiary: "#828282",
                textOnColor: "#ffffff",
            },
            icon: {
                icontPrimary: "#181818",
                iconSecondary: "#474747",
                iconTertiary: "#828282",
            },

        },
        darkTheme: {
            border: "#525252",

        }
    },

    media: {
        large: "screen and (max-width: 992px)",
        medium: "screen and (max-width: 768px)",
        small: "screen and (max-width: 576px)",
    }
}