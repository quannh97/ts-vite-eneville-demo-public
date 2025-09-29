import{wB as be,dX as Fe,n as Pe,nv as dt,kV as Ae,rC as ft,jQ as pt,ih as ht,J as gt,kE as Re,k$ as vt,r as P,n0 as we,ic as ke,be as Xe,aC as ce,b as G,at as Y,aV as Se,az as Qe,aw as q,k7 as pe,nu as We,aq as Ye,ar as mt,aj as k,an as oe,aF as Ze,bz as bt,ax as Ee,fQ as St,t as xt,i8 as Ct,am as Ot,ah as $t,pP as Tt,N as Pt}from"./index-BfEcTZs0.js";import{o as At}from"./floatRGBA-B3I-0ZLC.js";import{a7 as Et,L as yt,ae as zt,a_ as Ft,s as Rt,J as wt,O as It,a9 as _t,o as Dt,T as Ie,ad as ge,c as _e,K as De,w as Mt,a$ as jt,i as Lt,G as H,k as Nt,e as Ut,N as Bt,aH as ee,X as Vt,Y as qt,al as Ht,b0 as Gt,as as kt,Q as Xt,at as Qt,au as A,av as Wt,aw as W,t as Yt,b1 as Je,b2 as Ke,b3 as Zt,ai as Jt,b4 as Kt,ay as eo,aC as to,b5 as oo,b6 as ao,b7 as io,b8 as so,b9 as Me,ba as je,bb as ro,aD as no,bc as Le}from"./verticalOffsetUtils-FoZe4X3u.js";import{s as lo,g as co,o as Ne,f as uo,y as fo,T as Ue}from"./BufferView-CFFiXiYK.js";import{O as po}from"./InterleavedLayout-CfyiDaNd.js";import{n as N,u as et,w as ve}from"./ShaderOutput-Bdd80V3g.js";import{l as tt,u as ho,n as go,b as vo,d as mo}from"./graphicUtils-C2Ye74BV.js";import{e as d}from"./VertexAttribute-BfkzOMLV.js";import{B as bo,o as So,g as xo,p as Co}from"./renderState-CXXPxP-r.js";import{n as f,t as y}from"./glsl-Cj7KC756.js";import{a as Oo}from"./BindType-BBwFZqyN.js";import{i as $o}from"./ShaderBuilder-DQKsEMSr.js";let To=class extends Et{constructor(e,t){super(e,"vec4",Oo.Draw,((a,i,s)=>a.setUniform4fv(e,t(i,s))))}};const ye=128,Q=.5,fa=be(Q/2,Q/2,1-Q/2,1-Q/2);function pa(o){return o==="cross"||o==="x"}function ha(o,e=ye,t=e*Q,a=0){const{data:i,parameters:s}=Po(o,e,t,a);return new yt(i,s)}function Po(o,e=ye,t=e*Q,a=0){return{data:Ao(o,e,t,a),parameters:{mipmap:!1,wrap:{s:Fe.CLAMP_TO_EDGE,t:Fe.CLAMP_TO_EDGE},width:e,height:e,components:4,noUnpackFlip:!0,reloadable:!0}}}function Ao(o,e=ye,t=e*Q,a=0){switch(o){case"circle":default:return Eo(e,t);case"square":return yo(e,t);case"cross":return Fo(e,t,a);case"x":return Ro(e,t,a);case"kite":return zo(e,t);case"triangle":return wo(e,t);case"arrow":return Io(e,t)}}function Eo(o,e){const t=o/2-.5;return ie(o,it(t,t,e/2))}function yo(o,e){return ot(o,e,!1)}function zo(o,e){return ot(o,e,!0)}function Fo(o,e,t=0){return at(o,e,!1,t)}function Ro(o,e,t=0){return at(o,e,!0,t)}function wo(o,e){return ie(o,st(o/2,e,e/2))}function Io(o,e){const t=e,a=e/2,i=o/2,s=.8*t,r=it(i,(o-e)/2-s,Math.sqrt(s*s+a*a)),l=st(i,t,a);return ie(o,((u,n)=>Math.max(l(u,n),-r(u,n))))}function ot(o,e,t){return t&&(e/=Math.SQRT2),ie(o,((a,i)=>{let s=a-.5*o+.25,r=.5*o-i-.75;if(t){const l=(s+r)/Math.SQRT2;r=(r-s)/Math.SQRT2,s=l}return Math.max(Math.abs(s),Math.abs(r))-.5*e}))}function at(o,e,t,a=0){e-=a,t&&(e*=Math.SQRT2);const i=.5*e;return ie(o,((s,r)=>{let l,u=s-.5*o,n=.5*o-r-1;if(t){const b=(u+n)/Math.SQRT2;n=(n-u)/Math.SQRT2,u=b}return u=Math.abs(u),n=Math.abs(n),l=u>n?u>i?Math.sqrt((u-i)*(u-i)+n*n):n:n>i?Math.sqrt(u*u+(n-i)*(n-i)):u,l-=a/2,l}))}function it(o,e,t){return(a,i)=>{const s=a-o,r=i-e;return Math.sqrt(s*s+r*r)-t}}function st(o,e,t){const a=Math.sqrt(e*e+t*t);return(i,s)=>{const r=Math.abs(i-o)-t,l=s-o+e/2+.75,u=(e*r+t*l)/a,n=-l;return Math.max(u,n)}}function ie(o,e){const t=new Uint8Array(4*o*o);for(let a=0;a<o;a++)for(let i=0;i<o;i++){const s=i+o*a;let r=e(i,a);r=r/o+.5,At(r,t,4*s)}return t}function _o(o){return o instanceof Float32Array&&o.length>=16}function Do(o){return Array.isArray(o)&&o.length>=16}function Mo(o){return _o(o)||Do(o)}class jo{constructor(){this.factor=new Be,this.factorAlignment=new Be}}class Be{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}function Lo(o,e){const{vertex:t,fragment:a}=o;o.include(zt,e),t.include(tt),t.main.add(f`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),a.main.add(f`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}function rt(o){const e=new $o,{signedDistanceFieldEnabled:t,occlusionTestEnabled:a,horizonCullingEnabled:i,pixelSnappingEnabled:s,hasScreenSizePerspective:r,debugDrawLabelBorder:l,vvSize:u,vvColor:n,hasRotation:b,occludedFragmentFade:p,sampleSignedDistanceFieldTexelCenter:h}=o;e.include(ho,o),e.vertex.include(Ft,o);const{occlusionPass:O,output:F,oitPass:R}=o;if(O)return e.include(Lo,o),e;const{vertex:x,fragment:S}=e;e.include(Rt),e.include(wt,o),e.include(It,o),a&&e.include(go),S.include(vo),S.include(_t),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");const T=F===N.Highlight,z=T&&a;z&&e.varyings.add("voccluded","float"),x.uniforms.add(new Dt("viewport",(c=>c.camera.fullViewport)),new Ie("screenOffset",((c,M)=>Ae(ue,2*c.screenOffset[0]*M.camera.pixelRatio,2*c.screenOffset[1]*M.camera.pixelRatio))),new Ie("anchorPosition",(c=>J(c))),new ge("materialColor",(c=>c.color)),new _e("materialRotation",(c=>c.rotation)),new De("tex",(c=>c.texture))),Mt(x),t&&(x.uniforms.add(new ge("outlineColor",(c=>c.outlineColor))),S.uniforms.add(new ge("outlineColor",(c=>Ve(c)?c.outlineColor:ft)),new _e("outlineSize",(c=>Ve(c)?c.outlineSize:0)))),i&&x.uniforms.add(new To("pointDistanceSphere",((c,M)=>{const I=M.camera.eye,_=c.origin;return pt(_[0]-I[0],_[1]-I[1],_[2]-I[2],ht.radius)}))),s&&x.include(tt),r&&(jt(x),Lt(x)),l&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add(d.UVI,"vec2"),e.attributes.add(d.COLOR,"vec4"),e.attributes.add(d.SIZE,"vec2"),e.attributes.add(d.ROTATION,"float"),(u||n)&&e.attributes.add(d.FEATUREATTRIBUTE,"vec4"),x.code.add(i?f`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return b > 0.0 && b < a && b * b  > a * c;
}`:f`bool behindHorizon(vec3 posModel) { return false; }`),x.main.add(f`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    if (behindHorizon(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    vec2 inputSize;
    ${y(r,f`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,f`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${y(u,f`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${y(a,f`
    bool visible = testHUDVisibility(posProj);
    if (!visible) {
      vtc = vec2(0.0);
      ${y(l,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
      return;
    }`)}
    ${y(z,f`voccluded = visible ? 0.0 : 1.0;`)}
  `);const w=f`
      vec2 uvi1 = vec2(uvi.x < 0.0 ? 1.0 : 0.0, uvi.y < 0.0 ? 1.0 : 0.0);
      vec2 uv = abs(uvi + uvi1);
      vec2 texSize = vec2(textureSize(tex, 0));
      uv.x = uv.x >= ${qe} ? 1.0 : uv.x / texSize.x;
      uv.y = uv.y >= ${qe} ? 1.0 : uv.y / texSize.y;
      quadOffset.xy = (uvi1 - anchorPosition) * 2.0 * combinedSize;

      ${y(b,f`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,g=s?t?f`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:f`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:f`posProj += quadOffset;`;x.main.add(f`
    ${w}
    ${n?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${y(F===N.ObjectAndLayerIdColor,f`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${f.float(H)};
    ${y(t,`alphaDiscard = alphaDiscard && outlineColor.a < ${f.float(H)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${g}
      gl_Position = posProj;
    }

    vtc = uv;

    ${y(l,f`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),S.uniforms.add(new De("tex",(c=>c.texture))),p&&!T&&S.uniforms.add(new Nt("depthMap",(c=>c.mainDepth)),new Ut("occludedOpacity",(c=>c.hudOccludedFragmentOpacity)));const L=l?f`(isBorder > 0.0 ? 0.0 : ${f.float(H)})`:f.float(H),D=f`
    ${y(l,f`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${y(h,f`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${t?f`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgbaTofloat(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${L} ||
          fillPixelColor.a + outlinePixelColor.a < ${f.float(H)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${y(!T,f`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${L}) {
          discard;
        }

        ${y(!T,f`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:f`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${L}) {
            discard;
          }
          ${y(!T,f`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${y(p&&!T,f`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${y(!T&&l,f`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(F){case N.Color:case N.ColorEmission:e.outputs.add("fragColor","vec4",0),F===N.ColorEmission&&e.outputs.add("fragEmission","vec4",1),R===ee.ColorAlpha&&e.outputs.add("fragAlpha","float",F===N.ColorEmission?2:1),S.main.add(f`
        ${D}
        ${y(R===ee.FrontFace,f`fragColor.rgb /= fragColor.a;`)}
        ${y(F===N.ColorEmission,f`fragEmission = vec4(0.0);`)}
        ${y(R===ee.ColorAlpha,f`fragAlpha = fragColor.a;`)}`);break;case N.ObjectAndLayerIdColor:S.main.add(f`
        ${D}
        outputObjectAndLayerIdColor();`);break;case N.Highlight:e.include(Bt,o),S.main.add(f`
        ${D}
        outputHighlight(${y(z,f`voccluded == 1.0`,f`false`)});`)}return e}function Ve(o){return o.outlineColor[3]>0&&o.outlineSize>0}function J(o){return o.textureIsSignedDistanceField?No(o.anchorPosition,o.distanceFieldBoundingBox,ue):dt(ue,o.anchorPosition),ue}function No(o,e,t){Ae(t,o[0]*(e[2]-e[0])+e[0],o[1]*(e[3]-e[1])+e[1])}const ue=Pe(),ae=32e3,qe=f.float(ae),Uo=Object.freeze(Object.defineProperty({__proto__:null,build:rt,calculateAnchorPosition:J,fullUV:ae},Symbol.toStringTag,{value:"Module"}));class Bo extends Vt{constructor(e,t){super(e,t,new qt(Uo,(()=>gt(()=>Promise.resolve().then(()=>Jo),void 0)))),this.primitiveType=t.occlusionPass?Re.POINTS:Re.TRIANGLES}initializePipeline(e){const{oitPass:t,hasPolygonOffset:a,draped:i,output:s,depthTestEnabled:r,occlusionPass:l}=e,u=t===ee.NONE,n=t===ee.ColorAlpha,b=s===N.Highlight,p=r&&!i&&!n&&!l&&!b;return bo({blending:et(s)?u?So:Gt(t):null,depthTest:r&&!i?{func:vt.LEQUAL}:null,depthWrite:p?Co:null,drawBuffers:Ht(t,s),colorWrite:xo,polygonOffset:a?Vo:null})}}const Vo={factor:0,units:-4};class $ extends kt{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.objectAndLayerIdColorInstanced=!1,this.horizonCullingEnabled=!0,this.isFocused=!0,this.textureCoordinateType=Xt.None,this.emissionSource=Qt.None,this.discardInvisibleFragments=!0,this.hasVvInstancing=!1,this.snowCover=!1}}P([A()],$.prototype,"screenCenterOffsetUnitsEnabled",void 0),P([A()],$.prototype,"occlusionTestEnabled",void 0),P([A()],$.prototype,"signedDistanceFieldEnabled",void 0),P([A()],$.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),P([A()],$.prototype,"vvSize",void 0),P([A()],$.prototype,"vvColor",void 0),P([A()],$.prototype,"hasVerticalOffset",void 0),P([A()],$.prototype,"hasScreenSizePerspective",void 0),P([A()],$.prototype,"hasRotation",void 0),P([A()],$.prototype,"debugDrawLabelBorder",void 0),P([A()],$.prototype,"hasPolygonOffset",void 0),P([A()],$.prototype,"depthTestEnabled",void 0),P([A()],$.prototype,"pixelSnappingEnabled",void 0),P([A()],$.prototype,"draped",void 0),P([A()],$.prototype,"terrainDepthTest",void 0),P([A()],$.prototype,"cullAboveTerrain",void 0),P([A()],$.prototype,"occlusionPass",void 0),P([A()],$.prototype,"occludedFragmentFade",void 0),P([A()],$.prototype,"objectAndLayerIdColorInstanced",void 0),P([A()],$.prototype,"horizonCullingEnabled",void 0),P([A()],$.prototype,"isFocused",void 0);let ga=class extends Wt{constructor(e,t){super(e,Wo),this.produces=new Map([[W.HUD_MATERIAL,a=>ve(a)&&!this.parameters.drawAsLabel],[W.LABEL_MATERIAL,a=>ve(a)&&this.parameters.drawAsLabel],[W.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[W.DRAPED_MATERIAL,a=>this.parameters.draped&&ve(a)]]),this._visible=!0,this._configuration=new $(t)}getConfiguration(e,t){const a=this.parameters.draped;return super.getConfiguration(e,t,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=a,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===W.OCCLUSION_PIXELS,this._configuration.occludedFragmentFade=!a&&this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||t.slot===W.OCCLUSION_PIXELS,et(e)&&(this._configuration.debugDrawLabelBorder=!!Yt.LABELS_SHOW_BORDER),this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}intersect(e,t,a,i,s,r){const{options:{selectionMode:l,hud:u,excludeLabels:n},point:b,camera:p}=a,{parameters:h}=this;if(!l||!u||n&&h.isLabel||!e.visible||!b||!p)return;const O=e.attributes.get(d.FEATUREATTRIBUTE),F=O==null?null:we(O.data,Oe),{scaleX:R,scaleY:x}=$e(F,h,p.pixelRatio);ke(de,t),e.attributes.has(d.FEATUREATTRIBUTE)&&Go(de);const S=e.attributes.get(d.POSITION),T=e.attributes.get(d.SIZE),z=e.attributes.get(d.NORMAL),w=e.attributes.get(d.ROTATION),g=e.attributes.get(d.CENTEROFFSETANDDISTANCE);lo(S.size>=3);const L=J(h),D=this.parameters.centerOffsetUnits==="screen";for(let c=0;c<S.data.length/S.size;c++){const M=c*S.size;ce(v,S.data[M],S.data[M+1],S.data[M+2]),Y(v,v,t),Y(v,v,p.viewMatrix);const I=c*g.size;if(ce(C,g.data[I],g.data[I+1],g.data[I+2]),!D&&(v[0]+=C[0],v[1]+=C[1],C[2]!==0)){const U=C[2];Se(C,v),Qe(v,v,q(C,C,U))}const _=c*z.size;if(ce(X,z.data[_],z.data[_+1],z.data[_+2]),xe(X,de,p,te),Te(this.parameters,v,te,p,Z),p.applyProjection(v,m),m[0]>-1){D&&(C[0]||C[1])&&(m[0]+=C[0]*p.pixelRatio,C[1]!==0&&(m[1]+=Je(C[1],Z.factorAlignment)*p.pixelRatio),p.unapplyProjection(m,v)),m[0]+=this.parameters.screenOffset[0]*p.pixelRatio,m[1]+=this.parameters.screenOffset[1]*p.pixelRatio,m[0]=Math.floor(m[0]),m[1]=Math.floor(m[1]);const U=c*T.size;E[0]=T.data[U],E[1]=T.data[U+1],Ke(E,Z.factor,E);const se=ct*p.pixelRatio;let re=0;h.textureIsSignedDistanceField&&(re=Math.min(h.outlineSize,.5*E[0])*p.pixelRatio/2),E[0]*=R,E[1]*=x;const he=c*w.size,ne=h.rotation+w.data[he];if(Ce(b,m[0],m[1],E,se,re,ne,h,L)){const B=a.ray;if(Y(fe,v,Ye(lt,p.viewMatrix)),m[0]=b[0],m[1]=b[1],p.unprojectFromRenderScreen(m,v)){const V=G();k(V,B.direction);const ze=1/oe(V);q(V,V,ze),r(Ze(B.origin,v)*ze,V,-1,fe)}}}}}intersectDraped(e,t,a,i,s){const r=e.attributes.get(d.POSITION),l=e.attributes.get(d.SIZE),u=e.attributes.get(d.ROTATION),n=this.parameters,b=J(n),p=e.attributes.get(d.FEATUREATTRIBUTE),h=p==null?null:we(p.data,Oe),{scaleX:O,scaleY:F}=$e(h,n,e.screenToWorldRatio),R=Xo*e.screenToWorldRatio;for(let x=0;x<r.data.length/r.size;x++){const S=x*r.size,T=r.data[S],z=r.data[S+1],w=x*l.size;E[0]=l.data[w],E[1]=l.data[w+1];let g=0;n.textureIsSignedDistanceField&&(g=Math.min(n.outlineSize,.5*E[0])*e.screenToWorldRatio/2),E[0]*=O,E[1]*=F;const L=x*u.size,D=n.rotation+u.data[L];Ce(a,T,z,E,R,g,D,n,b)&&i(s.distance,s.normal,-1)}}createBufferWriter(){return new Zo}applyShaderOffsetsView(e,t,a,i,s,r,l){const u=xe(t,a,s,te);return this._applyVerticalGroundOffsetView(e,u,s,l),Te(this.parameters,l,u,s,r),this._applyPolygonOffsetView(l,u,i[3],s,l),this._applyCenterOffsetView(l,i,l),l}applyShaderOffsetsNDC(e,t,a,i,s){return this._applyCenterOffsetNDC(e,t,a,i),s!=null&&k(s,i),this._applyPolygonOffsetNDC(i,t,a,i),i}_applyPolygonOffsetView(e,t,a,i,s){const r=i.aboveGround?1:-1;let l=Math.sign(a);l===0&&(l=r);const u=r*l;if(this.parameters.shaderPolygonOffset<=0)return k(s,e);const n=bt(Math.abs(t.cosAngle),.01,1),b=1-Math.sqrt(1-n*n)/n/i.viewport[2];return q(s,e,u>0?b:1/b),s}_applyVerticalGroundOffsetView(e,t,a,i){const s=oe(e),r=a.aboveGround?1:-1,l=a.computeRenderPixelSizeAtDist(s)*mo,u=q(v,t.normal,r*l);return Ee(i,e,u),i}_applyCenterOffsetView(e,t,a){const i=this.parameters.centerOffsetUnits!=="screen";return a!==e&&k(a,e),i&&(a[0]+=t[0],a[1]+=t[1],t[2]&&(Se(X,a),St(a,a,q(X,X,t[2])))),a}_applyCenterOffsetNDC(e,t,a,i){const s=this.parameters.centerOffsetUnits!=="screen";return i!==e&&k(i,e),s||(i[0]+=t[0]/a.fullWidth*2,i[1]+=t[1]/a.fullHeight*2),i}_applyPolygonOffsetNDC(e,t,a,i){const s=this.parameters.shaderPolygonOffset;if(e!==i&&k(i,e),s){const r=a.aboveGround?1:-1,l=r*Math.sign(t[3]);i[2]-=(l||r)*s}return i}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:t,outlineColor:a}=this.parameters,i=e[3]>=H||t>=H&&a[3]>=H;return this._visible&&i}createGLMaterial(e){return new qo(e)}calculateRelativeScreenBounds(e,t,a=xt()){return Ho(this.parameters,e,t,a),a[2]=a[0]+e[0],a[3]=a[1]+e[1],a}};class qo extends no{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(Bo,e)}}function Ho(o,e,t,a){a[0]=o.anchorPosition[0]*-e[0]+o.screenOffset[0]*t,a[1]=o.anchorPosition[1]*-e[1]+o.screenOffset[1]*t}function xe(o,e,t,a){return Mo(e)&&(e=ke(ko,e)),Ct(a.normal,o,e),Y(a.normal,a.normal,t.viewInverseTransposeMatrix),a.cosAngle=Ot(nt,Qo),a}function Go(o){const e=o[0],t=o[1],a=o[2],i=o[3],s=o[4],r=o[5],l=o[6],u=o[7],n=o[8],b=1/Math.sqrt(e*e+t*t+a*a),p=1/Math.sqrt(i*i+s*s+r*r),h=1/Math.sqrt(l*l+u*u+n*n);return o[0]=e*b,o[1]=t*b,o[2]=a*b,o[3]=i*p,o[4]=s*p,o[5]=r*p,o[6]=l*h,o[7]=u*h,o[8]=n*h,o}function Ce(o,e,t,a,i,s,r,l,u){let n=e-i-a[0]*u[0],b=n+a[0]+2*i,p=t-i-a[1]*u[1],h=p+a[1]+2*i;const O=l.distanceFieldBoundingBox;return l.textureIsSignedDistanceField&&O!=null&&(n+=a[0]*O[0],p+=a[1]*O[1],b-=a[0]*(1-O[2]),h-=a[1]*(1-O[3]),n-=s,b+=s,p-=s,h+=s),Ae(He,e,t),Tt(K,o,He,Pt(r)),K[0]>n&&K[0]<b&&K[1]>p&&K[1]<h}const Z=new jo,v=G(),X=G(),m=pe(),nt=G(),fe=G(),K=Pe(),He=Pe(),de=Xe(),ko=Xe(),lt=mt(),le=pe(),C=G(),me=G(),Oe=pe(),te={normal:nt,cosAngle:0},ct=1,Xo=2,E=We(0,0),j=6,Qo=$t(0,0,1);class Wo extends Zt{constructor(){super(...arguments),this.renderOccluded=Jt.Occlude,this.isDecoration=!1,this.color=be(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=We(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=be(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=pe(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.focusStyle="bright",this.draped=!1,this.isLabel=!1}}const ut=po().vec3f(d.POSITION).vec3f(d.NORMAL).vec2i16(d.UVI).vec4u8(d.COLOR).vec2f(d.SIZE).f32(d.ROTATION).vec4f(d.CENTEROFFSETANDDISTANCE).vec4f(d.FEATUREATTRIBUTE),Yo=ut.clone().vec4u8(d.OLIDCOLOR);class Zo{constructor(){this.vertexBufferLayout=to()?Yo:ut}elementCount(e){return e.get(d.POSITION).indices.length*j}write(e,t,a,i,s,r){const{position:l,normal:u,uvi:n,color:b,size:p,rotation:h,centerOffsetAndDistance:O,featureAttribute:F}=s;oo(a.get(d.POSITION),e,l,r,j),ao(a.get(d.NORMAL),t,u,r,j);const R=a.get(d.UVI)?.data;let x=0,S=0,T=-1-ae,z=-1-ae;R&&R.length>=4&&(x=R[0],S=R[1],T=-1-R[2],z=-1-R[3]);let w=a.get(d.POSITION).indices.length,g=r;for(let c=0;c<w;++c)n.set(g,0,x),n.set(g,1,S),g++,n.set(g,0,T),n.set(g,1,S),g++,n.set(g,0,T),n.set(g,1,z),g++,n.set(g,0,T),n.set(g,1,z),g++,n.set(g,0,x),n.set(g,1,z),g++,n.set(g,0,x),n.set(g,1,S),g++;io(a.get(d.COLOR),4,b,r,j);const{data:L,indices:D}=a.get(d.SIZE);w=D.length,g=r;for(let c=0;c<w;++c){const M=L[2*D[c]],I=L[2*D[c]+1];for(let _=0;_<j;++_)p.set(g,0,M),p.set(g,1,I),g++}if(so(a.get(d.ROTATION),h,r,j),a.get(d.CENTEROFFSETANDDISTANCE)?Me(a.get(d.CENTEROFFSETANDDISTANCE),O,r,j):je(O,r,w*j),a.get(d.FEATUREATTRIBUTE)?Me(a.get(d.FEATUREATTRIBUTE),F,r,j):je(F,r,w*j),i!=null){const c=a.get(d.POSITION)?.indices;if(c){const M=c.length,I=s.getField(d.OLIDCOLOR,co);ro(i,I,M,r,j)}}return{numVerticesPerItem:j,numItems:w}}intersect(e,t,a,i,s,r,l){const{options:{selectionMode:u,hud:n,excludeLabels:b},point:p,camera:h}=i;if(!u||!n||b&&t.isLabel||!p)return;const O=this.vertexBufferLayout.createView(e),F=O.getField(d.POSITION,Ne),R=O.getField(d.NORMAL,Ne),x=O.getField(d.ROTATION,uo),S=O.getField(d.SIZE,fo),T=O.getField(d.FEATUREATTRIBUTE,Ue),z=O.getField(d.CENTEROFFSETANDDISTANCE,Ue),w=t.centerOffsetUnits==="screen",g=J(t);if(F==null||R==null||x==null||S==null||z==null||h==null)return;const L=T==null?null:T.getVec(0,Oe),{scaleX:D,scaleY:c}=$e(L,t,h.pixelRatio),M=F.count/j;for(let I=0;I<M;I++){const _=I*j;if(F.getVec(_,v),a!=null&&Ee(v,v,a),Y(v,v,h.viewMatrix),z.getVec(_,le),ce(C,le[0],le[1],le[2]),!w&&(v[0]+=C[0],v[1]+=C[1],C[2]!==0)){const U=C[2];Se(C,v),Qe(v,v,q(C,C,U))}if(R.getVec(_,X),xe(X,de,h,te),Te(t,v,te,h,Z),h.applyProjection(v,m),m[0]>-1){w&&(C[0]||C[1])&&(m[0]+=C[0]*h.pixelRatio,C[1]!==0&&(m[1]+=Je(C[1],Z.factorAlignment)*h.pixelRatio),h.unapplyProjection(m,v)),m[0]+=t.screenOffset[0]*h.pixelRatio,m[1]+=t.screenOffset[1]*h.pixelRatio,m[0]=Math.floor(m[0]),m[1]=Math.floor(m[1]),S.getVec(_,E),Ke(E,Z.factor,E);const U=ct*h.pixelRatio;let se=0;t.textureIsSignedDistanceField&&(se=Math.min(t.outlineSize,.5*E[0])*h.pixelRatio/2),E[0]*=D,E[1]*=c;const re=x.get(_),he=t.rotation+re;if(Ce(p,m[0],m[1],E,U,se,he,t,g)){const ne=i.ray;if(Y(fe,v,Ye(lt,h.viewMatrix)),m[0]=p[0],m[1]=p[1],h.unprojectFromRenderScreen(m,v)){const B=G();k(B,ne.direction);const V=1/oe(B);q(B,B,V),l(Ze(ne.origin,v)*V,B,I,fe)}}}}}}function $e(o,e,t){return o==null||e.vvSize==null?{scaleX:t,scaleY:t}:(Kt(me,e,o),{scaleX:me[0]*t,scaleY:me[1]*t})}function Te(o,e,t,a,i){if(!o.verticalOffset?.screenLength)return o.screenSizePerspective||o.screenSizePerspectiveAlignment?Ge(o,i,oe(e),t.cosAngle):(i.factor.scale=1,i.factorAlignment.scale=1),e;const s=oe(e),r=o.screenSizePerspectiveAlignment??o.screenSizePerspective,l=eo(a,s,o.verticalOffset,t.cosAngle,r);return Ge(o,i,s,t.cosAngle),q(t.normal,t.normal,l),Ee(e,e,t.normal)}function Ge(o,e,t,a){o.screenSizePerspective!=null?Le(a,t,o.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minScaleFactor=0),o.screenSizePerspectiveAlignment!=null?Le(a,t,o.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minScaleFactor=e.factor.minScaleFactor)}const Jo=Object.freeze(Object.defineProperty({__proto__:null,build:rt,calculateAnchorPosition:J,fullUV:ae},Symbol.toStringTag,{value:"Module"}));export{ha as a,ye as b,pa as c,Po as i,Q as o,fa as s,ga as u};
