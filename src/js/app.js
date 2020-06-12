// TODO: write your code here
import { Zombie } from './Zombie';
import { Undead } from './Undead';
import { Magician } from './Magician';
import { Swordsman } from './Swordsman';
import { Team } from './Team';
import { ErrorRepository } from './ErrorRepository';

const tank = new Zombie('Nemezida');
const secondTank = new Swordsman('Richard Lion Heart');
const defender = new Undead('Baba Yaga');
const caster = new Magician('Merlin');
const err = new ErrorRepository();
const dreamTeam = new Team();

dreamTeam.addAll(tank, secondTank, defender, secondTank, caster);
dreamTeam.add('jdjdjdjdjd');


console.log(err);
