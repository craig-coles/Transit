import React from "react"

class TransitionRenderer extends React.Component {

  constructor(props){
    super(props)
    this.state = {loading: true}
  }
  componentWillReceiveProps() {
    
    this.setState((prevState)=>{
      return {loading:true}
    })

    setTimeout(()=>{
  
      this.setState((prevState)=>{
        return {loading:false}
      })
    }, Number(this.props.delay) / 2)


  }

  shouldComponentUpdate(nextProps, nextState) {
      if(!nextState.loading) {
        return true
      }
      return false
  }

  render(){
    let childContent = this.state.loading ? null : this.props.children()
    return (
      <div>
        {childContent}
      </div>
    )
  }
}

export default TransitionRenderer;