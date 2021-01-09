import React from "react";
import "../stylesheets/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg"
            alt="cleverLogo"
          />
          <input placeholder="what's happening?" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
