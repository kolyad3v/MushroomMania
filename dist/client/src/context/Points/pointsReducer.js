"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const { ADD_POINTS, RESET } = types_1.PointsActions;
const pointsReducer = (state, action) => {
    switch (action.type) {
        case ADD_POINTS:
            return Object.assign(Object.assign({}, state), { count: state.count + action.payload });
        case RESET:
            return Object.assign(Object.assign({}, state), { count: 0 });
        default:
            throw new Error(`Unsupported type of : ${action.type}`);
    }
};
exports.default = pointsReducer;
