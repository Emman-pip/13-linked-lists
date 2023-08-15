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

  return { obj, append, prepend, size, head, tail, at };
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
// console.log(LinkedL.obj.data.next);
// LinkedL.append(nodeFactory("third"));
// LinkedL.append(nodeFactory("fourth"));
