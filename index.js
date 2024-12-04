const express = require('express')
const app = express();
const path = require('path');
const methodOverride= require('method-override');
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.listen('3000', () => {
    console.log("on port 3000!");
})
const Product = require('./models/product');

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// app.get('/dog', (req, res) => {
//     res.send('woof!');
// })
const categories=['fruit','vegetables','dairy'];



// index page
app.get('/products', async (req, res) => {
   const {category}=req.query;
 if(category){
    const products= await Product.find({category})
    res.render('products/index', {products,category})
    
 }
else{
    const products = await Product.find({});
    res.render('products/index', {products, category:'All'})
}

    
    // console.log(products);
    

})

// create new page

app.get('/products/new',(req,res)=>{

    res.render('products/new',{categories});
    
    })

// submit new item
app.post('/products', async (req,res)=>{

    // console.log(req.body);
    const newProduct= new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`)
})    

//update items page load
app.get('/products/:id/edit', async (req,res)=>{
    const  {id}= req.params;
   const product= await Product.findById(id);
res.render('products/edit',{product,categories});


})
//  update using patch

app.put('/products/:id',async (req,res)=>{
    const {id}= req.params;
const product= await Product.findByIdAndUpdate(id, req.body, {runValidators:true, new:true});
// console.log(req.body);
res.redirect(`/products/${product._id}`);

})


// delete product
app.delete('/products/:id', async (req,res)=>{
    // res.send("delete");
    const {id} = req.params;
     const deleted= await Product.findByIdAndDelete(id);
     res.redirect('/products');
})




//show ejs
app.get('/products/:id', async (req,res)=>{

 const  {id}= req.params;
const product= await Product.findById(id);
// console.log(product);
   res.render('products/show',{product}) 

})


