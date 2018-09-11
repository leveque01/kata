// import { assert } from 'chai';
import { Alarm } from '../src/alarm';

suite('Tire Pressure Monitoring System', () => {
  suite('Alarm', () => {
    test('Do something', () => {
      const target = new Alarm();
      target.check();
    });
  });
});
