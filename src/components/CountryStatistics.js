import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import {GridComponent,
        ColumnDirective,
        ColumnsDirective,
        Inject,
        Sort, 
        Page} from '@syncfusion/ej2-react-grids';

class CountryStatistics extends Component {

    url = Global.url;

    state = {
        statistics: [],
        status: null
    }

    componentWillMount() {

        let search = this.props.search;
        this.getStatistics(search);
    }

    getStatistics = (searched) => {

        axios.get(this.url+"?country="+searched, {
            headers: {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "2cb2dad2d7mshef789187ea9e7d8p1c40b1jsn68ecab2c88eb",
                "useQueryString": true
            }
        }
        )
        .then(response => {
            console.log(response.data.response)
            this.setState({
                statistics: response.data.response,
                status: 'success'
            });
        })
        .catch(err => {
            this.setState({
                statistics: [],
                status: 'success'
            });
        });

        
    }

    render() {

        if (this.state.statistics.length >= 1) {

            return (
                <div id="statistics" style={{ margin : '1%', marginTop : '5%' }} >
                    <GridComponent dataSource={this.state.statistics}                                   
                                   allowSorting={true} 
                                   allowPaging={true}                                   
                                   pageSettings={{ pageSize:5, pageCount: 3 }}                                   
                                   >
                        <ColumnsDirective>
                            <ColumnDirective field='continent' headerText='Continente' textAlign='Right' width='120'   />
                            <ColumnDirective field='country' headerText='País' textAlign='Right' width='150' />
                            <ColumnDirective field='cases.new' headerText='Nuevos Casos' textAlign='Right' width='150' format='N'  />
                            <ColumnDirective field='cases.total' headerText='Total Casos' textAlign='Right' width='150' format='N'  />
                            <ColumnDirective field='deaths.new' headerText='Nuevas Muertes' textAlign='Right' width='150' format='N' />
                            <ColumnDirective field='deaths.total' headerText='Total Muertes' textAlign='Right' width='150' format='N' />
                            <ColumnDirective field='tests.total' headerText='Total Pruebas' textAlign='Right' width='150' format='N' />
                            <ColumnDirective field='population' headerText='Población' textAlign='Right' width='150' format='N' />
                            <ColumnDirective field='day' headerText='Datos al' textAlign='Right' width='150' format='dd/MM/yyyy'   />
                        </ColumnsDirective>
                        <Inject services={[Sort, Page]}/>
                       
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

export default CountryStatistics;