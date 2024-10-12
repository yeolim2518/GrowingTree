const GridView = ({ props, data }) => {
  return (
    <div className="grid-view">
      {
        props.map((prop, index) => (
          <div key={index}>
            <label>{prop.label}</label>
            <div>
              {
                prop.component ?
                  prop.component(data) : data[prop.key]
              }
            </div>
          </div>    
        ))
      }
    </div>
  )
};

export default GridView;
