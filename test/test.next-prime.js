var assert = require('assert'),
	nextPrime = require('./../index').nextPrime,
	asyncPrime = require('./../index').asyncPrime;


describe('test for nextPrime', function() {
	it('nextPrime should return the next prime numeber', function(done) {
		assert.equal(11, nextPrime(7));	
		done();
	});

	it('zero and one are not prime numbers', function(){
		assert.equal(2, nextPrime(0));
		assert.equal(2, nextPrime(1));
	});
});


describe('test for asyncPrime', function() {
	it('asyncPrime should return the next prime number', function(done) {
		asyncPrime(128, function(n) {
			assert.equal(131, n, "Wrong number");
			done();
		});
	});
});
