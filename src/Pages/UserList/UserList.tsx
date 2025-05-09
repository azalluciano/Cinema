import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import Header from "../../Components/Header";

const UserList = () => {
  const [listData, setListData] = useState<any[]>([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

      for (let i = 0; i < moviesId.length; i++) {
        axios
          .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=cac6cb9ae48f37f154fa696089192492&language=fr-FR`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
      }
    }, []);
  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coup de coeur<span>💖</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Card  key={movie.id} movie={movie}/>)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
  );
};

export default UserList;
