/* eslint-disable class-methods-use-this */
// eslint-disable-next-line max-classes-per-file
class GeneralError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }

  getCode() {
    return 400;
  }
}

class BadRequest extends GeneralError {
  constructor(message: string) {
    super(message);
    this.name = "BadRequest";
  }

  getCode() {
    return 400;
  }
}

class NotFound extends GeneralError {
  constructor(message: string) {
    super(message);
    this.name = "NotFound";
  }

  getCode() {
    return 404;
  }
}

class MongoError extends GeneralError {
  constructor(message: string) {
    super(message);
    this.name = "MongoError";
  }

  getCode() {
    return 400;
  }
}

export { GeneralError, BadRequest, NotFound, MongoError };
