const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

// Get element with class "content-feed"
const feedEL = document.getElementById("content-feed");

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
          <img src="${post.post}" alt="" />
        </section>
        <footer class="post-footer">
          <div class="post-actions">
            <i class="bi bi-heart"></i>
            <i class="bi bi-heart-fill"></i>
            <i class="bi bi-chat"></i>
            <i class="bi bi-send"></i>
          </div>
          <div class="post-meta">
            <h3 class="post-likes">${post.likes} likes</h3>
          </div>
          <div class="post-content">
            <h3 class="post-user">${post.username}</h3>
            <p class="post-title">${post.comment}</p>
          </div>
        </footer>
      </article>`;
  }
}

renderPosts();
