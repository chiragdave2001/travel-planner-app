import React from 'react'
import Place from './Place';

export default function TravelPlanner() {
    let nyc={desc:"New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world.",
src:"http://wallpapercave.com/wp/eKouupY.jpg"};

    let sydney={desc:"Sydney is the capital city of the state of New South Wales, and the most populous city in Australia.",
src:"https://traveldigg.com/wp-content/uploads/2016/04/Sydney-Opera-House-Sunset-Photography.jpg"};

    let paris={desc:"Paris ( nicknamed the  City of light ) is the capital city of France, and the largest city in France.Paris is one of the world’s most important and attractive cities, famed for its Effil tower",
src:"https://wallpapercave.com/wp/CYtMZvM.jpg"};

    let tokyo={desc:"Tokyo is located on Tokyo Bay in the Kanto region of Honshu, Japan’s largest island.Tokyo is known for its fashion and shopping, from the trendy shopping districts of Harajuku and Shibuya, to the luxury flagships of Ginza.",
src:"https://wallpapercave.com/wp/P4WsdAu.jpg"};

  return (
    <div className='container'>
    <div className="row my-6">
      <div className="col-sm-4 col-md-6">
        <Place name="New York" desc={nyc.desc} src={nyc.src} rating="4.0" />
      </div>
      <div className="col-sm-4 col-md-6">
          <Place name="Sydney" desc={sydney.desc} src={sydney.src} rating="3.5" />
      </div>
      </div>
      <div className="row my-6">
      <div className="col-sm-6 col-md-6">
          <Place name="Paris" desc={paris.desc} src={paris.src} rating="4.2" />
      </div>
      <div className="col-sm-6 col-md-6">
          <Place name="Tokyo" desc={tokyo.desc} src={tokyo.src} rating="4.4" />
      </div>
    </div>
    </div>
  )
}
