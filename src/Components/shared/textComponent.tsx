import React from "react";

type textComponentType = {
    title: string;
    text: string;
    styles?: React.CSSProperties | undefined
    className?: string;
    titleClassName?: string;
};

export const TextComponent: React.FC<textComponentType> = ({ title, text, styles, className, titleClassName }) => {
    return (
        <div className="info">
            <h3 style={{ lineHeight: 1.1, }} className={titleClassName}>{title}</h3>
            <p className={className} style={styles}>{text}</p>
        </div>
    );
};