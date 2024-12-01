import PropTypes from "prop-types";

const WorkItems = ({item}) => {
  
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img"/>
      <h3 className="work__title">{item.title}</h3>
      <p className="work__info">{item.info}</p>
      <a href={item.link} className="work__button" target="_blank">
        <span className="more__info">See more</span> <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

WorkItems.propTypes = {
  item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
  }).isRequired,
};

export default WorkItems;
