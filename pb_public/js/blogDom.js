
import PocketBase from "https://unpkg.com/pocketbase@0.8.2/dist/pocketbase.es.mjs";

const pb = new PocketBase('http://127.0.0.1:8090');
const postsArea = document.getElementById('post-area');
let posts

const getPostList = async () => {
  try {
    posts = await pb.collection('posts').getFullList(200 /* batch size */, {
      sort: '-created',
    });

  
    console.log(posts);
  }
  catch (err) {
    console.error(err);
  }

  // console.log("here")

  // console.log("posts: ", posts)
  // console.log("posts length: ", posts.length)
  // console.log(posts[0])
  // for (let i = 0; i < posts.length; i++) {
  //   console.log(posts[i])
  // }
  for await(const post of posts) {
    console.log("test")

    console.log("another test")
  /*
  append to post area this 
  <div className="flex flex-wrap -m-4 block ml-2 mr-2 place-content-center">
        <div className="h-full bg-gray-100 p-8 rounded-lg block ml-2 mr-2">
          <p>{props.content}</p>
          <p>{props.author}</p>
        </div>
    </div>
  */
    let postDiv = document.createElement('div');
    postDiv.className = "flex block ml-2 mr-2 mt-10 md-10 place-content-center";
    let postContent = document.createElement('div');
    postContent.className = "bg-blue-50 p-8 rounded-lg block ml-2 mr-2 w-100";
    let postContentText = document.createElement('p');
    postContentText.innerHTML = post.content;
    let postAuthor = document.createElement('p');
    postAuthor.innerHTML = post.username;
    postContent.appendChild(postContentText);
    postContent.appendChild(postAuthor);
    postDiv.appendChild(postContent);
    postsArea.appendChild(postDiv);
  }
}

getPostList();
