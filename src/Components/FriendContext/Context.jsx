import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


// eslint-disable-next-line react-refresh/only-export-components
export const friendContext = createContext();

const Context = ({ children }) => {

    const [button, setButton] = useState([]);
    const handleButtons = (friend, value) => {
        const isExist = button.find(f => f.id === friend.id && f.action === value);
        if (isExist) {
            toast.warn(`${value} with ${friend.name} already exist`)

        }  else {
            toast.success(`${friend.name} added for ${value}`)
            const newEntry = {...friend, action: value}
            setButton([...button, newEntry]);
        }


    }

    const data = {
        handleButtons,
        button,
        setButton,

    }

    return (
        <div>
            <friendContext.Provider value={data}>
                {children}
            </friendContext.Provider>

        </div>
    );
};

export default Context;