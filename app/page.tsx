import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Globe, Network, Shield, Users, Check, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background - Using multiple approaches for compatibility */}
      <section className="relative h-screen w-full">
        {/* Method 1: CSS Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/home_page_optimized.jpg')",
          }}
        ></div>

        {/* Method 2: Next.js Image Component as Fallback */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/home_page_optimized.jpg"
            alt="Hero Background"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-[1]"></div>

        {/* Floating Navigation */}
        <nav className="relative z-10 pt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
              <div className="flex justify-between items-center h-16 px-6">
                <div className="flex items-center">
                  <div className="text-2xl font-bold text-gray-900">LOGO</div>
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
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Creative Web Agency</h1>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-white">Delivering Custom Solutions</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              We create innovative digital experiences that drive results and help your business grow in the digital
              landscape.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cloud className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Cloud Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Scalable cloud infrastructure and services to power your business growth.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Website Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Custom website development and design solutions for your brand.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Network className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Network Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Robust network solutions to keep your business connected and secure.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
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

      {/* Rest of the sections remain unchanged */}
      {/* Cloud Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cloud Services</h2>
              <p className="text-gray-600 mb-8">
                Transform your business with our comprehensive cloud solutions. We provide scalable, secure, and
                cost-effective cloud services tailored to your specific needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  Cloud Migration
                </Button>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  Data Analytics
                </Button>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  Security Solutions
                </Button>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  24/7 Support
                </Button>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  Backup Services
                </Button>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  Monitoring
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <Cloud className="w-32 h-32 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="w-80 h-80 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                <Users className="w-32 h-32 text-orange-600" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Development Services</h2>
              <p className="text-gray-600 mb-8">
                Our expert development team creates custom solutions that drive innovation and deliver exceptional user
                experiences across all platforms.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  Web Development
                </Button>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  Mobile Apps
                </Button>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  E-commerce
                </Button>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  API Integration
                </Button>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  UI/UX Design
                </Button>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  Consulting
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR TEAM</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our talented team of professionals who are passionate about delivering exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "John Smith", role: "CEO & Founder", image: "/placeholder.svg?height=300&width=300" },
              { name: "Sarah Johnson", role: "Creative Director", image: "/placeholder.svg?height=300&width=300" },
              { name: "Mike Wilson", role: "Lead Developer", image: "/placeholder.svg?height=300&width=300" },
              { name: "Emily Davis", role: "Project Manager", image: "/placeholder.svg?height=300&width=300" },
            ].map((member, index) => (
              <Card key={index} className="text-center overflow-hidden">
                <CardContent className="p-0">
                  <Image
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Tables</h2>
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
              <Card key={index} className={`relative ${plan.popular ? "border-blue-500 border-2" : ""}`}>
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
                    className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 hover:bg-gray-700"}`}
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
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Testimonial</h2>
          <blockquote className="text-xl mb-8 leading-relaxed">
            "Working with this team has been an absolute pleasure. They delivered our project on time, within budget,
            and exceeded all our expectations. Their attention to detail and commitment to quality is unmatched."
          </blockquote>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Client"
              width={60}
              height={60}
              className="rounded-full mr-4"
            />
            <div className="text-left">
              <div className="font-semibold">Sarah Miller</div>
              <div className="text-blue-200 text-sm">CEO, TechCorp</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Blog</h2>
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
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Technology industry influence on digital business",
                excerpt: "Explore how emerging technologies are reshaping the way businesses operate and compete.",
                date: "March 12, 2024",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Artificial Intelligence - UX/UI development trends",
                excerpt: "Discover how AI is revolutionizing user experience design and interface development.",
                date: "March 10, 2024",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Image
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
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">f</div>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">t</div>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center">in</div>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">yt</div>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 Creative Web Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
