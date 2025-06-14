interface PlayerInterface {
  id: number;
  name: string;
  life: number;
  classType: Class;
  enemy: Boolean;
}

export class Player implements PlayerInterface {
  constructor(
    public id: number,
    public name: string,
    public life: number,
    public classType: Class,
    public enemy: Boolean
  ) {}
}

interface Class {
  description: string;
  url: string;
  ancho: number;
  numSteps: number;
  abilities: Ability[];
}

interface Ability {
  name: string;
  damage: number;
}

class Wizard implements Class {
  description: string = 'Uses magic to defeat enemies';
  url: string = 'src/assets/Samurai/Idle.png';
  ancho: number = 768;
  numSteps: number = 6;
  abilities: Ability[] = [
    { name: 'Fireball', damage: 7 },
    { name: 'Ice Bolt', damage: 3 },
  ];
}

class Warrior implements Class {
  description: string = 'Fights enemies with melee weapons and bows';
  url: string = 'src/assets/Knight_1/Idle.png';
  ancho: number = 512;
  numSteps: number = 4;
  abilities: Ability[] = [
    { name: 'Sword Strike', damage: 6 },
    { name: 'Arrow Shot', damage: 4 },
  ];
}

export const classes: Class[] = [new Wizard(), new Warrior()];
