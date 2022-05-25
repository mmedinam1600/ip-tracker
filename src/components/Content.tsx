import React from 'react';
import MapGL from "./MapGL";
import {geoIPResponse} from "../interfaces/geoIP.interface";
import styled from "styled-components";

interface Props {
  ipData: geoIPResponse;
}

const Main = styled.main`
  padding: 75px 50px 0 50px;
  font-family: Helvetica, sans-serif;
`;

const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  gap: 10px 20px;
`;

const Card = styled.div`
  background-color: ${({theme}) => theme.backgroundColor.terciary};
  padding: 5px 10px;
  border-radius: 5px;
  max-width: 300px;
  width: 200px;
  box-shadow: rgba(93, 93, 93, 0.35) 0px -50px 36px -28px inset, rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;;

  h2 {
    font-size: 20px;
    margin: 0;
  }

  p {
    margin: 0;
  }
`;
const Container = styled.div`
  margin-bottom: 20px;

  hr {
    box-shadow: 
            ${({theme}) => theme.backgroundColor.terciary}FF 0px 5px,
            ${({theme}) => theme.backgroundColor.terciary}4D 0px 10px,
            ${({theme}) => theme.backgroundColor.terciary}33 0px 15px,
            ${({theme}) => theme.backgroundColor.terciary}1A 0px 20px,
            ${({theme}) => theme.backgroundColor.terciary}0A 0px 25px;
    margin-bottom: 15px;
  }

  h3 {
    margin: 10px 0 0 10px;
  }
`;


function Content({ipData}: Props) {
  return (
    <Main>
      <Container>
        <h2>Showing results</h2>
        <h3>Ip Info</h3>
        <hr/>
        <Cards>
          <Card>
            <h2>Your public IP</h2>
            <p>{ipData?.ip}</p>
          </Card>
          <Card>
            <h2>IP Type</h2>
            <p>{ipData?.type}</p>
          </Card>
          <Card>
            <h2>ASN</h2>
            <p>{ipData?.asn.organisation}</p>
          </Card>
          <Card>
            <h2># ASN</h2>
            <p>{ipData?.asn.number}</p>
          </Card>
        </Cards>
        <h3>Address Info</h3>
        <hr/>
        <Cards>
          <Card>
            <h2>Country</h2>
            <p>{ipData?.country.name}</p>
          </Card>
          <Card>
            <h2>Area</h2>
            <p>{ipData?.area.name}</p>
          </Card>
          <Card>
            <h2>Capital</h2>
            <p>{ipData?.country.capital}</p>
          </Card>
          <Card>
            <h2>City</h2>
            <p>{ipData?.city.name}</p>
          </Card>
          <Card>
            <h2>Postcode</h2>
            <p>{ipData?.postcode}</p>
          </Card>
          <Card>
            <h2>Continent</h2>
            <p>{ipData?.continent.name}</p>
          </Card>
          <Card>
            <h2>Phone code</h2>
            <p>+{ipData?.country.phone_code}</p>
          </Card>
          <Card>
            <h2>TLD</h2>
            <p>{ipData?.country.tld}</p>
          </Card>
          <Card>
            <h2>Emoji</h2>
            <p>{ipData?.country.flag.emoji}</p>
          </Card>
        </Cards>
        <h3>Time Info</h3>
        <hr/>
        <Cards>
          <Card>
            <h2>Timezone</h2>
            <p>{ipData?.time.timezone}</p>
          </Card>
          <Card>
            <h2>Gtm offset</h2>
            <p>{ipData?.time.gtm_offset}</p>
          </Card>
          <Card>
            <h2>Daylight saving</h2>
            <p>{ipData?.time.is_daylight_saving.toString()}</p>
          </Card>
          <Card>
            <h2>Code</h2>
            <p>{ipData?.time.code}</p>
          </Card>
        </Cards>
        <h3>Security Info</h3>
        <hr/>
        <Cards>
          <Card>
            <h2>Tor</h2>
            <p>{ipData?.security.is_tor.toString()}</p>
          </Card>
          <Card>
            <h2>Proxy</h2>
            <p>{ipData?.security.is_proxy.toString()}</p>
          </Card>
          <Card>
            <h2>Threat</h2>
            <p>{ipData?.security.is_threat.toString()}</p>
          </Card>
          <Card>
            <h2>Thread</h2>
            <p>{ipData?.security.is_thread.toString()}</p>
          </Card>
          <Card>
            <h2>Crawler</h2>
            <p>{ipData?.security.is_crawler.toString()}</p>
          </Card>
        </Cards>
        <h3>Location Info</h3>
        <hr/>
        <Cards>
          <Card>
            <h2>Latitude</h2>
            <p>{ipData?.location.latitude}</p>
          </Card>
          <Card>
            <h2>Longitud</h2>
            <p>{ipData?.location.longitude}</p>
          </Card>
          <Card>
            <h2>Currency code</h2>
            <p>{ipData?.currency.code}</p>
          </Card>
          <Card>
            <h2>Currency name</h2>
            <p>{ipData?.currency.name}</p>
          </Card>
        </Cards>
      </Container>
      <Container>
        <h3>Map</h3>
        <hr/>
        <MapGL latitude={ipData?.location.latitude} longitude={ipData?.location.longitude}/>
      </Container>
    </Main>
  );
}

export default Content;