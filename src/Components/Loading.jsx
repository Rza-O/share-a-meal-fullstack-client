import React from 'react';
import { Triangle } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <Triangle visible={true}
                height="250"
                width="250"
                color="#244034"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass="" />
        </div>
    );
};

export default Loading;