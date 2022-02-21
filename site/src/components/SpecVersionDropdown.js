import React, { useState } from 'react'; 

export default function SpecVersionDropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
      <div className='spec_version_dropdown'> 
        <div className='DropDownContainer'>
            <div className='DropDownHeader' onClick={toggling}>
                {selectedOption || props.default}
            </div>
            {isOpen && (
                <div className='DropDownListContainer'>
                    <ul className='DropDownList'>
                        {props.options.map(option => (
                        <li className='ListItem' onClick={onOptionClicked(option.title)} key={Math.random()}>
                            <a href={option.link}>{option.title}</a>
                        </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
      </div>
  );
}
