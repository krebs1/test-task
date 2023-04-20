import React, {FC} from 'react';
import styles from './CButton.module.scss'

interface ButtonProps {
    text?: string,
    active?: boolean,
    clickHandle?: Function,
    className?: string
}

const CButton: FC<ButtonProps> = ({
                                      text = '',
                                      active = false,
                                      clickHandle,
                                      className = ''
                                  }) => {
    return (
        <button className={`${styles.button} ${active ? styles.button_active : styles.button_inactive} ${className}`}
                onClick={() => {
                    if(clickHandle!==undefined) clickHandle()
                }}
        >
            {text}
        </button>
    );
};

export default CButton;