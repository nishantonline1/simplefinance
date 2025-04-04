import React, { useState } from 'react';
import { 
  Building2, Calculator, BookOpen, FileCheck2, Award, 
  Landmark, ClipboardCheck, BarChart3, 
  Clock, Shield, Users, Target,
  Briefcase, ChevronDown, Menu, X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Briefcase className="h-8 w-8 text-blue-600" aria-hidden="true" />
              <span className="ml-2 text-xl font-bold text-gray-800">Simple Finance</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
              <a href="tel:+918240642578" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t" role="menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors" role="menuitem">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors" role="menuitem">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors" role="menuitem">Services</a>
              <a href="#faq" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors" role="menuitem">FAQ</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main>
        <section 
          id="home"
          className="relative h-screen bg-cover bg-center pt-16" 
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Expert Legal & Financial Services in Kolkata
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Comprehensive legal solutions including company registration, trademark filing, and compliance management in West Bengal
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+918240642578" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 px-4 bg-gray-50" aria-labelledby="about-title">
          <div className="max-w-7xl mx-auto">
            <h2 id="about-title" className="text-3xl font-bold text-center mb-16">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Simple Finance team" 
                  className="rounded-lg shadow-lg w-full h-70vh max-h-[70vh] object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Your Trusted Legal & Financial Partner</h3>
                <p className="text-gray-700 mb-6">
                  At Simple Finance, we provide comprehensive legal and financial services designed to help businesses in Kolkata thrive. 
                  Our experienced team offers expert guidance through complex regulatory frameworks, ensuring your business stays compliant while focusing on growth.
                </p>
                <p className="text-gray-700 mb-6">
                  We believe in building lasting relationships with our clients by offering transparent, straightforward advice and personalized solutions 
                  tailored to your specific needs. Whether you're a startup or an established business, we're here to support your journey.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                    <p className="text-sm">SEBI Registered</p>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                    <p className="text-sm">Expert Team</p>
                  </div>
                  <div className="flex items-start">
                    <Target className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                    <p className="text-sm">Goal-Oriented</p>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                    <p className="text-sm">Timely Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4" aria-labelledby="services-title">
          <div className="max-w-7xl mx-auto">
            <h2 id="services-title" className="text-3xl font-bold text-center mb-16">Legal & Financial Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: Building2, 
                  title: 'Company Incorporation', 
                  desc: 'Expert assistance in company registration, documentation, and legal compliance in Kolkata' 
                },
                { 
                  icon: Calculator, 
                  title: 'GST Services', 
                  desc: 'Complete GST registration, filing, and compliance management for businesses in West Bengal' 
                },
                { 
                  icon: Landmark, 
                  title: 'Trademark Registration', 
                  desc: 'Professional trademark filing and protection services for your business' 
                },
                { 
                  icon: FileCheck2, 
                  title: 'Legal Documentation', 
                  desc: 'Comprehensive legal documentation services for businesses and startups' 
                },
                { 
                  icon: Award, 
                  title: 'MSME Registration', 
                  desc: 'Simplified MSME registration process with expert guidance' 
                },
                { 
                  icon: ClipboardCheck, 
                  title: 'Legal Compliance', 
                  desc: 'Complete statutory and legal compliance management services' 
                },
                { 
                  icon: BookOpen, 
                  title: 'Legal Advisory', 
                  desc: 'Expert legal consultation for businesses and entrepreneurs' 
                },
                { 
                  icon: BarChart3, 
                  title: 'Business Legal Support', 
                  desc: 'Ongoing legal support and advisory for business operations' 
                },
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
                  onClick={() => toggleAccordion(`service-${index}`)}
                >
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <div className="flex items-center justify-between">
                    <button 
                      className="text-blue-600 flex items-center group"
                      aria-expanded={activeAccordion === `service-${index}`}
                    >
                      Learn More 
                      <ChevronDown 
                        className={`w-4 h-4 ml-1 transition-transform ${
                          activeAccordion === `service-${index}` ? 'transform rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  {activeAccordion === `service-${index}` && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-gray-600 text-sm">
                        Additional information about {service.title} service. 
                        Contact us to learn more about how we can help you with this service.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Assurance Section */}
        <section className="py-20 px-4 bg-blue-50" aria-labelledby="assurance-title">
          <div className="max-w-7xl mx-auto">
            <h2 id="assurance-title" className="text-3xl font-bold text-center mb-16">Our Assurance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-4">100% Confidentiality</h3>
                <p className="text-gray-600">
                  Your data is encrypted, stored securely, and never shared without explicit consent. We follow best practices in data protection.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-4">Transparent Pricing</h3>
                <p className="text-gray-600">
                  No hidden fees, no surprises. Our fee-only advisory ensures unbiased recommendations with your best interests at heart.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
                <p className="text-gray-600">
                  Our team of legal and financial experts provides tailored, jargon-free advice to help you achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4" aria-labelledby="faq-title">
          <div className="max-w-4xl mx-auto">
            <h2 id="faq-title" className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "Why should I consult Simple Finance instead of handling my finances myself?",
                  answer: "Most people aren't taught personal finance in school. We help you avoid costly mistakes, structure your goals, and create a roadmap for long-term financial health. Our fee-only advisory ensures unbiased recommendations—no commissions, no hidden agendas."
                },
                {
                  question: "What makes Simple Finance different from other advisors?",
                  answer: "We're fully independent, SEBI-registered, and committed to transparency. Our only focus is helping you—not selling you products. Plus, we offer simple, jargon-free guidance that's tailored to your unique goals."
                },
                {
                  question: "I already have investments. Why do I still need a financial advisor?",
                  answer: "Even with existing investments, many people don't know if they're aligned with their life goals. We help you review, realign, and optimize your finances—whether it's for retirement, a child's education, or wealth building."
                },
                {
                  question: "Why does my business need trusted financial and legal services?",
                  answer: "Your finances and legal compliance are the backbone of your business. With the right advisory support, you: Avoid tax and legal penalties, Ensure business continuity and proper structuring, Protect assets and reduce liability, Plan better for expansion or funding."
                },
                {
                  question: "Can legal and financial planning really work together?",
                  answer: "Absolutely. Financial decisions often have legal implications—like choosing the right business structure, writing a will, or planning for inheritance. We help integrate both sides so you're protected and prepared."
                },
                {
                  question: "I don't have a high income. Is this still for me?",
                  answer: "Yes. Financial planning is not just for the wealthy. In fact, starting early with simple, smart strategies can have the biggest long-term impact. No matter your income, we're here to guide you."
                },
                {
                  question: "How do you ensure client confidentiality?",
                  answer: "Client trust is at the heart of our business. All data shared is encrypted, stored securely, and never shared without explicit consent. We follow best practices in data protection and confidentiality."
                },
                {
                  question: "What does \"fee-only\" advisor mean?",
                  answer: "It means we work for you, not for commissions. Our only income comes from what you pay us—so our advice is always in your best interest."
                }
              ].map((faq, index) => (
                <div 
                  key={`faq-${index}`}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left bg-white flex justify-between items-center"
                    onClick={() => toggleAccordion(`faq-${index}`)}
                    aria-expanded={activeAccordion === `faq-${index}`}
                  >
                    <span className="font-semibold text-lg">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-blue-600 transition-transform ${
                        activeAccordion === `faq-${index}` ? 'transform rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {activeAccordion === `faq-${index}` && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Simple Finance</h3>
              <p className="text-gray-400">Your trusted legal partner in Kolkata</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Company Registration</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Trademark Filing</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Legal Compliance</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">MSME Registration</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                {/* <li><a href="#" className="hover:text-white transition-colors">Legal Updates</a></li> */}
                {/* <li><a href="#" className="hover:text-white transition-colors">Business Guides</a></li> */}
                <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
                {/* <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li> */}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <p className="text-gray-400 mb-4">Stay updated with legal news and updates</p>
              <div className="flex space-x-4">
                {/* <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                  </svg>
                </a> */}
                <a target="_blank" href="https://www.linkedin.com/company/simplefinancecoin" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Simple Finance. All rights reserved. | Legal Services in Kolkata, West Bengal</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;