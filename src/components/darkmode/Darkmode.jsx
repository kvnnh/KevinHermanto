import './Darkmode.css';

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
};

const Darkmode = () => {
  return (
    <>
      <div className="wrapper">
        <label className="switch">
          <input type="checkbox" onChange={switchTheme} />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
};

export default Darkmode;
