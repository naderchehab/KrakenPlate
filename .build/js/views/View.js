define(["jquery",".","models/Model","text!templates/heading.html"],function(e,t,n,r){var i=t.View.extend({el:".example",initialize:function(){this.render()},events:{},render:function(){return this.template=_.template(r,{}),this.$el.html(this.template),this}});return i});