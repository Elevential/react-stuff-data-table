import React from 'react';
import shortId from 'shortid';
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
      <td key={shortId.generate()}>{data[column.fieldName]}</td>
    ))}
  </tr>
);

const Body = (props) => (
  <tbody>
    {props.children}
  </tbody>
);

class ReactStuffDataTable extends React.Component {
  render() {
    return (
      <div className="container">
        <table style={this.props.style} className="table table-striped">
          <Head>
            {this.props.columns.map((column) => (
              <Header key={shortId.generate()} value={column.header} />
            ))}
          </Head>
          <Body>
            {this.props.data.map((value) => (
              <Row key={shortId.generate()} data={value} columns={this.props.columns} />
            ))}
          </Body>
        </table>
      </div>
    );
  }
}
export default ReactStuffDataTable;