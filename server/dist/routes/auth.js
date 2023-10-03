"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const auth_1 = require("../middleware/auth");
const express_validator_1 = require("express-validator");
const Player_1 = __importDefault(require("../models/Player"));
// @route       GET api/auth
// @desc        get the player which has logged in
// @access      private
//@ts-ignore
router.get('/', auth_1.auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // if the auth middleware shows a token, we will go to the database and find the player details whose match that id. return details except the password.
        //@ts-ignore
        const player = yield Player_1.default.findById(req.player.id).select('-password');
        res.json(player);
    }
    catch (err) {
        res.status(500).send({ msg: 'Server Error' });
    }
}));
// @route       POST api/auth
// @desc        authenticate player and return token
// @access      private
router.post('/', [
    (0, express_validator_1.check)('email', 'please provide a valid email').isEmail(),
    (0, express_validator_1.check)('password', 'password is required').exists(),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        //@ts-ignore
        let player = yield Player_1.default.findOne({ email });
        if (!player) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }
        // will return true or false depending on whether the passwords match
        const isMatch = yield bcryptjs_1.default.compare(password, player.password);
        if (!isMatch) {
            res.status(400).json({ msg: 'Invalid Credentials' });
        }
        const payload = {
            player: {
                id: player.id,
            },
        };
        //@ts-ignore
        jsonwebtoken_1.default.sign(payload, config_1.default.get('jwtSecret'), { expiresIn: 36000 }, (err, token) => {
            if (err) {
                throw err;
            }
            res.json({ token });
        });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
}));
module.exports = router;
