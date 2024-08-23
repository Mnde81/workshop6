
import sectionTwoImage1 from './img/1.png';
import sectionTwoImage2 from './img/2.png';
import sectionTwoImage3 from './img/3.png';
import sectionTwoImage4 from './img/4.png';
import sectionTwoImage5 from './img/5.png';
import SectionTwoCard from './components/SectionTwoCard'
import SectionTwoTrend from './components/SectionTwoTrend';

function App() {
  

  return (
    <>
   

    <div className='sectionTwoTrending'>
      <SectionTwoTrend />
    </div>    
    <div className="sectionTwoCards">
      <SectionTwoCard img={sectionTwoImage1}/>
      <SectionTwoCard img={sectionTwoImage2}/>
      <SectionTwoCard img={sectionTwoImage3}/>
      <SectionTwoCard img={sectionTwoImage4}/>
      <SectionTwoCard img={sectionTwoImage5}/>
    </div>

         
    </>
  )
}

export default App
