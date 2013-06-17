this["JST"] = this["JST"] || {};

this["JST"]["hello.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<h1>Hello App!</h1>';}return __p};

this["JST"]["layout.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="app">\n\t<div id="menu"></div>\n\t<div id="content"></div>\n</div>';}return __p};

this["JST"]["menu.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<ul class="nav">\n<li>Login</li>\n<li>Sign Up</li>\n</ul>';}return __p};
var demo = demo || {};
demo.Hello = Backbone.Marionette.ItemView.extend({
	template: function(){
		return window.JST["hello.html"];
	}
});
demo.Menu = Backbone.Marionette.ItemView.extend({
	template: function(){
		return window.JST["menu.html"];
	},
	events:{
		"click li": "alertit"
	},
	alertit: function(e){
		alert($(e.target).html());
	}
});
demo.Layout = Backbone.Marionette.Layout.extend({
  template: function(){
	return window.JST["layout.html"];
  },
  regions: {
    menu: "#menu",
    content: "#content"
  }
});
demo.App = Backbone.Marionette.Application.extend({

});
var app = new demo.App();

app.addRegions({
	"mainRegion": "#application"
});

app.addInitializer(function(){
	app.layout = new demo.Layout();
	app.mainRegion.show(app.layout);
	app.layout.menu.show(new demo.Menu());
	app.layout.content.show(new demo.Hello());
	
});

app.start();