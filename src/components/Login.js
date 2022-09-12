import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import actionTypes from "../common/actionTypes";
import { getHeadersFromUrl, LOGIN_URL, useHash } from "../common/spotify";
import { useStateValue } from "../common/StateProvider";

function Login() {
  const location = useLocation();
  const [{ responseHeaders }, dispatch] = useStateValue();
  const [hash, setHash] = useHash();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash;
      dispatch({
        type: actionTypes.SET_RESPONSE_HEADERS,
        headers: getHeadersFromUrl(hash.substring(1)),
      });
      // window.location.hash = "";
      setHash("");
    }

    if (responseHeaders.access_token) {
      navigate("/home");
    }
  }, [location.hash]);

  // console.log(responseHeaders);

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center">
      <div className="fixed top-0">
        <img
          className="w-full h-64"
          src="https://wikiake.com/wp-content/uploads/2022/01/Spotify-logo.jpeg"
          alt="spotify logo"
        />
      </div>

      <div className="">
        <Button
          className="bg-green-400 h-12 w-64 border rounded-2xl"
          onClick={() => {
            window.open(LOGIN_URL, "_self");
          }}
        >
          login with spotify
        </Button>
      </div>
    </div>
  );
}

export default Login;
