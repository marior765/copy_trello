import React, { Component } from 'react';
import './Listitem.css';
import { ListItemWrapper,
         ListItemHeader,
         BoardTitleInput,
         ListContainer, } from '../../../../Utilits/Style';

class Listitem extends Component {
    state = {
        value: '',
        active: true
    }

    valueHandler = e => {
        this.setState({value: e.target.value})
    }

    activeHandler = () => {
        this.setState({active: !this.state.active})
    }

    render() {
        const Active = {
            marginTop: '5%',
            borderRadius: '10px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
            backgroundColor: '#33EF8B',
            fontSize: '30px',
            fontWeight: 'bold',
            wordWrap: 'wrap',
        }
        const NonActive = {
            marginTop: '5%',
            borderRadius: '10px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
            backgroundColor: '#C6D3CC',
            textDecoration: 'line-through',
            fontSize: '30px',
            fontWeight: 'bold',
            wordWrap: 'wrap'
        }
        return(
        <ListItemWrapper>
            <ListItemHeader>{this.props.nameList}</ListItemHeader>
            <hr />
            <ListContainer>
                <BoardTitleInput 
                    type='text' value={this.state.value} 
                    onChange={this.valueHandler} />
                <button 
                    onClick={() => this.props.createitem(this.state.value)} 
                    src={require('../../../../Assets/PlusButton.svg')} />
            </ListContainer>
            {this.props.data.map(el => (
                <div 
                    onClick={this.activeHandler}
                     style={this.state.active ? Active : NonActive}>
                    {el}
                </div>
            ))}
        </ListItemWrapper>
        )
    }
}

export default Listitem;