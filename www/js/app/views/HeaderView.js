
define(function(require){

    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        bootstrap = require('bootstrap'),
        Backbone  = require('backbone');

    return Backbone.View.extend({
        initialize : function(){
            var self = this;
            self.render();
        },
        render : function(){
            var self = this;

            var template = require('text!app/templates/Header.html');
            self.$el.prepend(template);

            //self.$('.carousel').carousel({
            //    interval: 2000
            //});

            return self;
        }
    });
});