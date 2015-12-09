import LivingThing from './LivingThing';

export default class Archea extends LivingThing {
  constructor (name) {
    super(name, true, false, true, true, false);
  }
}