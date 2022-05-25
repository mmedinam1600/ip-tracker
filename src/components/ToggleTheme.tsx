import styled from "styled-components";
import {useRef} from "react";

const Toggle = styled.div`

  #toggleTheme {
    display: none;
  }

  .buttonTheme {
    display: inline-block;
    width: 90px;
    height: 35px;
    background-color: #FFF;
    border-radius: 30px;
    position: relative;
    cursor: pointer;
  }

  .buttonTheme::after {
    content: url("./images/sun.png");
    width: 40px;
    height: 40px;
    background-color: #e0ba3c;
    border: 2px solid #FFF;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, .25);
    position: absolute;
    top: -5px;
    left: 0;
    display: grid;
    place-content: center;
    line-height: 0;
    transition: background-color 1s, transform 1s ease-in;
  }

  #toggleTheme:checked + .buttonTheme::after {
    content: url("./images/moon.png");
    background-color: #1f257f;
    transform: translateX(50px) rotate(360deg);
  }
`;

interface Props {
  toggleTheme: () => void;
}

function changeToggleCheckbox(checkbox: HTMLInputElement, value: boolean) {
  checkbox.checked = value;
}

function ToggleTheme({toggleTheme}: Props) {

  const checkbox = useRef<HTMLInputElement>(null);
  if(checkbox.current !== null) {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if(isDarkMode !== null) {
      changeToggleCheckbox(checkbox.current, isDarkMode === "true");
    }
  }

  return (
    <Toggle>
      <input ref={checkbox} type="checkbox" id="toggleTheme" onChange={toggleTheme}/>
      <label htmlFor="toggleTheme" className="buttonTheme"></label>
    </Toggle>
  );
}

export default ToggleTheme;