import PropTypes from 'prop-types';
const { BtnLoadMore } = require('./Button.styled');

const Button = ({ onClick }) => {
    return (
        <BtnLoadMore type="button" onClick={onClick}>
            Load More
        </BtnLoadMore>
    );
};

export default Button;

Button.propTypes = {
    onClick: PropTypes.func,
};