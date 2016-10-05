const express = require('express');

const app = express();

app.listen(5000, (err) => {
  if (err) {
    console.error(err);
  }
  console.log('I am connected!');
});
