import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import RSidebar from './rightSidebar'

const Sidebar = ({ RSB_TOGGLE, ACCOUNTS, handlerToggle }) => (
    <div>
        <RSidebar isToggleOn={RSB_TOGGLE} handleClick={handlerToggle} accounts={ACCOUNTS}/>
    </div>
)
  
Sidebar.propTypes = {
    RSB_TOGGLE: PropTypes.bool.isRequired,
    handlerToggle: PropTypes.func.isRequired,
}
  
const mapStateToProps = ({ RSB_TOGGLE, ACCOUNTS }) => ({ RSB_TOGGLE, ACCOUNTS })
  
const mapDispatchToProps = dispatch => ({ handlerToggle: () => dispatch({ type: `RSB_TOGGLE` }) })
  
const ConnectedSidebar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)
  
export default ConnectedSidebar