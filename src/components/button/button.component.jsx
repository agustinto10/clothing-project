import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  inverted: 'inverted',
  google: 'google-sign-in',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

// const Button = ({ children, buttonType, ...otherProps }) => {
//   let className = '';
//   if (buttonType === 'inverted') {
//     className = 'inverted';
//   } else if (buttonType === 'google') {
//     className = 'google-sign-in';
//   } else {
//     className = 'default';
//   }

//   return (
//     <button className={`button-container ${className}`} {...otherProps}>
//       {children}
//     </button>
//   );
// };

export default Button;
