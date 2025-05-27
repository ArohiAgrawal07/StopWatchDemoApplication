const Button = ({ onClick, color, children }) => {
  const buttonStyle = {
    backgroundColor: color,
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 5px',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;