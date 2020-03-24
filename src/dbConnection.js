import mongoose from 'mongoose';

export default function connectDatabase() {
  try {
    mongoose.connect('mongodb+srv://aurangzaib:03346284563@mongodb01-3ppnp.mongodb.net/test?retryWrites=true&w=majority',
      { useNewUrlParser: true });
  } catch (error) {
    console.log('MongoDB Connection Error', error);
  }
};
