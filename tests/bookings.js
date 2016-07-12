var request = require('supertest');
var should = require('should');
describe('it should gets the bookings in the system', function () {
    var server;
    beforeEach(function () {
        server = require('../app');
    });

    it('responds to /api/bookings', function testSlash(done) {
        request(server)
                .get('/api/bookings')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, res) {
                    if (err) {
                        throw err;
                    }
                    if(res.body.length > 0){
                    res.body[0].should.have.property('id');
                    
                    res.body[0].should.have.property('username');
                    res.body[0].should.have.property('day');
                    res.body[0].should.have.property('startTime');
                    res.body[0].should.have.property('endTime');
                    res.body[0].should.have.property('description');
                    res.body[0].should.have.property('beautician_name');
                    res.body[0].should.have.property('address');
                }
                    done();
                });
    });

});