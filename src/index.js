import React from 'react';
import 'jquery';

import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({value}) => (
  <th scope="col">{value}</th>
);

const Head = (props) => (
  <thead>
    <tr>
      {props.children}
    </tr>
  </thead>
);

const Row = ({data, columns}) => (
  <tr>
    {columns.map((column) => (
      <td>{data[column.fieldName]}</td>
    ))}
  </tr>
);

const Body = (props) => (
  <tbody>
  {props.children}
  </tbody>
);

class ReactUserDataTable extends React.Component {
  render() {
    return (
      <div className="container">
        <table style={this.props.style} className="table table-striped">
          <Head>
            {this.props.columns.map((column) => (
              <Header value={column.header} />
            ))}
          </Head>
          <Body>
            {this.props.data.map((value) => (
              <Row data={value} columns={this.props.columns} />
            ))}
          </Body>
        </table>
      </div>
    );
  }
}
export default ReactUserDataTable;