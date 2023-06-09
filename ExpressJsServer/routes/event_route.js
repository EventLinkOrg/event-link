const express = require('express');
const Event = require('../models/Event');
const router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// CREATE (POST) an Event
router.post('/', upload.single('image'), async (req, res) => {
  try {
    console.log(req.body)
    if (req.file) {
      const image = {
        name: req.file.originalname,
        data: req.file.buffer,
        contentType: req.file.mimetype
      }
      req.body.img = image;
    }
    req.body.dateAdded = new Date(Date.now())
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.get('/user/:id', async (req, res) => {
  try {
    userId = req.params.id;
    const rez = await Event.find({ userId: userId })
    res.json(rez);
  } catch (err) {
    res.status(500).json({ message: err.message });

  }
})

// READ (GET) all Events
router.get('/', async (req, res) => {
  try {
    const { page = 0, size = 8, sortDirection = 'asc', sortColumn = 'startDate' } = req.query;
    const skip = page * size;

    const [events, totalCount] = await Promise.all([
      Event.find()
        .skip(skip)
        .limit(size)
        .sort({ [sortColumn]: sortDirection }),
      Event.countDocuments(),
    ]);

    const total = Math.ceil(totalCount / size);

    const response = {
      page: parseInt(page),
      size: parseInt(size),
      sortColumn,
      sortDirection,
      data: events,
      total,
      totalCount,
    };

    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ (GET) a specific Event
router.get('/:id', getEvent, (req, res) => {
  res.json(res.event);
});

// UPDATE (PUT) an Event
router.put('/:id', getEvent, async (req, res) => {
  try {
    Object.assign(res.event, req.body);
    await res.event.save();
    res.json(res.event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE an Event
router.delete('/:id', getEvent, async (req, res) => {
  try {
    await res.event.remove();
    res.json({ message: 'Event has been deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a specific Event by ID
async function getEvent(req, res, next) {
  let event;
  try {
    event = await Event.findById(req.params.id);
    if (event == null) {
      return res.status(404).json({ message: 'Event not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.event = event;
  next();
}

//Find all the events category

async function getEventsByCategory(req, res, next) {
  let events;
  try {
    events = await Event.find({ category: req.params.category });
    if (events == null || events.length === 0) {
      return res.status(404).json({ message: 'No events found in this category' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.events = events;
  next();
}


router.get('/category/:category', getEventsByCategory, (req, res) => {
  res.json(res.events);
});




module.exports = router;