import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const quotes=[
  {
"quote": "The best way to predict the future is to create it.",
"author": "Abraham Lincoln"
},
{
"quote": "The only person you are destined to become is the person you decide to be.",
"author": "Ralph Waldo Emerson"
},
{
"quote": "Two roads diverged in a yellow wood, And I - I took the one less traveled by, And that has made all the difference.",
"author": "Robert Frost"
},
{
"quote": "Believe you can and you're halfway there.",
"author": "Theodore Roosevelt"
},
{
"quote": 


"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
"author": "Mark Twain"
},
{
"quote": "The mind is everything. What you think you become.",
"author": "Buddha"
},
{
"quote": "A journey of a thousand miles begins with a single step.",
"author": "Lao Tzu"
},
{
"quote": "The difference between ordinary and extraordinary is that little extra.",
"author": "Jimmy Johnson"
},
{
"quote": "It is not the mountain we conquer, but ourselves.",
"author": "Edmund Hillary"
},
{
"quote": "There is no substitute for hard work.",
"author": "Thomas Edison"
}
]
export default function App() {
  const [ind, setInd] = useState(Math.floor(Math.random() * quotes.length));
  return (
    
      <main>
        {/* content visible here */}
        <div id="quote-box" className="quote-container">
          {quotes.map((quote, index) =>
            index === ind ? (
              <>
                <p id="text" className="quote">
                  {quote.quote}
                </p>
                <p className="author" id="author">
                  ~ {quote.author}
                </p>
              </>
            ) : null
          )}
  <div className='links'>
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quotes[ind].quote} - ${quotes[ind].author}`} target="_blank" rel="noopener noreferrer">share</a>
          <button
            id="new-quote"
            onClick={() => {
              setInd(Math.floor(Math.random() * quotes.length));
            }}
          >
            New Quote
          </button>
  </div>
        </div>
      </main>
    );
  }
  
  

