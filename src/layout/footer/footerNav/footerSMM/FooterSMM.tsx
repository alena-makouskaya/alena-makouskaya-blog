import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme';

export const FooterSMM = () => {
    return (
        <StyledFooterSMM>
            <Icon iconId='linkedin' width='24px' height='24px' viewBox='0 0 24 24'/>
            <Icon iconId='medium' width='24px' height='24px' viewBox='0 0 24 24'/>
            
        </StyledFooterSMM>
    );
};

const StyledFooterSMM = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 24px;

    padding: 16px 0;


`