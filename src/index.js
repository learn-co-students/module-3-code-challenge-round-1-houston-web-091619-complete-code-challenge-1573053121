document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 3872 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`
  
  fetch(imageURL)
  .then(res => res.json())
  .then(imageData => {
      console.log(imageData)
      makeImage(imageData)
  })

  // fetch(commentsURL)
  // .then(res => res.json())
  // .then(commentData => {
  //   console.log(commentData)
  // })

  const makeImage = (data) =>{
    const div = document.querySelector('#image_card')
    const h4 = document.getElementById("name")
    const img = document.querySelector('img')
    img.src = data.url
    h4.innerText = data.name

    const span = document.getElementById("likes")
    span.innerText = data.like_count

    const ul = document.querySelector('#comments')
    const li = document.createElement('li')
    const form = document.querySelector('#comment_form')

    makeComment(data,form,ul)

    const likeBtn = document.querySelector('#like_button')

    addLike(likeBtn,data,span)
  }

  const addLike = (likeBtn,data,span) =>{
    likeBtn.addEventListener("click", ()=>{
      fetch(likeURL,{
        method: "POST",
        headers:{
          "Content-type": 'application/json'
        },
        body: JSON.stringify({
          "like_count": data.id
        })
      })
      .then(res => res.json())
      .then(updateLike =>{
        span.innerText = ++data.like_count
      })
    })
  }

  const makeComment = (data,form,ul) =>{
    const li = document.createElement('li')
    data.comments.forEach(comment)=>{
      li.innerText = content
    }
  }

  // <img src="" id="image" data-id=""/>
    // <h4 id="name">Title of image goes here</h4>
    // <span>Likes:
    //   <span id="likes">Likes Go Here</span>
    // </span>
    // <button id="like_button">Like</button>
    // <form id="comment_form">
    //   <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
    //   <input type="submit" value="Submit"/>
    // </form>
    // <ul id="comments">
    //      <!-- <li> for each comment goes here -->
    // </ul>
})
