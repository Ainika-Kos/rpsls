import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import './button.scss';

type Props = {
  icon: IconDefinition;
  clickHandler: () => void;
};

const Button = ({ icon, clickHandler }: Props) => {
  return (
    <button type="button" className="button" onClick={clickHandler}>
      <FontAwesomeIcon icon={icon} size="4x" className="button__icon" />
    </button>
  );
};

export default Button;