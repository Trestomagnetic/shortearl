"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var InitializeActions = {
  initApp: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        //initialData is an arbitrary value, get whatever info you want and call it whatever
        //put your promises or callbacks here
      }
    });
  }
};

module.exports = InitializeActions;
