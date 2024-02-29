import  { useState } from 'react';

const Faqs = () => {
  const [isOpen, setIsOpen] = useState(Array(5).fill(false)); // Array with initial state for each FAQ
  isOpen[0] = true;
  const toggleAccordion = (index:number) => {
    const newIsOpen = [...isOpen]; // Copy the state array
    newIsOpen[index] = !newIsOpen[index]; // Toggle the state of the clicked FAQ
    setIsOpen(newIsOpen); // Update the state
  };

  const faqsData = [
    {
      question: "What type of property is available for rent?",
      answer:
        "The property available for rent is a [insert property details: e.g., 2-bedroom apartment, 4-bedroom house, commercial space, etc"
    },
    {
      question: "What type of property is available for rent?",
      answer:
        "The property available for rent is a [insert property details: e.g., 2-bedroom apartment, 4-bedroom house, commercial space, etc"
    },
    {
      question: "What type of property is available for rent?",
      answer:
        "The property available for rent is a [insert property details: e.g., 2-bedroom apartment, 4-bedroom house, commercial space, etc"
    },
    {
      question: "What type of property is available for rent?",
      answer:
        "The property available for rent is a [insert property details: e.g., 2-bedroom apartment, 4-bedroom house, commercial space, etc"
    },
   
  ];

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl padding-x py-10 flex flex-col justify-center items-center gap-5">
        <h2 className="text-2xl font-bold md:text-3xl text-black text-center border-b-2 border-[#0351FC] pb-2 w-full md:w-max ">
          Frequently Asked Questions
        </h2>


            <div className="mt-12 space-y-8">
              {faqsData.map((faq, index) => (
                <div className="w-full border-2 border-gray-100 rounded-lg dark:border-gray-700" key={index}>
                  <button
                    className="flex items-center justify-between w-full p-8"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      {faq.question}
                    </h1>

                    <span className="text-gray-400 bg-gray-200 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-6 h-6 transform ${isOpen[index] ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>

                  {isOpen[index] && (
                    <>
                      <hr className="border-gray-200 dark:border-gray-700" />
                      <p className="p-8 text-sm text-gray-500 dark:text-gray-300">{faq.answer}</p>
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
