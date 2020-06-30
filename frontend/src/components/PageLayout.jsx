import React from 'react';
import styled from 'styled-components';

const Content = styled.main`
    max-width: 1500px;
    margin: 80px auto 0 auto;
    padding: 0 16px;
    box-sizing: border-box;
    font-family: 'Open Sans';
    justify-content: 'center';

    h1, h2, h3, h4, h5, h6{
        font-family: 'Kaushan Script';
    }
`;

export default function PageLayout({children}){
    return (
        <>
            <Content>
                {children}
            </Content>
        </>
    )
}