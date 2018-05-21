import React from 'react';
import React-Dom from 'react-dom';

var MyButton = function(props) {
  var items = props.items;
  var itemHtml = items.map(function (listItem, i) {
    return <li key={i}>{listItem}</li>;
  });

    return <div>
    <button onClick={props.onClick}>New Item</button>
  </div>;

export default MyButton;
