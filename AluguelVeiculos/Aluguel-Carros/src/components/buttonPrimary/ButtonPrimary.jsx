import styles from './ButtonPrimary.module.css';
import PropTypes from 'prop-types';

export default function ButtonPrimary({ children, onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}

ButtonPrimary.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};