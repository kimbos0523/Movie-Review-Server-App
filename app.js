import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from 'express-session';

import UsersController from './controllers/users-controller.js';
import AuthController from './controllers/auth-controller.js';
import CommentsController from './controllers/comments-controller.js';

// mongoose connection
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING);

const app = express();

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);

app.use(
  session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());

UsersController(app);
CommentsController(app);
AuthController(app);

app.listen(process.env.PORT || 4000);
