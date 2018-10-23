import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import RSidebar from './rightSidebar'

const Sidebar = ({ rsbToggleOn, handlerToggle }) => (
    <div>
        <RSidebar isToggleOn={rsbToggleOn} handleClick={handlerToggle}/>
    </div>
)
  
Sidebar.propTypes = {
    rsbToggleOn: PropTypes.bool.isRequired,
    handlerToggle: PropTypes.func.isRequired,
}
  
const mapStateToProps = ({ rsbToggleOn }) => {
    return { rsbToggleOn }
}
  
const mapDispatchToProps = dispatch => {
    return { handlerToggle: () => dispatch({ type: `RSB_TOGGLE` }) }
}
  
const ConnectedSidebar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)
  
export default ConnectedSidebar