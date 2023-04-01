"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = require("./router");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.SERVER_PORT;
app.use('/api', router_1.router);
app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});
