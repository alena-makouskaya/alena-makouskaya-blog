import { theme } from './Theme';

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: string,
    Fmin?: number,
    Fmax?: number,

}

export const font = ({family, weight, color,lineHeight, Fmin, Fmax}: FontPropsType ) => `
    font-family: ${family || "Inter"};
    font-weight: ${weight || 400};
    color: ${color || `${theme.colors.lightTheme.text.textPrimary}`};
    line-height: ${lineHeight || "24px"};
    font-size: calc( (100vw - 360px)/(1280 - 480) * (${Fmax} - ${Fmin} ) + ${Fmax}px);


`