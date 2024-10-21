import React, { useState } from 'react';

const Dropdown = ({ dataDrop, label }) => { 
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState("London City Airport (LCY)");

    const handleSelectLocation = (location) => {
        setSelectedLocation(location.name);
        setIsOpen(false);
    };

    return (
        <div className="search-item search-from">
            <div className="search-icon">
                <span className="item-icon icon-from"></span>
            </div>
            <div className="search-inputs">
                <label className="text-14 color-grey">{label}</label>
                <input
                    className="search-input dropdown-location"
                    type="text"
                    placeholder=""
                    value={selectedLocation}
                    readOnly
                    onClick={() => setIsOpen(!isOpen)} 
                />
                <div className={`box-dropdown-location ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="list-locations">
                        {dataDrop.map((location, index) => (
                            <div className="item-location" key={index} onClick={() => handleSelectLocation(location)}>
                                <div className="location-icon">
                                    <img src={location.icon} alt="luxride" />
                                </div>
                                <div className="location-info">
                                    <h6 className="text-16-medium color-text title-location">
                                        {location.name}
                                    </h6>
                                    <p className="text-14 color-grey">{location.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
