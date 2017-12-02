import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import CityMapPin from '../components/CityMapPin'


// const AnyReactComponent = ({text, city, members }) =>
//     // let x = "hello world"
//     <div className="googleDivLayer2">
//       <span className="googleDivLayer3">{text}</span>
//       <br />
//       <div>
//         <span className="">{city}</span>
//
//       </div>
//     </div>;



const GoogleMapConfig = {
  key: "AIzaSyBylVIdyNhsQtlYCmbgFTH2zZWZ0Wmj1u4"
}


class SimpleMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
        //center: {lat: 37.09, lng: 260.71},
		center: {lat: 32.715736, lng: -90.161087},
        zoom:4
    }
  }

  render() {
    return (
      <div>
        <div className="googleDivLayer" style={{height: '500px', width: '1000px'}}>
           <GoogleMapReact
           bootstrapURLKeys={GoogleMapConfig}
           defaultCenter={this.state.center}
           defaultZoom={this.state.zoom}
           >
           <CityMapPin
             lat={37.0983}
             lng={240.66}
             city={'Sandiego, CA'}
             members={['hello','world','bob','1','2','3','4']}
             lab = {'disco lab'}
           />

           <CityMapPin
             lat={43.0983}
             lng={300.66}
             city={'city'}
             members={['hello','world','bob']}
             lab = {'party lab'}
           />

           <CityMapPin
             lat={42.3751000}
             lng={-71.1056100}
             city={'Cambridge, MA'}
             members={['hello','world','bob']}
             lab = {'some lab'}

           />

           </GoogleMapReact>
         </div>
       </div>
    )
  }
}

export default SimpleMap
