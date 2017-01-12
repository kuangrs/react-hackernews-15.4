import $ from 'jquery'
import React from 'react'
import url from 'url'
import moment from 'moment'

class NewsItem extends React.Component {

    getDomain() {
        return url.parse(this.props.item.url).hostname
    }

    getTitle() {
      return (
        <div className="newsItem-title">
          <a href={this.props.item.url} className="newsItem-titleLink">
            {this.props.item.title}
          </a>
          <span className="newsItem-domain">
            ({this.getDomain()})
          </span>
        </div>
      )
    }

    getCommentLink() {
      let commentText = 'discuss'
      if(this.props.item.kids && this.props.item.kids.length) {
        commentText = this.props.item.kids.length + ' comments'
      }

      return (
        <a href={'https://news.ycombinator.com/item?id=' + this.props.item.id}>{commentText}</a>
      )
    }

    getSubText() {
      return (
      <div className="newsItem-subtext">
        {this.props.item.score} points by <a href={'https://news.ycombinator.com/user?id=' + this.props.item.by}>{this.props.item.by}</a> {moment.utc(this.props.item.time * 1000).fromNow()} | {this.getCommentLink()}
      </div>
      );
    }

    getRank() {
      return (
        <div className="newsItem-rank">
          {this.props.rank}.
        </div>
      )
    }

    getVote() {
      return (
        <div className="newsItem-vote">
          <a href={'https://news.ycombinator.com/vote?for=' + this.props.item.id + '&dir=up&whence=news'}>
            <img src="../img/grayarrow2x.gif" width="10"/>
          </a>
        </div>
      )
    }

    render() {
        return (
            <div className="newsItem">
                {this.getRank()}
                {this.getVote()}
                <div className="newsItem-itemText">
                  {this.getTitle()}
                  {this.getSubText()}
                </div>
            </div>
        )
    }
}

export default NewsItem
