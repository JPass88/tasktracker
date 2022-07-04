import PropTypes from 'prop-types'

const Button = (props) => {

  return (    
    <button 
        onClick={props.onClick}
        className='btn' 
        style={{ color: props.color}}>
        {props.text}        
    </button>
  )
}

Button.defaultProps = {
    color: 'orange'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button

