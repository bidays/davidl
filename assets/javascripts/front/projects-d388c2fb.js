(function(){$(function(){return $("#js-sub-nav--home a").click(function(t){return t.preventDefault(),$("#js-sub-nav--home dd").removeClass("active"),$(this).parent("dd").addClass("active")}),$("#js-mixitup-container").mixItUp({animation:{enable:!1},callbacks:{onMixLoad:function(){$(this).mixItUp("setOptions",{animation:{enable:!0,duration:300,effects:"fade",easing:"cubic-bezier(0.645, 0.045, 0.355, 1)"}})}}})})}).call(this);