define(["./GeometryOffsetAttribute-964ec9ef","./Transforms-70f396e0","./Cartesian2-40b13f31","./Check-3917d765","./ComponentDatatype-6c2e43c1","./when-7b580518","./GeometryAttribute-6e7c7644","./GeometryAttributes-fbd9a3fb","./Math-87254c13","./combine-83aa7971","./RuntimeError-fad4d3c6","./WebGLConstants-4e26b85a"],function(u,m,o,e,s,f,c,d,t,a,n,i){"use strict";var p=new o.Cartesian3;function r(e){var t=(e=f.defaultValue(e,f.defaultValue.EMPTY_OBJECT)).minimum,a=e.maximum;this._min=o.Cartesian3.clone(t),this._max=o.Cartesian3.clone(a),this._offsetAttribute=e.offsetAttribute,this._workerName="createBoxOutlineGeometry"}r.fromDimensions=function(e){var t=(e=f.defaultValue(e,f.defaultValue.EMPTY_OBJECT)).dimensions,t=o.Cartesian3.multiplyByScalar(t,.5,new o.Cartesian3);return new r({minimum:o.Cartesian3.negate(t,new o.Cartesian3),maximum:t,offsetAttribute:e.offsetAttribute})},r.fromAxisAlignedBoundingBox=function(e){return new r({minimum:e.minimum,maximum:e.maximum})},r.packedLength=2*o.Cartesian3.packedLength+1,r.pack=function(e,t,a){return a=f.defaultValue(a,0),o.Cartesian3.pack(e._min,t,a),o.Cartesian3.pack(e._max,t,a+o.Cartesian3.packedLength),t[a+2*o.Cartesian3.packedLength]=f.defaultValue(e._offsetAttribute,-1),t};var y=new o.Cartesian3,C=new o.Cartesian3,b={minimum:y,maximum:C,offsetAttribute:void 0};return r.unpack=function(e,t,a){t=f.defaultValue(t,0);var n=o.Cartesian3.unpack(e,t,y),i=o.Cartesian3.unpack(e,t+o.Cartesian3.packedLength,C),t=e[t+2*o.Cartesian3.packedLength];return f.defined(a)?(a._min=o.Cartesian3.clone(n,a._min),a._max=o.Cartesian3.clone(i,a._max),a._offsetAttribute=-1===t?void 0:t,a):(b.offsetAttribute=-1===t?void 0:t,new r(b))},r.createGeometry=function(e){var t=e._min,a=e._max;if(!o.Cartesian3.equals(t,a)){var n=new d.GeometryAttributes,i=new Uint16Array(24),r=new Float64Array(24);r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=a.x,r[4]=t.y,r[5]=t.z,r[6]=a.x,r[7]=a.y,r[8]=t.z,r[9]=t.x,r[10]=a.y,r[11]=t.z,r[12]=t.x,r[13]=t.y,r[14]=a.z,r[15]=a.x,r[16]=t.y,r[17]=a.z,r[18]=a.x,r[19]=a.y,r[20]=a.z,r[21]=t.x,r[22]=a.y,r[23]=a.z,n.position=new c.GeometryAttribute({componentDatatype:s.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:r}),i[0]=4,i[1]=5,i[2]=5,i[3]=6,i[4]=6,i[5]=7,i[6]=7,i[7]=4,i[8]=0,i[9]=1,i[10]=1,i[11]=2,i[12]=2,i[13]=3,i[14]=3,i[15]=0,i[16]=0,i[17]=4,i[18]=1,i[19]=5,i[20]=2,i[21]=6,i[22]=3,i[23]=7;a=o.Cartesian3.subtract(a,t,p),t=.5*o.Cartesian3.magnitude(a);return f.defined(e._offsetAttribute)&&(a=r.length,r=new Uint8Array(a/3),a=e._offsetAttribute===u.GeometryOffsetAttribute.NONE?0:1,u.arrayFill(r,a),n.applyOffset=new c.GeometryAttribute({componentDatatype:s.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:r})),new c.Geometry({attributes:n,indices:i,primitiveType:c.PrimitiveType.LINES,boundingSphere:new m.BoundingSphere(o.Cartesian3.ZERO,t),offsetAttribute:e._offsetAttribute})}},function(e,t){return f.defined(t)&&(e=r.unpack(e,t)),r.createGeometry(e)}});
