import { useRouter } from 'next/router';
import React from 'react';

const Category= () => {

    const router = useRouter();
    const {category} = router.query;
    console.log(category)
    return (
        <div>
            {/* {categoryList} */}
        </div>
    );
};

export default Category;