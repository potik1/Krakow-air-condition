export function getAllId(arrayObject) {
  const arrId = [];
  arrayObject.map(someObject => arrId.push(someObject.id));
  return arrId;
}

export function getAllData(func, arrayData) {
  return arrayData.map(item => func(item));
}

export function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

export function axisDescription(object, key) {
  let result = null;
  if (key in object) {
    result = object[key];
  }
  return result;
}
