import { useEffect } from "react";

// 在一个函数里，改变传入的对象本身是不好的
export const ifFalsy = (value: any) => (value === 0 ? false : !value);

export const cleanObject = (object: object) => {
  const result = { ...object };

  Object.keys(result).forEach((key: string) => {
    // @ts-ignore
    const value = result[key];
    if (ifFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // TODO 依赖项里加上callback会造成无限循环，这个和userCallback以及userMemo又关系
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line
  }, []);
};
