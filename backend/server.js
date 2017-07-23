import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost/crudwithredux';

mongodb.MongoClient.connect(dbUrl, function(err, db) {
    console.log(db.collection('games').find({}));
    app.get('/api/games', (req, res) => {
        db.collection('games').find({}).toArray((err, games) => {
            res.json({ games });
        });
    });

    app.listen(8081, () => console.log('Server is running on localhost:8081'));
});