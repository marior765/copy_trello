import React, {Component} from 'react';
import { Text } from './Board';
import { connect } from 'react-redux';
import * as actionTypes from '../../../Actions/const';
import { CloseButtonIcon, SubmitButton, CancelButton, ButtonWrapper, BoardTitleInput, Wrapper } from '../../../Utilits/Style';

const textColor = {
    color: 'red',
    width: '99%'
}
const textSize = {
    fontSize: '12px'
}

class Activeboard extends Component {
    state = {
        value: ''
    }

    valueHandler = (event) => {
        this.setState({value: event.target.value})
    }

    render() {
        return(
        <Wrapper>
            <ButtonWrapper>
                <Text>Creating a board</Text>
                <CloseButtonIcon onClick={this.props.clicked} src={require('../../../Assets/Iconclose.svg')} />
            </ButtonWrapper>
            <hr style={textColor} />
            <Text style={textSize}>What shall we call the board?</Text>
            <BoardTitleInput
             type='text'
             placeholder='Print your trello...'
             value={this.state.value}
             onChange={this.valueHandler} />
             <p style={textColor}>{this.props.str[0]}</p>
             <ButtonWrapper>
                <CancelButton onClick={this.props.clicked}>CANCEL</CancelButton>
                <SubmitButton onClick={this.state.value === ''
                ? () => this.props.disEmpty()
                : () => this.props.boardAdd(this.state.value)}>CREATE</SubmitButton>
             </ButtonWrapper>
        </Wrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        str: state.brd.string
    };
};

const mapDispatchToProps = dispatch => {
    return {
        disEmpty: () => dispatch({type:actionTypes.EMPTY_FIELD, value:'Please, enter some trello!'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Activeboard);