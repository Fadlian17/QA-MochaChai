// Import Mocha, Chai, dan chai-http
const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

// Ganti dengan URL API Simple Grocery Store
const baseUrl = 'https://simple-grocery-api.store'; 

// Gunakan chai-http
chai.use(chaiHttp);

// Deskripsi pengujian integrasi
describe('Simple Grocery Store API Integration Testing', () => {
    // Pengujian untuk endpoint GET /products
    describe('GET /products', () => {
        it('should return a list of products', (done) => {
            chai.request(baseUrl)
                .get('/products')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    });

    // Pengujian untuk endpoint GET /products/:id
    describe('GET /products/:id', () => {
        it('should return details of a specific product', (done) => {
            const productId = 1; // Ganti dengan ID produk yang valid

            chai.request(baseUrl)
                .get(`/products/${productId}`)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('id', productId);
                    expect(res.body).to.have.property('name');
                    done();
                });
        });
    });

    // Pengujian untuk endpoint POST /products
    describe('POST /products', () => {
        it('should create a new product', (done) => {
            const newProduct = {
                name: 'New Product',
                price: 10.99,
                category: 'Grocery'
            };

            chai.request(baseUrl)
                .post('/products')
                .send(newProduct)
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.have.property('id');
                    expect(res.body.name).to.equal(newProduct.name);
                    done();
                });
        });
    });

    // Pengujian untuk endpoint DELETE /products/:id
    describe('DELETE /products/:id', () => {
        it('should delete a product', (done) => {
            const productId = 1; // Ganti dengan ID produk yang valid

            chai.request(baseUrl)
                .delete(`/products/${productId}`)
                .end((err, res) => {
                    expect(res).to.have.status(204);
                    done();
                });
        });
    });
});
