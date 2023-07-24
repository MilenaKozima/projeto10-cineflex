import { useState } from "react";
import {SeatItem} from './SeatsPage';
import { useEffect } from "react";
import { colors } from "../../components/colors";

export default function Seat(props){

    const {seat, selecionar, selecionado} = props;

    const [status, setStatus] = useState('selected')

    useEffect(() => {

        if(selecionado){
            setStatus('selected');
        } else {
            if (!seat.isAvailable){
                setStatus('unavailable');
            }else{
                setStatus('available')
            }
        }

    }, [selecionado]);

    return(
        <SeatItem data-test="seat" status={status} key={seat.id} onClick={selecionar}>{seat.name}</SeatItem>
    );
}