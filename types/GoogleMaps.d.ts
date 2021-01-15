export interface GoogleMapsPlaceDetails {
  allPlaceDetails: {
    edges: Array<{
      node: {
        result: {
          address_components: Array<{
            long_name: string
            short_name: string
            types: string[]
          }>
          formatted_address: string
          geometry: {
            location: {
              lat: number
              lng: number
            }
          }
          name: string
          opening_hours: {
            periods: {
              close: {
                time: number
                day: number
              }
              open: {
                day: number
                time: number
              }
            }
          }
        }
      }
    }>
  }
}
