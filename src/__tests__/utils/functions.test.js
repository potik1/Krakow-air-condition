import { getAllId,
  getAllData,
  mergeObjects,
  axisDescription,
} from '../../utils/functions';

describe('test getAllId function', () => {
  test('pass', () => {
    const object = [
      {
        id: 0,
        elem: 2,
        par: 5,
      },
      {
        id: 120,
        elem: 2,
        par: 5,
      },
      {
        id: 15,
        elem: 2,
        par: 5,
      },
    ];

    const res = [0, 120, 15];
    expect(getAllId(object)).toEqual(res);
  });
});

describe('test getAllData function', () => {
  test('pass', () => {
    const inputData = [0, 1];
    const sum = a => a + 10;

    const result = [10, 11];

    expect(getAllData(sum, inputData)).toEqual(result);
  });
});


describe('test mergeObjects function', () => {
  test('Valid response', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { d: 2 };
    const res = { a: 1, b: 2, c: 3, d: 2 };

    expect(mergeObjects(obj1, obj2)).toEqual(res);
  });
});

describe('test axisDescription function', () => {
  const obj1 = {
    PM10: 'µg/m3',
    pm25: 'µg/m3',
    pm10: 'µg/m3',
    humidity: '%',
    temperature: '&#8451',
  };
  test('Valid response', () => {
    const key1 = 'pm10';
    const res1 = 'µg/m3';
    expect(axisDescription(obj1, key1)).toEqual(res1);
  });

  test('Invalid response', () => {
    const key2 = 'pm10';
    const res2 = '%';
    expect(axisDescription(obj1, key2)).not.toEqual(res2);
  });
});
