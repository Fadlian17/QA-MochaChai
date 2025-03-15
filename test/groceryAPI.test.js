(async () => {
    const chai = await import('chai');
    const chaiHttp = await import('chai-http');

    chai.default.use(chaiHttp);
    const { expect } = chai.default;

    // Base URL API
    const baseUrl = 'https://simple-grocery-api.store';

    describe('🛒 Simple Grocery Store API - Integration Testing', () => {
        describe('GET /products', () => {
            it('should return a list of products', (done) => {
                chai.default.request(baseUrl)
                    .get('/products')
                    .end((err, res) => {
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('array');
                        done();
                    });
            });
        });
    });
})();
