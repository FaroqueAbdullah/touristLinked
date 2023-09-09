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

class UnauthorizedRequest extends GeneralError {
  constructor(message: string) {
    super(message);
    this.name = "BadRequest";
  }

  getCode() {
    return 401;
  }
}

class ForbiddenRequest extends GeneralError {
  constructor(message: string) {
    super(message);
    this.name = "BadRequest";
  }

  getCode() {
    return 403;
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

class ServerError extends GeneralError {
  constructor(message: string) {
    super(message);
    this.name = "MongoError";
  }

  getCode() {
    return 500;
  }
}

export { 
  GeneralError, 
  BadRequest,
  UnauthorizedRequest,
  ForbiddenRequest,
  NotFound, 
  ServerError 
};
