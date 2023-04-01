"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleRoute = void 0;
const express_1 = require("express");
exports.articleRoute = (0, express_1.Router)();
exports.articleRoute.get('/api/article', (req, res) => {
    res.send('GET articles');
});
