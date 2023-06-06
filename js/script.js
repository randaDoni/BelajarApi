$('#search').on('click', function(){
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : 'b9e89deb',
            's' : $('#search-input').val()
        },
        success: function(result){
            if(result.Response == "True"){
                let movies = result.Search;
                $.each(movies, function(i,data){
                    $('#movie-list').append(`
                    <div class="col-md-3">
                    <div class="card" style="width: 18rem;">
                        <img src="${data.Poster}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.Title}</h5>
                            <p class="card-text">${data.Year}</p>
                        </div>
                    </div>
                    </div>
                    `);
                });
                
            }else{
                $('#movie-list').append(`<h1 class="Text-center" >${result.Error}</h1>`);
                alert($('#search-input').val())
            }   
        }
    });
});