import{aP as p,dA as i,aO as e}from"./index-68dc14fa.js";import{p as n}from"./queryTopFeatures-d6c751d2.js";import"./normalizeUtils-81a58723.js";import"./normalizeUtilsCommon-40843aa7.js";import"./query-018fe5c0.js";import"./pbfQueryUtils-587d7013.js";import"./pbf-37ffcd49.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function w(o,r,a){const m=p(o),t=await n(m,i.from(r),{...a});return{count:t.data.count,extent:e.fromJSON(t.data.extent)}}export{w as executeForTopExtents};
