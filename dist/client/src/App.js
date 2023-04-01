"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var logo_svg_1 = __importDefault(require("./logo.svg"));
var Counter_1 = require("./features/counter/Counter");
require("./App.css");
var axios_1 = __importDefault(require("./axios"));
function App() {
    (0, react_1.useEffect)(function () {
        (0, axios_1.default)('article')
            .then(function (response) { console.log(response.data); });
    }, []);
    return (<div className="App">
      <header className="App-header">
        <img src={logo_svg_1.default} className="App-logo" alt="logo"/>
        <Counter_1.Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </a>
          <span>, </span>
          <a className="App-link" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
            Redux
          </a>
          <span>, </span>
          <a className="App-link" href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a className="App-link" href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">
            React Redux
          </a>
        </span>
      </header>
    </div>);
}
exports.default = App;
