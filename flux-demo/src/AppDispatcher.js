import AppDispatcher from 'AppDispatcher';
import React from 'react';
import React-Dom from 'react-dom';
import ListStore from 'ListStore';

var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.register(function(action){
  switch(action.actionType){
    case 'ADD_NEW_ITEM':
    ListStore.addNewItemHandler(action.text);
    ListStore.emitChange();
    break;
    default;
  }
})

export default AppDispatcher;
