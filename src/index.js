document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 3875 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/3875`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`
 
  const body = document.body


  const getImage = () => {
    fetch(imageURL)
    .then(response => response.json())
    .then(result => myStuff(result))
    // .catch(error => console.error(error.message))

  

  getImage()

  function myStuff(result){
    let img = document.getElementById('image')
    img.scr = result.url
    let name = document.getElementById('name')
    name.innerText = result.name

    const likeButton = document.getElementById('like_button')
    let likes = document.getElementById('likes')
    likes.innerText = result.likes_count

    likeButton.addEventListener('click', function () {
      currentLikes = parseInt(likes.innerText)
      likes.innerText = currentLikes +1
      var data = {
      image_id: imageId,
      image_likes: likes
    }

  fetch(likeURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      }.then(response => response.json())
      .then(response => console.log('Success', JSON.stringify(response)))
      .catch(error => console.error('error:', error))
      })
      })

      const commentForm = document.getElementById('comment_form')
      if(result.comments.length >= 1) {
        result.comments.forEach(function(text) {
          CommentList = document.getElementById("comment")
          CommentLi = document.createElement('li')
          CommentLi.innerText = text.content
          CommentList.append(CommentLi)
        })
      }

      commentForm.addEventListener('submit', function(e) {
        e.preventDefault()
        commentInput = document.querySelector('input')
        commentList = document.querySelector('comments')
        commentLi = document.createElement('li')
        text = commentInput.value
        commentLi.innerText = text
        commentList.append(commentLi)

        var data = {
          image_id: imageId,
          content: text
        }

        fetch(commentsURL, {
          method: "Post",
          body: JSON.stringify(data),
          "Accept": "application/json",
          "Content-Type": "application/json",
        }).then (res.json ())
          .then(response => console.log('success:', JSON.stringify(response)))
          // .catch(error => console.error('error:', error))
      })
      
    }



}})
