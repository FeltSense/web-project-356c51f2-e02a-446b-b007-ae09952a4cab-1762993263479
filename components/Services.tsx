import { Dumbbell, Users, Trophy, Heart } from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    title: 'Personal Training',
    description:
      'One-on-one sessions with certified trainers who create customized workout plans tailored to your specific goals and fitness level.',
  },
  {
    icon: Users,
    title: 'Group Classes',
    description:
      'High-energy group sessions including HIIT, yoga, spinning, and more. Build community while getting fit together.',
  },
  {
    icon: Trophy,
    title: 'Performance Coaching',
    description:
      'Advanced training programs for athletes and fitness enthusiasts looking to take their performance to the next level.',
  },
  {
    icon: Heart,
    title: 'Nutrition Guidance',
    description:
      'Expert nutritional advice and meal planning to complement your training and maximize your results.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to achieve your fitness goals under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}