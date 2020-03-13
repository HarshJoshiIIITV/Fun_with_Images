import React from 'react'
import {Link} from 'react-router-dom'

{/* It takes images data as props and map each image and showing images */}
const ImageList=({list})=>{
	const image_list=list.map((image)=>{
		return(
			<div className="tc w-20 grow dib ma2" key={image.id} >
				<Link to={"/images/"+image.id}><img src={image.url}/></Link>  {/*It show image and its Link with its id */}
			</div>
		)
	})
	return(
		<div>
			{image_list} {/* This list contains JSX of each image with links to go when it click */}
		</div>
		)
}

export default ImageList;