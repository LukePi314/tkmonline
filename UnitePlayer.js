(function(y,k,n,o){function f(a,d,i){var b=this,e=new Audio,g=a[l],f=a.offset,r=a.preset,k={loadstart:z,canplay:s,load:A,abort:t,error:t,playing:u,pause:B,ended:v};b[j]=e;b.d=d;b.h="";b.g={};b.a=[0,0,0,0];b.e=v;b.f=C;b.b=[0,0,0,0,0];r&&(b.g=D(r,f||0));"loadstart,canplay,load,abort,error,durationchange,playing,pause,ended".split(",").forEach(function(a){e[w](a,function(d){var g=k[a];g&&(g&16?b.e=g:b.f=g);i(d,b,b.d,e[h]||0,e[m]||0)})});e[w]("timeupdate",function(a){var d=b.b,g=e[h];d[0]?g>=d[1]&&(d[2]?
e[h]=d[3]+(Date.now()-d[4])/1E3:e.pause(),d[0]=0):b.a[2]?g>=b.a[1]&&(e[h]=b.a[3]?b.a[3]:b.a[0]):g>=b.a[1]&&e.pause();i(a,b,b.d,e[h],e[m])});if(e[p])if(a.mp3&&e[p]("audio/mpeg"))e.src=a.mp3;else if(a.ogg&&e[p]("audio/ogg"))e.src=a.ogg;else return;b.volume(g===o?0.5:g);e.play()}function q(a){var d=0,a=(""+a).split(":");switch(a.length){case 3:d+=3600*a.shift();case 2:d+=60*a.shift();case 1:d+=+a[0]}return d}function D(a,d){var i={},b,e,g,h,f;for(b in a)if(e=q(a[b][0]),g=q(a[b][1]),h=a[b][2]||!1,f=a[b][3]?
q(a[b][3])||0:0,x&&(g&&(g+=0.2),1>g-e&&(g+=0.4)),e<g)i[b]=[d+e,d+g,h,f];else throw Error("BAD_ARG");return i}var k=/iPhone|iP[ao]d/.test(n)?parseFloat(n.split(/OS /)[1].replace("_","."))||4:0,x=/Android/.test(n)?parseFloat(n.split("Android")[1])||2.3:0,C=0,t=1,z=2,s=3,A=4,v=16,B=17,u=18,j="audio",l="volume",m="duration",h="currentTime",p="canPlayType",w="addEventListener";f.ready=!0;f.version=2;f.ios=k;f.android=x;f.needTouchFirst=!!k;f.enableMultiTrack=!!k;f.prototype={preset:function(a){return(a=
this.g[a])?this.play(a[0],a[1],a[2],a[3]):o},play:function(a,d,i,b){var e=this[j],g=this.f,f=this.e===u;return a<d&&(i&&(this.a=[a,d,1,b]),g>=s)?(i?this.b[0]=0:(this.b[1]=d,this.b[0]++||(this.b[2]=this.d?!1:f,this.b[3]=e[h],this.b[4]=Date.now())),e[h]=a,f||e.play(),!0):!1},pause:function(){var a=this[j];a.paused?a.play():a.pause()},seek:function(a,d){var f=this[j],b=f[h],e=f[m];if(a===o)return b;b="+"===d?b+a:"-"===d?b-a:a;return f[h]=b>e?e:0>b?0:b},mute:function(){var a=this[j];return a.muted=!a.muted},
info:function(){var a=this[j],d={track:this.d,state:this.e<<8|this.f};d.muted=a.muted;d.paused=a.paused;d[l]=a[l];d[m]=a[m]||0;d[h]=a[h]||0;return d},volume:function(a,d){var f=this[j],b=f[l];if(a===o)return b;b="+"===d?b+a:"-"===d?b-a:a;return f[l]=1<b?1:0>b?0:b}};y.UnitePlayer=f})(this,this.HTMLAudioElement,this.navigator.userAgent);
