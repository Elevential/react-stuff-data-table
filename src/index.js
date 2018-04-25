import React from 'react';
import shortId from 'shortid';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const Header = ({value}) => (
  <th scope="col">{value}</th>
);

const Head = (props) => (
  <thead style={{position: ''}}>
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
  <tbody style={{height: props.height}}>
  {props.children}
  </tbody>
);

class ReactStuffSOuDataTable extends React.Component {
  render() {
    return (
      <div className="container">
          <table style={this.props.style} className="table table-striped">
            <Head>
              {this.props.columns.map((column) => (
                <Header key={shortId.generate()} value={column.header} />
              ))}
            </Head>
            <Body height={this.props.height}>
            {this.props.data.map((value) => (
              <Row key={shortId.generate()} data={value} columns={this.props.columns} />
            ))}
            </Body>
          </table>
        </div>
    );
  }
}
export default ReactStuffSOuDataTable;