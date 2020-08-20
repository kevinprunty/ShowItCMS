/* 

Planned steps: 
    1) Call is made to service
    2) Service interprets request (POST/GET/DELETE/PUT/etc)
    3) Service responds appropriately

I intend to make a CMS where you can quickly and easily form the 
types of posts you would like to make in order to make your website dynamic without going through too much fuss. 

Scope: This project includes the backend and perhaps a very simple front end if time is permitting. 

*/

//////////////////////////////////////

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hello World');
})





// Run service

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})
