import React, { Component } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';


class Countries extends Component {
    constructor(props) {
       super(props);
                  
             const columns  = [
                    { field: 'countries', headerName: 'Column 1', width: 150 },
                    { field: 'slug', headerName: 'Column 2', width: 150 },
                    { field: 'slugooood', headerName: 'Column 2', width: 150 },
                  ];
            this.state = {  columns: columns , rows: [] };
            // this.getData();
            }
            componentDidMount() {
                this.getData();
            }



            getData = () => {
                console.log('getData');
                fetch('https://api.covid19api.com/countries')
                    .then((res) => res.json())
                    .then(
                        (data) => {
                            console.log('result', data);
                            let id = 1;
                            const datawithId = data.map((x) =>
                            Object.assign({} , x, { id: id++ })
                            );
                            console.log('datawithId' , datawithId);
                            this.setState =  {  rows: datawithId };
                        },
                         (error) => {
                            console.log('error', error);
                        }
                    );
            };
    render() {
        return (
            <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={this.state.rows} columns={this.state.columns} />
          </div>
        );
    }
}

export default Countries;