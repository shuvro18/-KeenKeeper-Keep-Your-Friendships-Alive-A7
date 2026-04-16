import React from 'react';
import logoXl from "../../assets/logo-xl.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import X from "../../assets/twitter.png"

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='text-white w-9/12 mx-auto'>
                <div className='space-y-6'>
                    <img className='pt-20 mx-auto' src={logoXl} alt="" />
                    <p className='text-center text-sm opacity-60 '>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <p className='text-center'>Social Links</p>
                    <div className='flex justify-center items-center gap-3 pb-10'>
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={X} alt="" />
                    </div>
                    <div className='opacity-50 text-sm flex  gap-7 flex-col md:flex-row justify-between'>
                        <p>© 2026 KeenKeeper. All rights reserved.</p>
                        <div className='flex gap-7 pb-8'>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <p>Cookies</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;