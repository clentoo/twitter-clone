import React, { useState } from "react";
import "../stylesheets/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "olmd",
      username: "leonine",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg"
            alt="cleverLogo"
          />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="what's happening?"
            type="text"
          />
        </div>
        <input
          className="tweetBox__imageInput"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
