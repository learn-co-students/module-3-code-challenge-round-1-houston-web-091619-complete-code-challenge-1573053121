document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  // Variables 
  let imageId = 3870
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`
  

  fetch(imageURL)
  .then(resp => resp.json())
  .then(images => {

    //      <div id="image_card" class="card col-md-4">
  //         <img src="" id="image" data-id=""/>
  //         <h4 id="name">Title of image goes here</h4>
  //         <span>Likes:
  //           <span id="likes">Likes Go Here</span>
  //         </span>
  //         <button id="like_button">Like</button>
  //         <form id="comment_form">
  //           <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
  //           <input type="submit" value="Submit"/>
  //         </form>
  //         <ul id="comments">
  //              <!-- <li> for each comment goes here -->
  //         </ul>
  //       </div>

    console.log(images)
    
    // myObj = { "name":"John", "age":30, "car":null };

  for (x in images) {

  const img = document.querySelector('#image')
  img.setAttribute('src', images.url)
  img.setAttribute('data-id', images.id)

  const h4 = document.querySelector('#name')
  h4.innerHTML = images.name

  const span = document.querySelector('span')

  const spanChild = document.querySelector('#likes')
  spanChild.innerHTML = images.like_count

  const comment = document.querySelector('#comments')

  const li = document.createElement('li')
  
  const p = document.createElement('p')
  p.innerText = images.comments[0].content

  li.append(p)
  comment.append(li)

  const btnLike = document.querySelector('#like_button')

  btnLike.addEventListener('click', () => {
    fetch(likeURL, {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        'image_id': images.id
      })
    })
    .then(res => {
      ++images.like_count
    })
    .then(likes => {
      spanChild.innerHTML = images.like_count
    })
    
  })

    const commentForm = document.querySelector('#comment_form')

    commentForm.addEventListener('submit', () => {
      event.preventDefault()

      fetch(commentsURL, {
        method: 'POST', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          'image_id': images.id,
          'content': event.target[0].value
        })
      })
      .then(res => res.json())
      .then(commentNew => {
        p.innerText = images.comments[0].content
      })
    })
  }



  })
  


  
  

})
