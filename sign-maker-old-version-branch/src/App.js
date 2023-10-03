import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Element } from 'react-scroll'

//stylesheet
import './styles/App.css'


//components
import Header from './components/Header'
import TextDisplay from './components/TextDisplay'
import TagLine2 from './components/TagLine2'
import VideoPlayer from './components/VideoPlayer'
import ProcessModelMain from './components/ProcessModelMain'
import PortfolioGrid from './components/Portfolio_Grid/PortfolioGrid'
import FeatureGrid from './components/Feature_Grid/FeatureGrid'
import TagLine3 from './components/TagLine3'
import DescriptionText from './components/Description_Text/DescriptionText'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import SocialLinks from './components/Social_Links/SocialLinks'
// import ChatHead from './components/ChatHead' 
import HomeIcon from './components/HomeIcon'

function App() {
  
  return (
    <ChakraProvider theme={extendTheme({
      styles: {
        global: {
          body: {
            bg: 'white',
          }
        }
      },
    })}>
      <SocialLinks/>
      {/* <ChatHead/> */}
      <HomeIcon/>
      <Element name='home'>
        <Header/>
      </Element>
      <TextDisplay />
      <TagLine2/>
      <VideoPlayer/>
      <ProcessModelMain />
      <Element name='portfolio'>
        <PortfolioGrid/>
      </Element>
      <Element name='features'>
        <FeatureGrid/>
      </Element>
      {/* <div className="static-bg-1"/> */}
      <Element name='description'>
        <TagLine3/>
        <DescriptionText/>
      </Element>
      <div className="static-bg-2"/>
      <Element name='faq'>
        <FAQ/>
      </Element>
      <Element name='about'>
        <Footer/>
      </Element>
    </ChakraProvider>
  );
}

export default App;
