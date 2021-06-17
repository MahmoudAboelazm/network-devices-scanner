"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.getWelcome = void 0;
const local_devices_1 = __importDefault(require("local-devices"));
function getWelcome(req, res) {
    res.render("index", { baseUrl: process.env.BASE_URL });
}
exports.getWelcome = getWelcome;
function update(req, res) {
    local_devices_1.default().then((devices) => {
        res.send(devices);
    });
}
exports.update = update;
//# sourceMappingURL=MovieTitle.js.map