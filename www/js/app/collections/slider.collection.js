//(function(){
//    var SliderCollection = Backbone.Collection.extend({
//        model : SliderModel,
//        url : 'data/slider.json'
//    });
//})();

define(function(require){
    
    'use strict';
    
    var Backbone = require('backbone');
    
    return  Backbone.Collection.extend({
        model   :  new require('app/models/slider.model'),
        url     : 'data/slider.json'
    });
});


