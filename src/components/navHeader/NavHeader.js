export const NavHeader = () => {
    return (
        <>
            <div className='header__wrapper'>
                <div className='header__top' data-hj-hide>
                    <ul className='header__menu'>
                        <li>
                            <a href="http://localhost:3000/">Home</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/">Tour</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/">Blog</a>
                        </li>
                    </ul>
                    <div className='header__logo' data-hj-hide>
                    </div>
                    <div>
                        <button className='btn__secondary'>Sign up</button>
                        <button className='btn__primary'>Login</button>
                    </div>
                </div>
                <div className='header__notification'>
                    <p>Visually collaborate with anyone, anywhere.</p>
                    <button className='btn__primary--promo'>Sign up for free</button>
                </div>
            </div>
        </>
    );
}