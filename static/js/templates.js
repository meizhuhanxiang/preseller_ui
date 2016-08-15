this["gstep"] = this["gstep"] || {};
this["gstep"]["templates"] = this["gstep"]["templates"] || {};
this["gstep"]["templates"]["address"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression, alias2=this.lambda;

  return "\r\n  <div class=\"order addresses\" style=\"\">\r\n    <div class=\"order-inner vertical-middle\">\r\n      <div class=\"order-detail aaddress-detail\" data-id=\""
    + alias1(((helper = (helper = helpers.address_id || (depth0 != null ? depth0.address_id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"address_id","hash":{},"data":data}) : helper)))
    + "\">\r\n        <p>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['default'] : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "        </p>\r\n        <p class=\"detail\">\r\n          "
    + alias1(alias2((depth0 != null ? depth0.country : depth0), depth0))
    + " "
    + alias1(alias2((depth0 != null ? depth0.province : depth0), depth0))
    + " "
    + alias1(alias2((depth0 != null ? depth0.region : depth0), depth0))
    + " "
    + alias1(alias2((depth0 != null ? depth0.address : depth0), depth0))
    + "\r\n        </p>\r\n      </div>\r\n      <div class=\"price vertical-middle\">\r\n        <img src=\"/static/img/edit.png\" alt=\"\" style=\"width:0.2rem\" class=\"address_edit\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n";
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "          <span class=\"default\">【默认】</span><span class=\"name\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span><span class=\"phone\">"
    + alias2(alias1((depth0 != null ? depth0.phone : depth0), depth0))
    + "</span>\r\n";
},"4":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "          <span class=\"name\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span><span class=\"phone\">"
    + alias2(alias1((depth0 != null ? depth0.phone : depth0), depth0))
    + "</span>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.res : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["gstep"]["templates"]["commodity"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <li class=\"recomand_item\" style=\"\">\r\n    <div class=\"img\"><img src=\"/static/img/user2.png\" alt=\"\"></div>\r\n    <div class=\"user_context\">\r\n      <p><span>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "  | </span>"
    + alias3(((helper = (helper = helpers.job || (depth0 != null ? depth0.job : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"job","hash":{},"data":data}) : helper)))
    + "</p>\r\n      <p class=\"small text-nowrap\">"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n  </li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"productTitle\">\r\n  <h1 class=\"title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n  <div class=\"sub_wrapper\">\r\n    <div class=\"in left\">\r\n      <span class=\"bracket\"></span>\r\n      <span class=\"line\"></span>\r\n    </div>\r\n    <h2 class=\"subheading\">"
    + alias3(((helper = (helper = helpers.brief || (depth0 != null ? depth0.brief : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"brief","hash":{},"data":data}) : helper)))
    + "</h2>\r\n    <div class=\"in right\">\r\n      <span class=\"bracket\"></span>\r\n      <span class=\"line\"></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"productImg\">\r\n  <img src=\"/static/img/title.png\" alt=\"\">\r\n</div>\r\n<div class=\"product-info\">\r\n  <div class=\"product-info-title\">\r\n    <div class=\"line\"></div>\r\n    <div class=\"product-info-count\">\r\n      <p class=\"total_count\">预售"
    + alias3(((helper = (helper = helpers.presell_count || (depth0 != null ? depth0.presell_count : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"presell_count","hash":{},"data":data}) : helper)))
    + "件</p>\r\n      <p class=\"min_count\">满"
    + alias3(((helper = (helper = helpers.satisfy_count || (depth0 != null ? depth0.satisfy_count : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"satisfy_count","hash":{},"data":data}) : helper)))
    + "件发货</p>\r\n    </div>\r\n    <div class=\"product-info-price\"><span class=\"unit\">$</span><span class=\"price\">86</span></div>\r\n  </div>\r\n\r\n  <div class=\"product-info-progress\">\r\n    <div class=\"progress-wrapper\">\r\n      <div class=\"progress-inner\" style=\"width="
    + alias3(((helper = (helper = helpers.sold_count || (depth0 != null ? depth0.sold_count : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sold_count","hash":{},"data":data}) : helper)))
    + "%\"></div>\r\n    </div>\r\n    <div class=\"progress-text\">"
    + alias3(((helper = (helper = helpers.sold_count || (depth0 != null ? depth0.sold_count : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sold_count","hash":{},"data":data}) : helper)))
    + " / 100</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"product_company area\">\r\n  <div class=\"logo\"><img src=\"/static/img/logo.png\" alt=\"\"></div>\r\n  <div class=\"company_text\">"
    + alias3(((helper = (helper = helpers.publisher || (depth0 != null ? depth0.publisher : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"publisher","hash":{},"data":data}) : helper)))
    + "</div>\r\n  <div class=\"instruction\">品牌方</div>\r\n  <div class=\"arrow\">\r\n  </div>\r\n</div>\r\n\r\n<div class=\"pre_rule area\">\r\n  <div class=\"splitbar\">预售规则</div>\r\n  <div class=\"arrow\">\r\n  </div>\r\n</div>\r\n\r\n<div class=\"recomand area\">\r\n  <div class=\"splitbar\">靠谱推荐</div>\r\n</div>\r\n\r\n<ul class=\"recomand_items\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.recommends : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\r\n<div class=\"company-info\">\r\n  <div class=\"title area\">\r\n    <div class=\"splitbar\">商品信息</div>\r\n  </div>\r\n</div>";
},"useData":true});
this["gstep"]["templates"]["purchase_detail"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"choose_type choose_property\">\r\n  <div class=\"choose_title\">\r\n    "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n  </div>\r\n  <div class=\"choose_items\" data-name=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>\r\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0,(data && data.index),0,{"name":"compare","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "    <!-- <div class=\"choose_item\">灰色</div> -->\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "    <div class=\"choose_item choose\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</div>\r\n";
},"5":function(depth0,helpers,partials,data) {
    return "    <div class=\"choose_item\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\r\n<div class=\"order\">\r\n  <div class=\"order-inner vertical-middle\">\r\n    <div class=\"order-img show\">\r\n      <img src=\"/static/"
    + alias3(((helper = (helper = helpers.navigation_img || (depth0 != null ? depth0.navigation_img : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"navigation_img","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" />\r\n      <!-- <input type=\"checkbox\" name=\"\" id=\"\"> -->\r\n    </div>\r\n    <div class=\"order-detail\">\r\n      <p>\r\n        "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n      </p>\r\n      <p class=\"\">\r\n        <span>￥"
    + alias3(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + "</span>\r\n      </p>\r\n    </div>\r\n    <div class=\"close\">\r\n      <img src=\"/static/img/close.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.properties : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"choose_type choose_number\">\r\n  <div class=\"choose_title\">\r\n    购买数量\r\n  </div>\r\n  <div class=\"choose_items\">\r\n    <div class=\"operation minus\">\r\n      -\r\n    </div>\r\n    <div class=\"number_show\">\r\n      "
    + alias3(((helper = (helper = helpers.unit || (depth0 != null ? depth0.unit : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"unit","hash":{},"data":data}) : helper)))
    + "\r\n    </div>\r\n    <div class=\"operation add\">\r\n      +\r\n    </div>\r\n  </div>\r\n</div>\r\n<a class=\"order-footer order-detail-footer\">\r\n  确定\r\n</a>\r\n";
},"useData":true});
this["gstep"]["templates"]["test"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<footer>"
    + this.escapeExpression(((helper = (helper = helpers.footer || (depth0 != null ? depth0.footer : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"footer","hash":{},"data":data}) : helper)))
    + "</footer>";
},"useData":true});
this["gstep"]["templates"]["make_order"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "\r\n<div class=\"order\" data-cart=\""
    + alias2(alias1((depth0 != null ? depth0.cart_id : depth0), depth0))
    + "\">\r\n  <div class=\"order-inner vertical-middle\">\r\n    <div class=\"order-img show\">\r\n      <img src=\"\" alt=\"\" />\r\n      <!-- <input type=\"checkbox\" name=\"\" id=\"\"> -->\r\n    </div>\r\n    <div class=\"order-detail\">\r\n      <p>\r\n        G-STEP冬季卫衣\r\n      </p>\r\n      <p class=\"detail\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.properties : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </p>\r\n    </div>\r\n    <div class=\"price vertical-middle\">\r\n      <p>\r\n        ￥"
    + alias2(alias1((depth0 != null ? depth0.price : depth0), depth0))
    + "\r\n      </p>\r\n      <p>\r\n        ×"
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + "\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n";
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <span>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + ": "
    + alias2(alias1((depth0 != null ? depth0.type : depth0), depth0))
    + "</span>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.res : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["gstep"]["templates"]["purchase"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "\r\n <div class=\"order\" data-cart=\""
    + alias2(alias1((depth0 != null ? depth0.cart_id : depth0), depth0))
    + "\" data-seed=\""
    + alias2(alias1((depth0 != null ? depth0.seed_id : depth0), depth0))
    + "\" data-total=\""
    + alias2(alias1((depth0 != null ? depth0.total_price : depth0), depth0))
    + "\">\r\n  <div class=\"order-inner vertical-middle\">\r\n    <div class=\"\">\r\n      <!-- <input type=\"checkbox\" name=\"\" id=\"\"> -->\r\n      <div class=\"checkbox checksimple\">\r\n        <img src=\"\" alt=\"\" />\r\n      </div>\r\n      <!-- <input type=\"checkbox\" name=\"\" id=\"\"> -->\r\n    </div>\r\n    <div class=\"order-img\">\r\n      <img src=\"\" alt=\"\" />\r\n      <!-- <input type=\"checkbox\" name=\"\" id=\"\"> -->\r\n    </div>\r\n    <div class=\"order-detail\">\r\n      <p>\r\n        G-STEP冬季卫衣\r\n      </p>\r\n      <p class=\"detail\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.properties : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </p>\r\n    </div>\r\n    <div class=\"price vertical-middle\">\r\n      <p>\r\n        ￥"
    + alias2(alias1((depth0 != null ? depth0.price : depth0), depth0))
    + "\r\n      </p>\r\n      <p>\r\n        ×"
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + "\r\n      </p>\r\n      <p class=\"close_order\">\r\n        <img src=\"/static/img/close.png\" alt=\"\" />\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n";
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <span>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + ": "
    + alias2(alias1((depth0 != null ? depth0.type : depth0), depth0))
    + "</span>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.res : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});