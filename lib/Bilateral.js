import Animal from './Animal';

export default class Bilateral extends Animal {
  constructor(name, body) {
    super(name, 'bilateral');
    this._body = body;
  }

  get body() {
    return this._body;
  }

  set body(type) {
    if (typeof (type) !== 'string'){
      throw new TypeError('Body must be string');
    }
    this._body = type;
  }
}