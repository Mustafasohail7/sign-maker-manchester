import { AiOutlineDesktop, AiOutlineFontColors } from 'react-icons/ai'
import { BsPalette, BsBodyText, BsFillCartCheckFill } from 'react-icons/bs'

const size = 40

const processData = [
    {
      id: 1,
      image: <AiOutlineDesktop size={size}/>,
      title: 'Step 1:',
      text: 'Enter the text you want on your sign',
    },
    {
      id: 2,
      title: 'Step 2:',
      image: <BsPalette size={size}/>,
      text: 'Choose and color',
    },
    {
      id: 3,
      title: 'Step 3:',
      image: <AiOutlineFontColors size={size}/>,
      text: 'Choose a size',
    },
    {
      id: 4,
      title: 'Step 4:',
      image: <BsBodyText size={size}/>,
      text: 'Choose a backboard style',
    },
    {
      id: 5,
      title: 'Step 5:',
      image: <BsFillCartCheckFill size={size}/>,
      text: 'Add to your cart and checkout',
    },
    // Add more process data as needed
  ];

export default processData