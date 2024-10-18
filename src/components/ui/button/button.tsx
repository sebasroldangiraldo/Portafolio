interface ButtonProps {
    type : 'button' | 'submit' | 'reset';
    children : React.ReactNode;
    className? : string;
    onClick? : (event : React.MouseEvent<HTMLButtonElement>) => void;
};

const Button : React.FC<ButtonProps> = ({ type = 'button', children, className, onClick }) => {
    return (
        <button type={type} className={className} onClick={onClick}>{children}</button>
    );
};

export default Button;