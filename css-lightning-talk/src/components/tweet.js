import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: props => props.textColor || 'white';
`;

class Tweet extends React.Component {
  render(props) {
    return (
      <StyledDiv>
        <blockquote className="twitter-tweet" data-conversation="none" data-lang="en">
          <p lang="en" dir="ltr">{this.props.tweetText}</p> &mdash; {this.props.displayName} (@{this.props.username})
          <a href="https://twitter.com/{this.props.username}/status/{this.props.linkid}?ref_src=twsrc%5Etfw">{this.props.date}</a>
        </blockquote>
      </StyledDiv>
    );
  }
}

export default Tweet;
