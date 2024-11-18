import './RightBar.scss';
import User from '../../Images/User.png'

const RightBar = () =>{
    return(
        <div className='rightBar'>
            <div className='container'>
                {/*first item*/}
                <div className='item'>
                    <span>Suggestions for you</span>
                    <div className='user'>
                        <div className='userInfo'>
                            <img src={User} alt='' className='image' />
                            <span>Username</span>
                        </div>
                        <div className='buttons'>
                        <button className='flwbtn'>Follow</button>
                            <button className='clrbtn'>Dismiss</button>
                        </div>
                    </div>

                    <div className='user'>
                        <div className='userInfo'>
                            <img src={User} alt='' className='image' />
                            <span>Username 2</span>
                        </div>
                        <div className='buttons'>
                            <button className='flwbtn'>Follow</button>
                            <button className='clrbtn'>Dismiss</button>
                        </div>
                    </div>
                </div>


                {/*second item*/}
                <div className='item'>
                    <span>Latest Activities</span>
                    <div className='user'>
                        <div className='userInfo'>
                            <img src={User} alt='' className='image' />
                            <p>
                             <span>Username</span>
                             Changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>

                    <div className='user'>
                        <div className='userInfo'>
                            <img src={User} alt='' className='image' />
                            <p>
                             <span>Username</span>
                             Changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>

                    <div className='user'>
                        <div className='userInfo'>
                            <img src={User} alt='' className='image' />
                            <p>
                             <span>Username</span>
                             Changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>

                    <div className='user'>
                        <div className='userInfo'>
                            <img src={User} alt='' className='image' />
                            <p>
                             <span>Username</span>
                             Changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                </div>

                {/*thrid item*/}
                <div className='item'>
                    <span>Online Friends</span>
                    <div className='user'>
                        <div className='userInfo'>
                            <img src={User} alt='' className='image' />
                            <div className ='online'/>
                             <span>Username</span>
                        </div>
                    </div>
                    <div className='user'>
                        <div className='userInfo'>
                            <img src={User} alt='' className='image' />
                            <div className ='online'/>
                             <span>Username</span>
                        </div>
                    </div>
                    <div className='user'>
                        <div className='userInfo'>
                            <img src={User} alt='' className='image' />
                            <div className ='online'/>
                             <span>Username</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar