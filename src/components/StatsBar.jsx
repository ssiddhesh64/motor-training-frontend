import { useState, useEffect, useRef } from 'react';
import { FaUsers, FaAward, FaCar, FaIdCard } from 'react-icons/fa';

const stats = [
  {
    icon: FaUsers,
    value: 200000,
    suffix: '+',
    label: 'Students Trained',
    display: '2L+',
  },
  {
    icon: FaAward,
    value: 35,
    suffix: '+',
    label: 'Years Experience',
    display: '35+',
  },
  {
    icon: FaCar,
    value: 100,
    suffix: '%',
    label: 'Practical Training',
    display: '100%',
  },
  {
    icon: FaIdCard,
    value: 0,
    suffix: '',
    label: 'Fast Licence Process',
    display: 'Fast',
  },
];

function useCountUp(target, duration = 1800, shouldAnimate = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate || target === 0) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, shouldAnimate]);

  return count;
}

function StatItem({ stat, animate }) {
  const count = useCountUp(stat.value, 1800, animate);

  const formatValue = () => {
    if (stat.value === 0) return stat.display;
    if (stat.value >= 100000)
      return `${Math.floor(count / 100000)}L${stat.suffix}`;
    return `${count}${stat.suffix}`;
  };

  return (
    <div className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3">
      <stat.icon className="text-blue-300 text-xl md:text-2xl flex-shrink-0" />
      <div>
        <p className="text-xl md:text-2xl font-bold text-white leading-none">
          {formatValue()}
        </p>
        <p className="text-blue-200 text-xs md:text-sm mt-0.5">{stat.label}</p>
      </div>
    </div>
  );
}

function StatsBar() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 shadow-lg"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-blue-500/40">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} animate={animate} />
        ))}
      </div>
    </section>
  );
}

export default StatsBar;
