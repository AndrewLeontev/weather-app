const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const apiKey = '***************************';


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Ошибка, повторите ввод (название должно быть на английском)'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Ошибка, повторите ввод (название должно быть на английском)'});
      } else {
        let weatherText = `В городе ${weather.name} температура равна: ${weather.main.temp}°C`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})

let port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('App listening on port ' + port);
})