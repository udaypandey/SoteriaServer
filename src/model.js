
import uuid from "uuid/v4";

export class Home {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.id = uuid();

        this.devices = [];
        this.events = [];
    }

    addDevice(device) {
        this.devices.push(device);
    }

    addEvent(event) {
        this.events.push(event);
    }
}

export class Device {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.id = uuid();
    }
}

export class Light extends Device {
    constructor(name, state) {
        super(name, "Light");
        this.state = state;
    }
}

export class Plug extends Device {
    constructor(name, state) {
        super(name, "Plug");
        this.state = state;
    }
}

export class MotionSensor extends Device {
    constructor(name, state) {
        super(name, "MotionSensor");
        this.state = state;
    }
}

export class ContactSensor extends Device {
    constructor(name, state) {
        super(name, "ContactSensor");
        this.state = state;
    }
}

export class Hub extends Device {
    constructor(name, state) {
        super(name, "Hub");
        this.state = state;
    }
}

export class Event {
    constructor(eventName, device) {
        this.name = name;
        this.device = device;
    }
}

