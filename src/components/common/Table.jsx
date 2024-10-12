const Table = ({ props, data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          {
            !!props.length && props.map(({ label }, index) => (
              <th key={index}>{label}</th>   
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.length
            ? data.map((data) => (
              <tr key={data.seq}>
                <td><input type="checkbox" /></td>
                {
                  !!props.length && props.map(({ key }, index) => (
                    <td key={index}>
                      {
                        props.find((prop) => prop.key === key)?.component ?
                          props.find((prop) => prop.key === key)?.component(data) : data[key]
                      }
                    </td>
                  ))
                }
              </tr>
            )) : (
              <tr className="empty"><td colSpan={props.length}>존재하지 않습니다.</td></tr>
            )
        }
      </tbody>
    </table>
  )
};

export default Table;