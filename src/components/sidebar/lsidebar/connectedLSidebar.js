import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import LSidebar from './leftSidebar'

const Sidebar = ({ lsbToggleOn, handlerToggle, selectId }) => (
    <div>
        <LSidebar isToggleOn={lsbToggleOn} handleClick={handlerToggle} selectId={selectId}/>
    </div>
)
  
Sidebar.propTypes = {
    lsbToggleOn: PropTypes.bool.isRequired,
    handlerToggle: PropTypes.func.isRequired,
}
  
const mapStateToProps = ({ lsbToggleOn }) => {
    return { lsbToggleOn }
}
  
const mapDispatchToProps = dispatch => {
    return { handlerToggle: () => dispatch({ type: `LSB_TOGGLE` }) }
}
  
const ConnectedSidebar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)
  
export default ConnectedSidebar