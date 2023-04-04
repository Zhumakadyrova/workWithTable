function Example1(props) {
  const output = props.items.map(function (item) {
    return (
      <tr>
        <td>{item}</td>
        <td>{item.length}</td>
        <td>{item.toUpperCase()}</td>
      </tr>
    );
  });

  return (
    <table border="1">
      <tr>
        <th>Name</th>
        <th>Length </th>
        <th>Uppercase</th>
      </tr>
      {output}
    </table>
  );
}
export default Example1;
