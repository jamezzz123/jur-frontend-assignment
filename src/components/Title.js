const Title = ({ title, subTitle }) => (
  <div className="row text-center my-4">
    <div className="col">
      <h1>{title}</h1>
      <p className="lead bg-black-50">{subTitle}</p>
    </div>
  </div>
);

export default Title;
