import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

 
 
const About = () =>{
  return(
  <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div>
        About
      </div>
  </CSSTransitionGroup>
  )
}
 
export default About