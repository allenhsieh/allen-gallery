const faker = require('faker');
const Property = require('./models/property');
const mongoose = require('mongoose');
const photoGroups = require('./photoGroups');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/photos');
const db = mongoose.connection;
db.on('error', (err) => {
  console.log('error connecting to MongoDB', err);
})
db.once('open', () => {
  console.log('mongoose connected');
});

for (let i = 1; 1 < 101; i++) {
  let gallery = {
    id: i,
    photos: faker.random.arrayElement(photoGroups)
  }

  Property.insertOne(gallery, (err, room) => {
    if (err) {
      console.log('error adding Gallery', err);
    }
  });
}