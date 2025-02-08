import { Mail, Linkedin } from 'lucide-react';
import '../Profile.css';

const Profile = () => {
  return (
    <div className="profile-card">
      <img 
        src="/image.png" 
        alt="Profile" 
        className="profile-image"
      />
      <div className="profile-text">
        <p>Hi, This is Shane and i am an aspiring software developer</p>
      </div>
      <div className="social-links">
        <a className='links' href='https://mail.google.com/mail/?view=cm&fs=1&to=shanegmain@gmail.com' target="_blank" rel="noopener noreferrer"><Mail className="social-icon" /></a>
        <a className='links' href='https://www.linkedin.com/in/shane-joseph-79381a323/' target="_blank" rel="noopener noreferrer"><Linkedin className="social-icon" /></a>
      </div>
    </div>
  );
}

export default Profile