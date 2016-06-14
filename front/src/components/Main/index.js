import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { truncate } from 'sugar'
import { Pagination } from 'react-bootstrap';

import * as MainActions from 'actions/MainActions'
import Loading from 'components/Loading'


export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {activePage: 1}
  }

	componentDidMount() {
		this.props.actions.requestPosts();
	}
 
  handleSelect(pageKey) {
    this.props.actions.requestPosts(pageKey)
    this.setState({ activePage: pageKey })  
  }
	render(){
  let {  posts, fetching } = this.props.main
  const pageCounter = Math.ceil(posts.records/posts.page_size)
  if(!fetching){
    return (
<div className='comments-section z-depth-0'>
      <h1 className='heading'>AllAbout Blog</h1>
        <hr/>

          { posts.results.map((post, index) =>

  <div className='row hoverable' key={index}>
    <div className='col-xs-2'>
     <img src='https://www.python.org/static/opengraph-icon-200x200.png' 
          className='img-fluid img-circle' alt='' />
      <div className='text-center'>
          <span>Author: <b>{ post.author_name }</b></span>
      </div>
    </div>
      <div className='col-xs-8'>
        <div className='card-header'>
            <Link to={`detail/${post.slug}/`} className='blog-title'>{ post.title }</Link>
            || <i className='fa fa-pencil-square-o tag-icon'></i>
            <Link to={`edit/${post.id}/`} className='blog-title'>Edit</Link>              
        </div>
        <div className='card-data'>
          <ul>
            <li>
              <div className='blog-date'>
                    <i className='fa fa-clock-o'></i> { post.created_at }
               </div>
            </li>
          </ul>
        </div>
        <p>{ post.content.truncate(350) }</p>
        <div className='blog-category'>
          <span> Category: </span> <i className='fa fa-tag'></i>
            <span className='category'>{ post.category_name }</span>
        </div>            
      </div>
  </div>
    )}
          {
            pageCounter > 1
            ?
  <div className='text-center'> 
 <Pagination
          bsSize='medium'
          items={pageCounter}
          next
          prev
          activePage={this.state.activePage}
          onSelect={::this.handleSelect} />
  </div>
          :
          ''
          }
</div>
		)
    }else{
      return <Loading/>
    }
  }
}



function mapStateToProps(state){
  return{
    main: state.main
  
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(MainActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
Main.contextTypes = { //Для выполнения метода this.context
  
}

