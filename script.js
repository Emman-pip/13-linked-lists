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

  //TODO: insertAt(value, index), removeAt(index)

  const insertAt = (value, index) => {
    //iterate through the list
    let node = obj.data;
    let nodeNumber = 0;
    while (true) {
      if (nodeNumber === index - 1) {
        value.next = JSON.parse(JSON.stringify(node.next));
        node.next = JSON.parse(JSON.stringify(value));
        return "value appended";
      } else if (node === null) {
        console.error("ERROR:  index > list.length");
        return;
      }
      node = node.next;
      nodeNumber++;
    }
  };

  const removeAt = (index) => {
    let node = obj.data;
    let nodeNumber = 0;
    while (true) {
      if (nodeNumber === index - 1 || index === 0) {
        if (node.next === null) {
          node.next = null;
          return `Removed value at ${index}`;
        } else if (index === 0) {
          obj.data = node.next;
        }
        node.next = node.next.next;
        return `Removed value at ${index}`;
      } else if (node === null) {
        console.error("ERROR:  index not found");
        return;
      }
      node = node.next;
      nodeNumber++;
    }
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
    insertAt,
    removeAt,
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

// console.log("final", LinkedL.obj);
// console.log("size", LinkedL.size());
// console.log("head", LinkedL.head());
// console.log("tail", LinkedL.tail());
// console.log(LinkedL.at(2));
// console.log(LinkedL.find("first"));
// console.log(LinkedL.toString());
// console.log(LinkedL.obj.data.next);
// LinkedL.append(nodeFactory("third"));
// LinkedL.append(nodeFactory("fourth"));
// console.log("insertAt", LinkedL.insertAt(nodeFactory("jaojn"), 2));
// console.log("size", LinkedL.size());
// console.log(LinkedL.obj);
// console.log("size", LinkedL.size());

console.log("size", LinkedL.size());
console.log(LinkedL.obj);

document.addEventListener("click", () => {
  console.log(LinkedL.removeAt(1));
  console.log("size", LinkedL.size());
  console.log(LinkedL.obj);
});
