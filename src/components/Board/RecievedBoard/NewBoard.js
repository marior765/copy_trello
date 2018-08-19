import React, { Component } from 'react';
import { WrapperList, TextWhite, ListContainer } from '../../../Utilits/Style';
import { connect } from 'react-redux';
import ActiveList from './CreateList/ActiveList';
import EmptyList from './CreateList/EmptyList';
import * as actionTypes from '../../../Actions/const';
import Listitem from './List/ListItem';
import '../MainBoard/Classes.css'

class NewBoard extends Component {

    state = {
      active: false
    }

    listActiveHandler = () => {
        this.setState({
            active: !this.state.active
        })
    }
    render() {
        const list = this.state.active
            ? <ActiveList
                clicked={this.listActiveHandler} 
                submit={this.props.CreateList}/> 
            : <EmptyList 
                clicked={this.listActiveHandler} />
        const data = this.props.item.map((el,index) => (
            <p key={index}>{el.name}</p>
        ))
        return (
        <div>
            <WrapperList>
                <TextWhite>{this.props.name}</TextWhite>
            </WrapperList>
            <ListContainer>
                {this.props.txt.map((el, index) => (
                    <Listitem 
                        nameList={el.text} 
                        data={data} 
                        createitem={this.props.CreateItem} 
                        key={index} />
                ))}
                {list}
            </ListContainer>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        txt: state.lst.list,
        item: state.lst.item,
        name: state.lst.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        CreateList: (value) => dispatch({type: actionTypes.CREATE_LIST, value: value}),
        CreateItem: (value) => dispatch({type:actionTypes.ADD_ITEM, value: value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBoard);