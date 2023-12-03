import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'focus: inline-block rounded-full bg-yellow-500  font-semibold uppercase tracking-wide text-stone-800 ring-yellow-300 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed text-sm';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py- 2.5 text-xs',
    secondary:
      'focus: inline-block rounded-full text-sm border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 ring-yellow-300 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-stone-200 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py- 2.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
