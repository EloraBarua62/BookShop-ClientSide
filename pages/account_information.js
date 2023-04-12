import React, { useEffect, useState } from 'react';

const AccountInformation = () => {
    const [userInfo , setUserInfo] = useState([{nothing:'nothing'}]);
    
    const data = [...userInfo];
    // let user={};

    useEffect(() => {
        data.push(JSON.parse(localStorage.getItem('user_info')));
        console.log(data);
        userInfo[0] = data[1];
        // setUserInfo(data);
        console.log(userInfo);
        
    },[])

    const handleUpdateUserInfo = (data) => {
        // event.preventDefault();
        console.log(data);
    }
    
    
    return (
        <div>
            Update account information

            <form onSubmit={handleUpdateUserInfo}>
                <input type="text" defaultValue={userInfo[0]?.address1} />
                <input type="text" defaultValue={userInfo[0]?.address2} />
                <input type="text" defaultValue={userInfo[0]?.city} />
                <input type="text" defaultValue={userInfo[0]?.state} />
                <input type="text" defaultValue={userInfo[0]?.zipCode} />
                <input type="text" defaultValue={userInfo[0]?.country} />
                <input type="text" defaultValue={userInfo[0]?.phone} />
                <input type="file" defaultValue={userInfo[0]?.image} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AccountInformation;