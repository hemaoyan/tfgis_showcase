define(["exports","./Transforms-990e2748","./Cartesian2-40b13f31","./Check-3917d765","./when-7b580518","./EllipsoidTangentPlane-3f2a1032","./Math-87254c13","./Plane-3906e976"],function(a,O,b,t,P,w,y,N){"use strict";function T(a,t){this.center=b.Cartesian3.clone(P.defaultValue(a,b.Cartesian3.ZERO)),this.halfAxes=O.Matrix3.clone(P.defaultValue(t,O.Matrix3.ZERO))}T.packedLength=b.Cartesian3.packedLength+O.Matrix3.packedLength,T.pack=function(a,t,e){return e=P.defaultValue(e,0),b.Cartesian3.pack(a.center,t,e),O.Matrix3.pack(a.halfAxes,t,e+b.Cartesian3.packedLength),t},T.unpack=function(a,t,e){return t=P.defaultValue(t,0),P.defined(e)||(e=new T),b.Cartesian3.unpack(a,t,e.center),O.Matrix3.unpack(a,t+b.Cartesian3.packedLength,e.halfAxes),e};var A=new b.Cartesian3,I=new b.Cartesian3,R=new b.Cartesian3,E=new b.Cartesian3,S=new b.Cartesian3,U=new b.Cartesian3,L=new O.Matrix3,v={unitary:new O.Matrix3,diagonal:new O.Matrix3};T.fromPoints=function(a,t){if(P.defined(t)||(t=new T),!P.defined(a)||0===a.length)return t.halfAxes=O.Matrix3.ZERO,t.center=b.Cartesian3.ZERO,t;for(var e=a.length,n=b.Cartesian3.clone(a[0],A),r=1;r<e;r++)b.Cartesian3.add(n,a[r],n);var i=1/e;b.Cartesian3.multiplyByScalar(n,i,n);var s,o=0,C=0,c=0,u=0,l=0,d=0;for(r=0;r<e;r++)o+=(s=b.Cartesian3.subtract(a[r],n,I)).x*s.x,C+=s.x*s.y,c+=s.x*s.z,u+=s.y*s.y,l+=s.y*s.z,d+=s.z*s.z;C*=i,c*=i,u*=i,l*=i,d*=i;var h=L;h[0]=o*=i,h[1]=C,h[2]=c,h[3]=C,h[4]=u,h[5]=l,h[6]=c,h[7]=l,h[8]=d;var h=O.Matrix3.computeEigenDecomposition(h,v),h=O.Matrix3.clone(h.unitary,t.halfAxes),x=O.Matrix3.getColumn(h,0,E),M=O.Matrix3.getColumn(h,1,S),m=O.Matrix3.getColumn(h,2,U),f=-Number.MAX_VALUE,p=-Number.MAX_VALUE,g=-Number.MAX_VALUE,w=Number.MAX_VALUE,y=Number.MAX_VALUE,N=Number.MAX_VALUE;for(r=0;r<e;r++)s=a[r],f=Math.max(b.Cartesian3.dot(x,s),f),p=Math.max(b.Cartesian3.dot(M,s),p),g=Math.max(b.Cartesian3.dot(m,s),g),w=Math.min(b.Cartesian3.dot(x,s),w),y=Math.min(b.Cartesian3.dot(M,s),y),N=Math.min(b.Cartesian3.dot(m,s),N);x=b.Cartesian3.multiplyByScalar(x,.5*(w+f),x),M=b.Cartesian3.multiplyByScalar(M,.5*(y+p),M),m=b.Cartesian3.multiplyByScalar(m,.5*(N+g),m),h=b.Cartesian3.add(x,M,t.center);b.Cartesian3.add(h,m,h);h=R;return h.x=f-w,h.y=p-y,h.z=g-N,b.Cartesian3.multiplyByScalar(h,.5,h),O.Matrix3.multiplyByScale(t.halfAxes,h,t.halfAxes),t};var M=new b.Cartesian3,d=new b.Cartesian3;function z(a,t,e,n,r,i,s,o,C,c,u){var l=(u=!P.defined(u)?new T:u).halfAxes;O.Matrix3.setColumn(l,0,t,l),O.Matrix3.setColumn(l,1,e,l),O.Matrix3.setColumn(l,2,n,l),(e=M).x=(r+i)/2,e.y=(s+o)/2,e.z=(C+c)/2;n=d;n.x=(i-r)/2,n.y=(o-s)/2,n.z=(c-C)/2;C=u.center,e=O.Matrix3.multiplyByVector(l,e,e);return b.Cartesian3.add(a,e,C),O.Matrix3.multiplyByScale(l,n,l),u}var B=new b.Cartographic,V=new b.Cartesian3,_=new b.Cartographic,k=new b.Cartographic,W=new b.Cartographic,X=new b.Cartographic,q=new b.Cartographic,D=new b.Cartesian3,j=new b.Cartesian3,Z=new b.Cartesian3,Y=new b.Cartesian3,G=new b.Cartesian3,F=new b.Cartesian2,H=new b.Cartesian2,J=new b.Cartesian2,K=new b.Cartesian2,Q=new b.Cartesian2,$=new b.Cartesian3,aa=new b.Cartesian3,ta=new b.Cartesian3,ea=new b.Cartesian3,na=new b.Cartesian2,ra=new b.Cartesian3,ia=new b.Cartesian3,sa=new b.Cartesian3,oa=new N.Plane(b.Cartesian3.UNIT_X,0);T.fromRectangle=function(a,t,e,n,r){if(t=P.defaultValue(t,0),e=P.defaultValue(e,0),n=P.defaultValue(n,b.Ellipsoid.WGS84),a.width<=y.CesiumMath.PI){var i=b.Rectangle.center(a,B),s=n.cartographicToCartesian(i,V),o=new w.EllipsoidTangentPlane(s,n),C=o.plane,c=i.longitude,u=a.south<0&&0<a.north?0:i.latitude,l=b.Cartographic.fromRadians(c,a.north,e,_),d=b.Cartographic.fromRadians(a.west,a.north,e,k),h=b.Cartographic.fromRadians(a.west,u,e,W),x=b.Cartographic.fromRadians(a.west,a.south,e,X),M=b.Cartographic.fromRadians(c,a.south,e,q),m=n.cartographicToCartesian(l,D),f=n.cartographicToCartesian(d,j),p=n.cartographicToCartesian(h,Z),g=n.cartographicToCartesian(x,Y),s=n.cartographicToCartesian(M,G),i=o.projectPointToNearestOnPlane(m,F),u=o.projectPointToNearestOnPlane(f,H),c=o.projectPointToNearestOnPlane(p,J),l=o.projectPointToNearestOnPlane(g,K),h=o.projectPointToNearestOnPlane(s,Q),m=-(M=Math.min(u.x,c.x,l.x)),p=Math.max(u.y,i.y),s=Math.min(l.y,h.y);return d.height=x.height=t,f=n.cartographicToCartesian(d,j),g=n.cartographicToCartesian(x,Y),c=Math.min(N.Plane.getPointDistance(C,f),N.Plane.getPointDistance(C,g)),u=e,z(o.origin,o.xAxis,o.yAxis,o.zAxis,M,m,s,p,c,u,r)}i=0<a.south,l=a.north<0,h=i?a.south:l?a.north:0,d=b.Rectangle.center(a,B).longitude,x=b.Cartesian3.fromRadians(d,h,e,n,$);x.z=0;f=Math.abs(x.x)<y.CesiumMath.EPSILON10&&Math.abs(x.y)<y.CesiumMath.EPSILON10?b.Cartesian3.UNIT_X:b.Cartesian3.normalize(x,aa),g=b.Cartesian3.UNIT_Z,o=b.Cartesian3.cross(f,g,ta);C=N.Plane.fromPointNormal(x,f,oa);d=b.Cartesian3.fromRadians(d+y.CesiumMath.PI_OVER_TWO,h,e,n,ea);M=-(m=b.Cartesian3.dot(N.Plane.projectPointOntoPlane(C,d,na),o)),p=b.Cartesian3.fromRadians(0,a.north,l?t:e,n,ra).z,s=b.Cartesian3.fromRadians(0,a.south,i?t:e,n,ia).z;n=b.Cartesian3.fromRadians(a.east,h,e,n,sa);return z(x,o,g,f,M,m,s,p,c=N.Plane.getPointDistance(C,n),u=0,r)},T.clone=function(a,t){if(P.defined(a))return P.defined(t)?(b.Cartesian3.clone(a.center,t.center),O.Matrix3.clone(a.halfAxes,t.halfAxes),t):new T(a.center,a.halfAxes)},T.intersectPlane=function(a,t){var e=a.center,n=t.normal,r=a.halfAxes,i=n.x,s=n.y,a=n.z,r=Math.abs(i*r[O.Matrix3.COLUMN0ROW0]+s*r[O.Matrix3.COLUMN0ROW1]+a*r[O.Matrix3.COLUMN0ROW2])+Math.abs(i*r[O.Matrix3.COLUMN1ROW0]+s*r[O.Matrix3.COLUMN1ROW1]+a*r[O.Matrix3.COLUMN1ROW2])+Math.abs(i*r[O.Matrix3.COLUMN2ROW0]+s*r[O.Matrix3.COLUMN2ROW1]+a*r[O.Matrix3.COLUMN2ROW2]),t=b.Cartesian3.dot(n,e)+t.distance;return t<=-r?O.Intersect.OUTSIDE:r<=t?O.Intersect.INSIDE:O.Intersect.INTERSECTING};var m=new b.Cartesian3,f=new b.Cartesian3,p=new b.Cartesian3,g=new b.Cartesian3,Ca=new b.Cartesian3,ca=new b.Cartesian3;T.distanceSquaredTo=function(a,t){var e=b.Cartesian3.subtract(t,a.center,M),n=a.halfAxes,r=O.Matrix3.getColumn(n,0,m),i=O.Matrix3.getColumn(n,1,f),s=O.Matrix3.getColumn(n,2,p),o=b.Cartesian3.magnitude(r),C=b.Cartesian3.magnitude(i),c=b.Cartesian3.magnitude(s),u=!0,t=!0,a=!0;0<o?b.Cartesian3.divideByScalar(r,o,r):u=!1,0<C?b.Cartesian3.divideByScalar(i,C,i):t=!1,0<c?b.Cartesian3.divideByScalar(s,c,s):a=!1;var l,d,h,n=!u+!t+!a;1==n?(u=r,d=i,h=s,t?a||(u=s,h=r):(u=i,d=r),l=b.Cartesian3.cross(d,h,Ca),u===r?r=l:u===i?i=l:u===s&&(s=l)):2==n?(d=r,t?d=i:a&&(d=s),(a=b.Cartesian3.UNIT_Y).equalsEpsilon(d,y.CesiumMath.EPSILON3)&&(a=b.Cartesian3.UNIT_X),h=b.Cartesian3.cross(d,a,g),b.Cartesian3.normalize(h,h),l=b.Cartesian3.cross(d,h,Ca),b.Cartesian3.normalize(l,l),d===r?(i=h,s=l):d===i?(s=h,r=l):d===s&&(r=h,i=l)):3==n&&(r=b.Cartesian3.UNIT_X,i=b.Cartesian3.UNIT_Y,s=b.Cartesian3.UNIT_Z);n=ca;n.x=b.Cartesian3.dot(e,r),n.y=b.Cartesian3.dot(e,i),n.z=b.Cartesian3.dot(e,s);var x,s=0;return n.x<-o?s+=(x=n.x+o)*x:n.x>o&&(s+=(x=n.x-o)*x),n.y<-C?s+=(x=n.y+C)*x:n.y>C&&(s+=(x=n.y-C)*x),n.z<-c?s+=(x=n.z+c)*x:n.z>c&&(s+=(x=n.z-c)*x),s};var h=new b.Cartesian3,x=new b.Cartesian3;T.computePlaneDistances=function(a,t,e,n){P.defined(n)||(n=new O.Interval);var r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,s=a.center,o=a.halfAxes,C=O.Matrix3.getColumn(o,0,m),c=O.Matrix3.getColumn(o,1,f),u=O.Matrix3.getColumn(o,2,p),l=b.Cartesian3.add(C,c,h);b.Cartesian3.add(l,u,l),b.Cartesian3.add(l,s,l);a=b.Cartesian3.subtract(l,t,x),o=b.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i);return b.Cartesian3.add(s,C,l),b.Cartesian3.add(l,c,l),b.Cartesian3.subtract(l,u,l),b.Cartesian3.subtract(l,t,a),o=b.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),b.Cartesian3.add(s,C,l),b.Cartesian3.subtract(l,c,l),b.Cartesian3.add(l,u,l),b.Cartesian3.subtract(l,t,a),o=b.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),b.Cartesian3.add(s,C,l),b.Cartesian3.subtract(l,c,l),b.Cartesian3.subtract(l,u,l),b.Cartesian3.subtract(l,t,a),o=b.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),b.Cartesian3.subtract(s,C,l),b.Cartesian3.add(l,c,l),b.Cartesian3.add(l,u,l),b.Cartesian3.subtract(l,t,a),o=b.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),b.Cartesian3.subtract(s,C,l),b.Cartesian3.add(l,c,l),b.Cartesian3.subtract(l,u,l),b.Cartesian3.subtract(l,t,a),o=b.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),b.Cartesian3.subtract(s,C,l),b.Cartesian3.subtract(l,c,l),b.Cartesian3.add(l,u,l),b.Cartesian3.subtract(l,t,a),o=b.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),b.Cartesian3.subtract(s,C,l),b.Cartesian3.subtract(l,c,l),b.Cartesian3.subtract(l,u,l),b.Cartesian3.subtract(l,t,a),o=b.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),n.start=r,n.stop=i,n};var e=new O.BoundingSphere;T.isOccluded=function(a,t){a=O.BoundingSphere.fromOrientedBoundingBox(a,e);return!t.isBoundingSphereVisible(a)},T.prototype.intersectPlane=function(a){return T.intersectPlane(this,a)},T.prototype.distanceSquaredTo=function(a){return T.distanceSquaredTo(this,a)},T.prototype.computePlaneDistances=function(a,t,e){return T.computePlaneDistances(this,a,t,e)},T.prototype.isOccluded=function(a){return T.isOccluded(this,a)},T.equals=function(a,t){return a===t||P.defined(a)&&P.defined(t)&&b.Cartesian3.equals(a.center,t.center)&&O.Matrix3.equals(a.halfAxes,t.halfAxes)},T.prototype.clone=function(a){return T.clone(this,a)},T.prototype.equals=function(a){return T.equals(this,a)},a.OrientedBoundingBox=T});
