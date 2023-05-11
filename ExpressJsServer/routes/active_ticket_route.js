const express = require('express');
const ActiveTicket = require('../models/ActiveTicket');
const router = express.Router();


// Get all ActiveTickets
router.get('/', async (req, res) => {
  try {
    const activetickets = await ActiveTicket.find();
    res.json(activetickets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one ActiveTicket
router.get('/:id', getActiveTicket, (req, res) => {
  res.json(res.activeTicket);
});

// Create one ActiveTicket
router.post('/', async (req, res) => {
  const activeticket = new ActiveTicket({
    title: req.body.title,
    ticketPrice: req.body.ticketPrice,
    eventId: req.body.eventId
  });

  try {
    const newActiveTicket = await activeticket.save();
    res.status(201).json(newActiveTicket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one ActiveTicket
router.patch('/:id', getActiveTicket, async (req, res) => {
  if (req.body.title != null) {
    res.activeTicket.title = req.body.title;
  }

  if (req.body.ticketPrice != null) {
    res.activeTicket.ticketPrice = req.body.ticketPrice;
  }

  if (req.body.eventId != null) {
    res.activeTicket.eventId = req.body.eventId;
  }

  try {
    const updatedActiveTicket = await res.activeTicket.save();
    res.json(updatedActiveTicket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one ActiveTicket
router.delete('/:id', getActiveTicket, async (req, res) => {
  try {
    await res.activeTicket.remove();
    res.json({ message: 'Deleted ActiveTicket' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getActiveTicket(req, res, next) {
  try {
    const activeTicket = await ActiveTicket.findById(req.params.id);
    if (activeTicket == null) {
      return res.status(404).json({ message: 'Cannot find ActiveTicket' });
    }
    res.activeTicket = activeTicket;
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  next();
}

// Get active tickets by event
router.get('/event/:eventId', getActiveTicketsByEvent, (req, res) => {
  res.json(res.activeTickets);
});

async function getActiveTicketsByEvent(req, res, next) {
  let activeTickets;
  try {
    activeTickets = await ActiveTicket.find({ eventId: req.params.eventId });
    if (activeTickets == null || activeTickets.length === 0) {
      return res.status(404).json({ message: 'No active tickets found for this event' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.activeTickets = activeTickets;
  next();
}




module.exports = router;







