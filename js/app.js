import $ from 'jquery'
import NewsList from './NewsList'
import React from 'react'
import ReactDOM from 'react-dom'

// Get the top item ids
$.ajax({
    url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
    dataType: 'json'
}).then(function (stories) {
  // Get the item details in parallel
  var detailDeferreds = $(stories.slice(0, 30)).map(function (index, itemId) {
      return $.ajax({
          url: 'https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json',
          dataType: 'json'
      });
  });
  return $.when.apply($, detailDeferreds);
}).then(function () {
  // Extract the response JSON
  var items = $(arguments).map(function (index, argument) {
      return argument[0];
  });


  // Render the items
  ReactDOM.render(<NewsList items={items}/>, $('#content')[0]);
});
