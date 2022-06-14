import { createApi } from "unsplash-js";

const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_API_ACCESS_KEY,
});

const getUrlCoffeeStores = async (latlong, query, limit) => {
  const date = "20220105";
  return `https://api.foursquare.com/v3/places/nearby?ll=${latlong}&query=${query}&v=${date}&limit=${limit}`;
};

const getCoffeeStorePhotos = async () => {
  const apiCall = await unsplashApi.search.getPhotos({
    query: "coffee shop",
    perPage: 10,
  });
  const results = apiCall.response.results;
  console.log('chamando api de photos', results);

  return results.map((result) => result.urls["small"]);
};

export const fetchCoffeeStores = async (
  latlong = "43.713515769966854,-79.36359877001108",
  limit = 6
) => {
  const url = await getUrlCoffeeStores(latlong, "coffee stores", limit);

  const photos = await getCoffeeStorePhotos();

  const response = await fetch(url, {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
    },
  });
  const data = response.json();
  console.log('chamando api do foursquare', data);

  const transformedData =
    data?.results?.map((venue, idx) => {
      return {
        id: venue.fsq_id,
        ...venue,
        imgUrl: photos[idx],
      };
    }) || [];
  //   console.log(transformedData);

  return transformedData;
};
