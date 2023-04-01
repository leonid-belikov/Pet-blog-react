"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const articleRoute_1 = require("./articleRoute");
exports.routes = (0, express_1.Router)();
exports.routes.use(articleRoute_1.articleRoute);
