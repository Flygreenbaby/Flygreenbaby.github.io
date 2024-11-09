var posts=["2024/11/09/Six/","2022/08/19/Five/","2022/07/27/Four/","2022/07/21/Third/","2022/07/17/Second/","2022/06/30/First/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };