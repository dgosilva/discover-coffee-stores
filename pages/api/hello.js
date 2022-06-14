// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// discover-coffee-stores
// API_KEY = 'fsq33Mw3MYEPUCfBdi+UDXhTAHmxKa55ZVX/M8GqP8xw4QU='

// const response = await fetch('https://api.foursquare.com/v3/places/nearby?ll=43.65267326999575,-79.39545615725015&query=coffee stores&v=20220105', {
//   "headers": {
//     'Authorization': process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY
//   }
// })
// const data = await response.json();
 
// const transformedData = data?.results?.map((venue) => {
//     return {
//         id: venue.fsq_id,
//         ...venue
//     }}) || [];
 
// console.log(transformedData)

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
