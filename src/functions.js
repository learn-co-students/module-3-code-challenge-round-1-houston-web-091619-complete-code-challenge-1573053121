var createImageCard = (image) => {  
    console.log(image)  
const card = document.getElementById("image_card")
const form = document.getElementById("comment_form")
const comments_ul = document.getElementById("comments")



const comments_li = document.createElement('li')
comments_li.innerText = image.comments


const img = document.createElement('img')
img.src = image.url
img.id = "image"
img.setAttribute("data-id", image.id)

const img_title = document.createElement('h4')
img_title.id = "name"
img_title.innerText = "stuff"

const likes_handle = document.createElement('span')
img_title.innerText = "likes: "
likes_handle.id = "likes"

const likes_count = document.createElement('span')

const likes_button = document.createElement('button')
likes_button.id = "like_button"

const card_Delete_Btn = document.createElement("button")
card_Delete_Btn.innerText = "Delete"
card_Delete_Btn.setAttribute("data-id", image.id)
card_Delete_Btn.addEventListener('click', () => {
fetch("https://randopic.herokuapp.com/comments/:comment_id", {
method: "DELETE"
})
comments_li.remove()
})



likes_handle.append(likes_count)
comments_li.append(card_Delete_Btn)
comments_ul.append(comments_li)
img.append(img_title)
card.append(img, likes_handle, likes_button, comments_ul, form)



}


const form = document.getElementById("comment_form")
form.addEventListener('submit', (e) => {
e.preventDefault() 
let imageId = 3871 
fetch("https://randopic.herokuapp.com/comments", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
"image-id": imageId,
"content": e.target[0].value
})
})
.then(res => res.json())
.then(newComment => {
    createImageCard(newComment)
})
e.target.reset()
})

// <!-- <img src="" id="image" data-id=""/>
//         <h4 id="name">Title of image goes here</h4>
//         <span>Likes:
//           <span id="likes">Likes Go Here</span>
//         </span>
//         <button id="like_button">Like</button> -->




//     
//         <button id="like_button">Like</button> -->
//           <form id="comment_form">
//             <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
//             <input type="submit" value="Submit"/>
//           </form>
//           <ul id="comments">
//             <li> for each comment goes here -->
//           </ul>
//         </div>



















// var createQuoteCard = (quote) => {
//     console.log(quote)
// };


// card_Delete_Btn.addEventListener('click', () => {

// fetch("", {
// method: "DELETE"
// })
// li.remove()
// })


