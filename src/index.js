import '@css/style.css'
import $ from 'jquery'
import Post from '@model/post.js'
import json from '@assets/data.json'
import logo from '@assets/webpack-training.png'

const post = new Post('Webpack Post Title', logo )

// console.log('Post to string:' , post.toString())

$('pre').html(post.toString())

console.log('JSON:', json)