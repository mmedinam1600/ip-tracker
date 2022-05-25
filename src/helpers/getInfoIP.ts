import axios from 'axios';
import {geoIPResponse} from "interfaces/geoIP.interface";


const getInfoIp = async (): Promise<geoIPResponse> => {
  try {

    const request = await axios.get<geoIPResponse>(
      'https://api.getgeoapi.com/v2/ip/check?api_key=9453a4a0c3b3a3f988cc3e8bed0f73fc87d6b5f3',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );
    return request.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('Error on axios request: \nMessage: ' + error.message + "\nURL: "+ error.config.method + " " + error.config.url);
      throw new Error ('Error on axios request: \nMessage: ' + error.message + "\nURL: "+ error.config.method + " " + error.config.url);
    } else {
      console.log('Unexpected error on getInfoIP: ', error);
      throw new Error ('Unexpected error on getInfoIP: ' + error);
    }
  }

}

export default getInfoIp;