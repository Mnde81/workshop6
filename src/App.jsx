
import Footer from './components/footer/Footer';
import { LoginSection } from './components/loginSection/LoginSection';
import { Questions } from './components/question/Questions';
import ReasonsToJoin from './components/reason/ReasonToJoin';
import SectionTwoCard from './components/sectionTwo/SectionTwoCard'
import SectionTwoTrend from './components/sectionTwo/SectionTwoTrend';

function App() {
  

  return (
    <>
     <LoginSection />      
      <SectionTwoTrend />    
      <SectionTwoCard />  
      <ReasonsToJoin />
      <Questions />
      <Footer />      
    </>
  )
}

export default App
