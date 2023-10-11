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
const config_1 = __importDefault(require("config"));
const fs_1 = __importDefault(require("fs"));
const mongoose_1 = __importDefault(require("mongoose"));
const Item_1 = __importDefault(require("./models/Item"));
const db = config_1.default.get('mongoURI');
// load models
// connect to DB
mongoose_1.default.connect(db, {
// useNewUrlParser: true,
// useUnifiedTopology: true,
});
// read JSON files
const shrooms = JSON.parse(fs_1.default.readFileSync(`${__dirname}/_data/mushrooms.json`, 'utf-8'));
// import into db
const importData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@ts-ignore
        yield Item_1.default.create(shrooms);
        console.log('Data imported...');
        process.exit();
    }
    catch (err) {
        console.error(err);
    }
});
// Delete Data
const deleteData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@ts-ignore
        yield Item_1.default.deleteMany();
        console.log('Data destroyed...');
        process.exit();
    }
    catch (err) {
        console.error(err);
    }
});
if (process.argv[2] === '-i') {
    importData();
}
else if (process.argv[2] === '-d') {
    deleteData();
}
