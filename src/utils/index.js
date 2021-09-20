// 在一个函数里，改变传入的对象本身是不好的
export const ifFalsy = (value) => (value === 0 ? false : !value);

export const cleanObject = (object) => {
  const result = { ...object };

  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (ifFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
