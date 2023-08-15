import { useParams } from "react-router-dom";
import Row from "../components/Row";
import Main from "../components/main";
import requests from "../request";
import { UserAuth } from "../AuthContext";
import { useEffect } from "react";

function Home() {
  const { idState } = UserAuth();
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [_, setId] = idState;
  useEffect(() => {
    setId(id);
  }, [id, setId]);
  return (
    <div>
      <Main />
      <Row
        title={"Upcoming:"}
        rowID={"1"}
        fetchUrl={requests.requestUpcoming}
      />
      <Row title={"Popular:"} rowID={"2"} fetchUrl={requests.requestPopular} />
      <Row
        title={"Top Rated"}
        rowID={"3"}
        fetchUrl={requests.requestTopRated}
      />
      <Row title={"Trending"} rowID={"4"} fetchUrl={requests.requestTrending} />
      <Row title={"Horror"} rowID={"5"} fetchUrl={requests.requestHorror} />
    </div>
  );
}

export default Home;
