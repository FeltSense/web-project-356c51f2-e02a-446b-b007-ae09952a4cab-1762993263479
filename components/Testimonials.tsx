'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    quote:
      'FitForce completely transformed my approach to fitness. The trainers are incredibly knowledgeable and supportive. I\'ve lost 30 pounds and gained so much confidence!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    quote:
      'The group classes are amazing! The energy is contagious and I actually look forward to my workouts now. Best decision I\'ve made for my health.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Entrepreneur',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    quote:
      'As a busy entrepreneur, I needed flexible training options. FitForce delivered beyond expectations with personalized plans that fit my schedule perfectly.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Teacher',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    quote:
      'The nutrition guidance combined with personal training has been a game-changer. I\'ve never felt stronger or more energized in my life!',
    rating: 5,
  },
  {
    name: 'Jessica Martinez',
    role: 'Nurse',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    quote:
      'FitForce isn\'t just a gym, it\'s a community. Everyone is so welcoming and encouraging. I\'ve made lifelong friends here while achieving my fitness goals.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Financial Analyst',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    quote:
      'The performance coaching took my athletic abilities to new heights. The trainers really know how to push you while keeping you safe and injury-free.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerView = 3;

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev + testimonialsPerView >= testimonials.length ? 0 : prev + testimonialsPerView
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - testimonialsPerView : prev - testimonialsPerView
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real transformations from real people in our community
          </p>
        </div>

        <div className="relative">
          {/* Desktop View */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {testimonials.slice(currentIndex, currentIndex + testimonialsPerView).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet View */}
          <div className="lg:hidden">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerView) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * testimonialsPerView)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / testimonialsPerView) === index
                    ? 'bg-red-600 w-8'
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial set ${index + 1}`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}