import React, { Component } from 'react';
import { ListEditingModeWrapper, CloseButtonIcon, AddButtonIcon, BoardTitleInput } from '../../../../Utilits/Style';

class ActiveList extends Component {
    state = {
        value: ''
    }

    valueHandler = (event) => {
        this.setState({value: event.target.value})
    }

    deleteValue = () => {
        this.setState({value: ''})
    }

    render() {
        return (
        <ListEditingModeWrapper>
                <AddButtonIcon onClick={this.state.value === ''
                ? null
                : () => this.props.submit(this.state.value)} 
                    src={require('../../../../Assets/PlusButton.svg')} />
                    <BoardTitleInput
                        type="text" 
                        value={this.state.value}
                        onChange={this.valueHandler} 
                        placeholder="Add a list..."
                        /> 
                        <CloseButtonIcon 
                            onClick={this.props.clicked} 
                            src={require('../../../../Assets/Iconclose.svg')} />
        </ListEditingModeWrapper>
        )
    }
}

export default ActiveList;