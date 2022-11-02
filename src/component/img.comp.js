import React from "react";

export default function Img({ src, width, height, className, alt = '' }) {
    return (
        <>
            <img
                className={className}
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </>
    )
}