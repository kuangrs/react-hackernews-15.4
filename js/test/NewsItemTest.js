import $ from 'jquery'
import React from 'react'
import { render } from 'react-dom'
import NewsItem from '../NewsItem'


$.ajax({
  url: '/json/items.json',
}).then(function (items) {
  console.log('item', items[2]);
  render(
  <NewsItem item={items[2]} rank={1} />,
  $('#content')[0]
  );
})
