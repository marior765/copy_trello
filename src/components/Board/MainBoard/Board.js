import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../../Utilits/Style';

export const Text = styled.h3`
    color: white;
`

const Board = (props) => {
    return (
        <Wrapper onClick={props.clicked}>
            <Text>Create a new board...</Text>
        </Wrapper>
    )
}

export default Board;