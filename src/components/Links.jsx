
import '../Links.css';

const Links = () => {
  return (
    <div className="links-container">
      <a href="https://github.com/sumnlikeshane" className="link-card github" target="_blank" rel="noopener noreferrer">
        <img src="/GitHub Icon.png" className='github-icon'></img>
        <p className='links-text'>GIT HUB</p>
      </a>
      <a href="https://leetcode.com/u/sumnlikeshane/" className="link-card leetcode" target="_blank" rel="noopener noreferrer">
        <img src="/leetcode.png" className='leetcode-icon'></img>
        <p className='links-text'>LEET CODE</p>
      </a>
    </div>
  );
};

export default Links;