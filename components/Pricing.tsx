import { Check } from 'lucide-react';

const pricingFeatures = [
  'Unlimited gym access 24/7',
  'All group fitness classes included',
  'Personal training consultation',
  'Nutrition guidance & meal plans',
  'Access to premium equipment',
  'Free fitness assessment',
  'Mobile app with workout tracking',
  'Community events & challenges',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One membership, unlimited possibilities. No hidden fees, no contracts.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="p-12 text-white">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">Monthly Membership</h3>
                <p className="text-red-100">Everything you need to succeed</p>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-center justify-center">
                  <span className="text-6xl font-bold">$29</span>
                  <span className="text-2xl ml-2">/month</span>
                </div>
                <p className="text-red-100 mt-2">Cancel anytime, no commitments</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <h4 className="text-xl font-bold mb-6 text-center">What's Included:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-6 h-6 mr-3 flex-shrink-0 text-green-300" />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-red-600 px-12 py-5 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  Start Your Membership
                </a>
                <p className="text-sm text-red-100 mt-4">
                  🔒 Secure payment powered by Stripe
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Trainers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">100+</div>
              <div className="text-gray-600">Classes Weekly</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Gym Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}