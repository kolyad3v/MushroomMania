"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// Connect Database
(0, db_1.connectDB)();
//init middleware
app.use(express_1.default.json({}));
//Define routes
app.use('/api/players', require('./routes/players'));
app.use('/api/auth', require('./routes/auth'));
// app.use('/api/items', require('./routes/items'))
// app.use('/api/stats', require('./routes/stats'))
// serve static assets in production
app.use(express_1.default.static('client/build'));
app.get('*', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, 'client', 'build', 'index.html'));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
