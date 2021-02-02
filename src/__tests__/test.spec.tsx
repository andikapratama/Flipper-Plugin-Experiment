// (1)
import {TestUtils} from 'flipper-plugin';
// (2)
import * as MammalsPlugin from '..';

test('It can store rows', () => {
  // (3)
  const {instance, sendEvent} = TestUtils.startPlugin(MammalsPlugin);

  expect(instance.rows.get()).toEqual({});
  expect(instance.selectedID.get()).toBeNull();

  // (4)
  sendEvent('newRow', {
    id: 1,
    title: 'Dolphin',
    url: 'http://dolphin.png',
  });
  sendEvent('newRow', {
    id: 2,
    title: 'Turtle',
    url: 'http://turtle.png',
  });

  // (5)
  expect(instance.rows.get()).toMatchInlineSnapshot(`
    Object {
      "1": Object {
        "id": 1,
        "title": "Dolphin",
        "url": "http://dolphin.png",
      },
      "2": Object {
        "id": 2,
        "title": "Turtle",
        "url": "http://turtle.png",
      },
    }
  `);
});