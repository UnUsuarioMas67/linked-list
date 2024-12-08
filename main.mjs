import { LinkedList } from './linked-list.js';

const list = new LinkedList();

list.prepend('dog');
list.append('cat');
list.append('mouse');
list.append('raccoon');
list.append('crow');
list.append('owl');
list.prepend('lizard');

console.log(list.toString());
