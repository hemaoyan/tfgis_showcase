(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-libs~3a9e799d"],{9394:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i("7fae"),o=i("6d8b"),l=i("76a5"),r=i("c7a2"),g=i("861c"),a=i("7837"),c=i("f934"),d=i("6cb7"),h=i("b12f"),u=i("eda2"),b=function(t){function e(){var i=null!==t&&t.apply(this,arguments)||this;return i.type=e.type,i.layoutMode={type:"box",ignoreSize:!0},i}return Object(n["b"])(e,t),e.type="title",e.defaultOption={zlevel:0,z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:0,top:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bold",color:"#464646"},subtextStyle:{fontSize:12,color:"#6E7079"}},e}(d["a"]),p=function(t){function e(){var i=null!==t&&t.apply(this,arguments)||this;return i.type=e.type,i}return Object(n["b"])(e,t),e.prototype.render=function(t,e,i){if(this.group.removeAll(),t.get("show")){var n=this.group,d=t.getModel("textStyle"),h=t.getModel("subtextStyle"),b=t.get("textAlign"),p=o["retrieve2"](t.get("textBaseline"),t.get("textVerticalAlign")),s=new l["a"]({style:Object(a["c"])(d,{text:t.get("text"),fill:d.getTextColor()},{disableBox:!0}),z2:10}),y=s.getBoundingRect(),x=t.get("subtext"),f=new l["a"]({style:Object(a["c"])(h,{text:x,fill:h.getTextColor(),y:y.height+t.get("itemGap"),verticalAlign:"top"},{disableBox:!0}),z2:10}),w=t.get("link"),m=t.get("sublink"),v=t.get("triggerEvent",!0);s.silent=!w&&!v,f.silent=!m&&!v,w&&s.on("click",(function(){Object(u["l"])(w,"_"+t.get("target"))})),m&&f.on("click",(function(){Object(u["l"])(m,"_"+t.get("subtarget"))})),Object(g["a"])(s).eventData=Object(g["a"])(f).eventData=v?{componentType:"title",componentIndex:t.componentIndex}:null,n.add(s),x&&n.add(f);var k=n.getBoundingRect(),O=t.getBoxLayoutParams();O.width=k.width,O.height=k.height;var S=Object(c["g"])(O,{width:i.getWidth(),height:i.getHeight()},t.get("padding"));b||(b=t.get("left")||t.get("right"),"middle"===b&&(b="center"),"right"===b?S.x+=S.width:"center"===b&&(S.x+=S.width/2)),p||(p=t.get("top")||t.get("bottom"),"center"===p&&(p="middle"),"bottom"===p?S.y+=S.height:"middle"===p&&(S.y+=S.height/2),p=p||"top"),n.x=S.x,n.y=S.y,n.markRedraw();var j={align:b,verticalAlign:p};s.setStyle(j),f.setStyle(j),k=n.getBoundingRect();var z=S.margin,B=t.getItemStyle(["color","opacity"]);B.fill=t.get("backgroundColor");var C=new r["a"]({shape:{x:k.x-z[3],y:k.y-z[0],width:k.width+z[1]+z[3],height:k.height+z[0]+z[2],r:t.get("borderRadius")},style:B,subPixelOptimize:!0,silent:!0});n.add(C)}},e.type="title",e}(h["a"]);function s(t){t.registerComponentModel(b),t.registerComponentView(p)}}}]);