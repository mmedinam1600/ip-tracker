import styled from "styled-components";
import ToggleTheme from "./ToggleTheme";

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: ${ ({theme}) => theme.backgroundColor.primary};
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  height: 75px;
  
  .nav {
    height: 100%;
    display: flex;
    width: 90%;
    margin: 0 auto;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    
    h1 {
      font-family: "Agency FB", sans-serif;
    }
  }
  
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    align-content: center;
    list-style-type: none;
    padding: 0;
    width: 150px;
    justify-content: space-between;
  }
  
  a {
    text-decoration: none;
    color: ${ ({theme}) => theme.colors.primary};
  }
  
`;

interface Props {
  toggleTheme: () => void;
}

function Header({toggleTheme}: Props) {

  return (
    <HeaderContainer>
      <div className="nav">
        <h1>IP Tracker</h1>
        <ul>
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <ToggleTheme toggleTheme={toggleTheme}/>
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
}

export default Header;