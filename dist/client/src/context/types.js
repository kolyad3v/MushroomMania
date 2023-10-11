"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointsActions = exports.ERROR = exports.UPDATE_HISTORY = exports.ADD_XP = exports.INCREASE_POINTS = exports.DECREASE_HEALTH = exports.BOOST_HEALTH = exports.GET_STATS = exports.AuthAction = exports.REMOVE_ALERT = exports.SET_ALERT = exports.HIDE_ITEMS = exports.CLEAR_FILTER = exports.FILTER_ITEMS = exports.ITEM_ERROR = exports.CLEAR_CURRENT = exports.SET_CURRENT = exports.DELETE_ITEM = exports.ADD_ITEM = exports.GET_ITEMS = void 0;
exports.GET_ITEMS = 'GET_ITEMS';
exports.ADD_ITEM = 'ADD_ITEM';
exports.DELETE_ITEM = 'DELETE_ITEM';
exports.SET_CURRENT = 'SET_CURRENT';
exports.CLEAR_CURRENT = 'CLEAR_CURRENT';
exports.ITEM_ERROR = 'ITEM_ERROR';
exports.FILTER_ITEMS = 'FILTER_ITEMS';
exports.CLEAR_FILTER = 'CLEAR_FILTER';
exports.HIDE_ITEMS = 'HIDE_ITEMS';
// alerts may also be useful to alert players to events ingame such as out of bounds etc
exports.SET_ALERT = 'SET_ALERT';
exports.REMOVE_ALERT = 'REMOVE_ALERT';
var AuthAction;
(function (AuthAction) {
    AuthAction[AuthAction["REGISTER_SUCCESS"] = 0] = "REGISTER_SUCCESS";
    AuthAction[AuthAction["REGISTER_FAIL"] = 1] = "REGISTER_FAIL";
    AuthAction[AuthAction["PLAYER_LOADED"] = 2] = "PLAYER_LOADED";
    AuthAction[AuthAction["AUTH_ERROR"] = 3] = "AUTH_ERROR";
    AuthAction[AuthAction["LOGIN_SUCCESS"] = 4] = "LOGIN_SUCCESS";
    AuthAction[AuthAction["LOGIN_FAIL"] = 5] = "LOGIN_FAIL";
    AuthAction[AuthAction["LOGOUT"] = 6] = "LOGOUT";
    AuthAction[AuthAction["CLEAR_ERRORS"] = 7] = "CLEAR_ERRORS";
})(AuthAction || (exports.AuthAction = AuthAction = {}));
// stats
exports.GET_STATS = 'GET_STATS';
exports.BOOST_HEALTH = 'BOOST_HEALTH';
exports.DECREASE_HEALTH = 'DECREASE_HEALTH';
exports.INCREASE_POINTS = 'INCREASE_POINTS';
exports.ADD_XP = 'ADD_XP';
exports.UPDATE_HISTORY = 'UPDATE_HISTORY';
exports.ERROR = 'ERROR';
var PointsActions;
(function (PointsActions) {
    PointsActions[PointsActions["ADD_POINTS"] = 0] = "ADD_POINTS";
    PointsActions[PointsActions["RESET"] = 1] = "RESET";
})(PointsActions || (exports.PointsActions = PointsActions = {}));
