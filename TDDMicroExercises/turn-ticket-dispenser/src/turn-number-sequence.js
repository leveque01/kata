TurnNumberSequence = {
	_turnNumber: 1,
	getNextTurnNumber: function() {
		return TurnNumberSequence._turnNumber++;
	}
};

if (typeof window === "undefined") {
  module.exports = TurnNumberSequence;
}