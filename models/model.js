import {bardata} from "../app.js";

export default async function getDataByCoords(arrayCoords, filterQuery) {
    console.log("made it to models")
    console.log(filterQuery)
    let queryObj = {}

    for (let i = 0; i < filterQuery.length; i++) {
      const property = Object.values(filterQuery[i])[0]
      const value = Object.values(filterQuery[i])[1]
      if (value.length === 1) {
        queryObj[property] = value[0];
      } 
      else {
        queryObj[property] = {$in: value};
      }
      console.log("HIII", queryObj)
    }
    const data = await bardata.aggregate([{
          '$geoNear': {
            'near': {
              'type': 'Point', 
              'coordinates': arrayCoords
            }, 
            'distanceField': 'dist.calculated', 
            'maxDistance': 20000, 
            'query': queryObj, 
            'spherical': true
          }
    }]);
    const ans = await data.toArray();
    return ans;
};