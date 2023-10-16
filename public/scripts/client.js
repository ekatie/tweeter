// When document is ready
$(document).ready(function () {

  /**
   * This function calculates the amount of time since a tweet was created and returns a string stating how much time has passed.
   * @param {number} tweetTimestamp - UNIX timestamp from when tweet was created.
   * @returns - A string stating the number of minutes/hours/days/years that have passed since the tweet was timestamped.
   */

  const timeSinceTweet = function (tweetTimestamp) {
    const timeDifference = Date.now() - tweetTimestamp;

    // Less than a minute
    if (timeDifference < 60000) {
      return "just now";
    } // Less than an hour
    else if (timeDifference < 3600000) {
      const minutes = Math.floor(timeDifference / 60000);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } // Less than a day
    else if (timeDifference < 86400000) {
      const hours = Math.floor(timeDifference / 3600000);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } // Less than a week
    else if (timeDifference < 604800000) {
      const days = Math.floor(timeDifference / 86400000);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } // Less than a month
    else if (timeDifference < 2629743000) {
      const weeks = Math.floor(timeDifference / 2629743000);
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } // Less than a year
    else if (timeDifference < 31556926000) {
      const months = Math.floor(timeDifference / 31556926000);
      return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
      const years = Math.floor(timeDifference / 31556926000);
      return `${years} year${years > 1 ? 's' : ''} ago`;
    }
  };

  /**
   * This function creates a tweet element from an object containing tweet data.
   * @param {object} tweetData - Object containing tweet data, including username, avatar, handle, tweet content and date (UNIX timestamp).
   * @returns - Tweet element
   */

  const createTweetElement = function (tweetData) {
    const $tweet = `
  <article class="tweet">
  <header>
  <div>
  <img class="mini-avatar" alt="user avatar for post" src="${tweetData.user.avatars}">${tweetData.user.name}
  </div>
    <div class="handle">${tweetData.user.handle}</div>
  </header>
  <p>${tweetData.content.text}</p>
  <footer>
    <div>${timeSinceTweet(tweetData["created_at"])}</div>
    <div>
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
    </article>`;
    return $tweet;
  };

  /**
   * This function takes in an array of tweet objects and uses jQuery to insert each tweet at the end of the #tweet-container section.
   * @param {array} tweetsArray - Array of tweet objects.
   */

  const renderTweets = function (tweetsArray) {
    tweetsArray.forEach(tweet => {
      $('#tweets-container').append(createTweetElement(tweet));
    });
  };

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense, donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  renderTweets(data);
});

/* Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc. */