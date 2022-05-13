import './App.css';
import styled from "styled-components";

const Heading1 = styled.h1`
    font-family: monospace;
    text-align: center;
    color: red;
`
const Container1 = styled.div`
    background-color: black;
    border-radius: 15px;
`

const Container2 = styled.div`
    color: papayawhip;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const Heading2 = styled.h2`
    font-family: Times New Roman;
    color: blue;
    text-align: center;
`

function App() {

  const set = [1,2,3,4,5,6,7,8,9,10]

  const showSet = set.map( n => <Container2>{n}</Container2>)

  return (
    <Container1>
          <Heading1> BANANA </Heading1>
          <Heading2> MORE BANANA</Heading2>

          {showSet}

    </Container1>
  );
}

export default App;
