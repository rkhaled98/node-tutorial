const customerApi = require('./customerApi)
const assert = require('chai').assert
describe('Customer API module', () => {
it('should return a list of customers', (done) => {
customerApi.getCustomers(customers => {
assert.isTrue(customers.length > 0)
done()
})
});
});
