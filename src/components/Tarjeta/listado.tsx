import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import _ from 'lodash';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tarjeta, TarjetaModal } from "..";
import { TarjetaModel } from "../../models";
import { faPlus, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { getTarjetas, removeTarjeta } from "../../utils";

type State = {
    showModal: boolean;
    tarjeta: TarjetaModel;
    tarjetas: TarjetaModel[];
};

class TarjetaListado extends React.PureComponent<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            showModal: false,
            tarjeta: new TarjetaModel(),
            tarjetas: getTarjetas(),
        };
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOrden = this.handleOrden.bind(this);
        this.handleRemoveTarjeta = this.handleRemoveTarjeta.bind(this);
        this.handleTarjeta = this.handleTarjeta.bind(this);
    }

    handleTarjeta = (tarjeta = new TarjetaModel()) => {
        this.setState({
            tarjeta: tarjeta,
            showModal: true,
        });
    };

    handleRemoveTarjeta = (tarjeta: TarjetaModel) => {
        const tarjetas = removeTarjeta(tarjeta.id);
        this.setState({ 
            tarjetas: [],
        }, ()=> this.setState({tarjetas: tarjetas}));
    };

    handleCloseModal = (reload = false) => {
        const {tarjetas} = this.state
        this.setState({ 
            showModal: false,
            tarjetas: reload ? []: tarjetas,
        }, ()=> reload ? this.setState({tarjetas: getTarjetas()}) : null);
    }

    handleOrden = (order: string, field: string) => {
        const {tarjetas} = this.state
        let _tarjetas: TarjetaModel[] =[];

        switch (order) {
            case 'asc':
                _tarjetas = _.orderBy(tarjetas, field, 'asc');
                break;
            default:
                _tarjetas = _.orderBy(tarjetas, field, 'desc');
                break;            
        }

        this.setState({ 
            tarjetas: [],
        }, ()=> this.setState({tarjetas: _tarjetas}));
    }

    render() {
        const { tarjeta, showModal, tarjetas } = this.state;
        return (
            <>
                {showModal && (
                    <TarjetaModal 
                        emitCloseModal={this.handleCloseModal} 
                        tarjeta={tarjeta} 
                    />
                )}

                {/* HEADER */}
                <div id="dvHeader" className="Title">
                    <span className="margin-left-15">
                        Visualizador tarjetas
                    </span>
                    <span className="float-right margin-right-15" onClick={() => this.handleTarjeta()}  data-title-right={('Añadir tarjeta')} >
                        <FontAwesomeIcon className='icon' icon={faPlus} color="white" size="1x" />
                    </span>
                    <span className="order-desc" onClick={() => this.handleOrden('desc', 'titulo')}  data-title-right={('Ordenar título descendente')} >
                        <FontAwesomeIcon className='icon' icon={faSortDown} color="white" size="1x" />
                    </span>
                    <span className="order-asc" onClick={() => this.handleOrden('asc', 'titulo')}  data-title-right={('Ordenar título ascendente')} >
                        <FontAwesomeIcon className='icon' icon={faSortUp} color="white" size="1x" />
                    </span>
                    <span className="order-desc" onClick={() => this.handleOrden('desc', 'id')}  data-title-right={('Ordenar creación descendente')} >
                        <FontAwesomeIcon className='icon' icon={faSortDown} color="white" size="1x" />
                    </span>
                    <span className="order-asc" onClick={() => this.handleOrden('asc', 'id')}  data-title-right={('Ordenar creación ascendente')} >
                        <FontAwesomeIcon className='icon' icon={faSortUp} color="white" size="1x" />
                    </span>
                </div>
                
                 {/* LISTADO TARJETAS */}
                <div id="dvListadoT" className="Content">
                    {
                        tarjetas.map((tarjeta, i) => {
                            return (
                                <Tarjeta 
                                    emitHandleTarjeta={() => this.handleTarjeta(tarjeta)} 
                                    emitRemoveTarjeta={() => this.handleRemoveTarjeta(tarjeta)} 
                                    tarjeta={tarjeta} 
                                    key={i} />
                            )
                        })
                    }
                </div>
            </>
        );
    }
}

export default (TarjetaListado);
