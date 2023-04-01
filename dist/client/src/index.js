"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = require("react-dom/client");
var react_redux_1 = require("react-redux");
var store_1 = require("./app/store");
var App_1 = __importDefault(require("./App"));
require("./index.css");
var container = document.getElementById('root');
var root = (0, client_1.createRoot)(container);
root.render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store_1.store}>
      <App_1.default />
    </react_redux_1.Provider>
  </react_1.default.StrictMode>);
