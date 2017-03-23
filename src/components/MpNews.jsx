import React from 'react';

var MpNews = React.createClass({

  render: function() {
    var news = {}



    $.ajax({
      url: '//findmymp.herokuapp.com/news/' + this.props.mp.name,
      dataType: "json",
      async: false,
      data: news
    }).done(function(res) {
      news = res.results
    }).fail(function(res){
    })
    console.log(news[0])
    return (

        <div className="row-item">
        <h2>In the News</h2>
            {news.map(function(story){
              return (
                <div key={story.ID}>
                <h4>{story.Title}</h4>
                <p>{story.Description}<b> <a target="_blank" href={story.Url}>{story.Source}</a></b></p>
                </div>
                )
            }, this)}
        </div>

    )
  }
});



export default MpNews;
