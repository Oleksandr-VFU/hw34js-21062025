import '@css/style.css'
import Post from '@model/post.js'
import json from '@assets/data.json'
import logo from '@assets/webpack-training.png'

const post = new Post('Webpack Post Title', logo )

console.log('Post to string:' , post.toString())

console.log('JSON:', json)