var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const n = () => __awaiter(this, void 0, void 0, function* () {
    const container = document.getElementById("devices-container");
    container.innerHTML = "Loading...";
    const response = yield fetch("http://localhost:4000/update")
        .then((response) => response.json())
        .then((data) => data);
    container.innerHTML = "Devices Recieved";
    renderDevices(response);
});
const renderDevices = (response) => {
    const devicesList = document.getElementById("devices");
    // Remove the old devices when refresh
    while (devicesList.firstChild) {
        devicesList.removeChild(devicesList.firstChild);
    }
    // Adding new devices
    response.map((device) => {
        let tr = document.createElement("tr");
        let deviceIp = document.createElement("td");
        deviceIp.innerHTML = device.ip;
        tr.appendChild(deviceIp);
        let deviceMac = document.createElement("td");
        deviceMac.innerHTML = device.mac;
        tr.appendChild(deviceMac);
        return devicesList.appendChild(tr);
    });
};
//# sourceMappingURL=js.js.map