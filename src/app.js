const express = require('express')
const app = express()

const hbs  = require('hbs')

const path = require('path')

const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')


// DEfine paths for handle bars
const public_path = path.join(__dirname, "../public")
const viewPaths = path.join(__dirname, "../templates/views")

const partials = path.join(__dirname , '../templates/partials')
 
// Setup static directory
app.use(express.static(public_path))

app.set('view engine' , 'hbs')
app.set('views' , viewPaths  )
hbs.registerPartials(partials)

app.get('/' , (req,res)=> {
    res.send('<title>Hello World!!!</title><h1>ddd</h1>')
})


app.get('/about' , (req,res)=> {
    res.render('index' , {
        title : "about page",
        name : "vishal"
    })
})

app.get('/wheather' , (req,res)=> {
    if(!req.query.address){
        return res.send('error Address required')
    }

    geocode(req.query.address, (error, {longitude , latitude , location} ={}) =>{
        if(error){
            return res.send({error :"error occured"})
        }    
        forcast(longitude, latitude , (error, response) =>{
        
            if(error){
                return res.send({error : "error occured"})
            }
        
           res.send({
            location,
            temprature  : response.temprature
           }) 
            
        
        })
        
        })
    // res.send({
    //     property : req.query.address
    // })
   
})

app.get('/products' , (req,res)=> {
    if(!req.query.search){
        return res.send('error search required')
    }
   
    res.send({
        products : [req.query.search]
    })

})

app.get('*' , (req, res)=>{
    res.render('404',{
        message : "This is a 404 Page"
    })
})

app.listen(5000, ()=>{
    console.log('started 5000')
})