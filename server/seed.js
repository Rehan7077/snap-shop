const Product = require('./models/product.js')
const productsData = require('./products.json')
require('dotenv').config()
const db = require('./db.js')
db().then(async()=>{
    try{
        await Product.insertMany(productsData)
        console.log('data saved')
        process.exit(0)
        
    }catch(err){
        process.exit(1)
        console.log('failed to save products data error:', err)
    }
})