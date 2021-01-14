import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "../stylesheets/Feed.css";
import db from "../firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  //doc.id should be returned in a more unique key context

  //Alternative setup 1 and 2
  // const ref = db.collection("posts");

  // function getPosts() {
  //   ref.onSnapshot((querySnapshot) => {
  //     const items = [];
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data());
  //     });
  //     setPosts(items)
  //   });
  // }
  // function getPosts2() {
  //   ref.get().then((item) => {
  //     const items = item.docs.map((doc) => doc.data());
  //     setPosts(items);
  //   });
  // }

  // useEffect(() => {
  //   getPosts();
  //   getPosts2();
  // }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* Tweet Box */}
      <TweetBox />
      {/* Posts */}
      <FlipMove>
        {posts.map((post) => {
          return (
            <Post
              key={post.text}
              displayName={post.displayName}
              verified={post.verified}
              username={post.username}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Feed;
