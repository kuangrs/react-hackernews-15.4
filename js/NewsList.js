import $ from 'jquery'
import NewsHeader from './NewsHeader'
import NewsItem from './NewsItem'
import React from 'react'

class NewsList extends React.Component {
	getMore() {
		return (
			<div className="newsList-more">
				<a className="newsList-moreLink" href="https://news.ycombinator.com/news?p=2">More</a>
			</div>
		)
	}

	render() {
		return (
			<div className="newsList">
				<NewsHeader />
				<div className="newsList-newsItems">
					{
						$(this.props.items).map(function (index, item) {
							return <NewsItem key={item.id} item={item} rank={index+1} />
						})
					}
				</div>
				{this.getMore()}
			</div>
		)
	}
}

export default NewsList
