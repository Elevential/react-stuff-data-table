# React stuff data table
A simple react component to show data in table formart

# Usage
```javascript
<ReactUserDataTable height='500px'
    
    columns={[
        {
            header: "Id",
            fieldName: "id"
        },
        {
            header: "First Name",
            fieldName: "firstName"
        }
    ]}
    data={[
        {
            id: 1,
            firstName: "Lebron James"
        },
        {
            id: 2,
            firstName: "Yago Luis"
        }
    ]}
    style={{marginTop: '50px'}} />
```
