import { useState } from 'react';
import { Mail, Linkedin } from 'lucide-react';
import '../Profile.css';

const Profile = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className={`profile-card ${flipped ? 'flipped' : ''}`} 
      onClick={() => setFlipped(!flipped)}
    >
      {!flipped ? (
        <div className="profile-front">
          <img 
            src="/image.png" 
            alt="Profile" 
            className="profile-image"
          />
          <div className="profile-text">
            <p>Hi, This is Shane and I am an aspiring software developer</p>
          </div>
          <div className="social-links">
            <a className='links' href='https://mail.google.com/mail/?view=cm&fs=1&to=shanegmain@gmail.com' target="_blank" rel="noopener noreferrer"><Mail className="social-icon" /></a>
            <a className='links' href='https://www.linkedin.com/in/shane-joseph-79381a323/' target="_blank" rel="noopener noreferrer"><Linkedin className="social-icon" /></a>
          </div>
        </div>
      ) : (
        <div className="profile-back">
        <div className="profile-back-content">
          <h2>Shane Joseph</h2>
          <p><strong>College:</strong>Newton School of Technology</p>
          <p><strong>Technologies:</strong> JavaScript, React, Python, OpenCV, Mediapipe</p>
          <p><strong>Age:</strong> 19</p>
          <p><strong>Hobbies:</strong> Coding, Football, Gaming</p>
          <p><strong>Projects:</strong> Hand tracker, Anime search app,Netflix clone</p>
        </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
