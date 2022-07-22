import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: url(https://img.freepik.com/free-vector/gradient-background-vector-in-spring-colors_53876-117271.jpg?w=360)
    no-repeat center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8i0-f7u0vj5oZeQYo6nxipfW0OCiKwufD9A&usqp=CAU)
      no-repeat center/cover;
  }
`;
