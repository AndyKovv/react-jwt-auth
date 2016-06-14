import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PostActions from 'actions/PostActions'
import Loading from 'components/Loading'

export default class PostDetail extends React.Component{
    

    componentWillMount(){
        var slug = this.props.params.slug
        this.props.actions.requestPostDetail(slug);
    }

    render(){
            let { post, fetching } = this.props.detpost
    if(!fetching){
        return(
            
<div>
<div className='view overlay hm-white-slight z-depth-2'>
    <img
    src='http://randomwallpapers.net/peaceful-place-to-relax-forest-lake-tree-mountain-nature-1920x1080-wallpaper355223.jpg'
    className='img-fluid' alt='' />
    <a>
        <div className='mask'></div>
    </a>
</div>
<div className='jumbotron m-1 text-xs-center'>
    <h2 className='h2-responsive'>{ post.title }</h2>
    <hr/>
        <p className='h5-responsive'>{ post.content }</p>
    <div className='social-counters'>
        <div className='blog-date'>
            <span>Created at:</span>
                <i className='fa fa-clock-o'></i> { post.created_at }
            ||
            <span>Updated at:</span>
                <i className='fa fa-pencil '></i> { post.updated_at }
        </div>
        <h4 className='h4-responsive'>Category:
            <i className='fa fa-tag'></i> 
                <span>{ post.category_name }</span>
        </h4>
    </div>
</div>
</div>
)}else{
            return <Loading/>
        }
    }
}

function mapStateToProps(state){
    return{
        detpost: state.detpost
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(PostActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)

PostDetail.contextTypes={
   // router: React.PropTypes.func
}
