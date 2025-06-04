'use client';
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Globe, Network, Shield, Users, Check, ArrowRight, MapPin, Phone, DatabaseBackup, Youtube, Mail, Send } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react';
import dynamic from 'next/dynamic';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const testimonials = [
  {
    quote: `Working with this team has been an absolute pleasure...`,
    name: 'Sarah Miller',
    title: 'CEO, TechCorp',
    image: '/placeholder.svg?height=60&width=60',
  },
  {
    quote: `Truly top-tier quality and communication. Highly recommended.`,
    name: 'John Smith',
    title: 'Founder, DevStudio',
    image: '/placeholder.svg?height=60&width=60',
  },
];

function TestimonialSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
    >
      {testimonials.map((t, index) => (
        <SwiperSlide key={index}>
          <blockquote className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
            "{t.quote}"
          </blockquote>
          <div className="flex items-center justify-center">
            <Image
              src={t.image}
              alt={t.name}
              width={60}
              height={60}
              className="rounded-full mr-4"
            />
            <div className="text-left">
              <div className="font-semibold">{t.name}</div>
              <div className="text-blue-200 text-sm">{t.title}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative h-screen w-full">
        {/* Background Image using Next.js Image Component */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Home-page-1920x650-pxl.jpg"
            alt="Tech workspace with coding interfaces"
            fill
            priority
            quality={100}
            style={{ objectFit: "cover" }}
            className="object-cover"
          />
        </div>

        {/* CSS Background Image as fallback */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/Home-page-1920x650-pxl.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-0 z-[1]"></div>

        {/* Floating Navigation */}
        <nav className="relative z-10 pt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-9 flex justify-between items-center">
              {/* Left side: icon + text */}

              <div className="w-[40%] flex justify-between items-center">
                {/* Left-aligned location */}
                <div className="flex items-center space-x-1">
                  <MapPin color="#2563EB" strokeWidth={2.5} size={16} fill="none" />
                  <h1 className="text-white text-xs">WEST NAKHALPARA TEJGAON-1215</h1>
                </div>

                {/* Right-aligned phone */}
                <div className="flex items-center space-x-1">
                  <Phone color="#2563EB" strokeWidth={2.5} size={16} />
                  <h1 className="text-white text-xs">+880 1234 567890</h1>
                </div>
              </div>


              {/* Right side: button */}
              <div className="w-1/2 flex justify-end">
                <button className="bg-blue-400 text-white text-xs px-4 py-2 rounded-xl hover:bg-blue-600">
                  GET SUPPORT
                </button>
              </div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
              <div className="flex justify-between items-center h-16 px-6">
                <div className="flex items-center">
                  <div className="text-2xl font-bold text-gray-900">
                    <Image
                      src="/logo.png"
                      alt="Tech workspace with coding interfaces"
                      width={140}
                      height={60}
                      priority
                      quality={100}
                      style={{ objectFit: "cover" }}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-8">
                    <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                      Home
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                      About
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                      Services
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                      Portfolio
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-[55%]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Creative Web Agency</h1>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Delivering Custom Solutions</h2>
            <Button size="lg" className="bg-blue-400 rounded-xl hover:bg-blue-700 text-white px-8 py-3">
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-2xl shadow-xl transition-shadow">
              <CardHeader>
                <Cloud strokeWidth={2.5} className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-lg">Cloud Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Scalable cloud infrastructure and services to power your business growth.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-2xl shadow-xl transition-shadow">
              <CardHeader>
                <Youtube className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-lg">Website Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Custom website development and design solutions for your brand.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-2xl shadow-xl transition-shadow">
              <CardHeader>
                <Network className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-lg">Network Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Robust network solutions to keep your business connected and secure.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-2xl shadow-xl transition-shadow">
              <CardHeader>
                <DatabaseBackup className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-lg">Disaster Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Comprehensive backup and recovery solutions for business continuity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cloud Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semi-bold text-gray-900 mb-6">Cloud Services</h2>
              <p className="text-gray-600 mb-8">
                Transform your business with our comprehensive cloud solutions. We provide scalable, secure, and
                cost-effective cloud services tailored to your specific needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="default" className="bg-blue-400 hover:bg-blue-700">
                  Near Cloud
                </Button>
                <Button variant="default" className="bg-blue-400 hover:bg-blue-700">
                  Backup Systems
                </Button>
                <Button variant="default" className="bg-blue-400 hover:bg-blue-700">
                  Office Cloud
                </Button>
                <Button variant="default" className="bg-blue-400 hover:bg-blue-700">
                  API Colud
                </Button>
                <Button variant="default" className="bg-blue-400 hover:bg-blue-700">
                  Hybrid Cloud
                </Button>
                <Button variant="default" className="bg-blue-400 hover:bg-blue-700">
                  SDK Cloud
                </Button>
                <Button variant="default" className="bg-blue-400 hover:bg-blue-700">
                  Cloud Hosting
                </Button>
                <Button variant="default" className="bg-blue-400 hover:bg-blue-700">
                  Web Service
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-100 h-100 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <img
                  src="/Cloud-services.png"
                  alt=""
                  style={{ objectFit: "cover" }}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="w-100 h-100 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                <img
                  src="/Development-services.png"
                  alt=""
                  style={{ objectFit: "cover" }}
                  className=""
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Development Services</h2>
              <p className="text-gray-600 mb-8">
                Our expert development team creates custom solutions that drive innovation and deliver exceptional user
                experiences across all platforms.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="default" className="bg-blue-400 hover:bg-blue-700">
                  Web Design
                </Button>
                <Button variant="default" className="bg-blue-400 hover:bg-blue-700">
                  Android Development
                </Button>
                <Button variant="default" className="bg-blue-400 hover:bg-blue-700">
                  Mobile App Design
                </Button>
                <Button variant="default" className="bg-blue-400 hover:bg-blue-700">
                  Back-End
                </Button>
                <Button variant="default" className="bg-blue-400 hover:bg-blue-700">
                  IOS Developemnt
                </Button>
                <Button variant="default" className="bg-blue-400 hover:bg-blue-700">
                  Print Design
                </Button>
                <Button variant="default" className="bg-blue-400 hover:bg-blue-700">
                  Front-End
                </Button>
                <Button variant="default" className="bg-blue-400 hover:bg-blue-700">
                  E-Commerce
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        className="relative py-20 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/Awards-winning.jpg')" }} // Replace with your actual image
      >
        {/* Bluish overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>



      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semi-bold text-gray-900 mb-4">OUR TEAM</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our talented team of professionals who are passionate about delivering exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "John Smith", role: "CEO & Founder", image: "/Our-team-02.jpg" },
              { name: "Sarah Johnson", role: "Creative Director", image: "/Our-team-03.jpg" },
              { name: "Mike Wilson", role: "Lead Developer", image: "/Our-team-04.jpg" },
              { name: "Emily Davis", role: "Project Manager", image: "/Our-team-05.jpg" },
            ].map((member, index) => (
              <Card key={index} className="text-center overflow-hidden shadow-2xl">
                <CardContent className="p-0">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semi-bold text-gray-900 mb-4">Pricing Tables</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core features and dedicated
              support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Plan",
                price: "$55",
                period: "per month",
                features: ["5 Projects", "10GB Storage", "Email Support", "Basic Analytics", "SSL Certificate"],
                popular: false,
              },
              {
                name: "Advanced Plan",
                price: "$90",
                period: "per month",
                features: [
                  "15 Projects",
                  "50GB Storage",
                  "Priority Support",
                  "Advanced Analytics",
                  "SSL Certificate",
                  "Custom Domain",
                ],
                popular: true,
              },
              {
                name: "Expert Plan",
                price: "$145",
                period: "per month",
                features: [
                  "Unlimited Projects",
                  "200GB Storage",
                  "24/7 Phone Support",
                  "Premium Analytics",
                  "SSL Certificate",
                  "Custom Domain",
                  "API Access",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <Card key={index} className={`relative shadow-2xl`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full bg-blue-400 hover:bg-blue-700`}
                  >
                    Choose Plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section
        className="relative py-20 bg-fixed bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/Testimonial-image.jpg')" }} // Replace with your image path
      >
        {/* Bluish Overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Testimonial</h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semi-bold text-gray-900 mb-4">Latest Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and insights from our team of experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce and small business growth",
                excerpt:
                  "Learn how e-commerce can drive significant growth for small businesses in today's digital marketplace.",
                date: "March 15, 2024",
                image: "/Latest-blog-02.jpg",
              },
              {
                title: "Technology industry influence on digital business",
                excerpt: "Explore how emerging technologies are reshaping the way businesses operate and compete.",
                date: "March 12, 2024",
                image: "/Latest blog-03.jpg",
              },
              {
                title: "Artificial Intelligence - UX/UI development trends",
                excerpt: "Discover how AI is revolutionizing user experience design and interface development.",
                date: "March 10, 2024",
                image: "/Latest blog-04.jpg",
              },
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden shadow-2xl transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs">{post.date}</span>
                      <Button variant="ghost" size="sm">
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f5f6f8] text-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <img src="/logo.png" alt="HyperSpace Technologies Logo" className="h-8 mb-6" />
              <ul className="space-y-4 text-sm">
                <li className="flex items-center">
                  <MapPin className="text-blue-600 w-4 h-4 mr-2" />
                  West Nakhalpara, Tejgaon - 1215
                </li>
                <li className="flex items-center">
                  <Phone className="text-blue-600 w-4 h-4 mr-2" />
                  (+88) 01234567891
                </li>
                <li className="flex items-center">
                  <Mail className="text-blue-600 w-4 h-4 mr-2" />
                  info@hyperspacetechnologies.com
                </li>
                <li className="flex items-center">
                  <Globe className="text-blue-600 w-4 h-4 mr-2" />
                  www.hyperspacetechnologies.com
                </li>
              </ul>
            </div>

            {/* Helpful Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 border-b border-blue-600 inline-block">Helpful Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Faq’s</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4 border-b border-blue-600 inline-block">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Support Center</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h4 className="text-lg font-semibold mb-4 border-b border-blue-600 inline-block">Subscribe</h4>
              <p className="text-sm mb-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
              <div className="flex mb-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-2 text-sm w-full rounded-l border border-gray-300"
                />
                <button className="bg-blue-600 p-2 rounded-r">
                  <Send className="text-white w-4 h-4" />
                </button>
              </div>
              <div className="flex space-x-3">
                {['facebook', 'github', 'x', 'linkedin', 'google'].map((platform, index) => (
                  <div key={index} className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm">
                    {platform.charAt(0).toUpperCase()}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-gray-600 border-t border-gray-300 pt-6">
            © 2025 - HyperSpace Technologies. All Rights Reserved.
          </div>
        </div>
      </footer>

    </div>
  )
}
