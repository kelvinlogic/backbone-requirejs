
define(function(require){

    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        bootstrap = require('bootstrap'),
        Backbone  = require('backbone');

    return Backbone.View.extend({
        initialize : function(){
            var self = this;
            self.collection.on('sync', function(){
                self.render();
            });

            self.collection.fetch();
        },
        render : function(){
            var self = this;
            var _carouselDataArray = [];

            self.collection.forEach(function(model, index){
                _carouselDataArray.push({
                    imageLink : model.get('imageLink'),
                    title     : model.get('title')
                });
            });

            //var template = $('#slider-template').html();
            var template = require('text!app/templates/Slider.html');
            self.$el.html(
                _.template(template, {
                    collection : _carouselDataArray
                })
            );

            self.$('.carousel').carousel({
                interval: 2000
            });

            return self;
        }
    });
});