import React, {FC, useState} from 'react';
import styles from './CImage.module.scss';

interface ImageProps {
    src: any,
    alt: string,
    width?: number | string,
    height?: number | string
}

const CImage: FC<ImageProps> = ({src = '', alt = '', width, height}) => {
    const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false);

    return (
        <div style={{width, height}}>
            {
                !isImgLoaded &&
                <div style={{
                    width,
                    height,
                    backgroundColor: '#6F6F64'
                }}/>
            }
            <img className={styles.imageWrapper_img}
                 src={src}
                 alt={alt}
                 onLoad={() => setIsImgLoaded(true)}
            />
        </div>
    );
};

export default CImage;