import React, { useEffect } from "react";
import { withRouter } from "react-router";
import ImageContainer from "./components/ImageContainer";
import { useGlobalContext } from "./store/global";
import queryString from "query-string";
import { searchPhotos, getAllPhotos } from "./utils/data";

const Home = (props) => {
  const { updateImages, searchResults, openModal } = useGlobalContext();

  // when location changes check for query param and execute the search
  useEffect(() => {
    const photoSearch = async () => {
      console.log("SEARCH");
      const { search } = props.location;
      const { q } = queryString.parse(search);
      if (q) {
        const search = await searchPhotos(q);
        updateImages(search.data);
      } else {
        getAllPhotos().then((res) => {
          updateImages(res.data);
        });
      }
    };
    photoSearch();
    return () => {
      updateImages([]);
    };
  }, [props.location]);

  return <ImageContainer images={searchResults} openModal={openModal} />;
};

export default withRouter(Home);
