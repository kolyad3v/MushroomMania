"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ItemSchema = new mongoose_1.default.Schema({
    player: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'players',
    },
    name: {
        type: String,
        required: true,
    },
    latin: String,
    description: {
        type: String,
    },
    psychadelic: Boolean,
    dateCollected: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose_1.default.model('item', exports.ItemSchema);
exports.default = exports.ItemSchema;
