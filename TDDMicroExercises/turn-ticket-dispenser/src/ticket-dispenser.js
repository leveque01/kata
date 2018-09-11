TicketDispenser = function() {
};

TicketDispenser.prototype = {

	getTurnTicket: function () {

			var newTurnNumber = TurnNumberSequence.getNextTurnNumber();
			var newTurnTicket = new TurnTicket(newTurnNumber);

			return newTurnTicket;
	}

};

if (typeof window === "undefined") {
  var TurnTicket = require('./turn-ticket.js');
  var TurnNumberSequence = require('./turn-number-sequence.js');
  module.exports = TicketDispenser;
}