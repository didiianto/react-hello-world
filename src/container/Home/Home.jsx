import React, {Component} from 'react';
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../Product/Product';

class Home extends Component{
    render(){
        return(
            <div>
                {/* <p>YouTube Componen</p>
                <br/>
                <YouTubeComp 
                    time="8.12" 
                    title="React JS"
                    desc="this is tutorial"
                />
                <YouTubeComp /> */}

                <p>Counter</p>
                <br/>
                <Product/>
            </div>
        )
    }
}

export default Home;
