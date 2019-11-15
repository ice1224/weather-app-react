(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(3),c=a.n(o),i=(a(15),a(16),a(1)),s=a.n(i),l=a(4),m=a(5),u=a(6),d=a(8),p=a(7),h=a(9),y=function(e){return n.a.createElement("div",null,n.a.createElement("h1",{className:"title-container__title"},"Weather App"),n.a.createElement("p",{className:"title-container__subtitle"},"Get current weather simply and accurately"),n.a.createElement("button",{className:"scroll_down_button d-block d-md-none",onClick:e.scrollToForm},n.a.createElement("i",{className:"fas fa-chevron-down"})))},w=function(e){return n.a.createElement("form",{onSubmit:e.getWeather},n.a.createElement("input",{type:"text",name:"city",placeholder:"City"}),n.a.createElement("input",{type:"text",name:"country",placeholder:"Country"}),n.a.createElement("button",null,"Get Weather!"))},v=function(e){return n.a.createElement("div",{className:"weather__info"},e.city&&e.country&&n.a.createElement("p",{className:"weather__key"},"Location:",n.a.createElement("span",{className:"weather__value"}," ",e.city,", ",e.country)),e.temperature&&n.a.createElement("p",{className:"weather__key"},"Temperature:",n.a.createElement("span",{className:"weather__value"}," ",e.temperature,"\xb0C")),e.humidity&&n.a.createElement("p",{className:"weather__key"},"Humidity:",n.a.createElement("span",{className:"weather__value"}," ",e.humidity,"%")),e.wind&&n.a.createElement("p",{className:"weather__key"},"Wind:",n.a.createElement("span",{className:"weather__value"}," ",e.wind,"m/s")),e.description&&n.a.createElement("p",{className:"weather__key"},"Condition:",n.a.createElement("span",{className:"weather__value"}," ",e.description)),e.error&&n.a.createElement("p",{className:"weather__error"},e.error))},f="b4195a6ab2f69228045387b160d8ed7e",E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={city:void 0,country:void 0,temperature:void 0,humidity:void 0,wind:void 0,description:void 0,error:void 0},a.getWeather=function(){var e=Object(l.a)(s.a.mark((function e(t){var r,n,o,c,i,l,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.elements.city.value,n=t.target.elements.country.value,e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(r,",").concat(n,"&appid=").concat(f,"&units=metric"));case 5:return o=e.sent,e.next=8,o.json();case 8:200===(c=e.sent).cod?a.setState({city:c.name,country:c.sys.country,temperature:c.main.temp,humidity:c.main.humidity,wind:c.wind.speed,description:c.weather[0].main,error:""}):a.setState({city:void 0,country:void 0,temperature:void 0,humidity:void 0,wind:void 0,description:void 0,error:"Please enter the correct location"}),i=document.getElementsByClassName("weather__info")[0],l=i.parentNode,m=l.offsetTop+i.offsetTop,window.scrollTo({top:m,behavior:"smooth"});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"scrollToForm",value:function(){var e=document.getElementsByClassName("form-container")[0].offsetTop;window.scrollTo({top:e,behavior:"smooth"})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-5 title-container"},n.a.createElement(y,{scrollToForm:this.scrollToForm})),n.a.createElement("div",{className:"col-md-7 form-container"},n.a.createElement(w,{getWeather:this.getWeather}),n.a.createElement(v,{city:this.state.city,country:this.state.country,temperature:this.state.temperature,humidity:this.state.humidity,wind:this.state.wind,description:this.state.description,error:this.state.error})))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.7add705b.chunk.js.map