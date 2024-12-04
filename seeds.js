const Product = require('./models/product');

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// const p= new Product ({

// name: 'Ruby Grapefruit',
// price: 1.99,
// category: 'fruit'
// })

// p.save()
// .then(data=>{
//     console.log(data)
// })
// .catch(e=>{
//     console.log('error!',e);
// })

// const seedProducts = [
//     {
//         name: 'Fairy Eggplant', price: 1.00, category: 'vegetables'
//     },
//     {
//         name: 'Organic Goddess Melon', price: 1.99, category: 'fruit'
//     },
//     {
//         name: 'Organic Mini Seedless Watermelon', price: 3.99, category: 'fruit'
//     },
//     {
//         name: 'Organic Celery', price: 1.50, category: 'vegetables'
//     },
//     {
//         name: 'Chocolate Whole Milk', price: 2.69, category: 'dairy'
//     }
// ]
// Product.insertMany(seedProducts)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(e => {
//         console.log("error", e)
//     })