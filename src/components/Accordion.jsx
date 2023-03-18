import { useState } from 'react';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const accordionData = [
    {
      title: 'Section 1',
      content: 'This is the content for section 1',
    },
    {
      title: 'Section 2',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit explicabo quibusdam, et aspernatur similique, voluptas nobis, incidunt dignissimos accusamus distinctio repudiandae fugit aliquam nulla',
    },
    {
      title: 'Section 3',
      content: 'This is the content for section 3',
    },
  ];

  return (
    <div className='mx-7 py-20'>
        <div className=" mx-auto grid md:grid-cols-2 gap-10">
            <div className='text-center md:text-start'>
                <h1 className='pb-2 font-extrabold text-9xl'>FAQ</h1>
                <p className='text-sm md:mr-16'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit explicabo quibusdam, et aspernatur similique, voluptas nobis, incidunt dignissimos accusamus distinctio repudiandae fugit aliquam nulla totam. Debitis error assumenda mollitia dolorum!</p>
            </div>
        <div>
        {accordionData.map((section, index) => (
        <div
          key={index}
          className="border-b-2 overflow-hidden mb-4"
        >
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h1 className="font-bold text-xl">{section.title}</h1>
            <svg
              className={`w-6 h-6 transition-transform transform ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
              />
            </svg>
          </div>
          {activeIndex === index && (
            <div className="px-4 pb-4">{section.content}</div>
          )}
        </div>
      ))}
        </div>
      
    </div>
    </div>
  );
}

export default Accordion;