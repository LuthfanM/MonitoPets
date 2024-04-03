import PromotionalSection from '@/containers/home/PromotionalSection';
import React from 'react';
import SearchBar from '../Inputs/SearchBar';
import CustomButton from '../Buttons/CustomButton';
import { FaChevronDown } from 'react-icons/fa';

const Header = ({ extended }: { extended?: boolean }) => {

    const headerContent = (
        <header>
            <nav>
                <div style={{ display: 'flex', alignItems: 'center', paddingTop: '30px', paddingBottom: '30px' }}>
                    <div style={{ gap: '36px', display: 'flex', alignItems: 'center', marginLeft: '130px', }}>
                        <div style={{ gap: '48px' }}>
                            <img src="/images/logo.svg" alt="Logo" style={{ height: '40px' }} />
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', marginRight: '20px', gap: '48px', fontWeight: 'bold' }}>
                            <li >Home</li>
                            <li >About</li>
                            <li >Services</li>
                            <li >Contact</li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '130px', }}>
                        <SearchBar />
                        <CustomButton text='Join the community' onClick={() => console.log("clicked")} />
                        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginRight: '130px', gap: '4px' }}>
                            <img src="/images/vnd_frame.svg" alt="vnd" style={{ height: '21px', width: '21px' }} />
                            <span>VND</span>
                            <FaChevronDown />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )

    return (
        <div className='wrapperHeader'>
            {headerContent}
            {extended && <PromotionalSection />}
        </div>
    );
};

export default Header;
