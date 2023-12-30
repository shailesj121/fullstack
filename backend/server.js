import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('server is ready')
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
          id: 1,
          title: "Potato Bag Strength",
          joke: "An exercise for people who are out of shape: Begin with a five-pound potato bag in each hand. Extend your arms straight out from your sides, hold them there for a full minute, and then relax. After a few weeks, move up to ten-pound potato bags. Then try 50-pound potato bags, and eventually try to get to where you can lift a 100-pound potato bag in each hand and hold your arms straight for more than a full minute. Once you feel confident at that level, put a potato in each bag."
        },
        {
          id: 2,
          title: "Made My Own Grandkids",
          joke: "Scene: With a patient in my medical exam room\nMe: How old are your kids?\nPatient: Forty-four and 39 from my wife who passed away, and from my second wife, 15 and 13.\nMe: That’s quite the age difference!\nPatient: Well, the older ones didn’t give me any grandkids, so I made my own."
        },
        {
          id: 3,
          title: "What's Thanos' Favorite App?",
          joke: "Snapchat."
        }
      ];

      res.send(jokes)
});
 
const Port = process.env.PORT || 3000;

app.listen(Port, () => {
    console.log(`your server listening at:- http://localhost:${Port}/api/jokes`)
})