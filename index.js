const express= require('express');
const companyRoutes= require('./routes')

const app = express();
const port= 3000;
app.use(express.json());

app.use('/api',companyRoutes)

app.use



app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})
