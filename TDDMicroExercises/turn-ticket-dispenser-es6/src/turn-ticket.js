class TurnTicket {
  constructor(turnNumber) {
    this._turnNumber = turnNumber;
  }

  turnNumber() {
    return this._turnNumber;
  }
}

export {
  TurnTicket,
};
