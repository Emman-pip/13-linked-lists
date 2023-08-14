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
      console.log("appended head");
      obj.data = value;
    } else if (!Object.values(obj).length == 0) {
      console.log(`append ${value}`);
      console.log("obj", obj);
      let lastNode = obj.data;
      while (true) {
        if (lastNode.next == null) {
          lastNode.next = value;
          return false;
        } else {
          lastNode = lastNode.next;
        }
      }
    }
  };
  return { obj, append };
};

const nodeFactory = (value = null, next = null) => {
  return { value, next };
};

const LinkedL = listFactory();
// // lol.list.next = nodeFactory("tail");
LinkedL.append(nodeFactory("first"));
LinkedL.append(nodeFactory("second"));
LinkedL.append(nodeFactory("third"));
LinkedL.append(nodeFactory("fourth"));
LinkedL.append(nodeFactory("fifth"));
console.log("final", LinkedL.obj);
// console.log(LinkedL.obj.data.next);
// LinkedL.append(nodeFactory("third"));
// LinkedL.append(nodeFactory("fourth"));
