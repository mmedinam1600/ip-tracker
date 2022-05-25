import "interfaces/defaultTheme.interface";
import styled, {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "components/styled-components/theme";
import GlobalStyles from "components/styled-components/global";
import React, {useEffect, useState} from "react";
import useTheme from "./hooks/useTheme";
import getInfoIP from "./helpers/getInfoIP";
import useError, {ErrorType} from "./hooks/useError";
import Error from 'components/Error';
import Header from "./components/Header";
import {geoIPResponse} from "interfaces/geoIP.interface";
import Content from "./components/Content";


const Loading = styled.div`
  width: 100%;
  margin: 90px auto;
  display: flex;
  
  p {
    font-size: 28px;
    margin: 0 auto;
    display: flex;
  }
`;

function App() {
  const [isDarkMode, toggleTheme, updateTheme] = useTheme();
  const [errors, addError, removeError] = useError();
  const [ipData, setIpData] = useState<geoIPResponse | null>(null);

  useEffect(() => {
    updateTheme();
    updateIP();
  }, []);

  const updateIP = () => {
    getInfoIP()
      .then((data) => {
        console.log(data.ip);
        if (data.error) {
          addError("Your IP address cannot be tracked due to:" + data.error.message, ErrorType.GET_INFO_IP);
          return;
        }
        setIpData(data);
      }).catch(error => {
      console.log(error);
      addError("Your IP address could not be traced due to an unexpected error.", ErrorType.GET_INFO_IP);
    });
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles/>
      {/* Header */}
      <Header toggleTheme={toggleTheme}/>
      {/* Content */}
      <Error errors={errors} removeError={removeError}/>
      { !ipData && <Loading><p>Loading data...</p></Loading> }
      {  ipData && <Content ipData={ipData}/> }
      {/* Footer */}
    </ThemeProvider>
  );
}

export default App;
