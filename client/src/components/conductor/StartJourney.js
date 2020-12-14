import React from 'react'
import {socket} from '../../socket'
import GoogleMapReact from 'google-map-react';
import {useHistory} from 'react-router-dom'

const Component = ({ text }) => <div>{text}</div>;

function StartJourney() {
    const [busNo,busCh] = React.useState('');
    const [cdtId,cdtCh] = React.useState('');
    const [show,setShow] = React.useState(false)
    const [center,setCenter] = React.useState();
    const [zoom,setZoom] = React.useState();
    const socketRef = React.useRef()
    const [lat,setLat] = React.useState('');
    const [lng,setLng] = React.useState('');
    const history = useHistory();
    React.useEffect(()=>{
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude )
                setLng(position.coords.longitude)
                setCenter( {lat:position.coords.latitude,lng:position.coords.longitude});
                setZoom(15);
                setShow(true);
            },()=>{},{ enableHighAccuracy: true});
        }
    },[])
    const start = ()=>{
        socketRef.current = socket;
        socketRef.current.emit("user",{cdtId,busNo,lat,lng});
        localStorage.setItem('cdtId',cdtId);
        history.push('/conductor/counter');
    }
    return (
        <div>
            <input placeholder=" conductor id" value={cdtId} onChange={(e)=>cdtCh(e.target.value)}></input>
            <input placeholder="bus no" value={busNo} onChange={(e)=>busCh(e.target.value)}></input>
            <button onClick={start}>Start Journey</button><br/>
            {show?<div style={{ height: '50vh', width: '50%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAfp0dCanqqTWxtWX8hiSSRL3h6jwD8VE4' }}
                defaultCenter={center}
                defaultZoom={zoom}
                >
                <Component
                    lat={lat}
                    lng={lng}
                    text="Starting Point"
                />
                </GoogleMapReact>
            </div>:null}
        </div>
    )
}

export default StartJourney