import style from './SectionTwoTrend.module.css';

function SectionTwoTrend() {
    return (
        <>
        <h2>Trending Now</h2>
        <div className={style.trendingBoxContainer}>
            <p className={style.trendingBox}>Lithuania <span>&#10597;</span></p>
            <p className={style.trendingBox}>Movies <span>&#10597;</span></p>
        </div>
        </>
    )
  
    

}


export default SectionTwoTrend;