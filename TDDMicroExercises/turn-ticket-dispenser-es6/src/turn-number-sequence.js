const TurnNumberSequence = {
  _turnNumber: 1,
  getNextTurnNumber: () => TurnNumberSequence._turnNumber + 1,
};

export {
  TurnNumberSequence,
};
