import { TarjetaModel } from "../models";

// DEFINIMOS EL LOCAL STORAGE DE TARJETAS
const getLocalStorageTarjetas = 'tarjetasLS';
const getLocalStorageTarjetasId = 'tarjetasIdLS';

// OBTENEMOS TODAS LAS TARJETAS
export function getTarjetas(): TarjetaModel[] {
    const tarjetas = localStorage.getItem(getLocalStorageTarjetas);
    if (tarjetas != null && tarjetas !== "") return JSON.parse(tarjetas);
    else return [];
}

// SETEA UNA TARJETA
export function setTarjeta(tarjeta: TarjetaModel): void  {
    let tarjetas = getTarjetas();

    // ACTUALIZACION
    if (tarjeta.id > 0) {
        // buscamos la tarjeta
        const index = tarjetas.findIndex((t) => t.id === tarjeta.id);
        // la modificamos
        tarjetas[index] = tarjeta;
    }
    // CREACIÓN NUEVA
    else {
        const id = localStorage.getItem(getLocalStorageTarjetasId);
        let _id = 1;
        if (id == null || id === "") _id = 1;
        else _id = Number(id) + 1;
        tarjeta.id = _id;
        localStorage.setItem(getLocalStorageTarjetasId, _id.toString());      
        tarjetas.push(tarjeta);
    }
    setTarjetas(tarjetas);
}

// SETEA TODAS LAS TARJETAS
function setTarjetas(tarjetas: TarjetaModel[]): void  {
    localStorage.removeItem(getLocalStorageTarjetas);
    localStorage.setItem(getLocalStorageTarjetas, JSON.stringify(tarjetas));
}

// ELIMINAMOS 1 TARJETA
export function removeTarjeta(id: number): TarjetaModel[] {
    const tarjetas = getTarjetas();
    const index = tarjetas.findIndex((t) => t.id === id);
    if (index !== -1) {
        tarjetas.splice(index, 1);
        setTarjetas(tarjetas);
    }
    return tarjetas;
}