  let imageId = 3871 

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`


async function addImage(imageURL) {

let response = await fetch(imageURL);
let image = await response.json();

return image;
}

addImage(imageURL).then( res => {
  createImageCard(res);
})

// function addImages(json) {
//   console.log(json)
  // json.map(image => createImageCard(image))
// }