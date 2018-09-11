class Sensor {
  //
  // The reading of the pressure value from the sensor is simulated in this implementation.
  // Because the focus of the exercise is on the other class.
  //

  static Offset() {
    return 16;
  }

  static ReadPressureSample() {
    // placeholder implementation that simulate a real sensor in a real tire
    const pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());

    return pressureTelemetryValue;
  }

  popNextPressurePsiValue() {
    const pressureTelemetryValue = Sensor.ReadPressureSample();

    return Sensor.Offset() + pressureTelemetryValue;
  }
}

export {
  Sensor,
};
