import styled from 'styled-components'
import Header from "./components/Header"
import GistList from "./components/GistList"
import GlobalStyles from "./GlobalStyle"
import { useState } from 'react'

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  return (
    <Wrapper className="App" data-testid="app">
      <Header onSearchInput={setSearchKeyword} />
      <GistList searchKeyword={searchKeyword}/>
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
