(window.webpackJsonp=window.webpackJsonp||[]).push([[11,20],{Dtc0:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),o=t.n(r),u=t("6uTu"),a=t("Xz8f"),i=t("TCHT");n.default=function(e){return o.a.createElement(u.a,null,o.a.createElement(a.a,{sketch:i.default}))}},TCHT:function(e,n,t){"use strict";function r(e){var n,t,r=e.windowWidth*e.windowHeight/19e3,o=[],u=[];e.preload=function(){},e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),n=e.random(0,e.width),t=e.random(0,e.height);for(var a=e.radians(18),i=0;i<20;i++)o.push(e.cos(a*i)*r),u.push(e.sin(a*i)*r);e.stroke(255,100,0,70),e.background(0),e.noFill()},e.draw=function(){e.beginShape(),e.curveVertex(n+o[0],t+u[0]),e.curveVertex(n+o[19],t+u[19]);for(var r=0;r<20;r++)e.curveVertex(n+o[r],t+u[r]);e.curveVertex(n+o[1],t+u[1]),e.endShape(),n+=.01*(e.mouseX-n),t+=.01*(e.mouseY-t)},e.mousePressed=function(){n=e.mouseX,t=e.mouseY,function(){for(var n=0;n<20;n++)o[n]+=e.random(-1,1),u[n]+=e.random(-1,1)}()}}t.r(n),t.d(n,"default",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-index-jsx-38563d44d11ee60c2c0b.js.map