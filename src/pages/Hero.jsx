import drivingImg from '../assets/driving.png';

function Hero() {
  return (
    <div className="w-full">
      <img
        src={drivingImg}
        alt="Driving"
        className="w-full h-62.5 object-cover"
      />
    </div>
  );
}
export default Hero;
