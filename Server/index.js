import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limt: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Connecting to database mongoDB server

const PORT = process.env.PORT || 5000;

const CONNECTION_URL =
	'mongodb+srv://ron741:6Bbx21%40%23%24^%26@mongoreact.i4poj3m.mongodb.net/?retryWrites=true&w=majority';

mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
	})
	.catch((e) => console.log(e.message));
