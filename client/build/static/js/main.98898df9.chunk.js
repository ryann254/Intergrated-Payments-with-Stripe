(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(22)},22:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),c=n(15),s=n(20),o=n(1),p=n.n(o),u=n(3),i=n.n(u),l=n(16),m=n.n(l),d=n(17),f=n.n(d),h=n(5);n(51),n(52);function k(){var e=p.a.useState({name:"Tesla Roadster",price:64887.98}),t=Object(s.a)(e,1)[0];function n(){return(n=Object(c.a)(r.a.mark(function e(n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("https://intergrated-stripe-app-2.herokuapp.com/checkout",{token:n,product:t});case 2:a=e.sent,"success"===a.data.status?Object(h.a)("Success! Check your email for the receipt",{type:"success"}):Object(h.a)("Something went very wrong",{type:"error"});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}return p.a.createElement("div",{className:"container"},p.a.createElement("div",{className:"product"},p.a.createElement("h1",null,t.name),p.a.createElement("h3",null,"On Sale . $",t.price)),p.a.createElement(m.a,{stripeKey:"pk_test_51HWJtrIxaVsLDMSFMkK03kQHG6KmYBE5PcH3sQsp8doamMfcPFBOCEY8edy6W9ODj5vXDHB5c2Fj5s42MamZ4AyM00jFjUfGb7",token:function(e){return n.apply(this,arguments)},billingAddress:!0,shippingAddress:!0,name:t.name,amount:100*t.price}))}h.a.configure();var w=document.getElementById("root");i.a.render(p.a.createElement(k,null),w)},52:function(e,t,n){}},[[21,1,2]]]);
//# sourceMappingURL=main.98898df9.chunk.js.map