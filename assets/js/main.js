  for (let i = 7; i < 23; i++) {
$.ajax({
    method:'GET',
    url:'https://api.tvmaze.com/shows/'+i,
    success:function(res){
      console.log(res);
      $(".film-cards").append(
        `<div class="card col-3 mt-2 mx-2" style="width: 12rem;">
  <img src="${res.image.medium}" class="card-img-top mt-1" alt="...">
  <div class="card-body">
    <h5 class="card-text">${res.name}</h5>
  </div>
  <button ><a href='details.html?id=${res.id}'target="_blank"<a>Details</button>
</div>`
      )},
    error:function(err){
        console.log(err);
    }
})   
}