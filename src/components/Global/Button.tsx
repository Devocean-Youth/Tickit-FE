import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'point' | 'white';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  text: string;
  onClick: () => void;
  color?: ButtonVariant | string;
}

const Button: React.FC<ButtonProps> = ({ 
  text,
  onClick,
  color = 'primary',
  style,
  ...restProps 
}) => {
  // Predefined color mapping
  const getButtonColor = (colorValue: ButtonVariant | string): string => {
    const colorMap: Record<ButtonVariant, string> = {
        point: '#1B56FD', // point color
        white: '#FFFFFF', // white color
    };
    
    return colorMap[colorValue as ButtonVariant] || colorValue;
  };

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 16px',
    backgroundColor: getButtonColor(color),
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 500,
    transition: 'opacity 0.2s',
    width: 'fit-content', // Auto-adjust width based on content
    minWidth: '80px', // Minimum width for very short text
    ...style,
  };

  return (
    <button 
      style={buttonStyle}
      onClick={onClick}
      {...restProps}
    >
      {text}
    </button>
  );
};

export default Button;
