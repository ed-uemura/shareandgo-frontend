import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ButtonPrimary.css';

const ButtonPrimary = ({ text, className, link, clickAction }) => {
	return (
		<Link
			to={link}
			onClick={clickAction}
			className={`btn btn-primary ${className}`}>
			{text}
		</Link>
	);
};

export default ButtonPrimary;
