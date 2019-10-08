$(function(){

    const $body = $('#body-js');

    $($body).find('form').submit(function (e) { 
        e.preventDefault();
        console.log($(this).find('input').val());
    });

    const template = `<article class="tv-show card mb-4 mx-auto" id="tv-show-js">
        <div class="row">
            <div class="col-md-3">
                <img class="card-img image" src=":link:" alt=":imgalt:">
            </div>
            <div class="col-md-9">
                <div class="card-body">
                    <h3 class="card-title">:name:</h3>
                    <p class="card-text text-justify">:summary:</p>
                </div>
            </div>
        </div>
    </article>`;

    $.ajax({
        url: "http://api.tvmaze.com/shows",
        success: function (shows, textStatus, xhr) {

            shows.forEach(show => {
                console.log(show);
                const article = template
                    .replace(':name:', show.name)
                    .replace(':summary:', show.summary)
                    .replace(':link:', show.image.original)
                    .replace(':imgalt:', show.name + ' logo');

                $body.find('.tv-shows').append(article);
            });
        }
    });
});