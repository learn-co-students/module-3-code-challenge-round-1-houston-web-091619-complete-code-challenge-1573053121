let imageId = 3873 //Enter the id from the fetched image here

const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

const likeURL = `https://randopic.herokuapp.com/likes/`

const commentsURL = `https://randopic.herokuapp.com/comments/`

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  getImages(imageURL).then(res => {
    console.log(res);
    renderImage(res);
  })

  const body = document.querySelector('body');

  const change = document.createElement('button');
  change.textContent = "don't click this!!";
  change.addEventListener('click', () => {
    body.style.display = 'none';
    setInterval(() => {
      body.style.display = ''
      const image = document.querySelector('#image');
      image.src = 'lil-nas-x-cowboy.jpg'
    }, 2000);
    
  })
  
  body.append(change);

})

async function getImages(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

function renderImage(image) {
  const img = document.querySelector('#image');
  img.src = image.url

  const h4 = document.querySelector('#name');
  h4.textContent = image.name

  const span = document.querySelector('#likes');
  span.textContent = image.like_count;

  for (let i of image.comments) {
    addComment(i);
  }

  const btn = document.querySelector('#like_button');
  btn.addEventListener('click', () => {
    span.textContent = ++image.like_count;
    postLike(image);
  })

  const form = document.querySelector('#comment_form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(commentsURL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image_id: image.id,
        content: e.target[0].value
      })
    }).then(res => res.json())
    .then( json => {
      addComment(json);
    })
  })
}

async function postLike(image) {
  const response = await fetch(likeURL, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image_id: image.id
    })
  })
}

function addComment(comment) {
  const ul = document.querySelector('#comments');

  const li = document.createElement('li');
  li.textContent = comment.content;
  
  const delBtn = document.createElement('button');
  delBtn.textContent = 'delete';
  delBtn.addEventListener('click', () => {
    li.remove();
    fetch(`${commentsURL}/${comment.id}`, {
      method: "DELETE"
    })
  })
  li.append(delBtn);
  ul.append(li);
}
