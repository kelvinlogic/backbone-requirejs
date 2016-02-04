define(function(require){

    'use strict';

    var Backbone = require('backbone');

    return  Backbone.Model.extend({
        defaults: {
            imageLink: 'img/1.jpg',
            title : 'landscape'
        }
    });
});