import React from 'react';
import "../Styling/Features.css";

const Features = () => {
  return (

    <div id='features'>
      
      <div className="profile">

        <img src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" alt="" />

        <div className="profileDetails">
          <p className='profileName'>Netra Hindocha</p>
          <p className='profileRole'>Member</p>
        </div>

      </div>

      <div className="premium">
        <div className="gift">
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/premium-black-matte-and-gold-gift-box-4816106-4014635@0.png?w=0&h=700&f=png" alt="" />
        </div>
        <p>Wanna add more features? Become a Premium Member</p>
        <button className='upgrade'>Upgrade</button>
      </div>

      <div className="starredArticles">
        
        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=1170&q=80" alt="" />
        <div className="topic">Why You Need AI Robot For Your Office and How It Works?</div>
        <button>Starred Articles</button>
      </div>

    </div>
  )
}

export default Features