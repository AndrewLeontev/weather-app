## Node Weather App
Hi! This is my little training Node.js application. 

My site: [leontevblog.ru](https://leontevblog.ru)  
App site: [WeatherAPP](https://pacific-depths-68342.herokuapp.com/)


#### What does it do?
The application appllication the users to enter city name and returns the temperature in city.

#### How it works?
1. Go to [openweathermap.org](https://openweathermap.org) and create account. Then, go to the "API keys" tab, enter the name and click "generate" button. On the left appears generated keys. You need to copy it.
2. Go to *"**server.js**"* file and insert key in this line (instead of asterisk): 
**```const apiKey = '**************************';```**
3. Go to console and enter **`npm start`**
4. Go to this address in your browser: **`127.0.0.1:5000`**

P.S. Beforehand, you must have installed "Node.js" >= v8.6.0

