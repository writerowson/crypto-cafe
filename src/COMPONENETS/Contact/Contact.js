import React from 'react';

const Contact = () => {
    return (
        <section className='px-4 pt-20 pb-24 mx-auto max-w-7w1 md:px-2'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-mano text-xl text-center md:text-3xl'>Contact Us , Our office address down below</h1>
                <div className='flex justify-center items-center'>
                    <button className='py1 px-3 text-white mt-3 mx-1 bg-cyan-600 rounded-full w-auto sm-mb-0 '> BD Address</button>
                    <button className='py1 px-3 text-white mt-3 mx-1 bg-cyan-600 rounded-full w-auto sm-mb-0'> US Address</button>


                </div>
            </div>
        </section>
    );
};

export default Contact;