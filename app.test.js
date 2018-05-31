const request = require('supertest');
const express = require('express');
const expect = require('expect');
const app = require('./app').app;


describe('GET Methods', () => {
  it('should GET index page', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end(done)
  });

  it('should GET users', (done) => {
    request(app)
      .get('/users')
      .expect(200)
      .expect((response) => {
        expect(response.body).toContainEqual({ name: 'Bogdan', age: 23});
      })
      .end(done)
  })
});
