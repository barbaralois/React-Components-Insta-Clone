//Complete the necessary code in this file
// import useState
import React, { useState } from 'react';
import Post from './Post';
import './Posts.css';
// import data
import dummyData from '../../dummy-data';

const PostsPage = () => {
  const [postsData, changePosts] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {
        postsData.map((singlePost, index) => {
          return <Post post={singlePost} key={index} />;
        })
        /* map through data here to return a Post and pass data as props to Post */
      }
    </div>
  );
};

export default PostsPage;
