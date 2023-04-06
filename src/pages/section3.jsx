import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Section3() {
  let Box = styled.div`
    background-color: tomato;
    width: 500px;
    height: 50px;
  `;
  let Btn = styled.button`
    background-color: ${(props) => props.bg};
    padding: 1rem;
    color: ${(props) => (props.bg === "blue" ? "white" : "black")};
  `;
  return (
    <>
      <div className="sec3 mw">
        <Box>Section 3 content</Box>
      </div>
      <Btn bg="orange">오렌지 버튼</Btn>
      <Btn bg="blue">파란색 버튼</Btn>
      <Outlet></Outlet>
    </>
  );
}

export default Section3;
