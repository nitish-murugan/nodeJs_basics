//This file will tell the structure of the data needed
const {gql} = require('graphql-tag');
const typeDefs = gql`
    type Product{
        id: ID!
        title: String!
        category: String!
        price: Float!
        inStock: Boolean!
    }

    type Query{
        products: [Product!]!
        product(id: ID): Product
    }

    type Mutation{
        createProduct(
            title: String!
            category: String!
            price: Float!
            inStock: Boolean!
        ) : Product
    }
`;

module.exports = typeDefs;

// ID -> is a datatype which has the unique id like in mongoDB (_id)
// ! -> describes NOT NULL