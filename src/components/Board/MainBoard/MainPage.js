import React, { Component } from 'react';
import Board from './Board';
import Activeboard from './ActiveBoard';
import Receive from './Recieve';
import { connect } from 'react-redux';
import * as actionTypes from '../../../Actions/const';
import './Classes.css';

class Mainpage extends Component {
    state = {
        active: false
    }

    activeBoardHandler = () => {
        this.setState({
            active: !this.state.active
        })
    }
    render () {
        return (
        <div className='main'>
            <div>
                {this.state.active 
                    ? <Activeboard 
                        disEmpty={this.props.disEmpty} 
                        boardAdd={this.props.addBoard} 
                        clicked={this.activeBoardHandler} /> 
                    : <Board 
                        clicked={this.activeBoardHandler} />}
            </div>
            {this.props.brd.map(brd => (
                <Receive
                 key={brd.id}
                 id={brd.id}
                 text={brd.text}
                 removeBoard={() => this.props.removeBoard(brd.id)} />
            ))}
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        brd: state.brd.board
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addBoard: (value) => dispatch({type: actionTypes.ADD_BOARD, text: value}),
        removeBoard: (id) => dispatch({type: actionTypes.REMOVE_BOARD, brdID: id}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Mainpage);