import { useRouter } from 'next/router';
import React from 'react';

const SecondHomePage = () => {
    
    const router = useRouter();
    const handleLogout = () => {
      localStorage.removeItem("user_info");
      router.push("/");
    };
    
    return (
        <div>
            This is landing page
            <button onClick={handleLogout}>Log out</button>
        </div>
    );
};

export default SecondHomePage;