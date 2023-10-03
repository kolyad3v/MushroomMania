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
const Player_1 = __importDefault(require("../models/Player"));
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const router = express_1.default.Router();
// @route       POST api/players
// @desc        register a player
// @access      public
router.post('/', [
    (0, express_validator_1.check)('username', 'name is required').not().isEmpty(),
    (0, express_validator_1.check)('email', 'please include a valid email you maggot scum').isEmail(),
    (0, express_validator_1.check)('password', 'please enter password with 6 or more characters').isLength({ min: 6 }),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;
    try {
        //@ts-ignore
        let player = yield Player_1.default.findOne({ username });
        //@ts-ignore
        let playerEmail = yield Player_1.default.findOne({ email });
        if (player) {
            return res.status(400).json({ msg: 'Username taken' });
        }
        else if (playerEmail) {
            return res.status(400).json({ msg: 'Email already exists you maggot scum' });
        }
        //@ts-ignore
        player = new Player_1.default({
            username,
            email,
            password,
        });
        // create a salt using bcrypt package
        const salt = yield bcryptjs_1.default.genSalt(10);
        // update the instance of Player above to set password to the salted hash.
        player.password = yield bcryptjs_1.default.hash(password, salt);
        // player.save returns a promise so wait for this to come back in
        yield player.save();
        // create payload to give to client
        const payload = {
            player: {
                id: player.id,
            },
        };
        try {
            let options = {
                expiresIn: 60000,
                algorithm: 'none',
            };
            const token = jsonwebtoken_1.default.sign(payload, config_1.default.get('jwtSecret'), options);
            res.json({ token });
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
}));
module.exports = router;
