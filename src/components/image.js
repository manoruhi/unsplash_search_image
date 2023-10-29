import React from 'react'
class Image extends React.Component{
    render(){
        return(
            // eslint-disable-next-line jsx-a11y/alt-text
            <img src={this.props.src}/>
        )
    }
}
export default Image;