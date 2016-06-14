import React from 'react'

export default class AddPost extends React.Component{

    render(){
        return(

<div className="post-section z-depth-2">
<div className="text-center">
    <h2 className="h2-responsive">Add New Post</h2>
    </div>
<hr/>
    <form action="#" novalidate>
    <input type="hidden" name="id" value=""/>
    <div className="md-form form-group">
        <i className="fa fa-user prefix"></i>
        <input type="text" name="title" className="form-control validate" placeholder="Post Title" value="" />
    </div>
    <div className="md-form">
        <i className="fa fa-pencil prefix"></i>
            <textarea type="text" id="form8" name="content" 
            className="md-textarea" placeholder="Post text"></textarea>
    </div>
    <div className="md-form form-group">
    <i className="fa fa-tag tag-icon"></i>
    <span className="category">Category:</span>
        <select className="selectpicker" name="category" id="category">
            <option selected>Select Category</option>
            <option value="1">
                Number One
            </option>
       </select>
    </div>
    <div className="md-form form-group text-center">
       <input type="submit" className="btn btn-primary default-width-6" value="Add Post"/>
    </div>
    
    <div className="alert alert-danger text-center">
    
    </div>
    </form>
</div>
        )
    }
}