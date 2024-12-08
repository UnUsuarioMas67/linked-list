class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  #nodes = [];

  append(value) {
    const oldTail = this.tail;
    const newNode = new Node(value, null);
    this.#nodes.push(newNode);

    if (oldTail !== undefined) {
      oldTail.nextNode = newNode;
    }
  }

  prepend(value) {
    this.#nodes.unshift(new Node(value, this.head !== undefined ? this.head : null));
  }

  get size() {
    return this.#nodes.length;
  }

  get head() {
    return this.#nodes[0];
  }

  get tail() {
    return this.#nodes[this.#nodes.length - 1];
  }

  at(index) {
    return this.#nodes[index];
  }

  pop() {
    this.#nodes.pop();
    this.tail.nextNode = null;
  }

  contains(value) {
    return this.#nodes.some((node) => node.value === value);
  }

  find(value) {
    return this.#nodes.findIndex((node) => node.value === value);
  }

  insertAt(value, index) {
    const newNode = new Node(value, null);

    this.#nodes.splice(index, 0, newNode);

    if (index < this.#nodes.length - 1) {
      newNode.nextNode = this.#nodes[index + 1];
    }

    if (index > 0) {
      this.#nodes[index - 1].nextNode = newNode;
    }
  }

  removeAt(index) {
    this.#nodes.splice(index, 1);

    if (index > 0) {
      this.#nodes[index - 1].nextNode = this.#nodes[index];
    }
  }

  toString() {
    let output = '';
    for (let node of this.#nodes) {
      output += `( ${node.value} ) -> `;
    }
    output += 'null';

    return output;
  }
}

export { LinkedList };
