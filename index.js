var express = require('express');
var app = express();
const path = require('path')

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.resolve(__dirname, './public')));

// views is directory for all template files

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
