import styled from 'styled-components';
import { fadeIn, Shake } from './Animations';

export const CancelButton = styled.button`
    width: auto;
    height: 43px;
    margin: 15px -5px 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    border: none;
    background: none;
    color: white;
    font-weight: 900;
    text-shadow: 0px 0px 3px #000;
    outline: none;
    &:hover {
        transition: all 200ms ease-in-out;
        background-color: none;
        color: #00ffc5;
    }
`

export const ButtonWrapper = styled.div`
    margin: 20px 0 5px 10%;
    display: flex;
    justify-content: center;
    width: 100%;
`


export const SubmitButton = styled.button`
    width: 114px;
    height: 43px;
    margin: 15px 18px 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 250 ease-in-out;
    border: none;
    box-shadow: 0 3px 3px rgba(0,0,0,0.16), 0 3px 3px rgba(0,0,0,0.23);
    outline: none;
    &:hover {
        transition: all 250ms ease-in-out;
        color: #00BAFF;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        background-color: #dbdbdb;
    }
`

export const CloseButtonIcon = styled.img`
    width: 24px;
    height: 24px;
    padding: 5px;
    transition: all 200ms ease-in-out;
    &:hover {
        transition: all 200ms ease-in-out;
        transform: scale(1.25) rotate(4.5deg);
    }
`

export const AddButtonIcon = styled.img`
    width: 45px;
    height: 45px;
    padding: 5px;
    transition: all 200ms ease-in-out;
    &:hover {
        transition: all 200ms ease-in-out;
        transform: scale(1.25);
    }
`

export const BoardTitleInput = styled.input`
    width: 80%;
    height: 30px;
    padding: 10px;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 3px 3px rgba(0,0,0,0.16), 0 3px 3px rgba(0,0,0,0.23);
    outline: none;
`

export const Wrapper = styled.div`
    width: 345px;
    height: auto;
    margin: 20px;
    background-color: #9fe7a4;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5.5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    transition: 200ms ease-in-out;
    font-weight: 900;
    text-shadow: 0px 0px 3px #000;
    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        transition: 200ms ease-in-out;
        transform: scale(1.10);
    }
`

export const WrapperItem = styled.div`
    height: 5px;
    width: 200px;
    margin: 20px;
    background-color: #9fe7a4;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5.5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    font-weight: 900;
    text-shadow: 0px 0px 3px #000;
`

export const WrapperWhite = styled.div`
    width: 345px;
    height: auto;
    margin: 20px;
    background-color: white;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5.5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    transition: 200ms ease-in-out;
    font-weight: 900;
    text-shadow: 0px 0px 3px #000;
    text-decoration: none;
    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        transition: 200ms ease-in-out;
        transform: scale(1.10);
    }
`

export const Text = styled.h3`
    color: black;
    text-decoration: none;
`
export const TextWhite = styled.h3`
    color: white;
`

export const WrapperList = styled.div`
    width: 345px;
    height: 20px;
    margin: 20px;
    background-color: #9fe7a4;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5.5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    font-weight: 900;
    text-shadow: 0px 0px 3px #000;
`

export const ListContainer = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
`

export const ListItemWrapper = styled.div`
    display: inline-block;
    vertical-align: top;
    margin: 20px;
    background-color: rgb(255, 255, 255);
    padding: 5px 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 150ms ease-in-out;
    animation: ${fadeIn} 300ms linear;
`

export const ListItemHeader = styled.h4`
    color: #333;
    letter-spacing: 1.66;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
`

export const ListEditingModeWrapper = styled.div`
    padding: 20px 12px;
    height: 75px;
    width:250px;
    margin: 20px 20px;
    background-color: rgba(255, 255, 255, 0.45);
    display: flex;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

export const Active = styled.div`
    border: 2px dotted;
    border-raduis: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background-color: green;
    color: white;
`