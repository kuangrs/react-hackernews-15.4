import $ from 'jquery'
import NewsList from '../NewsList'
import React from 'react'
import ReactDOM from 'react-dom'

$.ajax({
    url: '/json/items.json'
}).then(function (items) {
    ReactDOM.render(<NewsList items={items} />, $('#content')[0])
})
