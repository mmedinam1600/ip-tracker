
export interface errorResponse {
  error: {
    message: string,
    code: string
  }
}

export interface successResponse {
  ip: string,
  type: string,
  city: {
    name: string,
    population: number,
    geonameid: number
  },
  area: {
    code: string,
    geonameid: number
    name: string
  },
  country: {
    code: string,
    name: string,
    phone_code: string,
    area_size: string,
    flag: {
      emoji: string,
      file: string,
      unicode: string,
    },
    capital: string,
    population: number,
    is_in_eu: boolean,
    geonameid: number,
    languages: object | undefined,
    tld: string

  },
  time: {
    timezone: string,
    time: string,
    gtm_offset: number,
    is_daylight_saving: boolean,
    code: string,
  },
  asn: {
    organisation: string,
    number: number,
  },
  currency: {
    code: string,
    name: string,
  },
  location: {
    latitude: number,
    longitude: number,
  },
  security: {
    is_tor: boolean,
    is_proxy: boolean,
    is_threat: boolean,
    is_crawler: boolean,
    is_thread: boolean
  },
  continent: {
    code: string,
    name: string,
    geonameid: number
  },
  postcode: string
}

export interface getIPRequest {
  api_key: string,
  format?: "json" | "xml",
  filter?: string,
  language?: "en" | "ru" | "zh" | "es" | "ar" | "fr" | "fa" | "ja" | "pl" | "it" | "pt" | "de",
}

//export type geoIPResponse<T extends "failed" | "success"> = T extends "success" ? successResponse : errorResponse;

//Método 2
// export interface geoIPResponse extends Partial<successResponse>, Partial<errorResponse> {
//   status: "failed" | "success";
// }


export interface geoIPResponse extends successResponse, errorResponse {
  status: "failed" | "success";
}
