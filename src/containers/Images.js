import React,{Component} from 'react'
import ImageList from '../components/ImageList'

{/*Images is container component that fetch posts from API and pass it to ImageList container component */}
class Images extends Component{
    state={
      image_detail:[]
    }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(resp=>resp.json())
    .then(data=>{
        this.setState({
          image_detail:data
      })
    })
  }

  render(){
    return this.state.image_detail.length===0 
    ?
      <h2 className="f3 light-green">Loading... </h2>
    :
          <div className="tc">
            <ImageList list={this.state.image_detail} />    {/* Pass the list of images to ImageList container component */}
          </div>
  }
}


export default Images;