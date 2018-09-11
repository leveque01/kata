var assert = require('assert');
var Alarm = require('../src/alarm.js');

suite('Tyre Pressure Monitoring System', function () {
	suite('Alarm', function () {
		test('Do something', function () {
      var target = new Alarm();
      target.check();
		});
	});
});