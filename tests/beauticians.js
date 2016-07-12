var request = require('supertest');
var should = require('should');
describe('it should gets the beauticians in the system', function () {
    var server;
    beforeEach(function () {
        server = require('../app');
    });

    it('responds to /api/beauticians', function testSlash(done) {
        request(server)
                .get('/api/beauticians')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, res) {
                    if (err) {
                        throw err;
                    }
                    res.body[0].should.have.property('id');
                    res.body[0].should.have.property('name');
                    res.body[0].should.have.property('address');
                    done();
                });
    });

});