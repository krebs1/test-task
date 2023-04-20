import React, {useState} from 'react';
import CButton from "../../components/UI/Button/CButton";
import styles from './MenuBlock.module.scss';
import CImage from "../../components/UI/Image/CImage";

const MenuBlock = () => {
    const FoodImg = require("../../img/FoodMenu.png")
    const DrinkImg = require("../../img/DrinkMenu.png")
    const TakeawayImg = require("../../img/TakeawayMenu.jpg")
    const [currentImg, setCurrentImg] = useState(FoodImg)
    const [activeButton, setActiveButton] = useState({
        food: true,
        drinks: false,
        takeaway: false
    })

    return (
        <div className={styles.menuWrapper}>
            <div className={styles.menuWrapper_controls}>
                <h2 className={styles.menuWrapper_controls_h2}>
                    Menu
                </h2>
                <p className={styles.menuWrapper_controls_p}>
                    We change our menu every season. Here is what we are currently dishing up.
                </p>
                <div className={styles.menuWrapper_controls_btns}>
                    <CButton text={'Food Menu'}
                             active={activeButton.food}
                             clickHandle={()=>{
                                 setCurrentImg(FoodImg)
                                 setActiveButton({food: true, drinks: false, takeaway: false})
                             }}
                             className={styles.menuWrapper_controls_btns_btn}
                    />
                    <CButton text={'Drinks Menu'}
                             active={activeButton.drinks}
                             clickHandle={()=>{
                                 setCurrentImg(DrinkImg)
                                 setActiveButton({food: false, drinks: true, takeaway: false})
                                 console.log()
                             }}
                             className={styles.menuWrapper_controls_btns_btn}
                    />
                    <CButton text={'Takeaway Menu'}
                             active={activeButton.takeaway}
                             clickHandle={()=>{
                                 setCurrentImg(TakeawayImg)
                                 setActiveButton({food: false, drinks: false, takeaway: true})
                             }}
                             className={styles.menuWrapper_controls_btns_btn}
                    />
                </div>
            </div>
            <CImage src={currentImg}
                    alt={'menu'}
                    width={"auto"}
                    height={"100%"}
            />
        </div>
    );
};

export default MenuBlock;