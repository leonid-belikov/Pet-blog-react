"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const articleRoute_1 = require("./articleRoute");
exports.router = (0, express_1.Router)();
exports.router.use('/article', articleRoute_1.articleRoute);
