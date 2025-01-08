import posts from "./posts.js";

const user = {
  name: "Per",
  avatar: "images/user-avatar.png",
  likedPosts: [],
};

// Get element with class "content-feed"
const appNavEl = document.getElementById("app-nav");
const feedEL = document.getElementById("content-feed");
const userAvatarEl = document.getElementById("user-avatar");

function renderUserAvatar() {
  appNavEl.innerHTML += `
    <img id="user-avatar" class="user-avatar" src="${user.avatar}" alt="Profile picture of Per wih decorative purple and orange background." />`;
}
renderUserAvatar();

function renderPosts() {
  for (let post of posts) {
    feedEL.innerHTML += `
      <article class="post-wrapper">
        <header class="post-header">
          <img
            class="post-author-avatar"
            src="${post.avatar}"
            alt="Profile picture of Vincent van Gogh"
          />
          <div class="post-header-inner">
            <h2 class="post-author">${post.name}</h2>
            <p class="post-author-location">${post.location}</p>
          </div>
        </header>
        <section class="post-img">
          <img src="${post.post}" alt="" id="post-${post.id}"/>
        </section>
        <footer class="post-footer">
          <div class="post-actions">
            <i class="bi bi-heart" id="heart-${post.id}"></i>
            <i class="bi bi-chat"></i>
            <i class="bi bi-send"></i>
          </div>
          <div class="post-meta">
            <h3 class="post-likes" id="likes-${post.id}">${post.likes} likes</h3>
          </div>
          <div class="post-content">
            <h3 class="post-user">${post.username}</h3>
            <p class="post-title">${post.comment}</p>
          </div>
        </footer>
      </article>`;
  }
  // Add event listeners to heart icons after rendering posts
  posts.forEach((post) => {
    const heartEl = document.getElementById(`heart-${post.id}`);
    const postEl = document.getElementById(`post-${post.id}`);
    heartEl.addEventListener("click", () => clickToLikePost(post.id));
    postEl.addEventListener("dblclick", () => clickToLikePost(post.id));
  });
}

function clickToLikePost(postId) {
  const post = posts.find((p) => p.id === postId);
  const heartEl = document.getElementById(`heart-${postId}`);
  const likesEl = document.getElementById(`likes-${postId}`);

  function likePost(post) {
    if (!user.likedPosts.includes(post.id)) {
      heartEl.classList.remove("bi-heart");
      heartEl.classList.add("bi-heart-fill", "crimson");
      post.likes++;
      likesEl.textContent = `${post.likes} likes`;
      user.likedPosts.push(post.id);
    } else if (user.likedPosts.includes(post.id)) {
      heartEl.classList.add("bi-heart");
      heartEl.classList.remove("bi-heart-fill", "crimson");
      post.likes--;
      likesEl.textContent = `${post.likes} likes`;
      const index = user.likedPosts.indexOf(post.id);
      user.likedPosts.splice(index, 1);
    }

    console.log(post.likes);
    console.log(user);
  }

  likePost(post);
}

renderPosts();
