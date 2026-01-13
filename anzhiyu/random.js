var posts=["posts/337a.html","posts/0.html","posts/27eb.html","posts/0.html","posts/123c.html","posts/1e39.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };