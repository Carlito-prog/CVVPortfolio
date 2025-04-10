import React from "react";

type ImageComponentType = {
    alt: string;
    url: string;
    styles?: React.CSSProperties | undefined
    height?: string;
    width?: string;
};

export const ImageComponent: React.FC<ImageComponentType> = ({ alt, url, styles, height, width }) => {
    return (
        <div className="image">
            <img style={styles} src={url} alt={alt} height={height} width={width} />
        </div>
    );
};