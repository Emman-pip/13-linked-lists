const listFactory = (list = {}) => {
  return { list };
};

const nodeFactory = (value = null, nextNode = null) => {
  return { value, nextNode };
};

const lol = listFactory();

lol.list.value = "haha";

console.log(lol);
