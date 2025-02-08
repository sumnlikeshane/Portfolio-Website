
import '../Links.css';

const Links = () => {
  return (
    <div className="links-container">
      <a href="https://github.com/sumnlikeshane" className="link-card github" target="_blank" rel="noopener noreferrer">
        <img src="/GitHub Icon.png" className='github-icon'></img>
        <div className="text-container">
          <p className='links-text' id="main-text">GIT</p>
          <p className='links-text' id="sub-text">HUB</p>
        </div>
        
      </a>
      <a href="https://leetcode.com/u/sumnlikeshane/" className="link-card leetcode" target="_blank" rel="noopener noreferrer">
        <img src="/leetcode.png" className='leetcode-icon'></img>
        <div className="text-container">
          <p className='links-text' id="main-text">LEET</p>
          <p className='links-text' id="sub-text">CODE</p>
        </div>
      </a>
    </div>
  );
};

export default Links;