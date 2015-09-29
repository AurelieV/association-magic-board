(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Member
 * @header lbServices.Member
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Member` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Member",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/members/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Member.contributions.findById() instead.
        "prototype$__findById__contributions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/contributions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Member.contributions.destroyById() instead.
        "prototype$__destroyById__contributions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/contributions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.contributions.updateById() instead.
        "prototype$__updateById__contributions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/contributions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.seasons.findById() instead.
        "prototype$__findById__seasons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/seasons/:fk",
          method: "GET"
        },

        // INTERNAL. Use Member.seasons.destroyById() instead.
        "prototype$__destroyById__seasons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/seasons/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.seasons.updateById() instead.
        "prototype$__updateById__seasons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/seasons/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.seasons.link() instead.
        "prototype$__link__seasons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/seasons/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.seasons.unlink() instead.
        "prototype$__unlink__seasons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/seasons/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.seasons.exists() instead.
        "prototype$__exists__seasons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/seasons/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Member.seasonRankings.findById() instead.
        "prototype$__findById__seasonRankings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/seasonRankings/:fk",
          method: "GET"
        },

        // INTERNAL. Use Member.seasonRankings.destroyById() instead.
        "prototype$__destroyById__seasonRankings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/seasonRankings/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.seasonRankings.updateById() instead.
        "prototype$__updateById__seasonRankings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/seasonRankings/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.contributions() instead.
        "prototype$__get__contributions": {
          isArray: true,
          url: urlBase + "/members/:id/contributions",
          method: "GET"
        },

        // INTERNAL. Use Member.contributions.create() instead.
        "prototype$__create__contributions": {
          url: urlBase + "/members/:id/contributions",
          method: "POST"
        },

        // INTERNAL. Use Member.contributions.destroyAll() instead.
        "prototype$__delete__contributions": {
          url: urlBase + "/members/:id/contributions",
          method: "DELETE"
        },

        // INTERNAL. Use Member.contributions.count() instead.
        "prototype$__count__contributions": {
          url: urlBase + "/members/:id/contributions/count",
          method: "GET"
        },

        // INTERNAL. Use Member.seasons() instead.
        "prototype$__get__seasons": {
          isArray: true,
          url: urlBase + "/members/:id/seasons",
          method: "GET"
        },

        // INTERNAL. Use Member.seasons.create() instead.
        "prototype$__create__seasons": {
          url: urlBase + "/members/:id/seasons",
          method: "POST"
        },

        // INTERNAL. Use Member.seasons.destroyAll() instead.
        "prototype$__delete__seasons": {
          url: urlBase + "/members/:id/seasons",
          method: "DELETE"
        },

        // INTERNAL. Use Member.seasons.count() instead.
        "prototype$__count__seasons": {
          url: urlBase + "/members/:id/seasons/count",
          method: "GET"
        },

        // INTERNAL. Use Member.seasonRankings() instead.
        "prototype$__get__seasonRankings": {
          isArray: true,
          url: urlBase + "/members/:id/seasonRankings",
          method: "GET"
        },

        // INTERNAL. Use Member.seasonRankings.create() instead.
        "prototype$__create__seasonRankings": {
          url: urlBase + "/members/:id/seasonRankings",
          method: "POST"
        },

        // INTERNAL. Use Member.seasonRankings.destroyAll() instead.
        "prototype$__delete__seasonRankings": {
          url: urlBase + "/members/:id/seasonRankings",
          method: "DELETE"
        },

        // INTERNAL. Use Member.seasonRankings.count() instead.
        "prototype$__count__seasonRankings": {
          url: urlBase + "/members/:id/seasonRankings/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#create
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/members",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#createMany
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/members",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#upsert
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/members",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#exists
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/members/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#findById
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/members/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#find
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/members",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#findOne
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/members/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#updateAll
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/members/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#deleteById
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/members/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#count
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/members/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#prototype$updateAttributes
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/members/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#createChangeStream
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/members/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#forumMember
         * @methodOf lbServices.Member
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `id` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "forumMember": {
          url: urlBase + "/members/forumMember",
          method: "POST"
        },

        // INTERNAL. Use Season.members.findById() instead.
        "::findById::Season::members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/members/:fk",
          method: "GET"
        },

        // INTERNAL. Use Season.members.destroyById() instead.
        "::destroyById::Season::members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/members/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Season.members.updateById() instead.
        "::updateById::Season::members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/members/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Season.members.link() instead.
        "::link::Season::members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/members/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Season.members.unlink() instead.
        "::unlink::Season::members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/members/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Season.members.exists() instead.
        "::exists::Season::members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/members/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Season.members() instead.
        "::get::Season::members": {
          isArray: true,
          url: urlBase + "/seasons/:id/members",
          method: "GET"
        },

        // INTERNAL. Use Season.members.create() instead.
        "::create::Season::members": {
          url: urlBase + "/seasons/:id/members",
          method: "POST"
        },

        // INTERNAL. Use Season.members.createMany() instead.
        "::createMany::Season::members": {
          isArray: true,
          url: urlBase + "/seasons/:id/members",
          method: "POST"
        },

        // INTERNAL. Use Season.members.destroyAll() instead.
        "::delete::Season::members": {
          url: urlBase + "/seasons/:id/members",
          method: "DELETE"
        },

        // INTERNAL. Use Season.members.count() instead.
        "::count::Season::members": {
          url: urlBase + "/seasons/:id/members/count",
          method: "GET"
        },

        // INTERNAL. Use Contribution.member() instead.
        "::get::Contribution::member": {
          url: urlBase + "/contributions/:id/member",
          method: "GET"
        },

        // INTERNAL. Use SeasonRanking.member() instead.
        "::get::SeasonRanking::member": {
          url: urlBase + "/SeasonRankings/:id/member",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Member#updateOrCreate
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Member#update
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Member#destroyById
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Member#removeById
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Member#modelName
    * @propertyOf lbServices.Member
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Member`.
    */
    R.modelName = "Member";

    /**
     * @ngdoc object
     * @name lbServices.Member.contributions
     * @header lbServices.Member.contributions
     * @object
     * @description
     *
     * The object `Member.contributions` groups methods
     * manipulating `Contribution` instances related to `Member`.
     *
     * Call {@link lbServices.Member#contributions Member.contributions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Member#contributions
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Queries contributions of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.contributions = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::get::Member::contributions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.contributions#count
         * @methodOf lbServices.Member.contributions
         *
         * @description
         *
         * Counts contributions of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.contributions.count = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::count::Member::contributions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.contributions#create
         * @methodOf lbServices.Member.contributions
         *
         * @description
         *
         * Creates a new instance in contributions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.contributions.create = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::create::Member::contributions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.contributions#createMany
         * @methodOf lbServices.Member.contributions
         *
         * @description
         *
         * Creates a new instance in contributions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.contributions.createMany = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::createMany::Member::contributions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.contributions#destroyAll
         * @methodOf lbServices.Member.contributions
         *
         * @description
         *
         * Deletes all contributions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.contributions.destroyAll = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::delete::Member::contributions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.contributions#destroyById
         * @methodOf lbServices.Member.contributions
         *
         * @description
         *
         * Delete a related item by id for contributions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for contributions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.contributions.destroyById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::destroyById::Member::contributions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.contributions#findById
         * @methodOf lbServices.Member.contributions
         *
         * @description
         *
         * Find a related item by id for contributions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for contributions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.contributions.findById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::findById::Member::contributions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.contributions#updateById
         * @methodOf lbServices.Member.contributions
         *
         * @description
         *
         * Update a related item by id for contributions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for contributions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.contributions.updateById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::updateById::Member::contributions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Member.seasons
     * @header lbServices.Member.seasons
     * @object
     * @description
     *
     * The object `Member.seasons` groups methods
     * manipulating `Season` instances related to `Member`.
     *
     * Call {@link lbServices.Member#seasons Member.seasons()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Member#seasons
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Queries seasons of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Season` object.)
         * </em>
         */
        R.seasons = function() {
          var TargetResource = $injector.get("Season");
          var action = TargetResource["::get::Member::seasons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.seasons#count
         * @methodOf lbServices.Member.seasons
         *
         * @description
         *
         * Counts seasons of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.seasons.count = function() {
          var TargetResource = $injector.get("Season");
          var action = TargetResource["::count::Member::seasons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.seasons#create
         * @methodOf lbServices.Member.seasons
         *
         * @description
         *
         * Creates a new instance in seasons of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Season` object.)
         * </em>
         */
        R.seasons.create = function() {
          var TargetResource = $injector.get("Season");
          var action = TargetResource["::create::Member::seasons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.seasons#createMany
         * @methodOf lbServices.Member.seasons
         *
         * @description
         *
         * Creates a new instance in seasons of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Season` object.)
         * </em>
         */
        R.seasons.createMany = function() {
          var TargetResource = $injector.get("Season");
          var action = TargetResource["::createMany::Member::seasons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.seasons#destroyAll
         * @methodOf lbServices.Member.seasons
         *
         * @description
         *
         * Deletes all seasons of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.seasons.destroyAll = function() {
          var TargetResource = $injector.get("Season");
          var action = TargetResource["::delete::Member::seasons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.seasons#destroyById
         * @methodOf lbServices.Member.seasons
         *
         * @description
         *
         * Delete a related item by id for seasons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for seasons
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.seasons.destroyById = function() {
          var TargetResource = $injector.get("Season");
          var action = TargetResource["::destroyById::Member::seasons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.seasons#exists
         * @methodOf lbServices.Member.seasons
         *
         * @description
         *
         * Check the existence of seasons relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for seasons
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Season` object.)
         * </em>
         */
        R.seasons.exists = function() {
          var TargetResource = $injector.get("Season");
          var action = TargetResource["::exists::Member::seasons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.seasons#findById
         * @methodOf lbServices.Member.seasons
         *
         * @description
         *
         * Find a related item by id for seasons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for seasons
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Season` object.)
         * </em>
         */
        R.seasons.findById = function() {
          var TargetResource = $injector.get("Season");
          var action = TargetResource["::findById::Member::seasons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.seasons#link
         * @methodOf lbServices.Member.seasons
         *
         * @description
         *
         * Add a related item by id for seasons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for seasons
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Season` object.)
         * </em>
         */
        R.seasons.link = function() {
          var TargetResource = $injector.get("Season");
          var action = TargetResource["::link::Member::seasons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.seasons#unlink
         * @methodOf lbServices.Member.seasons
         *
         * @description
         *
         * Remove the seasons relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for seasons
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.seasons.unlink = function() {
          var TargetResource = $injector.get("Season");
          var action = TargetResource["::unlink::Member::seasons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.seasons#updateById
         * @methodOf lbServices.Member.seasons
         *
         * @description
         *
         * Update a related item by id for seasons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for seasons
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Season` object.)
         * </em>
         */
        R.seasons.updateById = function() {
          var TargetResource = $injector.get("Season");
          var action = TargetResource["::updateById::Member::seasons"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Member.seasonRankings
     * @header lbServices.Member.seasonRankings
     * @object
     * @description
     *
     * The object `Member.seasonRankings` groups methods
     * manipulating `SeasonRanking` instances related to `Member`.
     *
     * Call {@link lbServices.Member#seasonRankings Member.seasonRankings()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Member#seasonRankings
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Queries seasonRankings of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SeasonRanking` object.)
         * </em>
         */
        R.seasonRankings = function() {
          var TargetResource = $injector.get("SeasonRanking");
          var action = TargetResource["::get::Member::seasonRankings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.seasonRankings#count
         * @methodOf lbServices.Member.seasonRankings
         *
         * @description
         *
         * Counts seasonRankings of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.seasonRankings.count = function() {
          var TargetResource = $injector.get("SeasonRanking");
          var action = TargetResource["::count::Member::seasonRankings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.seasonRankings#create
         * @methodOf lbServices.Member.seasonRankings
         *
         * @description
         *
         * Creates a new instance in seasonRankings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SeasonRanking` object.)
         * </em>
         */
        R.seasonRankings.create = function() {
          var TargetResource = $injector.get("SeasonRanking");
          var action = TargetResource["::create::Member::seasonRankings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.seasonRankings#createMany
         * @methodOf lbServices.Member.seasonRankings
         *
         * @description
         *
         * Creates a new instance in seasonRankings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SeasonRanking` object.)
         * </em>
         */
        R.seasonRankings.createMany = function() {
          var TargetResource = $injector.get("SeasonRanking");
          var action = TargetResource["::createMany::Member::seasonRankings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.seasonRankings#destroyAll
         * @methodOf lbServices.Member.seasonRankings
         *
         * @description
         *
         * Deletes all seasonRankings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.seasonRankings.destroyAll = function() {
          var TargetResource = $injector.get("SeasonRanking");
          var action = TargetResource["::delete::Member::seasonRankings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.seasonRankings#destroyById
         * @methodOf lbServices.Member.seasonRankings
         *
         * @description
         *
         * Delete a related item by id for seasonRankings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for seasonRankings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.seasonRankings.destroyById = function() {
          var TargetResource = $injector.get("SeasonRanking");
          var action = TargetResource["::destroyById::Member::seasonRankings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.seasonRankings#findById
         * @methodOf lbServices.Member.seasonRankings
         *
         * @description
         *
         * Find a related item by id for seasonRankings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for seasonRankings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SeasonRanking` object.)
         * </em>
         */
        R.seasonRankings.findById = function() {
          var TargetResource = $injector.get("SeasonRanking");
          var action = TargetResource["::findById::Member::seasonRankings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.seasonRankings#updateById
         * @methodOf lbServices.Member.seasonRankings
         *
         * @description
         *
         * Update a related item by id for seasonRankings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for seasonRankings
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SeasonRanking` object.)
         * </em>
         */
        R.seasonRankings.updateById = function() {
          var TargetResource = $injector.get("SeasonRanking");
          var action = TargetResource["::updateById::Member::seasonRankings"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Season
 * @header lbServices.Season
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Season` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Season",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/seasons/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Season.members.findById() instead.
        "prototype$__findById__members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/members/:fk",
          method: "GET"
        },

        // INTERNAL. Use Season.members.destroyById() instead.
        "prototype$__destroyById__members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/members/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Season.members.updateById() instead.
        "prototype$__updateById__members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/members/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Season.members.link() instead.
        "prototype$__link__members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/members/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Season.members.unlink() instead.
        "prototype$__unlink__members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/members/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Season.members.exists() instead.
        "prototype$__exists__members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/members/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Season.contributions.findById() instead.
        "prototype$__findById__contributions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/contributions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Season.contributions.destroyById() instead.
        "prototype$__destroyById__contributions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/contributions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Season.contributions.updateById() instead.
        "prototype$__updateById__contributions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/contributions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Season.tournaments.findById() instead.
        "prototype$__findById__tournaments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/tournaments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Season.tournaments.destroyById() instead.
        "prototype$__destroyById__tournaments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/tournaments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Season.tournaments.updateById() instead.
        "prototype$__updateById__tournaments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/tournaments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Season.members() instead.
        "prototype$__get__members": {
          isArray: true,
          url: urlBase + "/seasons/:id/members",
          method: "GET"
        },

        // INTERNAL. Use Season.members.create() instead.
        "prototype$__create__members": {
          url: urlBase + "/seasons/:id/members",
          method: "POST"
        },

        // INTERNAL. Use Season.members.destroyAll() instead.
        "prototype$__delete__members": {
          url: urlBase + "/seasons/:id/members",
          method: "DELETE"
        },

        // INTERNAL. Use Season.members.count() instead.
        "prototype$__count__members": {
          url: urlBase + "/seasons/:id/members/count",
          method: "GET"
        },

        // INTERNAL. Use Season.contributions() instead.
        "prototype$__get__contributions": {
          isArray: true,
          url: urlBase + "/seasons/:id/contributions",
          method: "GET"
        },

        // INTERNAL. Use Season.contributions.create() instead.
        "prototype$__create__contributions": {
          url: urlBase + "/seasons/:id/contributions",
          method: "POST"
        },

        // INTERNAL. Use Season.contributions.destroyAll() instead.
        "prototype$__delete__contributions": {
          url: urlBase + "/seasons/:id/contributions",
          method: "DELETE"
        },

        // INTERNAL. Use Season.contributions.count() instead.
        "prototype$__count__contributions": {
          url: urlBase + "/seasons/:id/contributions/count",
          method: "GET"
        },

        // INTERNAL. Use Season.tournaments() instead.
        "prototype$__get__tournaments": {
          isArray: true,
          url: urlBase + "/seasons/:id/tournaments",
          method: "GET"
        },

        // INTERNAL. Use Season.tournaments.create() instead.
        "prototype$__create__tournaments": {
          url: urlBase + "/seasons/:id/tournaments",
          method: "POST"
        },

        // INTERNAL. Use Season.tournaments.destroyAll() instead.
        "prototype$__delete__tournaments": {
          url: urlBase + "/seasons/:id/tournaments",
          method: "DELETE"
        },

        // INTERNAL. Use Season.tournaments.count() instead.
        "prototype$__count__tournaments": {
          url: urlBase + "/seasons/:id/tournaments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Season#create
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Season` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/seasons",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Season#createMany
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Season` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/seasons",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Season#upsert
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Season` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/seasons",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Season#exists
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/seasons/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Season#findById
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Season` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/seasons/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Season#find
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Season` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/seasons",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Season#findOne
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Season` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/seasons/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Season#updateAll
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/seasons/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Season#deleteById
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/seasons/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Season#count
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/seasons/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Season#prototype$updateAttributes
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Season` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/seasons/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Season#createChangeStream
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/seasons/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Member.seasons.findById() instead.
        "::findById::Member::seasons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/seasons/:fk",
          method: "GET"
        },

        // INTERNAL. Use Member.seasons.destroyById() instead.
        "::destroyById::Member::seasons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/seasons/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.seasons.updateById() instead.
        "::updateById::Member::seasons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/seasons/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.seasons.link() instead.
        "::link::Member::seasons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/seasons/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.seasons.unlink() instead.
        "::unlink::Member::seasons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/seasons/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.seasons.exists() instead.
        "::exists::Member::seasons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/seasons/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Member.seasons() instead.
        "::get::Member::seasons": {
          isArray: true,
          url: urlBase + "/members/:id/seasons",
          method: "GET"
        },

        // INTERNAL. Use Member.seasons.create() instead.
        "::create::Member::seasons": {
          url: urlBase + "/members/:id/seasons",
          method: "POST"
        },

        // INTERNAL. Use Member.seasons.createMany() instead.
        "::createMany::Member::seasons": {
          isArray: true,
          url: urlBase + "/members/:id/seasons",
          method: "POST"
        },

        // INTERNAL. Use Member.seasons.destroyAll() instead.
        "::delete::Member::seasons": {
          url: urlBase + "/members/:id/seasons",
          method: "DELETE"
        },

        // INTERNAL. Use Member.seasons.count() instead.
        "::count::Member::seasons": {
          url: urlBase + "/members/:id/seasons/count",
          method: "GET"
        },

        // INTERNAL. Use Contribution.season() instead.
        "::get::Contribution::season": {
          url: urlBase + "/contributions/:id/season",
          method: "GET"
        },

        // INTERNAL. Use Tournament.season() instead.
        "::get::Tournament::season": {
          url: urlBase + "/Tournaments/:id/season",
          method: "GET"
        },

        // INTERNAL. Use SeasonRanking.season() instead.
        "::get::SeasonRanking::season": {
          url: urlBase + "/SeasonRankings/:id/season",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Season#updateOrCreate
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Season` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Season#update
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Season#destroyById
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Season#removeById
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Season#modelName
    * @propertyOf lbServices.Season
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Season`.
    */
    R.modelName = "Season";

    /**
     * @ngdoc object
     * @name lbServices.Season.members
     * @header lbServices.Season.members
     * @object
     * @description
     *
     * The object `Season.members` groups methods
     * manipulating `Member` instances related to `Season`.
     *
     * Call {@link lbServices.Season#members Season.members()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Season#members
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Queries members of Season.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R.members = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::get::Season::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.members#count
         * @methodOf lbServices.Season.members
         *
         * @description
         *
         * Counts members of Season.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.members.count = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::count::Season::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.members#create
         * @methodOf lbServices.Season.members
         *
         * @description
         *
         * Creates a new instance in members of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R.members.create = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::create::Season::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.members#createMany
         * @methodOf lbServices.Season.members
         *
         * @description
         *
         * Creates a new instance in members of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R.members.createMany = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::createMany::Season::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.members#destroyAll
         * @methodOf lbServices.Season.members
         *
         * @description
         *
         * Deletes all members of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.members.destroyAll = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::delete::Season::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.members#destroyById
         * @methodOf lbServices.Season.members
         *
         * @description
         *
         * Delete a related item by id for members.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for members
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.members.destroyById = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::destroyById::Season::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.members#exists
         * @methodOf lbServices.Season.members
         *
         * @description
         *
         * Check the existence of members relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for members
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R.members.exists = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::exists::Season::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.members#findById
         * @methodOf lbServices.Season.members
         *
         * @description
         *
         * Find a related item by id for members.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for members
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R.members.findById = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::findById::Season::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.members#link
         * @methodOf lbServices.Season.members
         *
         * @description
         *
         * Add a related item by id for members.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for members
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R.members.link = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::link::Season::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.members#unlink
         * @methodOf lbServices.Season.members
         *
         * @description
         *
         * Remove the members relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for members
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.members.unlink = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::unlink::Season::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.members#updateById
         * @methodOf lbServices.Season.members
         *
         * @description
         *
         * Update a related item by id for members.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for members
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R.members.updateById = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::updateById::Season::members"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Season.contributions
     * @header lbServices.Season.contributions
     * @object
     * @description
     *
     * The object `Season.contributions` groups methods
     * manipulating `Contribution` instances related to `Season`.
     *
     * Call {@link lbServices.Season#contributions Season.contributions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Season#contributions
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Queries contributions of Season.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.contributions = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::get::Season::contributions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.contributions#count
         * @methodOf lbServices.Season.contributions
         *
         * @description
         *
         * Counts contributions of Season.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.contributions.count = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::count::Season::contributions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.contributions#create
         * @methodOf lbServices.Season.contributions
         *
         * @description
         *
         * Creates a new instance in contributions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.contributions.create = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::create::Season::contributions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.contributions#createMany
         * @methodOf lbServices.Season.contributions
         *
         * @description
         *
         * Creates a new instance in contributions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.contributions.createMany = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::createMany::Season::contributions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.contributions#destroyAll
         * @methodOf lbServices.Season.contributions
         *
         * @description
         *
         * Deletes all contributions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.contributions.destroyAll = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::delete::Season::contributions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.contributions#destroyById
         * @methodOf lbServices.Season.contributions
         *
         * @description
         *
         * Delete a related item by id for contributions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for contributions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.contributions.destroyById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::destroyById::Season::contributions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.contributions#findById
         * @methodOf lbServices.Season.contributions
         *
         * @description
         *
         * Find a related item by id for contributions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for contributions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.contributions.findById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::findById::Season::contributions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.contributions#updateById
         * @methodOf lbServices.Season.contributions
         *
         * @description
         *
         * Update a related item by id for contributions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for contributions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.contributions.updateById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::updateById::Season::contributions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Season.tournaments
     * @header lbServices.Season.tournaments
     * @object
     * @description
     *
     * The object `Season.tournaments` groups methods
     * manipulating `Tournament` instances related to `Season`.
     *
     * Call {@link lbServices.Season#tournaments Season.tournaments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Season#tournaments
         * @methodOf lbServices.Season
         *
         * @description
         *
         * Queries tournaments of Season.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tournament` object.)
         * </em>
         */
        R.tournaments = function() {
          var TargetResource = $injector.get("Tournament");
          var action = TargetResource["::get::Season::tournaments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.tournaments#count
         * @methodOf lbServices.Season.tournaments
         *
         * @description
         *
         * Counts tournaments of Season.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.tournaments.count = function() {
          var TargetResource = $injector.get("Tournament");
          var action = TargetResource["::count::Season::tournaments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.tournaments#create
         * @methodOf lbServices.Season.tournaments
         *
         * @description
         *
         * Creates a new instance in tournaments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tournament` object.)
         * </em>
         */
        R.tournaments.create = function() {
          var TargetResource = $injector.get("Tournament");
          var action = TargetResource["::create::Season::tournaments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.tournaments#createMany
         * @methodOf lbServices.Season.tournaments
         *
         * @description
         *
         * Creates a new instance in tournaments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tournament` object.)
         * </em>
         */
        R.tournaments.createMany = function() {
          var TargetResource = $injector.get("Tournament");
          var action = TargetResource["::createMany::Season::tournaments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.tournaments#destroyAll
         * @methodOf lbServices.Season.tournaments
         *
         * @description
         *
         * Deletes all tournaments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tournaments.destroyAll = function() {
          var TargetResource = $injector.get("Tournament");
          var action = TargetResource["::delete::Season::tournaments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.tournaments#destroyById
         * @methodOf lbServices.Season.tournaments
         *
         * @description
         *
         * Delete a related item by id for tournaments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tournaments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tournaments.destroyById = function() {
          var TargetResource = $injector.get("Tournament");
          var action = TargetResource["::destroyById::Season::tournaments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.tournaments#findById
         * @methodOf lbServices.Season.tournaments
         *
         * @description
         *
         * Find a related item by id for tournaments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tournaments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tournament` object.)
         * </em>
         */
        R.tournaments.findById = function() {
          var TargetResource = $injector.get("Tournament");
          var action = TargetResource["::findById::Season::tournaments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Season.tournaments#updateById
         * @methodOf lbServices.Season.tournaments
         *
         * @description
         *
         * Update a related item by id for tournaments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tournaments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tournament` object.)
         * </em>
         */
        R.tournaments.updateById = function() {
          var TargetResource = $injector.get("Tournament");
          var action = TargetResource["::updateById::Season::tournaments"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Contribution
 * @header lbServices.Contribution
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Contribution` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Contribution",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/contributions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Contribution.member() instead.
        "prototype$__get__member": {
          url: urlBase + "/contributions/:id/member",
          method: "GET"
        },

        // INTERNAL. Use Contribution.season() instead.
        "prototype$__get__season": {
          url: urlBase + "/contributions/:id/season",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#create
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/contributions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#createMany
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/contributions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#upsert
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/contributions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#exists
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/contributions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#findById
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/contributions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#find
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/contributions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#findOne
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/contributions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#updateAll
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/contributions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#deleteById
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/contributions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#count
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/contributions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#prototype$updateAttributes
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/contributions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#createChangeStream
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/contributions/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Member.contributions.findById() instead.
        "::findById::Member::contributions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/contributions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Member.contributions.destroyById() instead.
        "::destroyById::Member::contributions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/contributions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.contributions.updateById() instead.
        "::updateById::Member::contributions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/contributions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.contributions() instead.
        "::get::Member::contributions": {
          isArray: true,
          url: urlBase + "/members/:id/contributions",
          method: "GET"
        },

        // INTERNAL. Use Member.contributions.create() instead.
        "::create::Member::contributions": {
          url: urlBase + "/members/:id/contributions",
          method: "POST"
        },

        // INTERNAL. Use Member.contributions.createMany() instead.
        "::createMany::Member::contributions": {
          isArray: true,
          url: urlBase + "/members/:id/contributions",
          method: "POST"
        },

        // INTERNAL. Use Member.contributions.destroyAll() instead.
        "::delete::Member::contributions": {
          url: urlBase + "/members/:id/contributions",
          method: "DELETE"
        },

        // INTERNAL. Use Member.contributions.count() instead.
        "::count::Member::contributions": {
          url: urlBase + "/members/:id/contributions/count",
          method: "GET"
        },

        // INTERNAL. Use Season.contributions.findById() instead.
        "::findById::Season::contributions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/contributions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Season.contributions.destroyById() instead.
        "::destroyById::Season::contributions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/contributions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Season.contributions.updateById() instead.
        "::updateById::Season::contributions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/contributions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Season.contributions() instead.
        "::get::Season::contributions": {
          isArray: true,
          url: urlBase + "/seasons/:id/contributions",
          method: "GET"
        },

        // INTERNAL. Use Season.contributions.create() instead.
        "::create::Season::contributions": {
          url: urlBase + "/seasons/:id/contributions",
          method: "POST"
        },

        // INTERNAL. Use Season.contributions.createMany() instead.
        "::createMany::Season::contributions": {
          isArray: true,
          url: urlBase + "/seasons/:id/contributions",
          method: "POST"
        },

        // INTERNAL. Use Season.contributions.destroyAll() instead.
        "::delete::Season::contributions": {
          url: urlBase + "/seasons/:id/contributions",
          method: "DELETE"
        },

        // INTERNAL. Use Season.contributions.count() instead.
        "::count::Season::contributions": {
          url: urlBase + "/seasons/:id/contributions/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Contribution#updateOrCreate
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Contribution#update
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Contribution#destroyById
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Contribution#removeById
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Contribution#modelName
    * @propertyOf lbServices.Contribution
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Contribution`.
    */
    R.modelName = "Contribution";


        /**
         * @ngdoc method
         * @name lbServices.Contribution#member
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Fetches belongsTo relation member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R.member = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::get::Contribution::member"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Contribution#season
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Fetches belongsTo relation season.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Season` object.)
         * </em>
         */
        R.season = function() {
          var TargetResource = $injector.get("Season");
          var action = TargetResource["::get::Contribution::season"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Tournament
 * @header lbServices.Tournament
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Tournament` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Tournament",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Tournaments/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Tournament.season() instead.
        "prototype$__get__season": {
          url: urlBase + "/Tournaments/:id/season",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tournament#create
         * @methodOf lbServices.Tournament
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tournament` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Tournaments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tournament#createMany
         * @methodOf lbServices.Tournament
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tournament` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Tournaments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tournament#upsert
         * @methodOf lbServices.Tournament
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tournament` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Tournaments",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tournament#exists
         * @methodOf lbServices.Tournament
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Tournaments/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tournament#findById
         * @methodOf lbServices.Tournament
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tournament` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Tournaments/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tournament#find
         * @methodOf lbServices.Tournament
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tournament` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Tournaments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tournament#findOne
         * @methodOf lbServices.Tournament
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tournament` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Tournaments/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tournament#updateAll
         * @methodOf lbServices.Tournament
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Tournaments/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tournament#deleteById
         * @methodOf lbServices.Tournament
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Tournaments/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tournament#count
         * @methodOf lbServices.Tournament
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Tournaments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tournament#prototype$updateAttributes
         * @methodOf lbServices.Tournament
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tournament` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Tournaments/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tournament#createChangeStream
         * @methodOf lbServices.Tournament
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Tournaments/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tournament#createWithRanks
         * @methodOf lbServices.Tournament
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `tournament` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `tournament` – `{object=}` - 
         */
        "createWithRanks": {
          url: urlBase + "/Tournaments/createWithRanks",
          method: "POST"
        },

        // INTERNAL. Use Season.tournaments.findById() instead.
        "::findById::Season::tournaments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/tournaments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Season.tournaments.destroyById() instead.
        "::destroyById::Season::tournaments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/tournaments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Season.tournaments.updateById() instead.
        "::updateById::Season::tournaments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/seasons/:id/tournaments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Season.tournaments() instead.
        "::get::Season::tournaments": {
          isArray: true,
          url: urlBase + "/seasons/:id/tournaments",
          method: "GET"
        },

        // INTERNAL. Use Season.tournaments.create() instead.
        "::create::Season::tournaments": {
          url: urlBase + "/seasons/:id/tournaments",
          method: "POST"
        },

        // INTERNAL. Use Season.tournaments.createMany() instead.
        "::createMany::Season::tournaments": {
          isArray: true,
          url: urlBase + "/seasons/:id/tournaments",
          method: "POST"
        },

        // INTERNAL. Use Season.tournaments.destroyAll() instead.
        "::delete::Season::tournaments": {
          url: urlBase + "/seasons/:id/tournaments",
          method: "DELETE"
        },

        // INTERNAL. Use Season.tournaments.count() instead.
        "::count::Season::tournaments": {
          url: urlBase + "/seasons/:id/tournaments/count",
          method: "GET"
        },

        // INTERNAL. Use Participation.tournament() instead.
        "::get::Participation::tournament": {
          url: urlBase + "/Participations/:id/tournament",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Tournament#updateOrCreate
         * @methodOf lbServices.Tournament
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tournament` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Tournament#update
         * @methodOf lbServices.Tournament
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Tournament#destroyById
         * @methodOf lbServices.Tournament
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Tournament#removeById
         * @methodOf lbServices.Tournament
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Tournament#modelName
    * @propertyOf lbServices.Tournament
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Tournament`.
    */
    R.modelName = "Tournament";


        /**
         * @ngdoc method
         * @name lbServices.Tournament#season
         * @methodOf lbServices.Tournament
         *
         * @description
         *
         * Fetches belongsTo relation season.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Season` object.)
         * </em>
         */
        R.season = function() {
          var TargetResource = $injector.get("Season");
          var action = TargetResource["::get::Tournament::season"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.SeasonRanking
 * @header lbServices.SeasonRanking
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SeasonRanking` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "SeasonRanking",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/SeasonRankings/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use SeasonRanking.member() instead.
        "prototype$__get__member": {
          url: urlBase + "/SeasonRankings/:id/member",
          method: "GET"
        },

        // INTERNAL. Use SeasonRanking.season() instead.
        "prototype$__get__season": {
          url: urlBase + "/SeasonRankings/:id/season",
          method: "GET"
        },

        // INTERNAL. Use SeasonRanking.participations.findById() instead.
        "prototype$__findById__participations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SeasonRankings/:id/participations/:fk",
          method: "GET"
        },

        // INTERNAL. Use SeasonRanking.participations.destroyById() instead.
        "prototype$__destroyById__participations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SeasonRankings/:id/participations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use SeasonRanking.participations.updateById() instead.
        "prototype$__updateById__participations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SeasonRankings/:id/participations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use SeasonRanking.participations() instead.
        "prototype$__get__participations": {
          isArray: true,
          url: urlBase + "/SeasonRankings/:id/participations",
          method: "GET"
        },

        // INTERNAL. Use SeasonRanking.participations.create() instead.
        "prototype$__create__participations": {
          url: urlBase + "/SeasonRankings/:id/participations",
          method: "POST"
        },

        // INTERNAL. Use SeasonRanking.participations.destroyAll() instead.
        "prototype$__delete__participations": {
          url: urlBase + "/SeasonRankings/:id/participations",
          method: "DELETE"
        },

        // INTERNAL. Use SeasonRanking.participations.count() instead.
        "prototype$__count__participations": {
          url: urlBase + "/SeasonRankings/:id/participations/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#create
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SeasonRanking` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/SeasonRankings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#createMany
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SeasonRanking` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/SeasonRankings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#upsert
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SeasonRanking` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/SeasonRankings",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#exists
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/SeasonRankings/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#findById
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SeasonRanking` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/SeasonRankings/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#find
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SeasonRanking` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/SeasonRankings",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#findOne
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SeasonRanking` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/SeasonRankings/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#updateAll
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/SeasonRankings/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#deleteById
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/SeasonRankings/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#count
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/SeasonRankings/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#prototype$updateAttributes
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SeasonRanking` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/SeasonRankings/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#createChangeStream
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/SeasonRankings/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Member.seasonRankings.findById() instead.
        "::findById::Member::seasonRankings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/seasonRankings/:fk",
          method: "GET"
        },

        // INTERNAL. Use Member.seasonRankings.destroyById() instead.
        "::destroyById::Member::seasonRankings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/seasonRankings/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.seasonRankings.updateById() instead.
        "::updateById::Member::seasonRankings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/members/:id/seasonRankings/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.seasonRankings() instead.
        "::get::Member::seasonRankings": {
          isArray: true,
          url: urlBase + "/members/:id/seasonRankings",
          method: "GET"
        },

        // INTERNAL. Use Member.seasonRankings.create() instead.
        "::create::Member::seasonRankings": {
          url: urlBase + "/members/:id/seasonRankings",
          method: "POST"
        },

        // INTERNAL. Use Member.seasonRankings.createMany() instead.
        "::createMany::Member::seasonRankings": {
          isArray: true,
          url: urlBase + "/members/:id/seasonRankings",
          method: "POST"
        },

        // INTERNAL. Use Member.seasonRankings.destroyAll() instead.
        "::delete::Member::seasonRankings": {
          url: urlBase + "/members/:id/seasonRankings",
          method: "DELETE"
        },

        // INTERNAL. Use Member.seasonRankings.count() instead.
        "::count::Member::seasonRankings": {
          url: urlBase + "/members/:id/seasonRankings/count",
          method: "GET"
        },

        // INTERNAL. Use Participation.seasonRanking() instead.
        "::get::Participation::seasonRanking": {
          url: urlBase + "/Participations/:id/seasonRanking",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#updateOrCreate
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SeasonRanking` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#update
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#destroyById
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#removeById
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.SeasonRanking#modelName
    * @propertyOf lbServices.SeasonRanking
    * @description
    * The name of the model represented by this $resource,
    * i.e. `SeasonRanking`.
    */
    R.modelName = "SeasonRanking";


        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#member
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Fetches belongsTo relation member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R.member = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::get::SeasonRanking::member"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#season
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Fetches belongsTo relation season.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Season` object.)
         * </em>
         */
        R.season = function() {
          var TargetResource = $injector.get("Season");
          var action = TargetResource["::get::SeasonRanking::season"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.SeasonRanking.participations
     * @header lbServices.SeasonRanking.participations
     * @object
     * @description
     *
     * The object `SeasonRanking.participations` groups methods
     * manipulating `Participation` instances related to `SeasonRanking`.
     *
     * Call {@link lbServices.SeasonRanking#participations SeasonRanking.participations()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking#participations
         * @methodOf lbServices.SeasonRanking
         *
         * @description
         *
         * Queries participations of SeasonRanking.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participation` object.)
         * </em>
         */
        R.participations = function() {
          var TargetResource = $injector.get("Participation");
          var action = TargetResource["::get::SeasonRanking::participations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking.participations#count
         * @methodOf lbServices.SeasonRanking.participations
         *
         * @description
         *
         * Counts participations of SeasonRanking.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.participations.count = function() {
          var TargetResource = $injector.get("Participation");
          var action = TargetResource["::count::SeasonRanking::participations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking.participations#create
         * @methodOf lbServices.SeasonRanking.participations
         *
         * @description
         *
         * Creates a new instance in participations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participation` object.)
         * </em>
         */
        R.participations.create = function() {
          var TargetResource = $injector.get("Participation");
          var action = TargetResource["::create::SeasonRanking::participations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking.participations#createMany
         * @methodOf lbServices.SeasonRanking.participations
         *
         * @description
         *
         * Creates a new instance in participations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participation` object.)
         * </em>
         */
        R.participations.createMany = function() {
          var TargetResource = $injector.get("Participation");
          var action = TargetResource["::createMany::SeasonRanking::participations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking.participations#destroyAll
         * @methodOf lbServices.SeasonRanking.participations
         *
         * @description
         *
         * Deletes all participations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.participations.destroyAll = function() {
          var TargetResource = $injector.get("Participation");
          var action = TargetResource["::delete::SeasonRanking::participations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking.participations#destroyById
         * @methodOf lbServices.SeasonRanking.participations
         *
         * @description
         *
         * Delete a related item by id for participations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for participations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.participations.destroyById = function() {
          var TargetResource = $injector.get("Participation");
          var action = TargetResource["::destroyById::SeasonRanking::participations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking.participations#findById
         * @methodOf lbServices.SeasonRanking.participations
         *
         * @description
         *
         * Find a related item by id for participations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for participations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participation` object.)
         * </em>
         */
        R.participations.findById = function() {
          var TargetResource = $injector.get("Participation");
          var action = TargetResource["::findById::SeasonRanking::participations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SeasonRanking.participations#updateById
         * @methodOf lbServices.SeasonRanking.participations
         *
         * @description
         *
         * Update a related item by id for participations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for participations
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participation` object.)
         * </em>
         */
        R.participations.updateById = function() {
          var TargetResource = $injector.get("Participation");
          var action = TargetResource["::updateById::SeasonRanking::participations"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Participation
 * @header lbServices.Participation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Participation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Participation",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Participations/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Participation.tournament() instead.
        "prototype$__get__tournament": {
          url: urlBase + "/Participations/:id/tournament",
          method: "GET"
        },

        // INTERNAL. Use Participation.seasonRanking() instead.
        "prototype$__get__seasonRanking": {
          url: urlBase + "/Participations/:id/seasonRanking",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participation#create
         * @methodOf lbServices.Participation
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participation` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Participations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participation#createMany
         * @methodOf lbServices.Participation
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participation` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Participations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participation#upsert
         * @methodOf lbServices.Participation
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participation` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Participations",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participation#exists
         * @methodOf lbServices.Participation
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Participations/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participation#findById
         * @methodOf lbServices.Participation
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participation` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Participations/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participation#find
         * @methodOf lbServices.Participation
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participation` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Participations",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participation#findOne
         * @methodOf lbServices.Participation
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participation` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Participations/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participation#updateAll
         * @methodOf lbServices.Participation
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Participations/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participation#deleteById
         * @methodOf lbServices.Participation
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Participations/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participation#count
         * @methodOf lbServices.Participation
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Participations/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participation#prototype$updateAttributes
         * @methodOf lbServices.Participation
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participation` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Participations/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participation#createChangeStream
         * @methodOf lbServices.Participation
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Participations/change-stream",
          method: "POST"
        },

        // INTERNAL. Use SeasonRanking.participations.findById() instead.
        "::findById::SeasonRanking::participations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SeasonRankings/:id/participations/:fk",
          method: "GET"
        },

        // INTERNAL. Use SeasonRanking.participations.destroyById() instead.
        "::destroyById::SeasonRanking::participations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SeasonRankings/:id/participations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use SeasonRanking.participations.updateById() instead.
        "::updateById::SeasonRanking::participations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SeasonRankings/:id/participations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use SeasonRanking.participations() instead.
        "::get::SeasonRanking::participations": {
          isArray: true,
          url: urlBase + "/SeasonRankings/:id/participations",
          method: "GET"
        },

        // INTERNAL. Use SeasonRanking.participations.create() instead.
        "::create::SeasonRanking::participations": {
          url: urlBase + "/SeasonRankings/:id/participations",
          method: "POST"
        },

        // INTERNAL. Use SeasonRanking.participations.createMany() instead.
        "::createMany::SeasonRanking::participations": {
          isArray: true,
          url: urlBase + "/SeasonRankings/:id/participations",
          method: "POST"
        },

        // INTERNAL. Use SeasonRanking.participations.destroyAll() instead.
        "::delete::SeasonRanking::participations": {
          url: urlBase + "/SeasonRankings/:id/participations",
          method: "DELETE"
        },

        // INTERNAL. Use SeasonRanking.participations.count() instead.
        "::count::SeasonRanking::participations": {
          url: urlBase + "/SeasonRankings/:id/participations/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Participation#updateOrCreate
         * @methodOf lbServices.Participation
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participation` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Participation#update
         * @methodOf lbServices.Participation
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Participation#destroyById
         * @methodOf lbServices.Participation
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Participation#removeById
         * @methodOf lbServices.Participation
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Participation#modelName
    * @propertyOf lbServices.Participation
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Participation`.
    */
    R.modelName = "Participation";


        /**
         * @ngdoc method
         * @name lbServices.Participation#tournament
         * @methodOf lbServices.Participation
         *
         * @description
         *
         * Fetches belongsTo relation tournament.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tournament` object.)
         * </em>
         */
        R.tournament = function() {
          var TargetResource = $injector.get("Tournament");
          var action = TargetResource["::get::Participation::tournament"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Participation#seasonRanking
         * @methodOf lbServices.Participation
         *
         * @description
         *
         * Fetches belongsTo relation seasonRanking.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SeasonRanking` object.)
         * </em>
         */
        R.seasonRanking = function() {
          var TargetResource = $injector.get("SeasonRanking");
          var action = TargetResource["::get::Participation::seasonRanking"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.MyUser
 * @header lbServices.MyUser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `MyUser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "MyUser",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/MyUsers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__findById__accessTokens
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MyUsers/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__destroyById__accessTokens
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MyUsers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__updateById__accessTokens
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MyUsers/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__findById__roles
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Find a related item by id for roles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for roles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "prototype$__findById__roles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MyUsers/:id/roles/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__destroyById__roles
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Delete a related item by id for roles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for roles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__roles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MyUsers/:id/roles/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__updateById__roles
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Update a related item by id for roles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for roles
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "prototype$__updateById__roles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MyUsers/:id/roles/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__link__roles
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Add a related item by id for roles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for roles
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "prototype$__link__roles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MyUsers/:id/roles/rel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__unlink__roles
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Remove the roles relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for roles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__unlink__roles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MyUsers/:id/roles/rel/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__exists__roles
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Check the existence of roles relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for roles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "prototype$__exists__roles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MyUsers/:id/roles/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__findById__roleMappings
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Find a related item by id for roleMappings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for roleMappings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "prototype$__findById__roleMappings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MyUsers/:id/roleMappings/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__destroyById__roleMappings
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Delete a related item by id for roleMappings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for roleMappings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__roleMappings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MyUsers/:id/roleMappings/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__updateById__roleMappings
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Update a related item by id for roleMappings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for roleMappings
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "prototype$__updateById__roleMappings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MyUsers/:id/roleMappings/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__get__accessTokens
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Queries accessTokens of MyUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/MyUsers/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__create__accessTokens
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/MyUsers/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__delete__accessTokens
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/MyUsers/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__count__accessTokens
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Counts accessTokens of MyUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/MyUsers/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__get__roles
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Queries roles of MyUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "prototype$__get__roles": {
          isArray: true,
          url: urlBase + "/MyUsers/:id/roles",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__create__roles
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Creates a new instance in roles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "prototype$__create__roles": {
          url: urlBase + "/MyUsers/:id/roles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__delete__roles
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Deletes all roles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__roles": {
          url: urlBase + "/MyUsers/:id/roles",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__count__roles
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Counts roles of MyUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__roles": {
          url: urlBase + "/MyUsers/:id/roles/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__get__roleMappings
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Queries roleMappings of MyUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "prototype$__get__roleMappings": {
          isArray: true,
          url: urlBase + "/MyUsers/:id/roleMappings",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__create__roleMappings
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Creates a new instance in roleMappings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "prototype$__create__roleMappings": {
          url: urlBase + "/MyUsers/:id/roleMappings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__delete__roleMappings
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Deletes all roleMappings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__roleMappings": {
          url: urlBase + "/MyUsers/:id/roleMappings",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$__count__roleMappings
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Counts roleMappings of MyUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__roleMappings": {
          url: urlBase + "/MyUsers/:id/roleMappings/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#create
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/MyUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#createMany
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/MyUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#upsert
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/MyUsers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#exists
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/MyUsers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#findById
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/MyUsers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#find
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/MyUsers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#findOne
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/MyUsers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#updateAll
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/MyUsers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#deleteById
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/MyUsers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#count
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/MyUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#prototype$updateAttributes
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/MyUsers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#createChangeStream
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/MyUsers/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#login
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/MyUsers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#logout
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/MyUsers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#confirm
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/MyUsers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#resetPassword
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/MyUsers/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.MyUser#getCurrent
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/MyUsers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.MyUser#updateOrCreate
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MyUser` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.MyUser#update
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.MyUser#destroyById
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.MyUser#removeById
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.MyUser#getCachedCurrent
         * @methodOf lbServices.MyUser
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.MyUser#login} or
         * {@link lbServices.MyUser#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A MyUser instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.MyUser#isAuthenticated
         * @methodOf lbServices.MyUser
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.MyUser#getCurrentId
         * @methodOf lbServices.MyUser
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.MyUser#modelName
    * @propertyOf lbServices.MyUser
    * @description
    * The name of the model represented by this $resource,
    * i.e. `MyUser`.
    */
    R.modelName = "MyUser";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
