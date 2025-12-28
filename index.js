require('dotenv').config()
const express = require('express')
//import express from "express"
const app = express()
const port = 4000

let gitdata = {
  "login": "tanvigirase",
  "id": 180949660,
  "node_id": "U_kgDOCskSnA",
  "avatar_url": "https://avatars.githubusercontent.com/u/180949660?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/tanvigirase",
  "html_url": "https://github.com/tanvigirase",
  "followers_url": "https://api.github.com/users/tanvigirase/followers",
  "following_url": "https://api.github.com/users/tanvigirase/following{/other_user}",
  "gists_url": "https://api.github.com/users/tanvigirase/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/tanvigirase/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/tanvigirase/subscriptions",
  "organizations_url": "https://api.github.com/users/tanvigirase/orgs",
  "repos_url": "https://api.github.com/users/tanvigirase/repos",
  "events_url": "https://api.github.com/users/tanvigirase/events{/privacy}",
  "received_events_url": "https://api.github.com/users/tanvigirase/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2024-09-09T10:52:33Z",
  "updated_at": "2025-12-28T05:33:06Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('tanvi girase')
})

app.get('/login' , (req,res)=>{
    res.send('<h1>Learning Express</h1>')
})

app.get('/github',(req,res)=>{
    res.json(gitdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
