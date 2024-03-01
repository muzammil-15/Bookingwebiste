import  { useState } from 'react';

const Faqs = () => {
  const [isOpen, setIsOpen] = useState(Array(5).fill(false)); // Array with initial state for each FAQ
  const toggleAccordion = (index:number) => {
    const newIsOpen = [...isOpen]; // Copy the state array
    if (index === 0 && newIsOpen[index] === false) {
      // Special case for the first question
      newIsOpen.fill(false); // Close all other questions
    }
    newIsOpen[index] = !newIsOpen[index]; // Toggle the state of the clicked FAQ
    setIsOpen(newIsOpen); // Update the state
  };

  const faqsData = [
    {
      question: 'What type of property is available for rent?',
      answer:
        'The property available for rent is a [insert property details: e.g., 2-bedroom apartment, 4-bedroom house, commercial space, etc',
    },
    {
      question: 'What type of property is available for rent?',
      answer:
        'The property available for rent is a [insert property details: e.g., 2-bedroom apartment, 4-bedroom house, commercial space, etc',
    },
    {
      question: 'What type of property is available for rent?',
      answer:
        'The property available for rent is a [insert property details: e.g., 2-bedroom apartment, 4-bedroom house, commercial space, etc',
    },
    {
      question: 'What type of property is available for rent?',
      answer:
        'The property available for rent is a [insert property details: e.g., 2-bedroom apartment, 4-bedroom house, commercial space, etc',
    },
  ];

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl padding-x py-10 flex flex-col justify-center items-center gap-5">
        <h2 className="text-2xl font-bold md:text-3xl text-black text-center border-b-2 border-[#0351FC] pb-2 w-full md:w-max ">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-8 w-full">
          {faqsData.map((faq, index) => (
            <div className="w-full border-2 border-gray-100 rounded-lg dark:border-gray-700" key={index}>
              <button
                className="flex items-center justify-between w-full p-3"
                onClick={() => toggleAccordion(index)}
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  {faq.question}
                </h1>

                <div className="flex items-center">
                  <button
                    className="border border-gray-800 text-xl text-black rounded-full w-7 h-7 flex justify-center items-center p-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleAccordion(index);
                    }}
                  >
                    {isOpen[index] ? '-' : '+'}
                  </button>
                  
                </div>
              </button>

              {isOpen[index] && (
                <>
                  <p className={`p-3 text-sm text-gray-500 dark:text-gray-300 ${isOpen[index] ? 'fade-in' : 'fade-out'}`}>
                    {faq.answer}
                  </p>
                  <hr className="border-gray-200 dark:border-gray-700" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
