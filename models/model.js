import { bardata } from "../app.js";

export async function getAll(){
  const data = await bardata.find({}).toArray();
    console.log(data);
    return(data);
};

/** Function to get all data within 20000 metres of the coordinates supplied the user */
export async function getDataByCoords(arrayCoords) {
  const data = await bardata.aggregate([{
    '$geoNear': {
      'near': {
        'type': 'Point',
        'coordinates': arrayCoords
      },
      'distanceField': 'dist.calculated',
      'maxDistance': 20000,
      'query': {},
      'spherical': true
    }
  }]);
  const ans = await data.toArray();
  return ans;
};

/** Function to get all data that matches the search query made by the user within 20000 metres of coords */
export async function getFilteredData(arrayCoords, filterQueryObject) {
  const filterQuery = filterQueryObject.queryFilters
  //Builds the query object
  let queryObj = {}
  for (let i = 0; i < filterQuery.length; i++) {
    const property = Object.values(filterQuery[i])[0]
    const value = Object.values(filterQuery[i])[1]
    if (value.length === 1) {
      queryObj[property] = value[0];
    }
    else {
      queryObj[property] = { $in: value };
    }
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
}