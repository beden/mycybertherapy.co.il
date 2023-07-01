/*!
 DMXzone Bootstrap 5 Collapse
 Version: 1.0.1
 (c) 2021 DMXzone.com
 @build 2021-11-15 12:07:30
 */
dmx.Component("bs5-collapse",{initialData:{collapsed:!0},attributes:{show:{type:Boolean,default:!1}},methods:{toggle:function(){this.instance.toggle()},show:function(){this.instance.show()},hide:function(){this.instance.hide()}},events:{show:Event,shown:Event,hide:Event,hidden:Event},render:function(t){this.$node=t,this.$parse(),this.$node.classList.add("collapse"),this.$node.addEventListener("show.bs.collapse",this.dispatchEvent.bind(this,"show")),this.$node.addEventListener("shown.bs.collapse",this.dispatchEvent.bind(this,"shown")),this.$node.addEventListener("hide.bs.collapse",this.dispatchEvent.bind(this,"hide")),this.$node.addEventListener("hidden.bs.collapse",this.dispatchEvent.bind(this,"hidden")),this.$node.addEventListener("shown.bs.collapse",this.onShown.bind(this)),this.$node.addEventListener("hidden.bs.collapse",this.onHidden.bind(this));var s={toggle:!1};this.$node.hasAttribute("data-bs-parent")&&(s.parent=this.$node.getAttribute("data-bs-parent")),this.instance=new bootstrap.Collapse(this.$node,s),this.update({})},onShown:function(){this.set("collapsed",!1)},onHidden:function(){this.set("collapsed",!0)},update:function(t){t.show!=this.props.show&&(this.instance[this.props.show?"show":"hide"](),this.set("collapsed",!this.props.show))}});
//# sourceMappingURL=../maps/dmxBootstrap5Collapse.js.map
