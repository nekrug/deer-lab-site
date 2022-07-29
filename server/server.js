const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');
const researchRouter = require('./routes/researchRouter');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: 'http://localhost:8080'}));
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));


// URL route handlers defined here
// app.get('/', express.static(path.join(__dirname, '../dist/index.html')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/assets', express.static(path.join(__dirname, '../src/assets')));
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});
app.use('/research/api', researchRouter);
// TODO: Refactor this into imageController - this is janky.
app.post('/uploadimage', async (req, res) => {
  const newPath = path.join(__dirname, '../src/assets/');
  const file = req.files.file;
  const filename = file.name;
  console.log(file, filename);

  // fs.writeFileSync(newPath, file.data);
  // res.status(200)
  //   .setHeader('Access-Control-Allow-Origin', '*') 
  //   .send('File Uploaded');
  file.mv(`${newPath}${filename}`, (err) => {
    if (err) {
      console.log('error in uploading file');
      console.log(err);
      res.status(500)
        .setHeader('Access-Control-Allow-Origin', '*')
        .send('File failed to upload');
    } else{
      res.status(200)
        .setHeader('Access-Control-Allow-Origin', '*') 
        .send('File Uploaded');
      console.log('file successfully uploaded');
    }

  });
});
app.get('/*', (req, res) => {
  return res.status(200).redirect('/');
});

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
