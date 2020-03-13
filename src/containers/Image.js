import React,{Component} from 'react'

class Image extends Component{
	state={
		image_detail:[]
	}
	componentDidMount(){
	    {/* It gives the path id we click now we have imageid so we can grab image */}
		const id=this.props.match.params.image_id 
		 {/* Grabbing images */}
		fetch("https://jsonplaceholder.typicode.com/photos/"+id) 
		.then(resp=>resp.json())  
		.then(data=>{
			this.setState({
				image_detail:data
				})
		})
	}
	render(){
		const {albumId,id,title,url,thumbnailUrl}=this.state.image_detail
		{/*here we returning that image we click */}
		return this.state.image_detail.length===0
			? <h2 className='f3 light-green'> Loading... </h2>
			:
			(
				<article className="center mw5 mw6-ns br3 light-green hidden ba bw1 b--light-green mv4">
  				<h2 className="f4 br3 mv0 pv2 ph3">Image Details</h2>
  				<div className="tl pa3 bt b--light-green ">
					<p className="f6 f5-ns lh-copy measure">
	 				 	AlbumId:  {albumId}
	 				</p>
	 				<p className="f6 f5-ns lh-copy measure">
	 					Id:  {id}
	 				</p>
			 		<p className="f6 f5-ns lh-copy measure">
	 					Title:  {title}
	 				</p>
	 				<p className="f6 f5-ns lh-copy measure">
	 					Url:  {url}
	 				</p>
	 				<p className="f6 f5-ns lh-copy measure">
	 					Thumbnailurl:  {thumbnailUrl}
	 				</p>
  				</div>
				</article>
			)
		}
}

export default Image;