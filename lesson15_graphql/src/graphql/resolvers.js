const products = require('../data/products');

const resolvers = {
    Query: {
        products: ()=> products,
        product: (_, {id})=> products.find(p=> p.id===id)
    },
    Mutation: {
        createProduct: (_, {title, category, price, inStock})=>{
            const newProduct = {
                id: String(products.length+1),
                title,
                category,
                price,
                inStock
            }
            products.push(newProduct);
            return newProduct;
        }
    }
};



module.exports = resolvers;