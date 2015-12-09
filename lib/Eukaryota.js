import LivingThing from './LivingThing';

export default class Eukaryota extends LivingThing {
  constructor(name, uniCellular, asexual, mobile, heterotroph) {
    super(name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
  }

  get heterotroph() {
    return this._heterotroph;
  }

  set heterotroph(isTrue) {
    if (typeof (isTrue) !== 'boolean'){
      throw new TypeError('Heterotroph must be a boolean');
    }
    if (isTrue === true) {
      this._heterotroph = true;
    } else {
      this._heterotroph = false;
    }
  }

  get autotroph() {
    if (this._heterotroph === true){
      return false;
    } else {
      return true;
    }
  }

  set autotroph(isTrue) {
    if (typeof (isTrue) !== 'boolean'){
      throw new TypeError('Autotroph must be a boolean');
    }
    if (isTrue === true) {
      this._heterotroph = false;
    } else {
      this._heterotroph = true;
    }
  }
}