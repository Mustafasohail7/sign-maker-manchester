import {useState} from 'react';


//stylesheet 
import '../../styles/FAQ.css';

//data
import FAQData from '../../data/FAQ';
import FAQItem from './FAQItem';

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(-1);

    return (
        <div className="faq-container">
            <h1 className="faq-heading">FAQs</h1>
            <div className='faq-flex'>
                {FAQData.map((item) => (
                    <FAQItem key={item.id} activeIndex={activeIndex} setActiveIndex={setActiveIndex} item={item} />
                ))}
            </div>
        </div>
    )
}

export default FAQ
