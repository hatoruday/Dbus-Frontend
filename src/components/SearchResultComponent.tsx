import styled from "styled-components";

const SearchResult = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  flex-direction: column;
  display: flex;
  z-index: 3;
  top: 75%;
  left: 50%;
  height: 50%;
  width: 393px;
  background-color: white;
  color: black;
  font-size: 10pt;
`;
const ScrollWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  z-index: 5;
`;
const PlacesList = styled.ul``;
interface SearchResultParam {
  keyword: string;
}

const ResultText = styled.p`
  padding: 20px 10px;
  border-bottom: 1px solid #d9d9d9;
`;

const ResultKeyword = styled.span`
  color: black;
  font-size: 20px;
  padding: 0px 10px;
`;

export const SearchResultComponent = ({ keyword }: SearchResultParam) => {
  return (
    <SearchResult id="search-result">
      <ResultText className="result-text">
        검색결과
        <ResultKeyword className="result-keyword">{keyword}</ResultKeyword>
      </ResultText>
      <ScrollWrapper className="scroll-wrapper">
        <PlacesList id="places-list"></PlacesList>
      </ScrollWrapper>
    </SearchResult>
  );
};
