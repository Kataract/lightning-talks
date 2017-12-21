// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
} from 'spectacle';

// Import other components
import TweetEmbed from 'react-tweet-embed';
import Img from 'react-image';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'black',
    background: '#0a0a0a',
    offgray: '#969696',
    hotblue: '#59f8e8',
    orange: '#fca311',
    green: '#56e39f',
  },
  {
    text: 'Helvetica',
    header: 'Montserrat',
    code: 'Consolas',
  }
);

const tweetOne = {
  linkid: '938450288419024896',
}
const tweetTwo = {
  linkid: '931933924615512064',
}
const tweetThree = {
  linkid: '938451519166406656',
}
const tweetFour = {
  linkid: '931933646394667009',
}
const tweetFive = {
  linkid: '910508561796616193',
}
const tweetSix = {
  linkid: '941788222652342272',
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={300}
        theme={theme}
      >
        <Slide bgColor="background">
          <Heading size={1} fit lineHeight={1} textColor="hotblue" textFont="header">
            CSS Tricks I Learned from Twitter
          </Heading>
          <Text margin="10px 0 0" textColor="green" textFont="text" size={3}>
            and other fun tales
          </Text>
        </Slide>
        <Slide bgColor="background">
          <Heading size={1} textColor="hotblue" textFont="header" caps>
            Class Stacking
          </Heading>
          <Text size={6} textColor="orange" textFont="code">
            .myclass.myclass.myclass
          </Text>
        </Slide>
        <Slide bgColor="background">
          <Heading size={1} textColor="hotblue" textFont="header" caps fit>
            Class Stacking
          </Heading>
          <TweetEmbed id={tweetOne.linkid} align="center" dnt="true" conversation="none" />
        </Slide>
        <Slide bgColor="background">
          <Heading size={1} textColor="hotblue" textFont="header" caps>
            Transparent Borders
          </Heading>
          <Text size={6} textColor="green" textFont="text">
            help your high contrast friends
          </Text>
        </Slide>
        <Slide bgColor="background">
          <Heading size={1} textColor="hotblue" textFont="header" caps fit>
            Transparent Borders
          </Heading>
          <TweetEmbed id={tweetFour.linkid} align="center" dnt="true" conversation="none" />
          <TweetEmbed id={tweetTwo.linkid} align="center" dnt="true" conversation="none" />
        </Slide>
        <Slide bgColor="background">
          <Heading size={1} textColor="hotblue" textFont="header" caps>
            Lobotomized Owl Selector
          </Heading>
          <Text size={6} textColor="green" textFont="text">
            please don't look at me like that
          </Text>
        </Slide>
        <Slide bgColor="background">
          <Heading size={1} textColor="hotblue" textFont="header" caps fit>
            Lobotomized Owl Selector
          </Heading>
          <TweetEmbed id={tweetThree.linkid} align="center" dnt="true" />
        </Slide>
        <Slide bgColor="background">
          <Heading size={1} textColor="hotblue" textFont="header" caps fit>
            Lobotomized Owl Selector
          </Heading>
          <Text size={6} textColor="orange" textFont="code">
            <code>{`
* + * {
    margin-top: 1.5em;
}
            `}</code>
          </Text>
        </Slide>
        <Slide bgColor="background">
          <Heading size={1} textColor="hotblue" textFont="header" caps>
            Styling full screen in Safari on iPhone X
          </Heading>
          <Text size={6} textColor="green" textFont="text">
            meta and friends
          </Text>
        </Slide>
        <Slide bgColor="background">
          <Heading size={1} textColor="hotblue" textFont="header" caps fit>
            Styling full screen in Safari on iPhone X
          </Heading>
          <TweetEmbed id={tweetFive.linkid} align="center" dnt="true" />
        </Slide>
        <Slide bgColor="background">
          <Heading size={1} textColor="hotblue" textFont="header" caps fit>
            Styling full screen in Safari on iPhone X
          </Heading>
          <Text size={6} textColor="orange" textFont="code">
          <code>{`
body {
    background-color: green;
}
          `}</code>
          </Text>
        </Slide>
        <Slide bgColor="background">
          <Heading size={1} textColor="hotblue" textFont="header" caps fit>
            Styling full screen in Safari on iPhone X
          </Heading>
          <Text size={6} textColor="orange" textFont="code">
          <code>{`
padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
          `}</code>
          </Text>
          <Text size={6} textColor="orange" textFont="code">
          <code>{`
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
          `}</code>
          </Text>
        </Slide>
        <Slide bgColor="background">
          <Heading size={1} textColor="hotblue" textFont="header" caps>
            Styling native Selects is coming
          </Heading>
          <Img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/motherofgod-1417755937@4x.gif" alt="hipchat (motherofgod) emote"/>
        </Slide>
        <Slide bgColor="background">
          <Heading size={1} textColor="hotblue" textFont="header" caps fit>
            Styling native Selects is coming
          </Heading>
          <TweetEmbed id={tweetSix.linkid} align="center" dnt="true" />
        </Slide>
      </Deck>
    );
  }
}
