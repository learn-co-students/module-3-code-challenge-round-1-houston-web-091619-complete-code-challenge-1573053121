document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 3868 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

    
    fetch(`https://randopic.herokuapp.com/images/${imageId}`)
      .then(res => res.json())
      .then(imageId => {
          imageId.forEach(image => {
          renderImage(image)
   
      })

})

{/* <div class="container">
    <div class="row" id="image_content">
      <div class="card col-md-4"></div>
      <div id="image_card" class="card col-md-4">
          <img src="" id="image" data-id=""/>
          <h4 id="name">Title of image goes here</h4>
          <span>Likes:
            <span id="likes">Likes Go Here</span>
          </span>
          <button id="like_button">Like</button>
          <form id="comment_form">
            <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
            <input type="submit" value="Submit"/>
          </form>
          <ul id="comments">
               <!-- <li> for each comment goes here -->
          </ul>
        </div>
      <div class="card col-md-4"></div>
    </div> */}
    function renderImagine(image) {
      const div = document.createElement('div')
      div.className = "container"

      const p  = document.createElement('p')
      p.className = 'image_content'

      const li = document.createElement ('li')
      li.className = 'card col-mb-4'

      const img = document.createElement ('img')
      img.setAttribute("src", ${#image})

      const h4 = document.createElement('h4')
      h4.innerText = title.name

      const likeBtn = document.createElement('button')
      likeBtn.className = 'btn'

const likeBtn = document.createElement('button')
        likeBtn.className = 'btn-success'
        likeBtn.innerText = `Likes: `

        const span = document.createElement('span')
        span.innerText = comment.likes.length

        addLike(comment,span,likeBtn)
