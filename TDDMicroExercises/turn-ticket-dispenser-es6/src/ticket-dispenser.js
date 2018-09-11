import { TurnNumberSequence } from './turn-number-sequence';
import { TurnTicket } from './turn-ticket';

class TicketDispenser {
  getTurnTicket() {
    const newTurnNumber = TurnNumberSequence.getNextTurnNumber();
    const newTurnTicket = new TurnTicket(newTurnNumber);

    return newTurnTicket;
  }
}

export {
  TicketDispenser,
};
