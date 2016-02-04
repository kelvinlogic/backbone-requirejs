require.config({

    baseUrl : 'js',
    paths: {
        app :  'app',
        jquery: 'lib/jquery',
        underscore: 'lib/underscore-min',
        backbone: 'lib/backbone-min',
        bootstrap: 'lib/bootstrap.min',
        text: "lib/text-2.0.13"
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            'deps': ['jquery']
        }
    }
});


define(function(require){

    var Backbone = require('backbone');
    var $  = require('jquery');

    var sliderCollection = require('app/collections/slider.collection');
    var  SliderView = require('app/views/slider.view');

    $(document).ready(function(){

        return new SliderView({
            el : 'div.image-slider',
            collection : new sliderCollection()
        });
    });

});