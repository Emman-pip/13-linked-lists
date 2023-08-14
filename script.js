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
    } else {
      const lastNode = toEnd(obj.data);
      // console.log(Object.keys(lastNode), Object.values(lastNode));
      if (lastNode.next === null) {
        lastNode.next = value;
        return;
      }
      console.log("error here");
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
// LinkedL.append(nodeFactory("third"));

console.log(LinkedL.obj);
// console.log(LinkedL.obj.data.next);
// LinkedL.append(nodeFactory("third"));
// LinkedL.append(nodeFactory("fourth"));
