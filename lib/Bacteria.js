import LivingThing from './LivingThing';

export default class Bacteria extends LivingThing {
  constructor (name) {
    super(name, true, false, false, true, false);
  }
}