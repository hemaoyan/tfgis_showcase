define(["./AttributeCompression-56959beb","./Cartesian2-40b13f31","./Color-16798d78","./when-7b580518","./IndexDatatype-b42089ce","./Math-87254c13","./OrientedBoundingBox-f7557a9b","./createTaskProcessorWorker","./Check-3917d765","./Transforms-70f396e0","./combine-83aa7971","./RuntimeError-fad4d3c6","./WebGLConstants-4e26b85a","./EllipsoidTangentPlane-66f520e3","./AxisAlignedBoundingBox-445c3009","./IntersectionTests-587a744a","./Plane-9d4e3328"],function(me,ye,Ie,we,xe,ve,Ae,e,a,n,r,t,i,o,s,f,d){"use strict";var Ee=new ye.Cartesian3,Ne=new ye.Ellipsoid,Te=new ye.Rectangle,ke={min:void 0,max:void 0,indexBytesPerElement:void 0};function Be(e,a,n){var r=a.length,t=2+r*Ae.OrientedBoundingBox.packedLength+1+function(e){for(var a=e.length,n=0,r=0;r<a;++r)n+=Ie.Color.packedLength+3+e[r].batchIds.length;return n}(n),i=new Float64Array(t),o=0;i[o++]=e,i[o++]=r;for(var s=0;s<r;++s)Ae.OrientedBoundingBox.pack(a[s],i,o),o+=Ae.OrientedBoundingBox.packedLength;var f=n.length;i[o++]=f;for(var d=0;d<f;++d){var c=n[d];Ie.Color.pack(c.color,i,o),o+=Ie.Color.packedLength,i[o++]=c.offset,i[o++]=c.count;var u=c.batchIds,h=u.length;i[o++]=h;for(var l=0;l<h;++l)i[o++]=u[l]}return i}var Le=new ye.Cartesian3,Oe=new ye.Cartesian3,Ue=new ye.Cartesian3,Pe=new ye.Cartesian3,Fe=new ye.Cartesian3,Se=new ye.Cartographic,Re=new ye.Rectangle;return e(function(e,a){var n;t=e.packedBuffer,n=new Float64Array(t),t=0,ke.indexBytesPerElement=n[t++],ke.min=n[t++],ke.max=n[t++],ye.Cartesian3.unpack(n,3,Ee),t+=ye.Cartesian3.packedLength,ye.Ellipsoid.unpack(n,t,Ne),t+=ye.Ellipsoid.packedLength,ye.Rectangle.unpack(n,t,Te);var r=new(2===ke.indexBytesPerElement?Uint16Array:Uint32Array)(e.indices),t=new Uint16Array(e.positions),i=new Uint32Array(e.counts),o=new Uint32Array(e.indexCounts),s=new Uint32Array(e.batchIds),f=new Uint32Array(e.batchTableColors),d=new Array(i.length),c=Ee,u=Ne,h=Te,l=ke.min,g=ke.max,p=e.minimumHeights,b=e.maximumHeights;we.defined(p)&&we.defined(b)&&(p=new Float32Array(p),b=new Float32Array(b));var C=t.length/2,m=t.subarray(0,C),y=t.subarray(C,2*C);me.AttributeCompression.zigZagDeltaDecode(m,y);for(var I=new Float64Array(3*C),w=0;w<C;++w){var x=m[w],v=y[w],x=ve.CesiumMath.lerp(h.west,h.east,x/32767),v=ve.CesiumMath.lerp(h.south,h.north,v/32767),v=ye.Cartographic.fromRadians(x,v,0,Se),v=u.cartographicToCartesian(v,Le);ye.Cartesian3.pack(v,I,3*w)}var A=i.length,E=new Array(A),N=new Array(A),T=0,k=0;for(w=0;w<A;++w)E[w]=T,N[w]=k,T+=i[w],k+=o[w];var B=new Float32Array(3*C*2),L=new Uint16Array(2*C),O=new Uint32Array(N.length),U=new Uint32Array(o.length),P=[],F={};for(w=0;w<A;++w)_=f[w],we.defined(F[_])?(F[_].positionLength+=i[w],F[_].indexLength+=o[w],F[_].batchIds.push(w)):F[_]={positionLength:i[w],indexLength:o[w],offset:0,indexOffset:0,batchIds:[w]};var S,R=0,D=0;for(_ in F)F.hasOwnProperty(_)&&((G=F[_]).offset=R,G.indexOffset=D,R+=2*G.positionLength,D+=S=2*G.indexLength+6*G.positionLength,G.indexLength=S);var M=[];for(_ in F)F.hasOwnProperty(_)&&(G=F[_],M.push({color:Ie.Color.fromRgba(parseInt(_)),offset:G.indexOffset,count:G.indexLength,batchIds:G.batchIds}));for(w=0;w<A;++w){var _,G,Y=(G=F[_=f[w]]).offset,V=3*Y,H=Y,W=E[w],z=i[w],Z=s[w],j=l,q=g;we.defined(p)&&we.defined(b)&&(j=p[w],q=b[w]);for(var J=Number.POSITIVE_INFINITY,K=Number.NEGATIVE_INFINITY,Q=Number.POSITIVE_INFINITY,X=Number.NEGATIVE_INFINITY,$=0;$<z;++$){var ee=ye.Cartesian3.unpack(I,3*W+3*$,Le);u.scaleToGeodeticSurface(ee,ee);var ae=u.cartesianToCartographic(ee,Se),ne=ae.latitude,re=ae.longitude,J=Math.min(ne,J),K=Math.max(ne,K),Q=Math.min(re,Q),X=Math.max(re,X),ae=u.geodeticSurfaceNormal(ee,Oe),ne=ye.Cartesian3.multiplyByScalar(ae,j,Ue),re=ye.Cartesian3.add(ee,ne,Pe),ne=ye.Cartesian3.multiplyByScalar(ae,q,ne),ne=ye.Cartesian3.add(ee,ne,Fe);ye.Cartesian3.subtract(ne,c,ne),ye.Cartesian3.subtract(re,c,re),ye.Cartesian3.pack(ne,B,V),ye.Cartesian3.pack(re,B,V+3),L[H]=Z,L[H+1]=Z,V+=6,H+=2}(h=Re).west=Q,h.east=X,h.south=J,h.north=K,d[w]=Ae.OrientedBoundingBox.fromRectangle(h,l,g,u);var te=G.indexOffset,ie=N[w],oe=o[w];for(O[w]=te,$=0;$<oe;$+=3){var se=r[ie+$]-W,fe=r[ie+$+1]-W,de=r[ie+$+2]-W;P[te++]=2*se+Y,P[te++]=2*fe+Y,P[te++]=2*de+Y,P[te++]=2*de+1+Y,P[te++]=2*fe+1+Y,P[te++]=2*se+1+Y}for($=0;$<z;++$){var ce=$,ue=($+1)%z;P[te++]=2*ce+1+Y,P[te++]=2*ue+Y,P[te++]=2*ce+Y,P[te++]=2*ce+1+Y,P[te++]=2*ue+1+Y,P[te++]=2*ue+Y}G.offset+=2*z,G.indexOffset=te,U[w]=te-O[w]}for(var P=xe.IndexDatatype.createTypedArray(B.length/3,P),he=M.length,le=0;le<he;++le){for(var ge=M[le].batchIds,pe=0,be=ge.length,Ce=0;Ce<be;++Ce)pe+=U[ge[Ce]];M[le].count=pe}return t=Be(2===P.BYTES_PER_ELEMENT?xe.IndexDatatype.UNSIGNED_SHORT:xe.IndexDatatype.UNSIGNED_INT,d,M),a.push(B.buffer,P.buffer,O.buffer,U.buffer,L.buffer,t.buffer),{positions:B.buffer,indices:P.buffer,indexOffsets:O.buffer,indexCounts:U.buffer,batchIds:L.buffer,packedBuffer:t.buffer}})});
