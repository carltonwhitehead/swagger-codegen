/**
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import expect, { createSpy, spyOn, isSpy } from 'expect';

(function(root, factory) {

}(this, function(expect, SwaggerPetstore) {
  'use strict';

  let instance;

  beforeEach(function() {
    instance = new SwaggerPetstore.Pet();
  });

  let getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  let setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Pet', function() {
    it('should create an instance of Pet', function() {
      // uncomment below and update the code to test Pet
      //var instane = new SwaggerPetstore.Pet();
      //expect(instance).to.be.a(SwaggerPetstore.Pet);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new SwaggerPetstore.Pet();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new SwaggerPetstore.Pet();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new SwaggerPetstore.Pet();
      //expect(instance).to.be();
    });

    it('should have the property photoUrls (base name: "photoUrls")', function() {
      // uncomment below and update the code to test the property photoUrls
      //var instane = new SwaggerPetstore.Pet();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new SwaggerPetstore.Pet();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new SwaggerPetstore.Pet();
      //expect(instance).to.be();
    });

  });

}));
