/*! http://www.imgix.com imgix.js - v1.2.0 - 2015-10-07 */
function toggle(t){var e=document.getElementById(t);e.classList.toggle("is-active"),console.log("toggle"+e)}(function(){function t(){Object.freeze||(Object.freeze=function(t){return t}),Array.prototype.filter||(Array.prototype.filter=function(t){if(void 0===this||null===this)throw new TypeError;var e=Object(this),r=e.length>>>0;if("function"!=typeof t)throw new TypeError;for(var n=[],i=arguments.length>=2?arguments[1]:void 0,a=0;r>a;a++)if(a in e){var o=e[a];t.call(i,o,a,e)&&n.push(o)}return n}),Array.prototype.map||(Array.prototype.map=function(t,e){var r,n,i;if(null==this)throw new TypeError(" this is null or not defined");var a=Object(this),o=a.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(r=e),n=new Array(o),i=0;o>i;){var s,l;i in a&&(s=a[i],l=t.call(r,s,i,a),n[i]=l),i++}return n}),document.querySelectorAll||(document.querySelectorAll=function(t){var e,r=document.createElement("style"),n=[];for(document.documentElement.firstChild.appendChild(r),document._qsa=[],r.styleSheet.cssText=t+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",window.scrollBy(0,0),r.parentNode.removeChild(r);document._qsa.length;)e=document._qsa.shift(),e.style.removeAttribute("x-qsa"),n.push(e);return document._qsa=null,n}),document.querySelector||(document.querySelector=function(t){var e=document.querySelectorAll(t);return e.length?e[0]:null}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){for(var e=0;e<this.length;e++)if(this[e]===t)return e;return-1}),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),Object.keys||(Object.keys=function(){var t=Object.prototype.hasOwnProperty,e=!{toString:null}.propertyIsEnumerable("toString"),r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],n=r.length;return function(i){if("object"!=typeof i&&("function"!=typeof i||null===i))throw new TypeError("Object.keys called on non-object");var a,o,s=[];for(a in i)t.call(i,a)&&s.push(a);if(e)for(o=0;n>o;o++)t.call(i,r[o])&&s.push(r[o]);return s}}()),!("getComputedStyle"in window)&&(window.getComputedStyle=function(){function t(e,r,n,i){var a,o=r[n],s=parseFloat(o),l=o.split(/\d/)[0];return i=null!=i?i:/%|em/.test(l)&&e.parentElement?t(e.parentElement,e.parentElement.currentStyle,"fontSize",null):16,a="fontSize"==n?i:/width/i.test(n)?e.clientWidth:e.clientHeight,"em"==l?s*i:"in"==l?96*s:"pt"==l?96*s/72:"%"==l?s/100*a:s}function e(t,e){var r="border"==e?"Width":"",n=e+"Top"+r,i=e+"Right"+r,a=e+"Bottom"+r,o=e+"Left"+r;t[e]=(t[n]==t[i]==t[a]==t[o]?[t[n]]:t[n]==t[a]&&t[o]==t[i]?[t[n],t[i]]:t[o]==t[i]?[t[n],t[i],t[a]]:[t[n],t[i],t[a],t[o]]).join(" ")}function r(r){var n=r.currentStyle,i=this,a=t(r,n,"fontSize",null);for(property in n)/width|height|margin.|padding.|border.+W/.test(property)&&"auto"!==i[property]?i[property]=t(r,n,property,a)+"px":"styleFloat"===property?i["float"]=n[property]:i[property]=n[property];return e(i,"margin"),e(i,"padding"),e(i,"border"),i.fontSize=a+"px",i}function n(t){return new r(t)}return r.prototype={constructor:r,getPropertyPriority:function(){},getPropertyValue:function(t){return this[t]||""},item:function(){},removeProperty:function(){},setProperty:function(){},getPropertyCSSValue:function(){}},n}(window))}function e(){return s}"undefined"!=typeof window&&t();var r=this,n={version:"1.2.0"};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=n),exports.imgix=n):r.imgix=n;var i="imgix-usable";n.isImageElement=function(t){return t&&t.tagName&&"img"===t.tagName.toLowerCase()},n.setElementImageAfterLoad=function(t,e,r){var i=new Image;i.onload=function(){n.setElementImage(t,e),"function"==typeof r&&r(t,e)},t.hasAttribute("crossorigin")&&i.setAttribute("crossorigin",t.getAttribute("crossorigin")),i.src=e},n.setElementImage=function(t,e){if(!t)return!1;if(n.isImageElement(t))return t.src!==e&&(t.src=e),!0;var r=n.getBackgroundImage(t);return r!==e?r?(t.style.cssText=t.style.cssText.replace(r,e),!0):(document.addEventListener?t.style.backgroundImage="url("+e+")":t.style.cssText="background-image:url("+e+")",!0):!1},n.getEmptyImage=function(){return n.versionifyUrl("https://assets.imgix.net/pixel.gif")},n.getElementImage=function(t){return n.isImageElement(t)?t.src:n.getBackgroundImage(t)},n.getRawBackgroundImage=function(t){return t.style.cssText.match(/url\(([^\)]+)/)},n.getBackgroundImage=function(t){var e=n.getRawBackgroundImage(t);return e&&2===e.length?e[1]:""},n.getElementsWithImages=function(){return n.markElementsWithImages(),document.querySelectorAll("."+i)},n.hasImage=function(t){var e=t.style.cssText?t.style.cssText.toLowerCase():t.style.cssText;return t&&(n.isImageElement(t)||-1!==e.indexOf("background-image"))},n.markElementsWithImages=function(){for(var t=document.getElementsByTagName("*"),e=0,r=t.length;r>e;e++)n.hasImage(t[e])&&n.setImgixClass(t[e])},n.hasClass=function(t,e){return(" "+t.className+" ").indexOf(" "+e+" ")>-1},n.setImgixClass=function(t){if(n.hasClass(t,i))return n.getImgixClass(t);var e=n.getXPathClass(n.getElementTreeXPath(t));return t.classList.add(e),t.classList.add(i),n.getImgixClass(t)},n.getImgixClass=function(t){return n.hasClass(t,i)?t.className.match(/imgix-el-[^\s]+/)[0]:void 0},n.getXPathClass=function(t){var e;return e=t?n.hashCode(t):(new Date).getTime().toString(36),"imgix-el-"+e},n.getElementImageSize=function(t){var e=0,r=0;return n.isImageElement(t)?(e=t.naturalWidth,r=t.naturalHeight):(e=n.helpers.extractInt(n.getCssProperty(t,"width")),r=n.helpers.extractInt(n.getCssProperty(t,"height"))),{width:e,height:r}},n.getCssPropertyById=function(t,e){var r=document.getElementById(t);return n.helpers.getElementCssProperty(r,e)},n.getCssProperty=function(t,e){return n.helpers.getElementCssProperty(t,e)},n.getCssPropertyBySelector=function(t,e){var r=document.querySelector(t);return n.helpers.getElementCssProperty(r,e)},n.instanceOfImgixURL=function(t){return t&&"[object imgixURL]"===t.toString()},n.setGradientOnElement=function(t,e,r){var i=[];if("undefined"==typeof r)i=["transparent","transparent"];else{var a=n.hexToRGB(r);"rgba"===a.slice(0,4)?(i.push(a),i.push(n.applyAlphaToRGB(a,0))):(i.push(n.applyAlphaToRGB(a,.5)),i.push(n.applyAlphaToRGB(a,0)))}for(var o=["-ms-linear-gradient(top, "+i[0]+" 0%, "+i[1]+" 100%),-ms-linear-gradient(bottom left, "+e[2]+" 0%,"+e[4]+" 25%, "+e[6]+" 50%, "+e[8]+" 75%,"+e[10]+" 100%)","-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, "+i[1]+"), color-stop(100%, "+i[0]+")),-webkit-gradient(linear, 0% 100%, 100% 0%, color-stop(0%, "+e[2]+"), color-stop(25%, "+e[4]+"), color-stop(50%, "+e[6]+"), color-stop(75%, "+e[7]+"), color-stop(100%, "+e[10]+"))","-webkit-linear-gradient(top, "+i[0]+", "+i[1]+" 100%),-webkit-linear-gradient(bottom left, "+e[2]+", "+e[4]+", "+e[6]+","+e[8]+")","-moz-linear-gradient(top, "+i[0]+", "+i[1]+" ),-moz-linear-gradient(bottom left, "+e[2]+", "+e[4]+", "+e[6]+","+e[8]+")","-o-linear-gradient(top, "+i[0]+","+i[1]+"),-o-linear-gradient(bottom left, "+e[2]+", "+e[4]+", "+e[6]+","+e[8]+")","linear-gradient(top, "+i[0]+","+i[1]+"),linear-gradient(bottom left, "+e[2]+", "+e[4]+", "+e[6]+","+e[8]+")"],s=0;s<o.length;s++)t.style.backgroundImage=o[s]},n.isDef=function(t){return"undefined"!=typeof t},n.hashCode=function(t){var e,r,n=2166136261;for(e=0,r=t.length;r>e;e++)n^=t.charCodeAt(e),n+=(n<<1)+(n<<4)+(n<<7)+(n<<8)+(n<<24);return("0000000"+(n>>>0).toString(16)).substr(-8)},n.getFontLookup=function(){return{"American Typewriter":"American Typewriter","American Typewriter Bold":"American Typewriter,bold","American Typewriter Condensed":"American Typewriter Condensed","American Typewriter Condensed Bold":"American Typewriter Condensed,bold","American Typewriter Condensed Light":"American Typewriter Condensed Light","American Typewriter Light":"American Typewriter Light","Andale Mono":"Andale Mono",Arial:"Arial","Arial Black":"Arial Black","Arial Bold":"Arial,bold","Arial Bold Italic":"Arial,bold,italic","Arial Italic":"Arial,italic",Baskerville:"Baskerville","Big Caslon":"Big Caslon","Brush Script MT":"Brush Script MT",Cochin:"Cochin",Copperplate:"Copperplate",Courier:"Courier","Courier Bold":"Courier,bold","Courier Oblique":"Courier Oblique",Didot:"Didot",Futura:"Futura","Futura Condensed":"Futura Condensed Medium","Futura Italic":"Futura Medium,italic",Georgia:"Georgia","Georgia Bold":"Georgia,bold","Georgia Bold Italic":"Georgia,bold,italic","Georgia Italic":"Georgia,italic","Gill Sans":"Gill Sans","Gill Sans Bold":"Gill Sans,bold","Gill Sans Bold Italic":"Gill Sans,bold,italic","Gill Sans Italic":"Gill Sans,italic","Gill Sans Light":"Gill Sans Light","Gill Sans Light Italic":"Gill Sans Light,italic",Helvetica:"Helvetica","Helvetica Bold":"Helvetica,bold","Helvetica Light":"Helvetica Light","Helvetica Light Oblique":"Helvetica Light Oblique","Helvetica Neue":"Helvetica Neue","Helvetica Neue Bold":"Helvetica Neue,bold","Helvetica Neue Bold Italic":"Helvetica Neue,bold,italic","Helvetica Neue Condensed Black":"Helvetica Neue Condensed Black","Helvetica Neue Condensed Bold":"Helvetica Neue Condensed,bold","Helvetica Neue Light":"Helvetica Neue Light","Helvetica Neue Light Italic":"Helvetica Neue Light,italic","Helvetica Neue Medium":"Helvetica Neue Medium","Helvetica Neue UltraLight":"Helvetica Neue UltraLight","Helvetica Neue UltraLight Italic":"Helvetica Neue UltraLight,italic","Helvetica Oblique":"Helvetica Oblique",Herculanum:"Herculanum",Impact:"Impact","Marker Felt Thin":"Marker Felt Thin","Marker Felt Wide":"Marker Felt Wide",Optima:"Optima","Optima Bold":"Optima,bold","Optima Bold Italic":"Optima,bold,italic","Optima ExtraBlack":"Optima ExtraBlack","Optima Italic":"Optima,italic",Papyrus:"Papyrus","Papyrus Condensed":"Papyrus Condensed",Times:"Times","Times Bold":"Times,bold","Times Bold Italic":"Times,bold,italic","Times Italic":"Times,italic","Times New Roman":"Times New Roman","Times New Roman Bold":"Times New Roman,bold","Times New Roman Bold Italic":"Times New Roman,bold,italic","Times New Roman Italic":"Times New Roman,italic","Trebuchet MS":"Trebuchet MS","Trebuchet MS Bold":"Trebuchet MS,bold","Trebuchet MS Bold Italic":"Trebuchet MS,bold,italic","Trebuchet MS Italic":"Trebuchet MS,italic",Verdana:"Verdana","Verdana Bold":"Verdana,bold","Verdana Bold Italic":"Verdana,bold,italic","Verdana Italic":"Verdana,italic",Zapfino:"Zapfino"}},n.getFonts=function(){return Object.keys(n.getFontLookup())},n.searchFonts=function(t){return t=t.toLowerCase(),n.getFonts().filter(function(e){return-1!==e.toLowerCase().indexOf(t)})},n.isFontAvailable=function(t){return n.isDef(n.getFontLookup()[t])},n.getAllParams=function(){return["bri","con","exp","gam","high","hue","invert","int","sat","shad","sharp","usm","usmrad","vib","auto","bg","ba","balph","bc","bf","bh","blend","bm","bp","bs","bw","border","pad","dl","fm","q","mask","nr","nrs","class","colors","prefix","palette","page","dpr","flip","or","rot","crop","fit","h","rect","w","blur","htn","mono","px","sepia","txt","txtalign","txtclip","txtclr","txtfit","txtfont","txtline","txtlineclr","txtpad","txtshad","txtsize","trim","trimcolor","trimmd","mark","markalign","markalpha","markfit","markh","markpad","markscale","markw"]},n.getParamAliases=function(){return{t:"txt",tf:"txtfont",tsz:"txtsize",tl:"txtline",tsh:"txtshad",tp:"txtpad",txtlinecolor:"txtlineclr",ta:"txtalign",intensity:"int",monochrome:"mono",f:"fit",orient:"or",m:"watermark",mf:"markfit",ms:"markscale",ma:"markalign",mp:"markpad"}},n.getDefaultParamValues=function(){return{bri:0,con:0,exp:0,gam:0,high:0,hue:0,sat:0,shad:0,sharp:0,usm:0,usmrad:2.5,vib:0,ba:"middle,center",balph:100,bf:"clip",bp:0,pad:0,q:75,nr:20,nrs:20,colors:6,prefix:"image",palette:"",page:1,dpr:1,rot:0,fit:"clip",blur:0,htn:0,px:0,sepia:0,txtalign:"bottom,right",txtclip:"end",txtclr:"000",txtfont:"Helvetica",txtline:0,txtlineclr:"FFF",txtpad:10,txtsize:12,trimmd:11,markalign:"bottom,right",markalpha:100,markfit:"clip",markpad:10}},n.getDefaultParamValue=function(t){return n.getDefaultParamValues()[t]},n.getDefaultParams=function(){return Object.keys(n.getDefaultParamValues())},n.helpers={debouncer:function(t,e){var r;return function(){var n=this,i=arguments,a=function(){r=null,t.apply(n,i)};window.clearTimeout(r),r=window.setTimeout(a,e)}},throttler:function(t,e){var r;return function(){var n,i=this,a=arguments;r||(n=function(){r=null,t.apply(i,a)},r=window.setTimeout(n,e))}},urlParser:function(){function t(t){return!isNaN(parseFloat(t))&&isFinite(t)}return function(e,r){var n=r||window.location.toString();if(!e)return n;e=e.toString(),"//"===n.substring(0,2)?n="http:"+n:1===n.split("://").length&&(n="http://"+n),r=n.split("/");var i={auth:""},a=r[2].split("@");1===a.length?a=a[0].split(":"):(i.auth=a[0],a=a[1].split(":")),i.protocol=r[0],i.hostname=a[0],i.port=a[1]||("https"===i.protocol.split(":")[0].toLowerCase()?"443":"80"),i.pathname=(r.length>3?"/":"")+r.slice(3,r.length).join("/").split("?")[0].split("#")[0];var o=i.pathname;"/"===o.charAt(o.length-1)&&(o=o.substring(0,o.length-1));var s=i.hostname,l=s.split("."),u=o.split("/");if("hostname"===e)return s;if("domain"===e)return/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(s)?s:l.slice(-2).join(".");if("sub"===e)return l.slice(0,l.length-2).join(".");if("port"===e)return i.port;if("protocol"===e)return i.protocol.split(":")[0];if("auth"===e)return i.auth;if("user"===e)return i.auth.split(":")[0];if("pass"===e)return i.auth.split(":")[1]||"";if("path"===e)return i.pathname;if("."===e.charAt(0)){if(e=e.substring(1),t(e))return e=parseInt(e,10),l[0>e?l.length+e:e-1]||""}else{if(t(e))return e=parseInt(e,10),u[0>e?u.length+e:e]||"";if("file"===e)return u.slice(-1)[0];if("filename"===e)return u.slice(-1)[0].split(".")[0];if("fileext"===e)return u.slice(-1)[0].split(".")[1]||"";if("?"===e.charAt(0)||"#"===e.charAt(0)){var c=n,d=null;if("?"===e.charAt(0)?c=(c.split("?")[1]||"").split("#")[0]:"#"===e.charAt(0)&&(c=c.split("#")[1]||""),!e.charAt(1))return c;e=e.substring(1),c=c.split("&");for(var p=0,h=c.length;h>p;p++)if(d=c[p].split("="),d[0]===e)return d[1]||"";return null}}return""}}(),mergeObject:function(){for(var t,e={},r=0,n=arguments.length;n>r;r++)for(t in arguments[r])arguments[r].hasOwnProperty(t)&&(e[t]=arguments[r][t]);return e},pixelRound:function(t,e){return Math.ceil(t/e)*e},isNumber:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},getZoom:function(){var t,e="http://www.w3.org/2000/svg",r=1;return document.createElementNS&&(t=document.createElementNS(e,"svg"),t.setAttribute("xmlns",e),t.setAttribute("version","1.1"),document.body.appendChild(t),r=t.currentScale||1,document.body.removeChild(t)),r},getDPR:function(){var t=window.devicePixelRatio?window.devicePixelRatio:1;if(t%1!==0){var e=t.toString();e=e.split(".")[1],t=t.toFixed(e.length>1&&"0"!==e.slice(1,2)?2:1)}return t},getWindowWidth:function(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)||1024},getWindowHeight:function(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)||768},getImgSrc:function(t){return t.getAttribute("data-src")||t.getAttribute("src")},calculateElementSize:function(t){var e={width:t.offsetWidth,height:t.offsetHeight};if(null===t.parentNode||t===document.body)return e.width=this.getWindowWidth(),e.height=this.getWindowHeight(),e;if(0!==e.width||0!==e.height)return t.alt&&!t.fluid?(t.fluid=!0,this.calculateElementSize(t.parentNode)):e;var r,n,i={},a={position:"absolute",visibility:"hidden",display:"block"};for(n in a)a.hasOwnProperty(n)&&(i[n]=t.style[n],t.style[n]=a[n]);r={width:t.offsetWidth,height:t.offsetHeight};for(n in a)a.hasOwnProperty(n)&&(t.style[n]=i[n]);return 0===r.width||0===r.height?this.calculateElementSize(t.parentNode):r},isReallyObject:function(t){return t&&"object"==typeof t&&"[object Object]"===t.toString()},isFluidSet:function(t){return t&&"object"==typeof t&&"[object FluidSet]"===t.toString()},extractInt:function(t){return void 0===t?0:"number"==typeof t?t:parseInt(t.replace(/\D/g,""),10)||0},camelize:function(t){return t.replace(/[-_\s]+(.)?/g,function(t,e){return e?e.toUpperCase():""})},getElementCssProperty:function(t,e){return window.getComputedStyle?window.getComputedStyle(t,null).getPropertyValue(e):t&&t.style&&e?t.style[this.camelize(e)]:""},matchesSelector:function(t,e){var r=(t.parentNode||document).querySelectorAll(e);return Array.prototype.slice.call(r).indexOf(t)>-1}},n.URL=function(t,e){this._autoUpdateSel=null,this._autoUpdateCallback=null,t&&"//"===t.slice(0,2)&&window&&window.location&&(t=window.location.protocol+t),this.setUrl(t),"object"==typeof e&&this.setParams(e),this.paramAliases={}},n.URL.prototype.attachGradientTo=function(t,e,r){this.getColors(16,function(i){if(i&&i.length<9)return console.warn("not enough colors to create a gradient"),void(r&&"function"==typeof r&&r(!1));if("string"==typeof t){var a=document.querySelectorAll(t);if(a&&a.length>0)for(var o=0;o<a.length;o++)n.setGradientOnElement(a[o],i,e)}else n.setGradientOnElement(t,i,e);r&&"function"==typeof r&&r(!0)})},n.URL.prototype.attachImageTo=function(t,e){if("string"==typeof t){var r=document.querySelectorAll(t);if(r&&r.length>0)for(var i=0;i<r.length;i++)n.setElementImageAfterLoad(r[i],this.getUrl(),e)}else n.setElementImageAfterLoad(t,this.getUrl(),e)},n.createParamString=function(){return new n.URL("")},n.updateVersion={};var a={};n.URL.prototype.getColors=function(t,e){function r(t){var e,r,n=[];if(!t||!t.colors)return void 0;for(e=0;e<t.colors.length;e++)r=[Math.round(255*t.colors[e].red),Math.round(255*t.colors[e].green),Math.round(255*t.colors[e].blue)],n.push("rgb("+r.join(", ")+")");return n}function i(){var t=new XMLHttpRequest;t.onreadystatechange=function(){var n;4===t.readyState&&(n=200===t.status?JSON.parse(t.response):{colors:[{red:1,green:1,blue:1}]},a[o]=r(n),e(a[o]))},t.open("get",o,!0),t.send()}var o,s=10,l=new n.URL(this.getUrl());if("function"==typeof t)if("number"==typeof e){var u=e;e=t,t=u}else e=t,t=s;l.setPaletteColorNumber(t),l.setPalette("json"),o=l.getUrl(),a.hasOwnProperty(o)?e&&e(a[o]):i()},n.URL.prototype._handleAutoUpdate=function(){function t(t){return s===i._autoUpdateSel&&t===n.updateVersion[s]}function e(e,r){r in l||(l[r]=[],function(){var u=new Image,c=n.updateVersion[s],d=(new Date).getTime();u.onload=u.onerror=function(){if(t(c))for(var e=0;e<l[r].length;e++)if(n.setElementImage(l[r][e],r),o++,"function"==typeof i._autoUpdateCallback){var s={element:l[r][e],isComplete:o===a,percentComplete:o/a*100,totalComplete:o,loadTime:(new Date).getTime()-d,total:a};i._autoUpdateCallback(s)}},e.hasAttribute("crossorigin")&&u.setAttribute("crossorigin",e.getAttribute("crossorigin")),u.src=r}()),l[r].push(e)}function r(t){var r=n.getElementImage(t),a=r;r&&-1!==r.indexOf("?")&&(a=r.split("?")[0]),i.getBaseUrl()?e(t,i.getUrl()):a&&i.getQueryString()?e(t,a+"?"+i.getQueryString()):o++}var i=this,a=0,o=0,s=this._autoUpdateSel,l={};if(n.isDef(n.updateVersion[s])?n.updateVersion[s]++:n.updateVersion[s]=1,null!==this._autoUpdateSel){var u=document.querySelectorAll(this._autoUpdateSel);if(a=u.length,u&&1===a)r(u[0]);else for(var c=0;a>c;c++)r(u[c])}},n.URL.prototype.autoUpdateImg=function(t,e){this._autoUpdateSel=t,this._autoUpdateCallback=e,this._handleAutoUpdate()},n.URL.prototype.setUrl=function(t){t&&"string"==typeof t&&0!==t.length||(t=n.getEmptyImage()),this.urlParts=n.parseUrl(t)},n.URL.prototype.setURL=function(t){return this.setUrl(t)},n.URL.prototype.getURL=function(){return this.getUrl()},n.URL.prototype.toString=function(){return"[object imgixURL]"},n.URL.prototype.getUrl=function(){var t=n.buildUrl(this.urlParts);return t&&0!==t.length?t:n.getEmptyImage()},n.URL.prototype.removeParam=function(t){this.urlParts.paramValues.hasOwnProperty(t)&&(delete this.urlParts.paramValues[t],this.urlParts.params=Object.keys(this.urlParts.paramValues))},n.URL.prototype.clearThenSetParams=function(t){this.clearParams(!1),this.setParams(t)},n.URL.prototype.clearParams=function(t){t=n.isDef(t)?t:!0;for(var e in this.urlParts.paramValues)this.urlParts.paramValues.hasOwnProperty(e)&&this.removeParam(e);t&&this._handleAutoUpdate()},n.URL.prototype.setParams=function(t,e){if(n.instanceOfImgixURL(t))return void console.warn("setParams warning: dictionary of imgix params expectd. imgix URL instance passed instead");for(var r in t)t.hasOwnProperty(r)&&this.setParam(r,t[r],e,!0);this._handleAutoUpdate()},n.URL.prototype.setParam=function(t,e,r,i){if(t=t.toLowerCase(),r=n.isDef(r)?r:!0,i=n.isDef(i)?i:!1,("col"===t||"colorize"===t||"blend"===t||"mono"===t||"monochrome"===t)&&"rgb"===e.slice(0,3)&&(e=n.rgbToHex(e)),-1===n.getAllParams().indexOf(t))return console.warn("'"+t+"' is an invalid imgix param"),this;if(!r&&this.urlParts.paramValues[t])return this;if("txtfont"===t&&n.isFontAvailable(e)){var a=n.getFontLookup()[e];a&&(e=a)}return n.getDefaultParamValue(t)!==e&&n.isDef(e)&&null!==e&&0!==e.length?(-1===this.urlParts.params.indexOf(t)&&this.urlParts.params.push(t),decodeURIComponent(e)===e&&(e=encodeURIComponent(e)),this.urlParts.paramValues[t]=String(e),i||this._handleAutoUpdate(),this):(this.removeParam(t),this)},n.URL.prototype.getParam=function(t){if("mark"===t||"mask"===t){var e=this.urlParts.paramValues[t];return decodeURIComponent(e)!==e?decodeURIComponent(e):e}return this.urlParts.paramValues[t]},n.URL.prototype.getParams=function(){return this.urlParts.paramValues?this.urlParts.paramValues:{}},n.URL.prototype.getBaseUrl=function(){var t=this.getUrl();return-1!==t.indexOf("?")&&(t=this.getUrl().split("?")[0]),t!==window.location.href?t:""},n.URL.prototype.getQueryString=function(){var t=this.getUrl();return-1!==t.indexOf("?")?this.getUrl().split("?")[1]:""},n.URL.theGetSetFuncs=Object.freeze({bri:"Brightness",con:"Contrast",exp:"Exposure",gam:"Gamma",high:"Highlight",hue:"Hue",invert:"Invert",sat:"Saturation",shad:"Shadow",sharp:"Sharpness",usm:"UnsharpMask",usmrad:"UnsharpMaskRadius",vib:"Vibrance",auto:"Auto",bg:"Background",ba:"BlendAlign",balph:"BlendAlpha",bc:"BlendCrop",bf:"BlendFit",bh:"BlendHeight",blend:"Blend",bm:"BlendMode",bp:"BlendPadding",bs:"BlendSize",bw:"BlendWidth",border:"Border",pad:"Pad",dl:"Download",fm:"Format",q:"Quality",mask:"Mask",nr:"NoiseReduction",nrs:"NoiseReductionSharpen",palette:"Palette","class":"PaletteClass",prefix:"PalettePrefix",colors:"PaletteColorNumber",page:"Page",dpr:"DPR",flip:"Flip",or:"Orient",rot:"Rotate",crop:"Crop",fit:"Fit",h:"Height",rect:"Rectangle",w:"Width",blur:"Blur",htn:"Halftone",mono:"Monochrome",px:"Pixelate",sepia:"Sepia",txt:"Text",txtalign:"TextAlign",txtclip:"TextClip",txtclr:"TextColor",txtfit:"TextFit",txtfont:"TextFont",txtline:"TextLine",txtlineclr:"TextLineColor",txtpad:"TextPad",txtsize:"TextSize",txtshad:"TextShadow",trim:"Trim",trimcolor:"TrimColor",trimmd:"TrimMeanDifference",mark:"Watermark",markalign:"WatermarkAlign",markalpha:"WatermarkAlpha",markfit:"WatermarkFit",markh:"WatermarkHeight",markpad:"WatermarkPadding",markscale:"WatermarkScale",markw:"WatermarkWidth"});for(var o in n.URL.theGetSetFuncs)n.URL.theGetSetFuncs.hasOwnProperty(o)&&!function(t){n.URL.prototype["set"+n.URL.theGetSetFuncs[t]]=function(e,r){return this.setParam(t,e,r)},n.URL.prototype["get"+n.URL.theGetSetFuncs[t]]=function(){return this.getParam(t)}}(o);n.parseUrl=function(t){for(var e=["protocol","hostname","port","path","?","#","hostname"],r=["protocol","hostname","port","pathname","search","hash","host"],i={},a=0;a<r.length;a++)i[r[a]]=n.helpers.urlParser(e[a],t);var o=i.search;if(i.paramValues={},i.params=[],i.baseUrl=t.split("?")[0],o&&o.length>0){"?"===o[0]&&(o=o.substr(1,o.length));for(var s=o.split("&"),l=0;l<s.length;l++){var u=s[l].split("=");u[0]&&u[0].length&&"s"!==u[0]&&(i.paramValues[u[0]]=2===u.length?u[1]:"",-1===i.params.indexOf(u[0])&&i.params.push(u[0]))}}return i},n.buildUrl=function(t){var e=t.protocol+"://"+t.host;if(null!==t.port&&"80"!==t.port&&"443"!==t.port&&(e+=":"+t.port),e+=t.pathname,n.versionifyUrl(t),t.params.length>0){t.params=t.params.map(function(t){return t.toLowerCase()}),t.params=t.params.filter(function(t,e,r){return r.indexOf(t)===e}),t.params=t.params.sort(function(t,e){return e>t?-1:t>e?1:0});for(var r=[],i=0;i<t.params.length;i++)t.paramValues[t.params[i]].length>0&&r.push(t.params[i]+"="+t.paramValues[t.params[i]]);-1!==e.indexOf("?")&&(e=e.split("?")[0]),e+="?"+r.join("&")}return e},n.versionifyUrl=function(t){return"string"==typeof t?n.versionifyStringUrl(t):n.versionifyParsedUrl(t)},n.versionifyStringUrl=function(t){var e,r,i="ixjsv";return e=t.split("?"),r=e[0]+"?"+i+"="+n.version,e[1]&&(r+="&"+e[1]),r},n.versionifyParsedUrl=function(t){var e="ixjsv";return t.paramValues[e]||t.params.push(e),t.paramValues[e]=n.version,t};var s={fluidClass:"imgix-fluid",updateOnResize:!0,updateOnResizeDown:!1,updateOnPinchZoom:!1,highDPRAutoScaleQuality:!0,onChangeParamOverride:null,autoInsertCSSBestPractices:!1,fitImgTagToContainerWidth:!0,fitImgTagToContainerHeight:!1,ignoreDPR:!1,pixelStep:10,debounce:200,lazyLoad:!1,lazyLoadColor:null,lazyLoadOffsetVertical:20,lazyLoadOffsetHorizontal:20,throttle:200,maxHeight:5e3,maxWidth:5e3,onLoad:null};n.FluidSet=function(t){this.options=n.helpers.isReallyObject(t)?n.helpers.mergeObject(e(),t):n.helpers.mergeObject(e(),{}),this.lazyLoadOffsets={t:Math.max(this.options.lazyLoadOffsetVertical,0),b:Math.max(this.options.lazyLoadOffsetVertical,0),l:Math.max(this.options.lazyLoadOffsetHorizontal,0),r:Math.max(this.options.lazyLoadOffsetHorizontal,0)},this.namespace=Math.random().toString(36).substring(7),this.windowResizeEventBound=!1,this.windowScrollEventBound=!1,this.windowLastWidth=0,this.windowLastHeight=0},n.FluidSet.prototype.updateSrc=function(t,e){if(t.hasAttribute("src")&&""===t.getAttribute("src")&&t.setAttribute("src",n.getEmptyImage()),t.offsetWidth||t.offsetHeight||t.getClientRects().length){var r=this.getImgDetails(t,e||1),i=r.url,a=r.width,o=r.height;if(this.options.lazyLoad){var s=t.getBoundingClientRect(),l={left:0-this.lazyLoadOffsets.l,top:0-this.lazyLoadOffsets.t,bottom:(window.innerHeight||document.documentElement.clientHeight)+this.lazyLoadOffsets.b,right:(window.innerWidth||document.documentElement.clientWidth)+this.lazyLoadOffsets.r};if(s.top>l.bottom||s.left>l.right||s.top+o<l.top||s.left+a<l.left){if(!t.fluidLazyColored&&this.options.lazyLoadColor){t.fluidLazyColored=1;var u=this,c=typeof this.options.lazyLoadColor,d=new n.URL(n.helpers.getImgSrc(t));d.getColors(16,function(e){if(!e)return void console.warn("No colors found for",d.getURL(),"for element",t);var r=null;"boolean"===c?r=e[0]:"number"===c&&u.options.lazyLoadColor<e.length?r=e[u.options.lazyLoadColor]:"function"===c&&(r=u.options.lazyLoadColor(t,e)),null!==r&&(n.isImageElement(t)&&t.parentNode&&"body"!==t.parentNode.tagName.toLowerCase()?t.parentNode.style.backgroundColor=r:t.style.backgroundColor=r)})}return}}if(t.lastWidth=t.lastWidth||0,t.lastHeight=t.lastHeight||0,!(this.options.updateOnResizeDown===!1&&t.lastWidth>=a&&t.lastHeight>=o)){t.fluidUpdateCount||(t.fluidUpdateCount=0);var p=function(){};this.options.onLoad&&"function"==typeof this.options.onLoad&&(p=this.options.onLoad);var h=function(t,e){t.fluidUpdateCount=parseInt(t.fluidUpdateCount,10)+1,p(t,e)};n.setElementImageAfterLoad(t,i,h),t.lastWidth=a,t.lastHeight=o}}},n.FluidSet.prototype.getImgDetails=function(t,e){if(t){var r=n.helpers.getDPR(t),i=this.options.pixelStep,a=n.helpers.calculateElementSize(n.isImageElement(t)?t.parentNode:t),o=n.helpers.pixelRound(a.width*e,i),s=n.helpers.pixelRound(a.height*e,i);t.url||(t.url=new n.URL(n.helpers.getImgSrc(t))),t.url.setHeight(""),t.url.setWidth(""),o=Math.min(o,this.options.maxWidth),s=Math.min(s,this.options.maxHeight),1===r||this.options.ignoreDPR||t.url.setDPR(r),this.options.highDPRAutoScaleQuality&&r>1&&t.url.setQuality(Math.min(Math.max(parseInt(100/r,10),30),75)),this.options.fitImgTagToContainerHeight&&this.options.fitImgTagToContainerWidth&&t.url.setFit("crop"),"crop"===t.url.getFit()?(s>0&&(!n.isImageElement(t)||n.isImageElement(t)&&this.options.fitImgTagToContainerHeight)&&t.url.setHeight(s),o>0&&(!n.isImageElement(t)||n.isImageElement(t)&&this.options.fitImgTagToContainerWidth)&&t.url.setWidth(o)):o>=s?t.url.setWidth(o):t.url.setHeight(s),!n.isImageElement(t)&&this.options.autoInsertCSSBestPractices&&t.style&&(t.style.backgroundRepeat="no-repeat",t.style.backgroundSize="cover",t.style.backgroundPosition="50% 50%");var l={};null!==this.options.onChangeParamOverride&&"function"==typeof this.options.onChangeParamOverride&&(l=this.options.onChangeParamOverride(o,s,t.url.getParams(),t));for(var u in l)l.hasOwnProperty(u)&&t.url.setParam(u,l[u]);return{url:t.url.getURL(),width:o,height:s}}},n.FluidSet.prototype.toString=function(){return"[object FluidSet]"},n.FluidSet.prototype.reload=function(){n.fluid(this),this.windowLastWidth=n.helpers.getWindowWidth(),this.windowLastHeight=n.helpers.getWindowHeight()},n.FluidSet.prototype.attachGestureEvent=function(t){var e=this;t.addEventListener&&!t.listenerAttached&&(t.addEventListener("gestureend",function(t){e.updateSrc(this,t.scale)},!1),t.addEventListener("gesturechange",function(){e.updateSrc(this)},!1),t.listenerAttached=!0)};var l={},u={};n.FluidSet.prototype.attachScrollListener=function(){var t=this;l[this.namespace]=n.helpers.throttler(function(){t.reload()},this.options.throttle),document.addEventListener?window.addEventListener("scroll",l[this.namespace],!1):window.attachEvent("onscroll",l[this.namespace]),this.windowScrollEventBound=!0},n.FluidSet.prototype.attachWindowResizer=function(){var t=this;u[this.namespace]=n.helpers.debouncer(function(){(this.windowLastWidth!==n.helpers.getWindowWidth()||this.windowLastHeight!==n.helpers.getWindowHeight())&&t.reload()},this.options.debounce),window.addEventListener?window.addEventListener("resize",u[this.namespace],!1):window.attachEvent&&window.attachEvent("onresize",u[this.namespace]),this.windowResizeEventBound=!0},n.fluid=function(){var t,r;if(arguments.length>0&&1===arguments[0].nodeType?(r=arguments[0],t=arguments[1]):t=arguments[0],null!==t){var i,a;if(n.helpers.isReallyObject(t)){for(var o=Object.keys(t),s=Object.keys(e()),l=0;l<o.length;l++)-1===s.indexOf(o[l])&&console.warn("'"+o[l]+"' is not a valid imgix.fluid config option. See https://github.com/imgix/imgix.js/blob/master/docs/api.md#imgix.fluid for a list of valid options.");i=n.helpers.mergeObject(e(),t),a=new n.FluidSet(i),t=null}else n.helpers.isFluidSet(t)?(a=t,i=a.options):(i=n.helpers.mergeObject(e(),{}),a=new n.FluidSet(i));var u;if(t&&!n.helpers.isFluidSet(t))u=Array.isArray(t)?t:[t];else{var c=i.fluidClass.toString();c="."===c.slice(0,1)?c:"."+c,u=(r||document).querySelectorAll(c),r&&n.helpers.matchesSelector(r,c)&&(u=Array.prototype.slice.call(u),u.unshift(r))}for(var d=0;d<u.length;d++)null!==u[d]&&(i.updateOnPinchZoom&&a.attachGestureEvent(u[d]),a.updateSrc(u[d]));return i.lazyLoad&&!a.windowScrollEventBound&&a.attachScrollListener(),i.updateOnResize&&!a.windowResizeEventBound&&a.attachWindowResizer(),a}},"undefined"!=typeof window&&(n.onready=function(){function t(){var t;for(o=!0;t=n.shift();)t()}var e,r,n=[],i=document.documentElement.doScroll,a=i?/^loaded|^c/:/^loaded|c/,o=a.test(document.readyState);return document.addEventListener?(r=function(){document.removeEventListener("DOMContentLoaded",r,!1),t()},document.addEventListener("DOMContentLoaded",r,!1)):document.attachEvent&&(r=function(){/^c/.test(document.readyState)&&(document.detachEvent("onreadystatechange",r),t())},document.attachEvent("onreadystatechange",r)),e=i?function(t){window.self!=window.top?o?t():n.push(t):!function(){try{document.documentElement.doScroll("left")}catch(r){return setTimeout(function(){e(t)},50)}t()}()}:function(t){o?t():n.push(t)}}()),n.rgbToHex=function(t){var e=t.split(",");return e=e.map(function(t){return n.componentToHex(parseInt(t.replace(/\D/g,"")))}),e.join("")},n.componentToHex=function(t){var e=t.toString(16);return 1===e.length?"0"+e:e},n.getColorBrightness=function(t){if(!t)return 0;"#"===t.slice(0,1)&&(t=n.hexToRGB(t));var e=t.replace(/[^0-9,]+/g,"").split(","),r=parseInt(e[0],10),i=parseInt(e[1],10),a=parseInt(e[2],10);return Math.sqrt(r*r*.241+i*i*.691+a*a*.068)},n.applyAlphaToRGB=function(t,e){var r="rgba"!==t.slice(0,4),n=t.split(",");return n=n.map(function(t){return parseInt(t.replace(/\D/g,""),10)}),r?n.push(e):4===n.length&&(n[3]=e),"rgba("+n.join(", ")+")"},n.hexToRGB=function(t){function e(t){return(t+t).toString()}if(t)if("#"===t.slice(0,1))t=t.slice(1,t.length);else if("rgb"===t.slice(0,3))return t;var r=0,n=0,i=0;return 3===t.length?(r=parseInt(e(t.slice(0,1)),16),n=parseInt(e(t.slice(1,2)),16),i=parseInt(e(t.slice(2,3)),16)):6===t.length?(r=parseInt(t.slice(0,2),16),n=parseInt(t.slice(2,4),16),i=parseInt(t.slice(4,6),16)):console.warn("invalid hex color:",t),"rgb("+r+", "+n+", "+i+")"
},n.getElementByXPathClassName=function(t){return document.querySelector("."+n.getXPathClass(t))},n.getElementImageByXPathClassName=function(t){return n.getElementImage(n.getElementByXPathClassName(t))},n.getElementTreeXPath=function(t){for(var e=[];t&&t.nodeType===Node.ELEMENT_NODE;t=t.parentNode){for(var r=0,n=t.previousSibling;n;n=n.previousSibling)n.nodeType!==Node.DOCUMENT_TYPE_NODE&&n.nodeName===t.nodeName&&++r;var i=(t.prefix?t.prefix+":":"")+t.localName,a=r?"["+(r+1)+"]":"";e.splice(0,0,i+a)}return e.length?"/"+e.join("/"):null},"function"==typeof define&&define.amd&&define("imgix",[],function(){return n})}).call(this),imgix.onready(function(){imgix.fluid({updateOnResizeDown:!0,pixelStep:5,autoInsertCSSBestPractices:!0})}),$(document).ready(function(){function t(t){for(var e=$(t),r=[],n=0;n<e.length;n++){var i=parseInt(e[n].innerHTML),a=moment(i).format("h:mm A");r.push(a),e[n].innerHTML=r[n]}}var e=$(".sub-header"),r=$('<div class="sub-header__stripes"></div>'),n=$('<div class="sub-header__container"></div>');e.wrap(n),e.after(r),$(".js-workshops__learn-more").bind("click",function(t){t.preventDefault(),$(this).addClass("hide"),$(this).parents(".workshop").find(".workshops__description").removeClass("workshops__description--is-hidden")}),$(".js-description__close-btn").bind("click",function(t){t.preventDefault(),$(".js-workshops__learn-more").removeClass("hide"),$(this).parents("workshops__description").addClass("workshops__description--is-hidden"),console.log($(this).parents(".workshops__description").addClass("workshops__description--is-hidden"))}),t(".session-time__start"),t(".session-time__end"),t(".day-schedule__nav__link"),$(".day-schedule__session-footer").append('<a href="#" class="session-description__close">Close</a>'),$(".day-schedule__session-title").bind("click",function(){$(this).parent().find(".day-schedule__session-footer").slideToggle("hide")}),$(".session-description__close").bind("click",function(){$(this).parent().slideUp(),console.log($(this))}),$(function(){$(".day-schedule__nav__link").click(function(){if($(this).parent().hasClass("active")?$(this).parent().removeClass("active"):($(this).parent().siblings().removeClass("active"),$(this).parent().addClass("active")),location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}})}),$('span[class^="day-schedule__session-location the-north-door-"]').wrap('<a href="https://www.google.com/maps/place/The+North+Door/@30.264718,-97.7362335,17z/data=!3m1!4b1!4m2!3m1!1s0x8644b5a58809fbd1:0x2f09e2f5c3c6dc6d" target="_blank"></a>'),$('span[class^="day-schedule__session-location retail-me-"]').wrap('<a href="https://www.google.com/maps/place/RetailMeNot+Inc./@30.259059,-97.736249,15z/data=!4m2!3m1!1s0x0000000000000000:0x4ea05c5cb98939a0" target="_blank"></a>'),$('span[class^="day-schedule__session-location funsize-"]').wrap('<a href="https://www.google.com/maps/place/Funsize/@30.2669042,-97.7390286,15z/data=!4m2!3m1!1s0x0:0x27e62ae56ef4658b" target="_blank" ></a>')});