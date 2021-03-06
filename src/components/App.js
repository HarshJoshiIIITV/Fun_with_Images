import React from 'react'
import './App.css'
import {Route} from 'react-router-dom';
import Images from '../containers/Images';
import Image from '../containers/Image';

{/*App component which defines Routes and what component to load when we go to that path */}
{/*className="bb bw1 pb3" are used for styling using Tachyons*/}
const App=()=>{
    return(
          <div className="tc">
            <h1 className="bb bw1 pb3">Fun With Images </h1>    
             {/*Image component loads you the details of Image you click*/}
            <Route exact path='/' component={Images}/>   {/*Images component loads you the list of Images for both paths*/}
            <Route exact path='/images' component={Images}/>
            <Route path="/images/:image_id" component={Image}/>
          </div>
      )
}


export default App;