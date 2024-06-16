import Ticket from '../models/ticket.model.js';

export const createTicket = async (req, res) => {
  try {
    const { description } = req.body;

    const newTicket = new Ticket({
      user: req.user.id,
      description,
      date: new Date(),
      status: 'open'
    });

    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const getTickets = async (req, res) => {
  try {
    console.log(req.user);
    const tickets = await Ticket.find({ user: req.user.id}).populate("user");
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}