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
    label: 'Licence Process',
    display: 'Fast',
  },
];

function useCountUp(target, duration = 1800, shouldAnimate = false) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!shouldAnimate || target === 0 || hasRun.current) return;
    hasRun.current = true;
    let start = 0;
    const steps = duration / 16;
    const increment = target / steps;
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

  return {
    count,
    started: count > 0 || (shouldAnimate && target === 0),
  };
}

function StatItem({ stat, animate }) {
  const { count, started } = useCountUp(stat.value, 1800, animate);

  const formatValue = () => {
    if (!started && !animate) return stat.display;
    if (stat.value === 0) return stat.display;
    if (stat.value >= 100000)
      return `${Math.floor(count / 100000)}L${stat.suffix}`;
    return `${count}${stat.suffix}`;
  };

  return (
    <div className="flex items-center gap-4 md:gap-5 px-6 md:px-8 py-6">
      <stat.icon
        className="text-2xl md:text-3xl flex-shrink-0"
        style={{ color: '#8a7d94' }}
      />
      <div>
        <p
          className="text-2xl md:text-3xl font-bold leading-none"
          style={{ color: '#6b6375' }}
        >
          {formatValue()}
        </p>
        <p className="text-sm md:text-base mt-0.5" style={{ color: '#8a7d94' }}>
          {stat.label}
        </p>
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
    <section ref={ref} className="bg-gray-50 shadow-lg">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-300">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} animate={animate} />
        ))}
      </div>
    </section>
  );
}

export default StatsBar;
