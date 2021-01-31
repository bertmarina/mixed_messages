const motivationalMessages = [
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "The best way to get started is to quit talking and begin doing.",
  "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
  "Don't let yesterday take up too much of today.",
  "You learn more from failure than from success.",
  "It's not whether you get knocked down, it's whether you get up.",
  "If you are working on something that you really care about, you don't have to be pushed, the vision pulls you.",
  "People who are crazy enough to think they can change the world are the ones who do.",
  "Failure will never overtake me if my determination to succeed is strong enough.",
  "We may encounter many defeats but we must not be defeated",
  "We generate fears while we sit. We overcome them by action",
  "Whether you think you can or you think you can't, you are right.",
  "Security is mostly a superstition. Life is either a daring adventure or nothing.",
  "The man who has confidence in himself gains the confidence of others.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Do what you can with all you have, wherever you are.",
  "You are never too old to set another goal or to dream a new dream.",
  "To see what is right and not do it is a lack of courage.",
  "Reading is to the mind, as exercise is to the body.",
  "Things work out best for those who make the best of how things work out.",
  "Today's accomplishments are yesterday's impossibilities",
  "The only way to do great work is to love what you do. If you have not found it, yet, keep looking. Don't settle.",
];

const generateRandomNumber = Math.floor(Math.random() * motivationalMessages.length);

console.log(motivationalMessages[generateRandomNumber]);
