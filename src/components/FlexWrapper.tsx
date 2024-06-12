
import styled from 'styled-components';

type FlexWrapperPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string,
    gap?: string,
    grow?: string


}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "flex-start"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    flex-grow: ${props => props.grow || "0"};
    gap: ${props => props.gap || "0"};
    height: 100%;

    //border: 1px solid blue;
    
`