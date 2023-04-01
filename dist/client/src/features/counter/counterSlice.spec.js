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
Object.defineProperty(exports, "__esModule", { value: true });
var counterSlice_1 = __importStar(require("./counterSlice"));
describe('counter reducer', function () {
    var initialState = {
        value: 3,
        status: 'idle'
    };
    it('should handle initial state', function () {
        expect((0, counterSlice_1.default)(undefined, { type: 'unknown' })).toEqual({
            value: 0,
            status: 'idle'
        });
    });
    it('should handle increment', function () {
        var actual = (0, counterSlice_1.default)(initialState, (0, counterSlice_1.increment)());
        expect(actual.value).toEqual(4);
    });
    it('should handle decrement', function () {
        var actual = (0, counterSlice_1.default)(initialState, (0, counterSlice_1.decrement)());
        expect(actual.value).toEqual(2);
    });
    it('should handle incrementByAmount', function () {
        var actual = (0, counterSlice_1.default)(initialState, (0, counterSlice_1.incrementByAmount)(2));
        expect(actual.value).toEqual(5);
    });
});
