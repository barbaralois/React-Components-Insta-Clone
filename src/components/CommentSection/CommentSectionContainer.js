// You will add code to this file
import React, { useState } from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import './Comment.css';

const CommentSection = (props) => {
  // Add state for the comments
  const [currentComments, setCurrentComments] = useState(props.comments);
  const [inputValue, setInputValue] = useState('');

  const newComment = (event) => {
    event.preventDefault();
    let comment = {
      username: 'barbaralois',
      text: inputValue,
    };
    setCurrentComments([...currentComments, comment]);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {
        /* map through the comments data and return the Comment component */
        currentComments.map((singleComment, index) => {
          return <Comment key={index} comment={singleComment} />;
        })
      }
      <CommentInput
        submitComment={newComment}
        comment={inputValue}
        changeComment={handleChange}
      />
    </div>
  );
};

export default CommentSection;
