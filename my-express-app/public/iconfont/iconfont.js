(function(window){var svgSprite='<svg><symbol id="icon-2yanzhengma" viewBox="0 0 1024 1024"><path d="M882.036364 137.309091c-9.309091 0-18.618182 0-25.6 0l0 0C633.018182 137.309091 535.272727 39.563636 535.272727 39.563636l-23.272727-23.272727-23.272727 23.272727c0 0-97.745455 100.072727-323.490909 100.072727-9.309091 0-16.290909 0-25.6 0l-30.254545 0 0 449.163636c0 116.363636 39.563636 288.581818 390.981818 418.909091l11.636364 4.654545 11.636364-4.654545c351.418182-130.327273 390.981818-302.545455 390.981818-418.909091L914.618182 137.309091 882.036364 137.309091 882.036364 137.309091zM868.072727 584.145455c0 65.163636 0 239.709091-356.072727 372.363636C155.927273 823.854545 155.927273 651.636364 155.927273 584.145455L155.927273 186.181818C160.581818 186.181818 162.909091 186.181818 167.563636 186.181818 370.036364 186.181818 477.090909 111.709091 512 81.454545 546.909091 111.709091 653.963636 186.181818 856.436364 186.181818c2.327273 0 6.981818 0 9.309091 0L868.072727 584.145455 868.072727 584.145455zM868.072727 584.145455"  ></path><path d="M444.509091 572.509091l-123.345455-93.090909-46.545455 37.236364 202.472727 183.854545c93.090909-202.472727 272.290909-356.072727 272.290909-356.072727l-20.945455-23.272727C584.145455 395.636364 444.509091 572.509091 444.509091 572.509091L444.509091 572.509091zM444.509091 572.509091"  ></path></symbol><symbol id="icon-ren" viewBox="0 0 1024 1024"><path d="M886.354587 713.607036c-20.467719-48.406156-49.736558-91.797721-87.090146-129.151309-37.353588-37.353588-80.745153-66.622427-129.151309-87.090146-16.06716-6.754347-32.441335-12.485309-49.122526-17.192884C682.598441 443.126124 723.840895 375.684989 723.840895 298.624026c0-116.768339-95.072556-211.840895-211.840895-211.840895s-211.840895 95.072556-211.840895 211.840895c0 76.958625 41.242455 144.502099 102.85029 181.548671-16.681191 4.605237-33.055367 10.336198-49.122526 17.192884-48.406156 20.467719-91.797721 49.736558-129.151309 87.090146-37.353588 37.353588-66.622427 80.745153-87.090146 129.151309-21.18409 50.145912-31.929642 103.361983-31.929642 158.113132 0 12.485309 10.029182 22.514491 22.514491 22.514491s22.514491-10.029182 22.514491-22.514491c0-199.150909 162.104337-361.255247 361.255247-361.255247s361.255247 162.104337 361.255247 361.255247c0 12.485309 10.029182 22.514491 22.514491 22.514491s22.514491-10.029182 22.514491-22.514491C918.284229 816.969019 907.538677 763.752948 886.354587 713.607036zM345.188087 298.624026c0-92.002399 74.809514-166.811913 166.811913-166.811913s166.811913 74.809514 166.811913 166.811913-74.809514 166.811913-166.811913 166.811913S345.188087 390.626424 345.188087 298.624026z"  ></path><path d="M512 1255.489906"  ></path></symbol><symbol id="icon-suo" viewBox="0 0 1024 1024"><path d="M184.32 471.04v-102.4c0-180.224 147.456-327.68 327.68-327.68s327.68 147.456 327.68 327.68v102.4h40.96c22.528 0 40.96 18.432 40.96 40.96v430.08c0 22.528-18.432 40.96-40.96 40.96h-737.28c-22.528 0-40.96-18.432-40.96-40.96v-430.08c0-22.528 18.432-40.96 40.96-40.96h40.96z m40.96 0h573.44v-102.4c0-157.696-129.024-286.72-286.72-286.72s-286.72 129.024-286.72 286.72v102.4z m307.2 262.144v86.016c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-86.016c-18.432-8.192-30.72-26.624-30.72-47.104 0-28.672 22.528-51.2 51.2-51.2s51.2 22.528 51.2 51.2c0 20.48-12.288 38.912-30.72 47.104z m348.16 208.896v-430.08h-737.28v430.08h737.28z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)