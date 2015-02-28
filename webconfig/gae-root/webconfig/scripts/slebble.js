var Slebble=function(){"use strict";function e(e){k&&console.log(e)}function t(e){m.style.display="none";var t=document.querySelector("#"+e);t.style.display="block",m=t}function n(){return purl().param("version")}function r(){return k?localStorage.data:purl().param("setting")}function l(){if("1.1.0"===n()){var e=document.querySelector("#startPage");e.innerHTML='<div class="highlight-module  highlight-module--right   highlight-module--learning"><div class="highlight-module__container  icon-exclamation "><div class="highlight-module__content   g-wide--push-1 g-wide--pull-1  g-medium--pull-1   "><p class="highlight-module__title"> New update</p><p class="highlight-module__text"> There is or will be a update very soon for this app. Unload and load the app at My Pebble and hope for a new update! </p></div></div></div>'+e.innerHTML}}function i(){var e=r();void 0!==e&&""!==e&&(e=JSON.parse(e),p=e.route,document.querySelector("#depature-range").value=e.maxDepatures,N.changePerformance(),L.value=e.provider,o())}function o(){v.innerHTML="",0===p.length&&(v.innerHTML="<p>No stations set</p>",b.innerHTML="<p>No stations set</p>");for(var e=0;e<p.length;e++)v.innerHTML+="<li><span>"+p[e].from+'</span><a class="deleteIcon" onclick="Slebble.removeFrom(this)" data-index="'+e+'"><i class="icon icon-close"></i></a></li>';for(b.innerHTML="",e=0;e<p.length;e++)b.innerHTML+="<li>"+p[e].from+'</li><span class="filterSpan">Bus filter </span><input type="text" class="filter-field"  value="'+p[e].filter.join(", ")+'" data-index="'+e+'" '+("true"===p[e].busFilterActive?"":"disabled")+'/><br><label for="filterEnable'+e+'" class="station-filter"><input type="checkbox" id="filterEnable'+e+'" class="filter-enabled" '+("true"===p[e].busFilterActive?"checked":"")+' data-index="'+e+'"/>Enable filter</label></div>';a()}function a(){if(void 0!==p&&p.length>0){y=document.querySelectorAll(".filter-field");for(var e=0;e<y.length;e++)y[e].onchange=x;S=document.querySelectorAll(".station-filter");for(var t=0;t<S.length;t++)S[t].onclick=T}}function c(){return parseInt(q.value)}function u(){var e={};return e.route=p,e.maxDepatures=c(),e.provider=L.value,JSON.stringify(e)}function s(){h.value=""}function d(){var e=document.querySelector("#search-btn").children[0];H(e,"mglass")?(A(e,"mglass"),M(e,"ajax-loader")):(A(e,"ajax-loader"),M(e,"mglass"))}function f(){g.innerHTML="";var e=document.querySelector("#search-field").value;if(!(e.length<2)){d();var t,n=L.value,r="http://diesel-ability-711.appspot.com/"+n+"/";k&&(r="http://localhost:8080/"+n+"/");var l=new XMLHttpRequest;l.open("GET",r+e,!0),l.onload=function(){if(4===l.readyState)if(d(),200===l.status){t=JSON.parse(l.responseText);for(var e=t.result.reverse(),n=e.length-1;n>=0;n--){var r=e[n];g.innerHTML+='<li><a type="button" onclick="Slebble.add(this);" data-id="'+r.id+'">'+r.name+"</a></li>"}}else document.querySelector("#results").innerHTML="<p>Request status: "+l.status+"<p>",console.log("Error"),console.log(l.status)},l.send(null)}}var m=document.querySelector("#startPage"),p=[],g=document.querySelector("#results"),h=document.querySelector("#search-field"),v=document.querySelector("#adding"),b=document.querySelector("#filterAdding"),y=document.querySelectorAll(".filter-field"),S=document.querySelectorAll(".filter-field"),q=document.querySelector("#depature-range"),L=document.querySelector("#provider"),k=!1,x=function(t){e(t);var n=t.srcElement,r=n.getAttribute("data-index");p[r].filter=n.value.split(", ")},T=function(t){e(t);var n=t.srcElement,r=n.getAttribute("data-index");p[r].busFilterActive=n.checked===!0?"true":"false",y[r].disabled="true"!==p[r].busFilterActive},A=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},M=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},H=function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},P=function(){var t="pebblejs://close#"+encodeURIComponent(u());e("Warping to: "+t),e(u()),k?(localStorage.data=u(),alert("Settings saved")):document.location=t},N={};return N.changePerformance=function(){var e=document.querySelector("#performance-display");A(e,"theme--user-input"),A(e,"theme--multi-device-layouts"),A(e,"theme--introduction-to-media");var t=document.querySelector("#depature-range");parseInt(t.value)<=15&&M(e,"theme--user-input"),parseInt(t.value)>15&&M(e,"theme--introduction-to-media"),document.querySelector("#depature-number").textContent=t.value},N.add=function(e){var n={};n.from=e.innerHTML,n.locationid=e.getAttribute("data-id"),n.filter=[],n.busFilterActive="false",p[p.length]=n,o(),t("startPage"),s()},N.enterKeyPress=function(e){13===e.keyCode&&f()},N.removeFrom=function(e){p.splice(e.getAttribute("data-index"),1),o()},N.boot=function(){document.querySelector("#startLink").onclick=function(){t("startPage")},document.querySelector("#searchLink").onclick=function(){t("searchPage")},document.querySelector("#filterLink").onclick=function(){t("filterPage")},document.querySelector("#cancel").onclick=function(){k?alert("closing..."):document.location="pebblejs://close"},document.querySelector("#reset").onclick=function(){k?alert("resetting stuff"):document.location="pebblejs://close#reset"},document.querySelector("#submit").onclick=P,document.querySelector("#submit-toolbar").onclick=P,document.querySelector("#search-btn").onclick=function(e){e.preventDefault(),f()},L.onchange=function(){p=[],o()},t("startPage"),l(),i(),a()},N}();