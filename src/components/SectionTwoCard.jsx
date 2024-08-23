import style from './SectionTwoCard.module.css';

function SectionTwoCard(props) {
    return (
        <>
        <img className={style.cardImage} src={props.img} alt="image"/>
        </>
    )
}

export default SectionTwoCard;