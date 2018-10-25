import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import LSidebar from './leftSidebar'

const Sidebar = ({ LSB_TOGGLE, handlerToggle, selectId }) => (
    <div>
        <LSidebar isToggleOn={LSB_TOGGLE} handleClick={handlerToggle} selectId={selectId}/>
    </div>
)
  
Sidebar.propTypes = {
    LSB_TOGGLE: PropTypes.bool.isRequired,
    handlerToggle: PropTypes.func.isRequired,
}
  
const mapStateToProps = ({ LSB_TOGGLE }) => {
    return { LSB_TOGGLE }
}
  
const mapDispatchToProps = dispatch => {
    return { handlerToggle: () => dispatch({ type: `LSB_TOGGLE` }) }
}
  
const ConnectedSidebar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)
  
export default ConnectedSidebar