import drivingImg from '../assets/driving.png';

function Hero() {
  return (
    <div className="w-full">
      <img
        src={drivingImg}
        alt="Driving"
        className="w-full h-[400px] object-cover"
      />
    </div>
  );
}
export default Hero;
