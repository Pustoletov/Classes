import Character from './app';

export default class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.deffence = 25;
  }
}