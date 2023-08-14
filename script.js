function toEnd(data) {
  console.log("data", data);
  if (data == undefined) {
    console.log("undefined data");
  } else if (data.next === null) {
    console.log("data is null");
    // console.log("data", data);
    return data;
  } else if (Boolean(data.next) === true) {
    console.log("i read the next node");
    toEnd(data.next);
  }
}

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

  return { obj, append, prepend, size };
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
console.log(LinkedL.size());
// console.log(LinkedL.obj.data.next);
// LinkedL.append(nodeFactory("third"));
// LinkedL.append(nodeFactory("fourth"));
