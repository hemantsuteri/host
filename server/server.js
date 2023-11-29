const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const User = require('../client/src/components/models/User');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://hemantsuteri:hemant1@cluster0.gfanihd.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

// Login API    
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Signup API
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(409).json({ message: 'User already exists' });
    } else {
      await User.create({ email, password });
      res.status(201).json({ message: 'Registration successful' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const User = require('./models/User');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json());

// // Connect to MongoDB Atlas
// mongoose.connect('mongodb+srv://hemantsuteri:hemant1@cluster0.gfanihd.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB Atlas');
// });

// // Authentication Routes
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;
  
//   try {
//     const user = await User.findOne({ email, password });
//     if (user) {
//       res.status(200).json({ message: 'Login successful' });
//     } else {
//       res.status(401).json({ message: 'Invalid credentials' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// app.post('/api/register', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       res.status(400).json({ message: 'User already exists' });
//     } else {
//       const newUser = new User({ email, password });
//       await newUser.save();
//       res.status(201).json({ message: 'Registration successful' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
