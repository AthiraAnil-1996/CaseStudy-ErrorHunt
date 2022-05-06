import express, { urlencoded, json, static } from 'express'; 
import { join } from 'path'; 
import cors from 'cors';

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

import loginRouter from './src/routes/loginroute';
import signupRouter from './src/routes/signuproute';
import homeRouter from './src/routes/homerouter';  // homerouter spelling is not correct
import booksRouter from './src/routes/booksroute';
import authorsRouter from './src/routes/authorsroute';

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(urlencoded({extended:true})); // bodyparser is changed to express
app.use(json());
app.use(static(join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





app.listen(5000,()=>{
    console.log("Server Ready on 3000");
});