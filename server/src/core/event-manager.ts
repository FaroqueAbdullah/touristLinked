import EventEmitter from "events";

class EventManager {
  static instance: any;
  
  constructor() {
    if (!EventManager.instance) {
      EventManager.instance = new EventEmitter();
    }
  }

  getInstance() {
    return EventManager.instance;
  }
}

module.exports = new EventManager();
