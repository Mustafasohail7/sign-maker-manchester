import { AiFillCaretDown } from 'react-icons/ai';

const FAQItem = ({activeIndex,setActiveIndex,item}) => {

    //change active index
    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

  return (
    <div className='faq-item' 
    key={item.id}
    onClick={() => toggleQuestion(item.id)}
    >
        <div className='faq-question-flex'>
            <div className='faq-question'>{item.question}</div>
                <AiFillCaretDown size={30} className={`caret-btn ${activeIndex === item.id ? 'rotate' : 'normal'}`}/>
            </div>
        <div 
        className={`faq-answer ${activeIndex === item.id ? 'show' : ''}`}
        >
            {item.answer}
        </div>
    </div>
  )
}

export default FAQItem
