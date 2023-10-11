"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const config_1 = __importDefault(require("config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, res, next) => {
    // get token from header
    const token = req.header('x-auth-token');
    // check if not token
    if (!token) {
        return res.status(401).json({ msg: ' no token, auth denied' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.get('jwtSecret'));
        //@ts-ignore
        req.player = decoded.player;
        next();
    }
    catch (err) {
        res.status(401).json({ msg: 'unauthorised access, token not valid ' });
    }
};
exports.auth = auth;
