import React from "react";
import _ from 'lodash';
import { Button, Col, Container, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { TarjetaModel } from "../../models";
import { setTarjeta, isValidURL } from "../../utils";
import { Obligatorio } from "..";

type State = {
    data: TarjetaModel;
    validUrl: boolean;
};

type Props = {
    emitCloseModal: any;
    tarjeta: TarjetaModel;
};

class TarjetaModal extends React.PureComponent<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: this.props.tarjeta,
            validUrl: true,
        };
        this.handleTextInput = this.handleTextInput.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleValidateUrl = this.handleValidateUrl.bind(this);
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        const { tarjeta } = this.props;
        if (!_.isEqual(tarjeta, prevProps.tarjeta)) {
            this.setState({ data: tarjeta });
        }
    }

    handleSave = () => {
        const { emitCloseModal } = this.props;
        const { data, validUrl } = this.state;
        const dataCopy = _.cloneDeep(data);
        
        if (!validUrl) dataCopy.imagen = "";

        setTarjeta(dataCopy);
        emitCloseModal(true);
    };

    handleTextInput = (field: any) => (evt: { target: { value: any } }) => {
        const { data } = this.state;  
        const dataCopy = _.cloneDeep(data);
        const val: string = evt.target.value;
        switch(field) {
            case 'Titulo':
                dataCopy.titulo = val;
                break;
            case 'Descripcion':
                dataCopy.descripcion = val;
                break;
            case 'Imagen':
                const replaced: string = val.replaceAll('\\', '/');
                dataCopy.imagen = replaced;
                break;                
        }
        this.setState({ data: dataCopy });
    };

    handleValidateUrl() {
        const { data } = this.state;  
        this.setState({ validUrl: isValidURL(data.imagen) })
    }

    render() {
        const { emitCloseModal } = this.props;
        const { data, validUrl } = this.state;
        
        const title = data.id > 0 ? 'Edición tarjeta' : 'Creación tarjeta' ;
        const disabledSave = data == null || _.isEqual(data, new TarjetaModel()) || data.descripcion.trim() === '' || data.titulo.trim() === '';
        
        return (
            <>
                <Modal backdrop="static" 
                       keyboard={false} 
                       isOpen={true} 
                       toggle={emitCloseModal} 
                       centered={true}
                       contentClassName="custom-modal-style">
                    <ModalHeader className="d-inline modal-header">
                        <div className="float-left margin-left-5">{title}</div>
                        <div className="float-right margin-right-5 cursor-pointer" onClick={emitCloseModal}>
                            <FontAwesomeIcon className="icon" icon={faTimes} color="red" size="1x" />
                        </div>
                    </ModalHeader>
                    <ModalBody className="modal-body">
                        <Container>
                            <Row>
                                <Col md="12">
                                    <Label className="control-label">Título: <Obligatorio /></Label>
                                    <Input
                                        onChange={this.handleTextInput('Titulo')}
                                        type="text"
                                        value={data.titulo}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <Label className="control-label">Descripción: <Obligatorio /></Label>                                
                                    <Input
                                        type="text"
                                        onChange={this.handleTextInput('Descripcion')}
                                        value={data.descripcion}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <span>
                                        <Label className="control-label">Imagen (URL): </Label> 
                                        {!validUrl && (
                                            <Label className="control-label errorLabel">&nbsp; -- Url inválida, se guardará la por defecto --</Label>
                                            )}    
                                    </span>                            
                                    <Input
                                        type="text"
                                        onChange={this.handleTextInput('Imagen')}
                                        onBlur={this.handleValidateUrl}
                                        value={data.imagen}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>
                    <ModalFooter >
                        <Button className="btn btn-sm float-right margin-right-5 margin-left-5" onClick={emitCloseModal}>
                            {'Cerrar'}
                        </Button>
                        <Button className="btn btn-sm float-right" disabled={disabledSave} onClick={this.handleSave}>
                            {'Guardar'}
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default (TarjetaModal);
