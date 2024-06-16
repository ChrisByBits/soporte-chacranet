import Message from '../models/message.model.js';

export const sendMessage = async (req, res) => {
  try {
    const { ticket, message } = req.body;
    let image = null;
    let video = null;

    if (req.file && req.file.mimetype.startsWith('image')) {
      image = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    if (req.file && req.file.mimetype.startsWith('video')) {
      video = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    const newMessage = new Message({
      user: req.user.id,
      ticket,
      date: new Date(),
      message,
      image,
      video,
    });

    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ ticket: req.params.ticket_id }).populate("ticket");
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}