import styled from "styled-components";
import React, { useEffect, useState, useCallback } from "react";
import Gist from "./Gist";
import { getPublicGists, getGistForUser } from "../services/gistService";
import { debounce } from "lodash";
const GistList = ({ searchKeyword }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [gistsData, setGistsData] = useState([]);

  //search with username
  const debouncedGetGistsData = useCallback(
    debounce((_searchKeyword) => {
      getGistsData(_searchKeyword);
    }, 500),
    []
  );
  const getGistsData = async (_searchKeyword) => {
    let response;
    setGistsData([]);
    setErrorMessage("");
    try {
      if (_searchKeyword) {
        response = await getGistForUser(_searchKeyword);
      } else {
        response = await getPublicGists();
      }
      if (response.status === 200) {
        if (response.data.length > 0) {
          setGistsData(response.data);
        } else {
          setErrorMessage("No gists found for this username");
        }
      } else console.log(response.status);
    } catch (e) {
      setErrorMessage(e.message);
    }
  };
  useEffect(() => {
    debouncedGetGistsData(searchKeyword);
  }, [searchKeyword]);

  return (
    <GistListWrapper>
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : ""}

      {gistsData.map((gist) => (
        <Gist gist={gist} key={gist.id} />
      ))}
    </GistListWrapper>
  );
};

const ErrorMessage = styled.div`
  align-self: center;
  text-align: center;
  font-size: 1.2em;
  padding: 20px 0;
`;

const GistListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30%;
`;

export default GistList;
