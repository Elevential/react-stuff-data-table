import React from 'react';
import ReactStuffDataTable from './index';
import renderer from 'react-test-renderer';

it('ReactStuffDataTable - renders correctly', () => {
  const tree = renderer.create(

    <ReactStuffDataTable
      columns={[
        {
          header: "ID",
          fieldName: "id"
        },
        {
          header: "First Name",
          fieldName: "firstName"
        },
        {
          header: "Last Name",
          fieldName: "lastName"
        },
        {
          header: "Handle",
          fieldName: "handle"
        },
        {
          header: "Age",
          fieldName: "age"
        }
      ]}
      data={[
        {
          id: 1,
          lastName: "Azedias de Melo",
          handle: "2",
          age: "19",
          firstName: "Yago Luis"
        },
        {
          id: 2,
          firstName: "Yago Luis",
          lastName: "Azedias de Melo",
          age: "19",
          handle: "1"
        },
        {
          id: 3,
          firstName: "Yago Luis",
          lastName: "Azedias de Melo",
          age: "19",
          handle: "3"
        },
        {
          id: 4,
          firstName: "Yago Luis",
          lastName: "Azedias de Melo",
          age: "19",
          handle: "3"
        }
      ]}
      style={{marginTop: '50px'}} />

  ).toJSON();

  expect(tree).toMatchSnapshot();

});