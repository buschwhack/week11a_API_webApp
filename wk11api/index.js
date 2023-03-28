const express = require("express");
const app = express();
const dataset = require('./data');


app.get('/allcars', (req, res)=> { 

   res.json(dataset);

});


app.get('/vin', (req, res)=>{ 

    let vin_id = req.query.q;
    console.log(vin_id);
    
    let mod = dataset.find(x => x.vin === vin_id).model;
    let mak = dataset.find(x => x.vin === vin_id).make;
    let y = dataset.find(x => x.vin === vin_id).model_year; 

   let result = dataset.find( x => {
         x.vin === vin_id;
        console.log(x.model);  
   }); 


   res.json({make:mak, model:mod, model_year: y});

});

app.listen(process.env.PORT || 4000, () => {
    console.log("API listening on port :4000 for requests");
});
