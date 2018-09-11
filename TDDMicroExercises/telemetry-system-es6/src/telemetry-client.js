class TelemetryClient {
  constructor() {
    this._onlineStatus = false;
    this._diagnosticMessageJustSent = false;
  }

  static diagnosticMessage() {
    return 'AT#UD';
  }

  static _randomNumberBetween(min, max) {
    const delta = max + 1 - min;
    return min + Math.floor(delta * Math.random());
  }

  _connectionEventsSimulator(min, max) {
    return TelemetryClient._randomNumberBetween(min, max);
  }

  _randomMessageSimulator(min, max) {
    return TelemetryClient._randomNumberBetween(min, max);
  }

  onlineStatus() {
    return this._onlineStatus;
  }

  connect(telemetryServerConnectionString) {
    if (typeof (telemetryServerConnectionString) === 'undefined' || telemetryServerConnectionString === '') {
      throw 'missing telemetryServerConnectionString parameter';
    }

    // Fake the connection with 20% chances of success
    const success = this._connectionEventsSimulator(1, 10) <= 2;

    this._onlineStatus = success;
  }

  disconnect() {
    this._onlineStatus = false;
  }

  send(message) {
    if (typeof message === 'undefined' || message === '') {
      throw 'missing message parameter';
    }

    // The simulation of Send() actually just remember
    // if the last message sent was a diagnostic message.
    // This information will be used to simulate the Receive().
    // Indeed there is no real server listening.
    if (message === TelemetryClient.diagnosticMessage()) {
      this._diagnosticMessageJustSent = true;
    } else {
      this._diagnosticMessageJustSent = false;
    }
  }

  receive() {
    let message;

    if (this._diagnosticMessageJustSent) {
      // Simulate the reception of the diagnostic message
      message = 'LAST TX rate................ 100 MBPS\r\n'
                    + 'HIGHEST TX rate............. 100 MBPS\r\n'
                    + 'LAST RX rate................ 100 MBPS\r\n'
                    + 'HIGHEST RX rate............. 100 MBPS\r\n'
                    + 'BIT RATE.................... 100000000\r\n'
                    + 'WORD LEN.................... 16\r\n'
                    + 'WORD/FRAME.................. 511\r\n'
                    + 'BITS/FRAME.................. 8192\r\n'
                    + 'MODULATION TYPE............. PCM/FM\r\n'
                    + 'TX Digital Los.............. 0.75\r\n'
                    + 'RX Digital Los.............. 0.10\r\n'
                    + 'BEP Test.................... -5\r\n'
                    + 'Local Rtrn Count............ 00\r\n'
                    + 'Remote Rtrn Count........... 00';

      this._diagnosticMessageJustSent = false;
    } else {
      // Simulate the reception of a response message returning a random message.
      message = '';
      const messageLength = this._randomMessageSimulator(50, 110);
      for (let i = messageLength; i >= 0; --i) {
        message += this._randomMessageSimulator(40, 126).toString();
      }
    }

    return message;
  }
}

export {
  TelemetryClient,
};
