export default class LivingThing {
  constructor (name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name(){
    return this._name;
  }
  set name(animal){
    if (typeof (animal) === 'string'){
      this._name = animal;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get uniCellular(){
    return this._uniCellular;
  }

  set uniCellular(isTrue) {
    if (typeof (isTrue) === 'boolean'){
      this._uniCellular = isTrue;
    } else {
      throw new TypeError('Unicellular must be a boolean');
    }
  }

  get multiCellular() {
    if (this._uniCellular === true){
      return false;
    } else {
      return true;
    }
  }

  set multiCellular(isTrue) {
    if (typeof (isTrue) !== 'boolean'){
      throw new TypeError('Multicellular must be a boolean');
    }
    if (isTrue === true){
      this._uniCellular = false;
    } else {
      this._uniCellular = true;
    }
  }

  get eukaryote() {
    return this._trueNucleus;
  }

  set eukaryote(isTrue) {
    if (typeof (isTrue) !== 'boolean'){
      throw new TypeError('Eukaryote must be a boolean');
    }
    if (isTrue === true) {
      this._trueNucleus = true;
    } else {
      this._trueNucleus = false;
    }
  }

  get prokaryote() {
    if (this._trueNucleus === true ){
      return false;
    } else {
      return true;
    }
  }

  set prokaryote(isTrue) {
    if (typeof (isTrue) !== 'boolean'){
      throw new TypeError('Prokaryote must be a boolean');
    }
    if (isTrue === true) {
      this._trueNucleus = false;
    } else {
      this._trueNucleus = true;
    }
  }

  get anaerobic() {
    return this._anaerobic;
  }

  set anaerobic(isTrue) {
    if (typeof (isTrue) !== 'boolean'){
      throw new TypeError('Anaerobic must be a boolean');
    }
    if (isTrue === true){
      this._anaerobic = true;
    } else {
      this._anaerobic = false;
    }
  }

  get aerobic() {
    if (this.anaerobic === true){
      return false;
    } else {
      return true;
    }
  }

  set aerobic(isTrue) {
    if (typeof (isTrue) !== 'boolean') {
      throw new TypeError('Aerobic must be a boolean');
    }
    if (isTrue === true){
      this._anaerobic = false;
    } else {
      this._anaerobic = true;
    }
  }

  get asexual() {
    return this._asexual;
  }

  set asexual(isTrue) {
    if (typeof (isTrue) !== 'boolean') {
      throw new TypeError('Asexual must be a boolean');
    }
    if (isTrue === true) {
      this._asexual = true;
    } else {
      this._asexual = false;
    }
  }

  get sexual() {
    if (this._asexual === false){
      return true;
    } else {
      return false;
    }
  }

  set sexual(isTrue) {
    if (typeof (isTrue) !== 'boolean') {
      throw new TypeError('Sexual must be a boolean');
    }
    if (isTrue === true) {
      this._asexual = false;
    } else {
      this._asexual = true;
    }
  }

  get mobile() {
    return this._mobile;
  }

  set mobile(isTrue) {
    if (typeof (isTrue) !== 'boolean') {
      throw new TypeError('Mobile must be a boolean');
    }
    if (isTrue === true) {
      this._mobile = true;
    } else {
      this._mobile = false;
    }
  }

  get immobile() {
    if (this._mobile === true){
      return false;
    } else {
      return true;
    }
  }

  set immobile(isTrue) {
    if (typeof (isTrue) !== 'boolean') {
      throw new TypeError('Immobile must be a boolean');
    }
    if (isTrue === true) {
      this._mobile = false;
    } else {
      this._mobile = true;
    }
  }

}
