import React from 'react';
//import React-Dom from 'react-dom';
import MyButton from './MyButton';
import ListStore from './ListStore'
import MyButtonActions from './ButtonActions'

class MyButtonController extends React.Component{
  getInitialState(){
    return(
      items: ListStore.getAll();
    );
  }

  createNewItem(event){
    ButtonActions.addNewItem('new item');
  }

  componentDidMount(){
    ListStore.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
  ListStore.removeChangeListener(this._onChange);
  }

  _onChange(){
    this.setState({
      items:ListStore.getAll()
    });
  }

  render(){
    return (
      <MyButton items={this.state.items}
        onClick={this.createNewItem}/>
    );
  }
}

export default MyButtonController;
