import Eukaryota from './Eukaryota';

export default class Animal extends Eukaryota {
  constructor(name, symmetry){
    super(name, false, false, true, true);
    this._symmetry = symmetry;
  }

  get symmetry() {
    return this._symmetry;
  }

  set symmetry(type) {
    if (typeof (type) !== 'string'){
      throw new TypeError('Symmetry must be a string');
    }
    this._symmetry = type;
  }
}