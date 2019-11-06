document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 3874 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const commentUl = document.querySelector('#comments')

  const likeSpan = document.querySelector('#likes')
  
  const titleName = document.querySelector('#name')

  const commentForm = document.querySelector('#comment_form')


  fetch(imageURL)
  .then(res => res.json)
  .then(data => {
    data.forEach(image => showContent(image))
  })

  function showImage(){

//     - the image url
// - the image name
// - the number of likes
// - any comments in an unordered list
    // const img = document.createElement('img')


    const li = document.createElement('li')
    li.innerText = image.comments

    // li.addEventListener('click', {
    //   fetch(commentsURL)
    // })

    commentUl.append(li)
  }





  

})