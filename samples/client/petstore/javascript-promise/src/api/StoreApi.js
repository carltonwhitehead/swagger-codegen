/**
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Order'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Order'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerPetstore) {
      root.SwaggerPetstore = {};
    }
    root.SwaggerPetstore.StoreApi = factory(root.SwaggerPetstore.ApiClient, root.SwaggerPetstore.Order);
  }
}(this, function(ApiClient, Order) {
  'use strict';

  /**
   * Store service.
   * @module api/StoreApi
   * @version 1.0.0
   */

  /**
   * Constructs a new StoreApi. 
   * @alias module:api/StoreApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete purchase order by ID
     * For valid response try integer IDs with value &lt; 1000. Anything above 1000 or nonintegers will generate API errors
     * @param {String} order_id ID of the order that needs to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteOrderWithHttpInfo = function(order_id) {
      var postBody = null;

      // verify the required parameter 'order_id' is set
      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling deleteOrder");
      }


      var pathParams = {
        'order_id': order_id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/xml', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/store/order/{order_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete purchase order by ID
     * For valid response try integer IDs with value &lt; 1000. Anything above 1000 or nonintegers will generate API errors
     * @param {String} order_id ID of the order that needs to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteOrder = function(order_id) {
      return this.deleteOrderWithHttpInfo(order_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns pet inventories by status
     * Returns a map of status codes to quantities
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {'String': 'Number'}>} and HTTP response
     */
    this.getInventoryWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = {'String': 'Number'};

      return this.apiClient.callApi(
        '/store/inventory', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns pet inventories by status
     * Returns a map of status codes to quantities
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {'String': 'Number'}>}
     */
    this.getInventory = function() {
      return this.getInventoryWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find purchase order by ID
     * For valid response try integer IDs with value &lt;&#x3D; 5 or &gt; 10. Other values will generated exceptions
     * @param {Number} order_id ID of pet that needs to be fetched
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Order} and HTTP response
     */
    this.getOrderByIdWithHttpInfo = function(order_id) {
      var postBody = null;

      // verify the required parameter 'order_id' is set
      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling getOrderById");
      }


      var pathParams = {
        'order_id': order_id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/xml', 'application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/store/order/{order_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Find purchase order by ID
     * For valid response try integer IDs with value &lt;&#x3D; 5 or &gt; 10. Other values will generated exceptions
     * @param {Number} order_id ID of pet that needs to be fetched
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.getOrderById = function(order_id) {
      return this.getOrderByIdWithHttpInfo(order_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Place an order for a pet
     * 
     * @param {module:model/Order} body order placed for purchasing the pet
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Order} and HTTP response
     */
    this.placeOrderWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling placeOrder");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/xml', 'application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/store/order', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Place an order for a pet
     * 
     * @param {module:model/Order} body order placed for purchasing the pet
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.placeOrder = function(body) {
      return this.placeOrderWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
