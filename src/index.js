
let imageId = 3866 //Enter the id from the fetched image here
const imageURL = 'https://randopic.herokuapp.com/images/3866'

const likeURL = 'https://randopic.herokuapp.com/likes/'
const commentsURL = 'https://randopic.herokuapp.com/comments/'
const likes = document.querySelector('likes');
const comments = document.querySelector('comments');
const like_countBtn = document.querySelector('like_countBtn');
const commentForm = document.querySelector('comment_form');
const commentInput = document.querySelector('comment_input');



document.addEventListener('DOMContentLoaded', () => {

console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')



fetch("https://randopic.herokuapp.com/images/3866")
.then(res => res.json())
.then(image => 
  (renderImage(image))
)


})

// the image url
// the image name
// the number of likes
// any comments in an unordered list
// //{
//   "id": 1,
//   "url": "http://blog.flatironschool.com/wp-content/uploads/2016/07/072716-js-saved-web-4-352x200.jpg",
//   "name": "The Internet!",
//   "like_count": 0,
//   "comments": [
//     {
//       "id": 5941,
//       "content": "first comment!",
//       "image_id": 1158,
//       "created_at": "2018-10-18T17:06:14.859Z",
//       "updated_at": "2018-10-18T17:06:14.859Z"
//     }
//   ]
// }

const rendorImage = (image) => {

const img = document.querySelector('image');
img.src = imageUrl

const name = document.querySelector('name');
name.innerText = imageUrl.name

const like_countBtn = document.querySelector('likes');
like_countBtn.innerText = `Likes: ${imageUrl.likes.length}`

const ul = document.createElement('ul')
imageUrl.comments.forEach(comment => rendorComment(comment.content))

like_countBtn.addEventListener('click', () => {
  fetch("https://randopic.herokuapp.com/likes", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image_id : imageId
      
    })
  })
 .then(res => res.json())
 .then(likedImage => {
  like_countBtn.innerText = `Likes: ${imageUrl.likes.length}`
 })

imageUrl.append(image)
comment_form.append(ul)
ul.append(comments)

})

// imageUrl.comments.forEach(comment => rendorComment(comment.content))
// id: 67813,
// content: "first comment!",
// image_id: 3866,
// created_at: "2019-11-06T15:20:37.448Z",
// updated_at: "2019-11-06T15:20:37.448Z"

comment_input.addEventListener('submit', (event) => {
  event.preventDefault()
  const newContent = event.target.value[0]
  fetch("https://randopic.herokuapp.com/comments", {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
  },
    body: JSON.stringify ({
      image_id : imageId,
      "content" : content
    }
  )}
 .then(res => res.json())
 .then(comment =>
  rendorComment(comment))
 
 })


// id: 67813,
// content: "first comment!",
// image_id: 3866,
// created_at: "2019-11-06T15:20:37.448Z",
// updated_at: "2019-11-06T15:20:37.448Z"
// }
}
