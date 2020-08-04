import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import {
    GridComponent,
    ColumnDirective,
    ColumnsDirective,
    Inject,
    Sort,
    Page,
    Group
} from '@syncfusion/ej2-react-grids';

class GlobalStatistics extends Component {

    url = Global.url;

    state = {
        statistics: [],
        status: null
    }

    componentWillMount() {

        this.getStatistics();
    }

    getStatistics = () => {

        axios.get(this.url, {
            headers: {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "2cb2dad2d7mshef789187ea9e7d8p1c40b1jsn68ecab2c88eb",
                "useQueryString": true
            }
        }
        )
            .then((response) => {
                console.log(response.data.response)
                this.setState({
                    statistics: response.data.response,
                    status: 'success'
                });
            })
            .catch((error) => {
                console.log(error)
            });


    }

    groupColumn = 'continent';

    render() {

        if (this.state.statistics.length >= 1) {

            return (
                <div id="statistics" style={{ margin: '1%', marginTop: '1%' }} >
                    <GridComponent dataSource={this.state.statistics}                        
                        allowGrouping={true}
                        allowSorting={true}
                        allowPaging={true}
                        pageSettings={{ pageSize: 10, pageCount: 3 }}
                        groupSettings={{
                            columns: ['continent'],
                            showDropArea: false
                        }}
                        sortSettings={{
                            columns: [
                                { field: 'country', direction: 'Ascending' }
                            ]
                        }}
                    >
                        <ColumnsDirective>
                            <ColumnDirective field='continent' headerText='Continente' textAlign='Right' width='120' />
                            <ColumnDirective field='country' headerText='País' textAlign='Right' width='150' />
                            <ColumnDirective field='cases.total' headerText='Total Casos' textAlign='Right' width='150' format='N' />
                            <ColumnDirective field='deaths.total' headerText='Total Muertes' textAlign='Center' width='150' format='N' />
                            <ColumnDirective field='population' headerText='Población' textAlign='Right' width='150' format='N' />
                           
                        </ColumnsDirective>
                        <Inject services={[Group, Sort, Page]} />

                    </GridComponent>
                </div>
            );

        } else if (this.state.statistics.length === 0 && this.state.status === 'success') {
            return (
                <div id="statistics">
                    <h2 className="subheader">No hay Estadísticas para mostrar</h2>
                </div>
            );
        } else {
            return (
                <div id="statistics">
                    <h2 className="subheader">Cargando...</h2>
                    <p>Espere mientras carga el contenido</p>
                </div>
            );

        }


    }
}

export default GlobalStatistics;