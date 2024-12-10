import { LinkedList } from './linked-list.js';

const list = new LinkedList();

list.append('cat');
list.append('mouse');
list.append('raccoon');
list.append('crow');
list.append('owl');
list.prepend('wolf');

console.log(list.toString());
console.log(list.size);
list.removeAt(0);
console.log(list.toString());
console.log(list.size);
console.log(list.head.value);
