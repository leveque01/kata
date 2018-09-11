var assert = require('assert');
var TelemetryDiagnosticControls = require('../src/telemetry-diagnostic-controls.js');

suite('Telemetry System', function () {
	suite('TelemetryDiagnosticControls', function () {
		test('CheckTransmission() should send a diagnostic message and receive a status message response', function () {
      var target = new TelemetryDiagnosticControls();
			target.checkTransmission();

			var result = target.readDiagnosticInfo();
		});
	});
});