import EventEmitter from 'events';

class EventManager {
  static instance: NodeJS.EventEmitter;

  constructor() {
    if (!EventManager.instance) {
      EventManager.instance = new EventEmitter();
    }
  }

  getInstance() {
    return EventManager.instance;
  }
}

const eventManager = new EventManager();

export default eventManager;
