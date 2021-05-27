import './progressBar-style.css'

const ProgressBar = ({ completed }) => {

	const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: 'hsl(176, 50%, 47%)',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

	return (
    <div className="container">
      <div style={fillerStyles}/>
    </div>
  );
};

export default ProgressBar;