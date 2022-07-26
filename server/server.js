const path = require('path');
const express = require('express');
const researchRouter = require('./routes/researchRouter');

const app = express();
const PORT = 3000;

// URL route handlers defined here
// app.get('/', express.static(path.join(__dirname, '../dist/index.html')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});
app.use('/dbtest', researchRouter);

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  };

  const errorObj = Object.assign(defaultErr, err); 
  console.log(errorObj.log);

  res.status(errorObj.status).send(errorObj.message);
});


// start server
 app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
