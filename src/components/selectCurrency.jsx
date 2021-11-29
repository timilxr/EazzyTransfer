import React, { useEffect, useState } from "react";

const SelectCurrency = ({ label, message, options, selected, setValue, name, ...props }) => {
    const [selectedOption, setSelectedOption] = useState(message ? null : (selected ? selected : options[0]));
    useEffect(() => {
        if (setValue) {
            setValue({ [name]: selectedOption })
        }
    }, [selectedOption])

    return (
        <>
                {label && <label className="modal_input_labels" htmlFor="exampleInputEmail1">{label}</label>}
                <div className="dropdown modal_inputs p-0 h-100">
                    <a className="btn dropdown-toggle p-0 px-1 h-100 d-flex justify-content-between align-items-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {message ?
                            <div className="" href="#">{message}</div>
                            :
                            <div className="" href="#"><img src={selectedOption.img} className="modal_input_images" alt="" /> {selectedOption.text}</div>
                        }
                    </a>

                    <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuLink">
                        {options && options.map((option, index) =>
                            <div key={index} onClick={() => setSelectedOption(option) } style={{ cursor: 'pointer' }} className="dropdown-item p-1 py-2" href="#"><img src={option.img} className="modal_input_images" alt="" /> {option.text}</div>
                        )}
                        {/* <div className="dropdown-item p-1" href="#"><img src={aus} className="modal_input_images" alt="" /> GBP</div>
                    <div className="dropdown-item p-1" href="#"><img src={aus} className="modal_input_images" alt="" /> CAD</div> */}
                    </div>
                </div>
                {/* <input type="email" className="form-control modal_inputs" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" /> */}
        </>
    )
}

export default SelectCurrency;