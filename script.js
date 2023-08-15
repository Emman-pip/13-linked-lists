const listFactory = () => {
  const obj = {};
  const append = (value) => {
    if (Object.values(obj)[0] == undefined) {
      obj.data = value;
      return;
    }
    // } else if (!Object.values(obj).length == 0) {
    let lastNode = obj.data;
    while (true) {
      if (lastNode.next == null) {
        lastNode.next = value;
        return false;
      } else {
        lastNode = lastNode.next;
      }
    }
    // }
  };
  const prepend = (value) => {
    if (Object.values(obj)[0] == undefined) {
      obj.data = value;
      return;
    }
    value.next = obj.data;
    obj.data = value;
    return;
  };

  const size = () => {
    let counter = 0;
    let node = obj.data;
    while (true) {
      if (Boolean(node.next) == true) {
        counter++;
      } else {
        counter++;
        break;
      }
      node = node.next;
    }
    return counter;
  };

  const head = () => {
    return obj.data.value;
  };

  const tail = () => {
    let lastNode = obj.data;
    while (lastNode.next) {
      if (lastNode.next === null) {
        break;
      }
      lastNode = lastNode.next;
    }
    return lastNode.value;
  };

  const at = (index) => {
    let node = obj.data;
    let nodeNumber = 0;
    while (true) {
      if (nodeNumber === index) {
        return node.value;
      } else if (node === null) {
        return "index > list.length";
      }
      node = node.next;
      nodeNumber++;
    }
  };

  const pop = () => {
    let nodeBefore = obj.data;
    while (true) {
      if (nodeBefore.next.next === null) {
        nodeBefore.next = null;
        break;
      }
      nodeBefore = nodeBefore.next;
    }
  };

  const contains = (value) => {
    let node = obj.data;
    while (true) {
      if (node === null) {
        return false;
      }
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
  };

  const find = (value) => {
    let index = 0;
    let node = obj.data;
    while (true) {
      if (value === node.value) {
        return index;
      } else if (node.next === null) {
        if (value === node.value) {
          return index;
        }
        return null;
      }
      index++;
      node = node.next;
    }
  };

  const toString = () => {
    let node = obj.data;
    let str = "";
    while (true) {
      if (node === null) {
        str += `-> (null)`;
        break;
      } else if (str === "") {
        str += `(${node.value})`;
        node = node.next;
        continue;
      }
      str += `-> (${node.value})`;
      node = node.next;
    }
    return str;
  };

  return {
    obj,
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

const nodeFactory = (value = null, next = null) => {
  return { value, next };
};

const LinkedL = listFactory();
// // lol.list.next = nodeFactory("tail");
LinkedL.append(nodeFactory("first"));
LinkedL.append(nodeFactory("second"));
LinkedL.prepend(nodeFactory("prepended1st"));
LinkedL.prepend(nodeFactory("prepended2nd"));
LinkedL.append(nodeFactory("third"));
console.log("final", LinkedL.obj);
console.log("size", LinkedL.size());
console.log("head", LinkedL.head());
console.log("tail", LinkedL.tail());
console.log(LinkedL.at(2));
console.log(LinkedL.find("first"));
console.log(LinkedL.toString());
// console.log(LinkedL.obj.data.next);
// LinkedL.append(nodeFactory("third"));
// LinkedL.append(nodeFactory("fourth"));
