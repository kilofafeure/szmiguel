
import React from "react";
import { Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TarjetaModel } from "../../models";
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'

type State = {
    tarjeta: TarjetaModel;
};

type Props = {
    emitHandleTarjeta: any;
    emitRemoveTarjeta: any;
    tarjeta: TarjetaModel;
    key: number;
};

class Tarjeta extends React.PureComponent<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            tarjeta: this.props.tarjeta,
        };
    }

    renderTarjeta(tarjeta: TarjetaModel) {
        const infImagen = tarjeta.imagen != null && tarjeta.imagen.trim() !== "";
        return (
          <>
            {infImagen ? 
              <Card className="cursor-pointer">
                <img src={tarjeta.imagen} alt={tarjeta.titulo}/>
              </Card>
              :             
              <Card className="cursor-pointer">
                <img src={require('../../images/pikachu.png')} alt={tarjeta.titulo}/>
              </Card>}
          </>
        );
    }

    renderInfo(tarjeta: TarjetaModel) {
        return (
          <ul className="list-unstyled info-tarjeta">
            <li>
              <div>{tarjeta.titulo}</div>
            </li>
            <li>
              <div className="tarjeta-descripcion">{tarjeta.descripcion}</div>
            </li>
          </ul>
        );
      }

    render() {
        const { emitHandleTarjeta, emitRemoveTarjeta } = this.props;
        const { tarjeta } = this.state;
        if (tarjeta != null)
        return (
            <div id="tarjetaContainer" className="border border-secondary margin-bottom-10  ver-tarjeta">
              <div id="tarjetaData" className="row">
                  <div className="col-12">
                    {this.renderTarjeta(tarjeta)}
                    {this.renderInfo(tarjeta)}
                  </div>
              </div>
              <div id="tarjetaIcons" className="hidden-child">
                <span className="span-centered">
                  <span onClick={() => emitHandleTarjeta(tarjeta)} data-title-right={('Editar tarjeta')} >
                    <FontAwesomeIcon className='icon' icon={faPencilAlt} color="back" size="1x" />
                  </span>
                  <span onClick={() => emitRemoveTarjeta(tarjeta)} data-title-right={('Eliminar tarjeta')}  className="margin-left-15 margin-right-15">
                    <FontAwesomeIcon className='icon' icon={faTrash} color="back" size="1x" />
                  </span>
                </span>
              </div>
            </div>
        );
        else return <div />;
    }
}

export default (Tarjeta);
