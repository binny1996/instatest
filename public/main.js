var comments = [{"username":"James","comments":"This looks sad"},{"username":"James","comments":"awesome"},{"username":"James","comments":"awesome"},{"username":"James","comments":"This looks sad"},{"username":"James","comments":"This looks sad"},{"username":"James","comments":"awesome"},{"username":"James","comments":"This looks sad"},{"username":"James","comments":"This looks sad"},{"username":"James","comments":"This looks sad"},{"username":"James","comments":"This looks sad"},{"username":"James","comments":"This looks sad"},{"username":"James","comments":"not so cool"},{"username":"James","comments":"not so cool"},{"username":"James","comments":"not so cool"},{"username":"James","comments":"not so cool"},{"username":"James","comments":"awesome"},{"username":"James","comments":"not so cool"},{"username":"James","comments":"not so cool"}]
// localStorage.setItem("bookmarked", "")

if(localStorage.getItem("bookmarked")){
  var bookmarks = []
  bookmarks = bookmarks.concat(JSON.parse(localStorage.getItem("bookmarked")))
}else{
  var bookmarks = []
}

var response = new XMLHttpRequest()
response.open("GET", "https://hiit.ria.rocks/videos_api/cdn/com.rstream.crafts?versionCode=40&lurl=" + "Canvas%20painting%20ideas", true)
response.send()

response.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  let hook = document.getElementById("hook")

  if (response.status >= 200 && response.status < 400) {
    data.map((feed, index) => {
            hook.insertAdjacentHTML('beforeend', '<div class="single-post">'+
        '<div class="user-wrap">'+
          '<div class="user-left">'+
            '<div class="user-img-wrap">'+
              '<img class="user-img" src="'+feed['low thumbnail']+'" />'+
            '</div>'+
            '<span class="username">varun.aditya</span>'+
          '</div>'+
          '<div class="user-right">'+
            '<img src="images/more.png" class="settings" />'+
          '</div>'+
        '</div>'+
        '<img class="user-feed-img" src="'+feed['high thumbnail']+'" />'+
        '<div class="user-action-wrap">'+
          '<div class="action-left">'+
            '<img src="images/heart.png" class="action-icon-left" />'+
            '<img src="images/comment.png" class="action-icon-left" />'+
            '<img src="images/send.png" class="action-icon-left" />'+
          '</div>'+
          '<div class="action-right">'+
            '<img id="bookmark'+index+'" src="images/bookmark.png" class="action-icon-right bookmark" />'+
          '</div>'+
        '</div>'+
        '<p class="feed-title"><b>varun.aditya </b>'+feed.title+'</p>'+
        '<p class="feed-description"></p>'+
        '<div id="comments">'+
        comments[0].username+': '+comments[0].comments+
        '</div>'+
      '</div>')

      var bookmark = document.getElementById("bookmark"+index)
      bookmark.addEventListener("click", handleBookmark)

      function handleBookmark(){
        bookmarks.push(index)
        localStorage.setItem("bookmarked", JSON.stringify(bookmarks));
        document.getElementById("bookmark" + index).src="images/bookmarked.png"
        console.log(localStorage.getItem("bookmarked"))
      }
      
    })

    for(var i=0; i<bookmarks.length; i++){
      document.getElementById("bookmark"+bookmarks[i]).src= "images/bookmarked.png"
      document.getElementById("bookmark"+bookmarks[i]).addEventListener("click", ()=>{
        document.getElementById("bookmark"+bookmarks[i]).src="images/bookmark.png"
        bookmarks.splice(bookmarks[i], 1)
        localStorage.setItem("bookmarked", JSON.stringify(bookmarks))
        console.log(localStorage.getItem("bookmarked"))

      })
    }

  } else {
    console.log("error")
  }

  
}





