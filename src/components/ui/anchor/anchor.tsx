interface AnchorProps {
    href : string;
    children : React.ReactNode;
    className : string;
};

const Anchor : React.FC<AnchorProps> = ({ href, children, className }) => {
    return (
        <a href={href} className={className}>{children}</a>
    );
};

export default Anchor;
