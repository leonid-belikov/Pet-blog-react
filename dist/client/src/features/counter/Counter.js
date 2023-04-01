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
exports.Counter = void 0;
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../app/hooks");
var counterSlice_1 = require("./counterSlice");
var Counter_module_css_1 = __importDefault(require("./Counter.module.css"));
function Counter() {
    var count = (0, hooks_1.useAppSelector)(counterSlice_1.selectCount);
    var dispatch = (0, hooks_1.useAppDispatch)();
    var _a = (0, react_1.useState)('2'), incrementAmount = _a[0], setIncrementAmount = _a[1];
    var incrementValue = Number(incrementAmount) || 0;
    return (<div>
      <div className={Counter_module_css_1.default.row}>
        <button className={Counter_module_css_1.default.button} aria-label="Decrement value" onClick={function () { return dispatch((0, counterSlice_1.decrement)()); }}>
          -
        </button>
        <span className={Counter_module_css_1.default.value}>{count}</span>
        <button className={Counter_module_css_1.default.button} aria-label="Increment value" onClick={function () { return dispatch((0, counterSlice_1.increment)()); }}>
          +
        </button>
      </div>
      <div className={Counter_module_css_1.default.row}>
        <input className={Counter_module_css_1.default.textbox} aria-label="Set increment amount" value={incrementAmount} onChange={function (e) { return setIncrementAmount(e.target.value); }}/>
        <button className={Counter_module_css_1.default.button} onClick={function () { return dispatch((0, counterSlice_1.incrementByAmount)(incrementValue)); }}>
          Add Amount
        </button>
        <button className={Counter_module_css_1.default.asyncButton} onClick={function () { return dispatch((0, counterSlice_1.incrementAsync)(incrementValue)); }}>
          Add Async
        </button>
        <button className={Counter_module_css_1.default.button} onClick={function () { return dispatch((0, counterSlice_1.incrementIfOdd)(incrementValue)); }}>
          Add If Odd
        </button>
      </div>
    </div>);
}
exports.Counter = Counter;
