import './LeftBar.scss';
import Friends from'../../Images/Friends.png'
import Group from'../../Images/Group.png'
import User from'../../Images/User.png'
import Marketplace from'../../Images/Marketplace.png'
import Watch from'../../Images/Watch.png'
import Memories from'../../Images/Memories.png'
import Gallery from'../../Images/Gallery.png'

const LeftBar = () =>{
    return(
        <div className='leftbar'>
            <div className='container'>
                <div className='menu'>
                    <div className='user' >
                        <img src={User} alt='image' className='image' />
                        <span> Username</span>
                    </div>

                    <div className='item'>
                        <img src={Friends} className='itemimage'/>
                        <span className='span'>Friends</span>
                    </div>

                    <div className='item'>
                        <img src={Group} className='itemimage'/>
                        <span className='span'>Groups</span>
                    </div>

                    <div className='item'>
                        <img src={Marketplace} className='itemimage'/>
                        <span className='span'>Marketplace</span>
                    </div>

                    <div className='item'>
                        <img src={Watch} className='itemimage'/>
                        <span className='span'>Watch</span>
                    </div>

                    <div className='item'>
                        <img src={Memories} className='itemimage'/>
                        <span className='span'>Memories</span>
                    </div>
                </div>
                <hr className='hr'/>
                <div className='menu'>
                    <span>Your Shortcuts</span>
                    <div className='item'>
                        <img src={Friends} className='itemimage'/>
                        <span className='span'>Friends</span>
                    </div>

                    <div className='item'>
                        <img src={Group} className='itemimage'/>
                        <span className='span'>Groups</span>
                    </div>

                    <div className='item'>
                        <img src={Gallery} className='itemimage'/>
                        <span className='span'>Gallery</span>
                    </div>
                </div>

                <hr className='hr'/>
                <div className='menu'>
                    <span>Others</span>
                    <div className='item'>
                        <img src={Friends} className='itemimage'/>
                        <span className='span'>Friends</span>
                    </div>

                    <div className='item'>
                        <img src={Group} className='itemimage'/>
                        <span className='span'>Groups</span>
                    </div>

                    <div className='item'>
                        <img src={Gallery} className='itemimage'/>
                        <span className='span'>Gallery</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar