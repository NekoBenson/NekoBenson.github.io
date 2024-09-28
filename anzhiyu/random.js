var posts=["2024/09/28/AIGC/","2024/09/28/Android/","2024/09/28/如何正确使用计算机？/","2024/09/24/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };