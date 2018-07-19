import React from "react"
import GooBlobs1 from './components/GooBlobs1'
import TransitionRenderer from './TransitionRenderer'
import s from './Transition.module.css'
import IndexPage from '../../pages/';

class Transition extends React.Component {

  constructor(props){

    super(props);
    this.state = {loading: false, text:"hey bud", className:''}

  }

    // componentDidMount() {
    //     setTimeout(() => this.forceUpdate(), 1500)
    // }

    componentWillReceiveProps() {
        //setTimeout(() => this.forceUpdate(), 1500)
        
        this.setState((prevState)=>{
          return {loading:true}
        })



        setTimeout(()=>{
      
          this.setState((prevState)=>{
            return {loading:false}
          })

          this.forceUpdate()
        }, 3000)

        this.forceUpdate()


    }

    shouldComponentUpdate(nextProps, nextState) {
        return false
    }

  componentDidMount(){
    
    this.setState(()=>{
      return {loading:false, className:`${s['fadeout']}`}
    })
    
    setTimeout(()=>{
      this.setState((prevState)=>{
        return {loading:false}
      })
    }, 1000)
  }

  getTransitionElement(){
    
    return (
      <div className={`${s['transitionContainer']} ${this.state.className}`}>
        <GooBlobs1 />
      </div>
    )
  }

  render(){
    
    console.log('transition state', this.state)
    let domContent = this.props.children(this.state)
    let transitionElement = this.state.loading ? this.getTransitionElement() :  null

   
    return (
      
      <div>
        {transitionElement}
        <TransitionRenderer delay="3000" {...this.props}>
          {()=>{
            return domContent
            }
          }
        </TransitionRenderer>
      </div>
    )
  }
}

export default Transition;