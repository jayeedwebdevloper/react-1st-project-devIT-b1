import React from 'react';
import { GoPlus } from 'react-icons/go';

const Accordion = ({ items }) => {
    const [activeItem, setActiveItem] = React.useState(null);

     const handleClicks = (index) => {
        setActiveItem(
            (prevIndex) => (prevIndex == index ? null : index)
        )
    }

    return (
        <div className='accordion'>
            {
                items?.map((item, i) => (
                    <div key={i} className={`accordion-item ${i == activeItem ? 'active' : ''}`}>
                        <div role='button' className='accordion-title' onClick={() => handleClicks(i) }>
                            <h3>{items?.title}</h3>
                            <GoPlus className={`size-5 transition-all duration-300 ${i == activeItem ? 'rotate-45' :'' }`} />
                        </div>
                        <div className="accordion-content">
                            {
                             i == activeItem && <p className='text-md leading-[1.4] text-slate-600'>{item?.content }</p>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Accordion;