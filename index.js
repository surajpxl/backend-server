require('dotenv').config()

const { log } = require('console');
const express = require('express');
const  app = express();
const port = 3000;

const githubData = {
  "login": "surajpxl",
  "id": 135721545,
  "node_id": "U_kgDOCBbySQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/135721545?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/surajpxl",
  "html_url": "https://github.com/surajpxl",
  "followers_url": "https://api.github.com/users/surajpxl/followers",
  "following_url": "https://api.github.com/users/surajpxl/following{/other_user}",
  "gists_url": "https://api.github.com/users/surajpxl/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/surajpxl/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/surajpxl/subscriptions",
  "organizations_url": "https://api.github.com/users/surajpxl/orgs",
  "repos_url": "https://api.github.com/users/surajpxl/repos",
  "events_url": "https://api.github.com/users/surajpxl/events{/privacy}",
  "received_events_url": "https://api.github.com/users/surajpxl/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "SURAJ GUPTA",
  "company": null,
  "blog": "https://codexsuraj.netlify.app/",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "👋 Hi, I'm Suraj!  \r\n🚀 MERN-Stack Developer \r\n💬 Ask me about React, JavaScript, and building modern web apps\r\n📫 Reach me at: guptasuraj4455@gmail.com ",
  "twitter_username": "codexsuraj",
  "public_repos": 49,
  "public_gists": 0,
  "followers": 2,
  "following": 4,
  "created_at": "2023-06-06T14:40:00Z",
  "updated_at": "2025-07-01T15:15:08Z"
}

app.get('/', (req, res)=>{
   res.send('hello world')
})

app.get('/login', (req, res)=>{
    res.send('<h1>You are login</h1>')
})

app.get('/github', (req, res)=>{
    res.json(githubData)
})

app.listen (process.env.PORT, ()=>{
    console.log(`Server is running on ${port}`);
    
})