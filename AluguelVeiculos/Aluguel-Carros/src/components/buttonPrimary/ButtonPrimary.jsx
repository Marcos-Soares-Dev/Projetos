import styles from './ButtonPrimary.module.css';
import PropTypes from 'prop-types';

export default function ButtonPrimary({ children }) {

    return (
        <button className={styles.button}>{children}</button>
    )
}

ButtonPrimary.propTypes = {
    children: PropTypes.node.isRequired,
};