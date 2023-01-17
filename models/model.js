import {bardata} from "../app.js";

export default async function getDataByCoords(arrayCoords, filterQuery) {
    console.log("made it to models")
    const data = await bardata.aggregate([{
          '$geoNear': {
            'near': {
              'type': 'Point', 
              'coordinates': arrayCoords
            }, 
            'distanceField': 'dist.calculated', 
            'maxDistance': 20000, 
            'query': {
              filterQuery
            }, 
            'spherical': true
          }
    }]);
    const ans = await data.toArray();
    return ans;
};