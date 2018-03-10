var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article1= 
    {
        title:'article1',
        date: 'sep  5',
        content: 'hey, this is myfirst webpage',
    };
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('article1', function (req, res) {
  res.send(createTemplate(article1));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`<html>
    <head>
        <title>${title}</title>
         <style>
            .container
                { color: red;
                  font-family: verdana;
                  background-color: green;
                }  
        </style>        
    </head>
    <body>
        <div class="container">
    <a href="/">home</a>
        <h1>date-${date}</h1>
        <p>${content}</p>
        </div>
</html>
`;

    return htmlTemplate;
}
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
