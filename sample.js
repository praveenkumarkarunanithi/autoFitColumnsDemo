var virtualData = [];
var names = ['hardire', 'abramjo01', 'aubucch01', 'Hook', 'Rumpelstiltskin', 'Belle', 'Emma', 'Regina', 'Aurora', 'Elsa', 'Anna', 'Snow White', 'Prince Charming', 'Cora', 'Zelena', 'August', 'Mulan', 'Graham', 'Discord', 'Will', 'Robin Hood', 'Jiminy Cricket', 'Henry', 'Neal', 'Red', 'Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron', 'Aaron-James', 'Aarron', 'Aaryan', 'Aaryn', 'Aayan', 'Aazaan', 'Abaan', 'Abbas', 'Abdallah', 'Abdalroof', 'Abdihakim', 'Abdirahman', 'Abdisalam', 'Abdul', 'Abdul-Aziz', 'Abdulbasir', 'Abdulkadir', 'Abdulkarem', 'Abdulkhader', 'Abdullah', 'Abdul-Majeed', 'Abdulmalik', 'Abdul-Rehman', 'Abdur', 'Abdurraheem', 'Abdur-Rahman', 'Abdur-Rehmaan', 'Abel', 'Abhinav', 'Abhisumant', 'Abid', 'Abir', 'Abraham', 'Abu', 'Abubakar', 'Ace', 'Adain', 'Adam', 'Adam-James', 'Addison', 'Addisson', 'Adegbola', 'Adegbolahan', 'Aden', 'Adenn', 'Adie', 'Adil', 'Aditya', 'Adnan', 'Adrian', 'Adrien', 'Aedan', 'Aedin', 'Aedyn', 'Aeron', 'Afonso', 'Ahmad', 'Ahmed', 'Ahmed-Aziz', 'Ahoua', 'Ahtasham', 'Aiadan', 'Aidan', 'Aiden', 'Aiden-Jack', 'Aiden-Vee'];

function dataSource() {
    for (var i = 0; i < 1000; i++) {
        virtualData.push({
            'SNo': i + 1,
            'FIELD1': names[Math.floor(Math.random() * names.length)],
            'FIELD2': 1967 + (i % 10), 'FIELD3': Math.floor(Math.random() * 200),
            'FIELD4': Math.floor(Math.random() * 100), 'FIELD5': Math.floor(Math.random() * 2000), 'FIELD6': Math.floor(Math.random() * 1000), 'FIELD7': Math.floor(Math.random() * 100), 'FIELD8': Math.floor(Math.random() * 10), 'FIELD9': Math.floor(Math.random() * 10), 'FIELD10': Math.floor(Math.random() * 100), 'FIELD11': Math.floor(Math.random() * 100), 'FIELD12': Math.floor(Math.random() * 1000), 'FIELD13': Math.floor(Math.random() * 10), 'FIELD14': Math.floor(Math.random() * 10), 'FIELD15': Math.floor(Math.random() * 1000), 'FIELD16': Math.floor(Math.random() * 200), 'FIELD17': Math.floor(Math.random() * 300), 'FIELD18': Math.floor(Math.random() * 400), 'FIELD19': Math.floor(Math.random() * 500), 'FIELD20': Math.floor(Math.random() * 700), 'FIELD21': Math.floor(Math.random() * 800), 'FIELD22': Math.floor(Math.random() * 1000), 'FIELD23': Math.floor(Math.random() * 2000), 'FIELD24': Math.floor(Math.random() * 150), 'FIELD25': Math.floor(Math.random() * 1000), 'FIELD26': Math.floor(Math.random() * 100), 'FIELD27': Math.floor(Math.random() * 400), 'FIELD28': Math.floor(Math.random() * 600), 'FIELD29': Math.floor(Math.random() * 500), 'FIELD30': Math.floor(Math.random() * 300),
        });
    }
}
dataSource();
var grid = new ej.grids.Grid({
    dataSource: hierarchyOrderdata,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  editSettings: {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: 'Normal',
    newRowPosition: 'Top',
  },
  allowTextWrap: false,
  textWrapSettings: { wrapMode: 'Content' },
  height: 410,
  enableHover: false,
  allowResizing: true,
  dataBound: function () {
    loadInputValues();
    const startIndex = parseInt(document.getElementById('startIndex').value, 10) || 1;
    const endIndex = parseInt(document.getElementById('endIndex').value, 10) || 3;
    document.getElementById('startIndex').value = startIndex;
    document.getElementById('endIndex').value = endIndex;
    grid.autoFitColumns(['Freight', 'ShipName', 'ShipAddress', 'ShipCity', 'ShipCountry'], startIndex, endIndex);
  },
  frozenRows: 2,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: 120,
      isPrimaryKey: true,
      textAlign: 'Right',
      freeze: 'Left',
    },
    {
      field: 'Freight',
      headerText: 'Fr',
      width: 125,
      format: 'C2',
      textAlign: 'Right',
    },
    {
      field: 'CustomerID',
      headerText: 'Customer ID',
      width: 130,
      freeze: 'Right',
    },
    {
      headerText: 'stacked Header1',
      columns: [
        {
          field: 'OrderDate',
          headerText: 'Order Date',
          width: 150,
          format: 'yMd',
          textAlign: 'Right',
        },
        {
          field: 'ShipName',
          headerText: 'Ship',
          width: 300,
          minWidth: 50,
          maxWidth: 100,
        },
      ],
    },
    {
      field: 'ShipAddress',
      headerText: 'Ship Address',
      width: 270,
      freeze: 'Fixed',
    },
    {
      field: 'ShipCity',
      headerText: 'Ship City',
      width: 250,
      clipMode: 'EllipsisWithTooltip',
    },
    {
      field: 'ShipCountry',
      headerText: 'Ship Country',
      width: 250,
      template: '#template',
    },
  ],
});

grid.appendTo('#Grid');

