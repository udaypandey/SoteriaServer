import * as model from "./model.js";

export function sampleModelData() {
    const homes = [];
    for (let cnt = 0; cnt < 4; cnt++) {
        let home = new model.Home("London House", "W1T 1HY");
        homes.push(home);

        for (let deviceCount = 0; deviceCount < 3; deviceCount++) {
            let device = new model.Light("Dining", "ON");
            home.addDevice(device);

            device = new model.Plug("Home Office", "ON");
            home.addDevice(device);

            device = new model.MotionSensor("Home Office", "ON");
            home.addDevice(device);

            device = new model.ContactSensor("Home Office", "ON");
            home.addDevice(device);

        }
    }
    return homes;
}


