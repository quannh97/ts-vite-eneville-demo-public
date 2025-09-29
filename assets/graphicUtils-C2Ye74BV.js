import{n as z}from"./glsl-Cj7KC756.js";import{h2 as De,ai as Fe,aC as se,b as N,az as E,aV as V,aj as Q,aw as U,ax as F,p0 as Ue,aG as $e,jU as Ge,b4 as B,at as je,ak as xe,ah as Ee,am as Se,p1 as He,p2 as Le,bi as _e,p3 as Be,t as ke,b2 as qe,p4 as Xe,p5 as Ze,p6 as Ye,aW as ge,p7 as We,ar as Je,dM as Ke,p8 as Qe,p9 as et,pa as tt,pb as nt,pc as ot,pd as at}from"./index-BfEcTZs0.js";import{r as R,t as ye,n as $}from"./vec3f32-WCVSSNPR.js";import{n as G,p as j,a as Te,b as Ae,s as rt,f as st,d as lt,o as Ie,c as it,e as me,g as ct,h as ut,w as ft,i as pt,j as ht,k as dt}from"./verticalOffsetUtils-FoZe4X3u.js";import{A as wt,U as Re}from"./Indices-_hfGuC9Z.js";import{t as S}from"./orientedBoundingBox-Bgig8huL.js";import{s as ee}from"./BufferView-CFFiXiYK.js";import{e as x}from"./VertexAttribute-BfkzOMLV.js";import{u as mt}from"./meshVertexSpaceUtils-CIMSkzph.js";import{o as Ot,x as gt}from"./hydratedFeatures-D0Tn8M2s.js";function Xt(t){t.code.add(z`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),t.code.add(z`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),t.code.add(z`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}var le;(function(t){t[t.Occluded=0]="Occluded",t[t.NotOccluded=1]="NotOccluded",t[t.Both=2]="Both",t[t.COUNT=3]="COUNT"})(le||(le={}));var Oe;(function(t){function n(r,s){const i=r[s],l=r[s+1],c=r[s+2];return Math.sqrt(i*i+l*l+c*c)}function o(r,s){const i=r[s],l=r[s+1],c=r[s+2],p=1/Math.sqrt(i*i+l*l+c*c);r[s]*=p,r[s+1]*=p,r[s+2]*=p}function e(r,s,i){r[s]*=i,r[s+1]*=i,r[s+2]*=i}function a(r,s,i,l,c,p=s){(c=c||r)[p]=r[s]+i[l],c[p+1]=r[s+1]+i[l+1],c[p+2]=r[s+2]+i[l+2]}function f(r,s,i,l,c,p=s){(c=c||r)[p]=r[s]-i[l],c[p+1]=r[s+1]-i[l+1],c[p+2]=r[s+2]-i[l+2]}t.length=n,t.normalize=o,t.scale=e,t.add=a,t.subtract=f})(Oe||(Oe={}));const q=Oe,pe=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],vt=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],xt=[0,0,1,0,1,1,0,1],yt=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Ce=new Array(36);for(let t=0;t<6;t++)for(let n=0;n<6;n++)Ce[6*t+n]=t;const k=new Array(36);for(let t=0;t<6;t++)k[6*t]=0,k[6*t+1]=1,k[6*t+2]=2,k[6*t+3]=2,k[6*t+4]=3,k[6*t+5]=0;function Zt(t,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(24);for(let e=0;e<8;e++)o[3*e]=pe[e][0]*n[0],o[3*e+1]=pe[e][1]*n[1],o[3*e+2]=pe[e][2]*n[2];return new j(t,[[x.POSITION,new S(o,yt,3,!0)],[x.NORMAL,new S(vt,Ce,3)],[x.UV0,new S(xt,k,2)]])}const he=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],At=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Pt=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Mt=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function Yt(t,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(18);for(let e=0;e<6;e++)o[3*e]=he[e][0]*n[0],o[3*e+1]=he[e][1]*n[1],o[3*e+2]=he[e][2]*n[2];return new j(t,[[x.POSITION,new S(o,Pt,3,!0)],[x.NORMAL,new S(At,Mt,3)]])}const ne=R(-.5,0,-.5),oe=R(.5,0,-.5),ae=R(0,0,.5),re=R(0,.5,0),X=$(),Z=$(),W=$(),J=$(),K=$();E(X,ne,re),E(Z,ne,oe),B(W,X,Z),V(W,W),E(X,oe,re),E(Z,oe,ae),B(J,X,Z),V(J,J),E(X,ae,re),E(Z,ae,ne),B(K,X,Z),V(K,K);const de=[ne,oe,ae,re],bt=[0,-1,0,W[0],W[1],W[2],J[0],J[1],J[2],K[0],K[1],K[2]],St=[0,1,2,3,1,0,3,2,1,3,0,2],Tt=[0,0,0,1,1,1,2,2,2,3,3,3];function Wt(t,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(12);for(let e=0;e<4;e++)o[3*e]=de[e][0]*n[0],o[3*e+1]=de[e][1]*n[1],o[3*e+2]=de[e][2]*n[2];return new j(t,[[x.POSITION,new S(o,St,3,!0)],[x.NORMAL,new S(bt,Tt,3)]])}function Jt(t,n,o,e,a={uv:!0}){const f=-Math.PI,r=2*Math.PI,s=-Math.PI/2,i=Math.PI,l=Math.max(3,Math.floor(o)),c=Math.max(2,Math.floor(e)),p=(l+1)*(c+1),y=G(3*p),P=G(3*p),A=G(2*p),w=[];let h=0;for(let O=0;O<=c;O++){const I=[],u=O/c,M=s+u*i,b=Math.cos(M);for(let C=0;C<=l;C++){const H=C/l,g=f+H*r,D=Math.cos(g)*b,T=Math.sin(M),te=-Math.sin(g)*b;y[3*h]=D*n,y[3*h+1]=T*n,y[3*h+2]=te*n,P[3*h]=D,P[3*h+1]=T,P[3*h+2]=te,A[2*h]=H,A[2*h+1]=u,I.push(h),++h}w.push(I)}const d=new Array;for(let O=0;O<c;O++)for(let I=0;I<l;I++){const u=w[O][I],M=w[O][I+1],b=w[O+1][I+1],C=w[O+1][I];O===0?(d.push(u),d.push(b),d.push(C)):O===c-1?(d.push(u),d.push(M),d.push(b)):(d.push(u),d.push(M),d.push(b),d.push(b),d.push(C),d.push(u))}const m=[[x.POSITION,new S(y,d,3,!0)],[x.NORMAL,new S(P,d,3,!0)]];return a.uv&&m.push([x.UV0,new S(A,d,2,!0)]),a.offset&&(m[0][0]=x.OFFSET,m.push([x.POSITION,new S(Float64Array.from(a.offset),Re(d.length),3,!0)])),new j(t,m)}function Kt(t,n,o,e){const a=It(n,o);return new j(t,a)}function It(t,n,o){let e,a;e=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let i=0;i<e.length;i+=3)q.scale(e,i,t/q.length(e,i));let f={};function r(i,l){i>l&&([i,l]=[l,i]);const c=i.toString()+"."+l.toString();if(f[c])return f[c];let p=e.length;return e.length+=3,q.add(e,3*i,e,3*l,e,p),q.scale(e,p,t/q.length(e,p)),p/=3,f[c]=p,p}for(let i=0;i<n;i++){const l=a.length,c=new Array(4*l);for(let p=0;p<l;p+=3){const y=a[p],P=a[p+1],A=a[p+2],w=r(y,P),h=r(P,A),d=r(A,y),m=4*p;c[m]=y,c[m+1]=w,c[m+2]=d,c[m+3]=P,c[m+4]=h,c[m+5]=w,c[m+6]=A,c[m+7]=d,c[m+8]=h,c[m+9]=w,c[m+10]=h,c[m+11]=d}a=c,f={}}const s=Ae(e);for(let i=0;i<s.length;i+=3)q.normalize(s,i);return[[x.POSITION,new S(Ae(e),a,3,!0)],[x.NORMAL,new S(s,a,3,!0)]]}function Qt(t,{normal:n,position:o,color:e,rotation:a,size:f,centerOffsetAndDistance:r,uvi:s,featureAttribute:i,objectAndLayerIdColor:l=null}={}){const c=o?xe(o):N(),p=n?xe(n):Ee(0,0,1),y=e?[255*e[0],255*e[1],255*e[2],e.length>3?255*e[3]:255]:[255,255,255,255],P=f!=null&&f.length===2?f:[1,1],A=a!=null?[a]:[0],w=Re(1),h=[[x.POSITION,new S(c,w,3,!0)],[x.NORMAL,new S(p,w,3,!0)],[x.COLOR,new S(y,w,4,!0)],[x.SIZE,new S(P,w,2)],[x.ROTATION,new S(A,w,1,!0)]];if(s&&h.push([x.UVI,new S(s,w,s.length)]),r!=null){const d=[r[0],r[1],r[2],r[3]];h.push([x.CENTEROFFSETANDDISTANCE,new S(d,w,4)])}if(i){const d=[i[0],i[1],i[2],i[3]];h.push([x.FEATUREATTRIBUTE,new S(d,w,4)])}return new j(t,h,null,Te.Point,l)}function Rt(t,n,o,e,a=!0,f=!0){let r=0;const s=n,i=t;let l=R(0,r,0),c=R(0,r+i,0),p=R(0,-1,0),y=R(0,1,0);e&&(r=i,c=R(0,0,0),l=R(0,r,0),p=R(0,1,0),y=R(0,-1,0));const P=[c,l],A=[p,y],w=o+2,h=Math.sqrt(i*i+s*s);if(e)for(let u=o-1;u>=0;u--){const M=u*(2*Math.PI/o),b=R(Math.cos(M)*s,r,Math.sin(M)*s);P.push(b);const C=R(i*Math.cos(M)/h,-s/h,i*Math.sin(M)/h);A.push(C)}else for(let u=0;u<o;u++){const M=u*(2*Math.PI/o),b=R(Math.cos(M)*s,r,Math.sin(M)*s);P.push(b);const C=R(i*Math.cos(M)/h,s/h,i*Math.sin(M)/h);A.push(C)}const d=new Array,m=new Array;if(a){for(let u=3;u<P.length;u++)d.push(1),d.push(u-1),d.push(u),m.push(0),m.push(0),m.push(0);d.push(P.length-1),d.push(2),d.push(1),m.push(0),m.push(0),m.push(0)}if(f){for(let u=3;u<P.length;u++)d.push(u),d.push(u-1),d.push(0),m.push(u),m.push(u-1),m.push(1);d.push(0),d.push(2),d.push(P.length-1),m.push(1),m.push(2),m.push(A.length-1)}const O=G(3*w);for(let u=0;u<w;u++)O[3*u]=P[u][0],O[3*u+1]=P[u][1],O[3*u+2]=P[u][2];const I=G(3*w);for(let u=0;u<w;u++)I[3*u]=A[u][0],I[3*u+1]=A[u][1],I[3*u+2]=A[u][2];return[[x.POSITION,new S(O,d,3,!0)],[x.NORMAL,new S(I,m,3,!0)]]}function en(t,n,o,e,a,f=!0,r=!0){return new j(t,Rt(n,o,e,a,f,r))}function tn(t,n,o,e,a,f,r){const s=a?ye(a):R(1,0,0),i=f?ye(f):R(0,0,0);r??=!0;const l=$();V(l,s);const c=$();U(c,l,Math.abs(n));const p=$();U(p,c,-.5),F(p,p,i);const y=R(0,1,0);Math.abs(1-Se(l,y))<.2&&se(y,0,0,1);const P=$();B(P,l,y),V(P,P),B(y,P,l);const A=2*e+(r?2:0),w=e+(r?2:0),h=G(3*A),d=G(3*w),m=G(2*A),O=new Array(3*e*(r?4:2)),I=new Array(3*e*(r?4:2));r&&(h[3*(A-2)]=p[0],h[3*(A-2)+1]=p[1],h[3*(A-2)+2]=p[2],m[2*(A-2)]=0,m[2*(A-2)+1]=0,h[3*(A-1)]=h[3*(A-2)]+c[0],h[3*(A-1)+1]=h[3*(A-2)+1]+c[1],h[3*(A-1)+2]=h[3*(A-2)+2]+c[2],m[2*(A-1)]=1,m[2*(A-1)+1]=1,d[3*(w-2)]=-l[0],d[3*(w-2)+1]=-l[1],d[3*(w-2)+2]=-l[2],d[3*(w-1)]=l[0],d[3*(w-1)+1]=l[1],d[3*(w-1)+2]=l[2]);const u=(g,D,T)=>{O[g]=D,I[g]=T};let M=0;const b=$(),C=$();for(let g=0;g<e;g++){const D=g*(2*Math.PI/e);U(b,y,Math.sin(D)),U(C,P,Math.cos(D)),F(b,b,C),d[3*g]=b[0],d[3*g+1]=b[1],d[3*g+2]=b[2],U(b,b,o),F(b,b,p),h[3*g]=b[0],h[3*g+1]=b[1],h[3*g+2]=b[2],m[2*g]=g/e,m[2*g+1]=0,h[3*(g+e)]=h[3*g]+c[0],h[3*(g+e)+1]=h[3*g+1]+c[1],h[3*(g+e)+2]=h[3*g+2]+c[2],m[2*(g+e)]=g/e,m[2*g+1]=1;const T=(g+1)%e;u(M++,g,g),u(M++,g+e,g),u(M++,T,T),u(M++,T,T),u(M++,g+e,g),u(M++,T+e,T)}if(r){for(let g=0;g<e;g++){const D=(g+1)%e;u(M++,A-2,w-2),u(M++,g,w-2),u(M++,D,w-2)}for(let g=0;g<e;g++){const D=(g+1)%e;u(M++,g+e,w-1),u(M++,A-1,w-1),u(M++,D+e,w-1)}}const H=[[x.POSITION,new S(h,O,3,!0)],[x.NORMAL,new S(d,I,3,!0)],[x.UV0,new S(m,O,2,!0)]];return new j(t,H)}function nn(t,n,o,e,a,f){e=e||10,a=a==null||a,ee(n.length>1);const r=[[0,0,0]],s=[],i=[];for(let l=0;l<e;l++){s.push([0,-l-1,-(l+1)%e-1]);const c=l/e*2*Math.PI;i.push([Math.cos(c)*o,Math.sin(c)*o])}return Ct(t,i,n,r,s,a,f)}function Ct(t,n,o,e,a,f,r=R(0,0,0)){const s=n.length,i=G(o.length*s*3+(6*e.length||0)),l=G(o.length*s*3+(e?6:0)),c=new Array,p=new Array;let y=0,P=0;const A=N(),w=N(),h=N(),d=N(),m=N(),O=N(),I=N(),u=N(),M=N(),b=N(),C=N(),H=N(),g=N(),D=Fe();se(M,0,1,0),E(w,o[1],o[0]),V(w,w),f?(F(u,o[0],r),V(h,u)):se(h,0,0,1),Pe(w,h,M,M,m,h,Me),Q(d,h),Q(H,m);for(let v=0;v<e.length;v++)U(O,m,e[v][0]),U(u,h,e[v][2]),F(O,O,u),F(O,O,o[0]),i[y++]=O[0],i[y++]=O[1],i[y++]=O[2];l[P++]=-w[0],l[P++]=-w[1],l[P++]=-w[2];for(let v=0;v<a.length;v++)c.push(a[v][0]>0?a[v][0]:-a[v][0]-1+e.length),c.push(a[v][1]>0?a[v][1]:-a[v][1]-1+e.length),c.push(a[v][2]>0?a[v][2]:-a[v][2]-1+e.length),p.push(0),p.push(0),p.push(0);let T=e.length;const te=e.length-1;for(let v=0;v<o.length;v++){let ve=!1;v>0&&(Q(A,w),v<o.length-1?(E(w,o[v+1],o[v]),V(w,w)):ve=!0,F(b,A,w),V(b,b),F(C,o[v-1],d),Ue(o[v],b,D),$e(D,Ge(C,A),u)?(E(u,u,o[v]),V(h,u),B(m,b,h),V(m,m)):Pe(b,d,H,M,m,h,Me),Q(d,h),Q(H,m)),f&&(F(u,o[v],r),V(g,u));for(let L=0;L<s;L++)if(U(O,m,n[L][0]),U(u,h,n[L][1]),F(O,O,u),V(I,O),l[P++]=I[0],l[P++]=I[1],l[P++]=I[2],F(O,O,o[v]),i[y++]=O[0],i[y++]=O[1],i[y++]=O[2],!ve){const ue=(L+1)%s;c.push(T+L),c.push(T+s+L),c.push(T+ue),c.push(T+ue),c.push(T+s+L),c.push(T+s+ue);for(let fe=0;fe<6;fe++){const Ve=c.length-6;p.push(c[Ve+fe]-te)}}T+=s}const Ne=o[o.length-1];for(let v=0;v<e.length;v++)U(O,m,e[v][0]),U(u,h,e[v][1]),F(O,O,u),F(O,O,Ne),i[y++]=O[0],i[y++]=O[1],i[y++]=O[2];const ie=P/3;l[P++]=w[0],l[P++]=w[1],l[P++]=w[2];const ce=T-s;for(let v=0;v<a.length;v++)c.push(a[v][0]>=0?T+a[v][0]:-a[v][0]-1+ce),c.push(a[v][2]>=0?T+a[v][2]:-a[v][2]-1+ce),c.push(a[v][1]>=0?T+a[v][1]:-a[v][1]-1+ce),p.push(ie),p.push(ie),p.push(ie);const ze=[[x.POSITION,new S(i,c,3,!0)],[x.NORMAL,new S(l,p,3,!0)]];return new j(t,ze)}function on(t,n,o,e){ee(n.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),ee(n[0].length===3,"createPolylineGeometry(): malformed vertex"),ee(o==null||o.length===n.length,"createPolylineGeometry: need same number of points and normals"),ee(o==null||o[0].length===3,"createPolylineGeometry(): malformed normal");const a=De(3*n.length),f=new Array(2*(n.length-1));let r=0,s=0;for(let l=0;l<n.length;l++){for(let c=0;c<3;c++)a[r++]=n[l][c];l>0&&(f[s++]=l-1,f[s++]=l)}const i=[[x.POSITION,new S(a,f,3,!0)]];if(o){const l=G(3*o.length);let c=0;for(let p=0;p<n.length;p++)for(let y=0;y<3;y++)l[c++]=o[p][y];i.push([x.NORMAL,new S(l,f,3,!0)])}return e&&i.push([x.COLOR,new S(e,wt(e.length/4),4)]),new j(t,i,null,Te.Line)}function an(t,n,o,e,a,f=0){const r=new Array(18),s=[[-o,f,a/2],[e,f,a/2],[0,n+f,a/2],[-o,f,-a/2],[e,f,-a/2],[0,n+f,-a/2]],i=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let l=0;l<6;l++)r[3*l]=s[l][0],r[3*l+1]=s[l][1],r[3*l+2]=s[l][2];return new j(t,[[x.POSITION,new S(r,i,3,!0)]])}function rn(t,n){const o=t.getMutableAttribute(x.POSITION).data;for(let e=0;e<o.length;e+=3){const a=o[e],f=o[e+1],r=o[e+2];se(Y,a,f,r),je(Y,Y,n),o[e]=Y[0],o[e+1]=Y[1],o[e+2]=Y[2]}}function sn(t,n=t){const o=t.attributes,e=o.get(x.POSITION).data,a=o.get(x.NORMAL).data;if(a){const f=n.getMutableAttribute(x.NORMAL).data;for(let r=0;r<a.length;r+=3){const s=a[r+1];f[r+1]=-a[r+2],f[r+2]=s}}if(e){const f=n.getMutableAttribute(x.POSITION).data;for(let r=0;r<e.length;r+=3){const s=e[r+1];f[r+1]=-e[r+2],f[r+2]=s}}}function we(t,n,o,e,a){return!(Math.abs(Se(n,t))>a)&&(B(o,t,n),V(o,o),B(e,o,t),V(e,e),!0)}function Pe(t,n,o,e,a,f,r){return we(t,n,a,f,r)||we(t,o,a,f,r)||we(t,e,a,f,r)}const Me=.99619469809,Y=N();function ln(t){return t.type==="point"}const Nt=.5;function cn(t,n){t.include(rt),t.attributes.add(x.POSITION,"vec3"),t.attributes.add(x.NORMAL,"vec3"),t.attributes.add(x.CENTEROFFSETANDDISTANCE,"vec4");const o=t.vertex;st(o,n),lt(o,n),o.uniforms.add(new Ie("viewport",(e=>e.camera.fullViewport)),new it("polygonOffset",(e=>e.shaderPolygonOffset)),new me("cameraGroundRelative",(e=>e.camera.aboveGround?1:-1))),n.hasVerticalOffset&&ct(o),o.code.add(z`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(z`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${n.terrainDepthTest?z.float(0):z`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),n.draped&&!n.hasVerticalOffset||ut(o),n.draped||(o.uniforms.add(new me("perDistancePixelRatio",(e=>Math.tan(e.camera.fovY/2)/(e.camera.fullViewport[2]/2)))),o.code.add(z`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${z.float(Nt)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),n.screenCenterOffsetUnitsEnabled&&ft(o),n.hasScreenSizePerspective&&pt(o),o.code.add(z`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${n.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${n.hasScreenSizePerspective&&(n.hasVerticalOffset||n.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${n.hasVerticalOffset?n.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${n.hasVerticalOffset?z`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${n.screenCenterOffsetUnitsEnabled?"":z`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${n.screenCenterOffsetUnitsEnabled?n.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${n.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function zt(t){t.uniforms.add(new ht("alignPixelEnabled",(n=>n.alignPixelEnabled))),t.code.add(z`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),t.code.add(z`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function un(t){t.vertex.uniforms.add(new me("renderTransparentlyOccludedHUD",(n=>n.hudRenderStyle===le.Occluded?1:n.hudRenderStyle===le.NotOccluded?0:.75)),new Ie("viewport",(n=>n.camera.fullViewport)),new dt("hudVisibilityTexture",(n=>n.hudVisibility?.getTexture()))),t.vertex.include(zt),t.vertex.code.add(z`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function fn(t,n){if(t.type==="point")return _(t,n,!1);if(Ot(t))switch(t.type){case"extent":return _(t.center,n,!1);case"polygon":return _(t.centroid,n,!1);case"polyline":return _(be(t),n,!0);case"mesh":return _(mt(t.vertexSpace,t.spatialReference)??t.extent.center,n,!1);case"multipoint":return}else switch(t.type){case"extent":return _(Vt(t),n,!0);case"polygon":return _(Dt(t),n,!0);case"polyline":return _(be(t),n,!0);case"multipoint":return}}function be(t){const n=t.paths[0];if(!n||n.length===0)return null;const o=Ze(n,Ye(n)/2);return ge(o[0],o[1],o[2],t.spatialReference)}function Vt(t){return ge(.5*(t.xmax+t.xmin),.5*(t.ymax+t.ymin),t.zmin!=null&&t.zmax!=null&&isFinite(t.zmin)&&isFinite(t.zmax)?.5*(t.zmax+t.zmin):void 0,t.spatialReference)}function Dt(t){const n=t.rings[0];if(!n||n.length===0)return null;const o=We(t.rings,!!t.hasZ);return ge(o[0],o[1],o[2],t.spatialReference)}function _(t,n,o){const e=o?t:gt(t);return n&&t?Xe(t,e,n)?e:null:e}function pn(t,n,o,e=0){if(t){n||(n=ke());const a=t;let f=.5*a.width*(o-1),r=.5*a.height*(o-1);return a.width<1e-7*a.height?f+=r/20:a.height<1e-7*a.width&&(r+=f/20),qe(n,a.xmin-f-e,a.ymin-r-e,a.xmax+f+e,a.ymax+r+e),n}return null}function hn(t,n,o=null){const e=Le(Be);return t!=null&&(e[0]=t[0],e[1]=t[1],e[2]=t[2]),n!=null?e[3]=n:t!=null&&t.length>3&&(e[3]=t[3]),o&&(e[0]*=o,e[1]*=o,e[2]*=o,e[3]*=o),e}function dn(t=He,n,o,e=1){const a=new Array(3);if(n==null||o==null)a[0]=1,a[1]=1,a[2]=1;else{let f,r=0;for(let s=2;s>=0;s--){const i=t[s],l=i!=null,c=s===0&&!f&&!l,p=o[s];let y;i==="symbol-value"||c?y=p!==0?n[s]/p:1:l&&i!=="proportional"&&isFinite(i)&&(y=p!==0?i/p:1),y!=null&&(a[s]=y,f=y,r=Math.max(r,Math.abs(y)))}for(let s=2;s>=0;s--)a[s]==null?a[s]=f:a[s]===0&&(a[s]=.001*r)}for(let f=2;f>=0;f--)a[f]/=e;return _e(a)}function Ft(t){return t.isPrimitive!=null}function wn(t){return Ut(Ft(t)?[t.width,t.depth,t.height]:t)?null:"Symbol sizes may not be negative values"}function Ut(t){const n=o=>o==null||o>=0;return Array.isArray(t)?t.every(n):n(t)}function mn(t,n,o,e=Je()){return t&&nt(e,e,-t/180*Math.PI),n&&ot(e,e,n/180*Math.PI),o&&at(e,e,o/180*Math.PI),e}function On(t,n,o){if(o.minDemResolution!=null)return o.minDemResolution;const e=Ke(n),a=Qe(t)*e,f=et(t)*e,r=tt(t)*(n.isGeographic?1:e);return a===0&&f===0&&r===0?o.minDemResolutionForPoints:.01*Math.max(a,f,r)}export{dn as B,Zt as C,On as E,wn as I,Pe as M,rn as O,pn as S,hn as U,Ut as Z,le as a,Xt as b,Rt as c,Nt as d,fn as e,Yt as f,Wt as g,tn as h,en as i,Qt as j,mn as k,zt as l,sn as m,un as n,Jt as o,an as p,nn as q,It as r,Kt as s,ln as t,cn as u,Ct as v,on as w};
