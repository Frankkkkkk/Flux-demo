import AppDispatcher from 'AppDispatcher';
import React from 'react';
import React-Dom from 'react-dom';

var ButtonActions = {
  addNewItem: function(text){
    AppDispatcher.dispatch({
      actionType:'ADD_NEW_ITEM',
      text:text
    });
  },
};
