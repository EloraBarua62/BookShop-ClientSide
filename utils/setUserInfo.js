import React, { useState } from 'react';

export const SetUserInfo = (userData) => {
    const [userInformation, setUserInformation] = useState({});
    setUserInformation(userData);
    return (
        <div>
            
        </div>
    );
};



