const express = require("express");
const app = express();
const axios = require("axios");

app.set('view engine', 'ejs');

app.get('/', (req, res)=> { 

    let ep = `http://localhost:4000/allcars`;

    axios.get(ep).then((response)=>{
        let cars = response.data;
        //res.json(cars);
       res.render('cars', {cars});  

    });
   

});

app.get('/car/:vinid', (req, res)=> { 

    let vin_id = req.params.vinid;
    let ep = `http://localhost:4000/vin?q=${vin_id}`;

    axios.get(ep).then((response)=>{

      let cdata = response.data;
      res.render('car', {cdata}); 
      //res.send(cdata);
    }); 

});


app.listen(3000, ()=>{

    console.log('web app listening on port 3000');

});