const ContentOverview = (props) => {
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ContentOverview;
