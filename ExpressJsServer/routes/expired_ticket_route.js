const express = require('express');
const expired_Ticket = require('../models/ExpiredTicket');
const router = express.Router();

// Get all expired_Tickets
router.get('/', async (req, res) => {
    try {
      const expired_Tickets = await expired_Ticket.find();
      res.json(expired_Tickets);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Get one expired_Ticket
  router.get('/:id', getexpired_Ticket, (req, res) => {
    res.json(res.expired_Ticket);
  });
  
  // Create one expired_Ticket
  router.post('/', async (req, res) => {
    const expired_ticket = new expired_Ticket({
      title: req.body.title,
      ticketPrice: req.body.ticketPrice,
      eventId: req.body.eventId
    });
  
    try {
      const newexpired_Ticket = await expired_ticket.save();
      res.status(201).json(newexpired_Ticket);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Update one expired_Ticket
  router.patch('/:id', getexpired_Ticket, async (req, res) => {
    if (req.body.title != null) {
      res.expired_Ticket.title = req.body.title;
    }
  
    if (req.body.ticketPrice != null) {
      res.expired_Ticket.ticketPrice = req.body.ticketPrice;
    }
  
    if (req.body.eventId != null) {
      res.expired_Ticket.eventId = req.body.eventId;
    }
  
    try {
      const updatedexpired_Ticket = await res.expired_Ticket.save();
      res.json(updatedexpired_Ticket);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Delete one expired_Ticket
  router.delete('/:id', getexpired_Ticket, async (req, res) => {
    try {
      await res.expired_ticket.remove();
      res.json({ message: 'Deleted expired_Ticket' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  async function getexpired_Ticket(req, res, next) {
    try {
      const expired_ticket = await expired_Ticket.findById(req.params.id);
      if (expired_ticket == null) {
        return res.status(404).json({ message: 'Cannot find expired_Ticket' });
      }
      res.expired_ticket = expired_ticket;
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    next();
  }
  

  // Get expired tickets by event
router.get('/event/:eventId/expired', getExpiredTicketsByEvent, (req, res) => {
    res.json(res.expiredTickets);
  });
  
  async function getExpiredTicketsByEvent(req, res, next) {
    let expiredTickets;
    try {
      const currentDate = new Date();
      expiredTickets = await expired_Ticket.find({ 
        eventId: req.params.eventId,
        expirationDate: { $lt: currentDate } 
      });
      if (expiredTickets == null || expiredTickets.length === 0) {
        return res.status(404).json({ message: 'No expired tickets found for this event' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.expiredTickets = expiredTickets;
    next();
  }
  
  module.exports = router;
  
  
  
  
  
  
  
  