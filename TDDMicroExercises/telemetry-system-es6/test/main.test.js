// import { assert } from 'chai';
import { TelemetryDiagnosticControls } from '../src/telemetry-diagnostic-controls';

suite('Telemetry System', () => {
  suite('TelemetryDiagnosticControls', () => {
    test('CheckTransmission() should send a diagnostic message and receive a status message response', () => {
      const target = new TelemetryDiagnosticControls();
      target.checkTransmission();

      const result = target.readDiagnosticInfo();
    });
  });
});
