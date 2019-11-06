  const imgCard = document.querySelector('#image_card')
  const title = document.querySelector('#name')
  const likes = document.querySelector('#likes')
  const likeBtn = document.querySelector('#like_button')
  const cmtForm = document.querySelector('#comment_form')
  const cmtInput= document.querySelector('#comment_input')
  const cmtList = document.querySelector('#comments')

document.addEventListener('DOMContentLoaded', () => {

  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 3869 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments`
  

  fetch(imageURL)
  .then(res => res.json())
  .then(image => renderImg(image))


  function renderImg(image) {
    const url = document.createElement('img')
    url.setAttribute('src', image.url)
    title.innerHTML = image.name 
    likes.innerText = `${image.like_count}`

    //add likes to image
    likeBtn.addEventListener('click', () => {
      fetch(likeURL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
          "image_id": image.id

          // "like_count": `${++image.like_count}`
        })
      })
      .then(res => res.json())
      .then(updatedLikes => {
        likes.innerText = ++image.like_count
        console.log(updatedLikes)
      })
    })

    cmtForm.addEventListener('submit', () => {
      event.preventDefault()
      let cmtContent = event.target[0].value
      fetch(commentsURL, {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
          "image_id": imageId, 
          "content": cmtContent
        })
      })
      .then(res => res.json())
      .then(newCmt => {
        console.log(newCmt)
        const li = document.createElement('li')
        li.innerText = newCmt.content
        cmtList.append(li)

      })
      event.target.reset()
    })


 
    cmtList.innerHTML = image.comments.content
    //create li
    imgCard.append(url)
  


  }

})
