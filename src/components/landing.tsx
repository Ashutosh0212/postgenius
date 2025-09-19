import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Brain, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Clock, 
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Play,
  BarChart3,
  Calendar,
  PenTool,
  Globe,
  Rocket,
  Target,
  Zap,
  Heart,
  MessageCircle,
  Share2,
  Eye,
  Award,
  Lightbulb,
  Headphones,
  RefreshCw,
  Lock
} from 'lucide-react';

interface LandingProps {
  onLogin: (isSignUp?: boolean) => void;
}

export function Landing({ onLogin }: LandingProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle authentication here
    onLogin(isSignUp);
  };

  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Our advanced AI creates engaging, brand-consistent posts that sound authentically you. No more writer\'s block.',
      color: 'from-purple-500 to-pink-500',
      stats: '10M+ posts generated'
    },
    {
      icon: TrendingUp,
      title: 'Smart Analytics',
      description: 'Get actionable insights with predictive analytics that show what content will perform best before you post.',
      color: 'from-green-500 to-blue-500',
      stats: '300% avg. engagement boost'
    },
    {
      icon: Clock,
      title: 'Optimal Timing',
      description: 'AI determines the perfect posting times for maximum reach and engagement across all your platforms.',
      color: 'from-blue-500 to-purple-500',
      stats: '85% better reach'
    },
    {
      icon: Target,
      title: 'Multi-Platform Magic',
      description: 'Seamlessly publish to LinkedIn, Instagram, Twitter, and more with platform-optimized content formatting.',
      color: 'from-orange-500 to-red-500',
      stats: '50+ platforms supported'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Martinez',
      role: 'Marketing Director',
      company: 'TechFlow Inc',
      content: 'PostGenius transformed our social media presence. We went from 2 posts per week to 20, with 5x better engagement. It\'s like having a whole marketing team on autopilot.',
      avatar: 'SM',
      image: 'https://images.unsplash.com/photo-1645848977702-69fa784ea954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMGluZmx1ZW5jZXJ8ZW58MXx8fHwxNzU4MDg0ODMxfDA&ixlib=rb-4.1.0&q=80&w=400',
      results: '+500% engagement',
      timeFrame: 'in 3 months'
    },
    {
      name: 'Michael Chen',
      role: 'Founder & CEO',
      company: 'GrowthLab',
      content: 'The AI content is so good, our clients think we hired a team of copywriters. PostGenius pays for itself with just one new client acquisition.',
      avatar: 'MC',
      image: 'https://images.unsplash.com/photo-1736066331155-c95740b0bd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzU4MTkzNjA1fDA&ixlib=rb-4.1.0&q=80&w=400',
      results: '+$50K revenue',
      timeFrame: 'in 6 months'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Content Creator',
      company: 'Solo Entrepreneur',
      content: 'I was spending 15 hours a week on social media. Now it\'s automated and performing better than ever. I can focus on what I love - creating products.',
      avatar: 'ER',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzU4MTc4OTgxfDA&ixlib=rb-4.1.0&q=80&w=400',
      results: '15 hours saved',
      timeFrame: 'per week'
    }
  ];

  const stats = [
    { value: '50K+', label: 'Happy Creators', icon: Users },
    { value: '10M+', label: 'Posts Generated', icon: PenTool },
    { value: '300%', label: 'Avg. Growth', icon: TrendingUp },
    { value: '4.9★', label: 'User Rating', icon: Star }
  ];

  const samplePosts = [
    {
      platform: 'LinkedIn',
      content: '🚀 Just launched our new AI-powered feature and the results are incredible!\n\n✅ 40% faster processing\n✅ 60% better accuracy  \n✅ 100% happier customers\n\nSometimes the best innovations come from listening to your users. What feature would you love to see next?\n\n#Innovation #AI #CustomerFirst #TechLeadership',
      engagement: { likes: 247, comments: 32, shares: 18 },
      color: 'border-blue-200 bg-blue-50',
      image: 'https://images.unsplash.com/photo-1652176862396-99e525e9f87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMHVyYmFuJTIwdHJhdmVsfGVufDF8fHx8MTc1ODIwMTg1Nnww&ixlib=rb-4.1.0&q=80&w=600'
    },
    {
      platform: 'Instagram',
      content: 'Monday motivation ✨\n\n"The best time to plant a tree was 20 years ago. The second best time is now." - Chinese Proverb\n\nStarting this week with:\n🎯 Clear intentions\n💪 Bold actions\n🌟 Positive energy\n\nWhat\'s your one big goal this week? 👇\n\n#MondayMotivation #Goals #Growth #Mindset',
      engagement: { likes: 892, comments: 67, shares: 45 },
      color: 'border-pink-200 bg-pink-50',
      image: 'https://images.unsplash.com/photo-1484945200922-265f58c12b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwcGFsbSUyMHRyZWVzfGVufDF8fHx8MTc1ODIwNDYxMHww&ixlib=rb-4.1.0&q=80&w=600'
    },
    {
      platform: 'Twitter',
      content: 'Hot take: The best marketing strategy in 2024 isn\'t about having the biggest budget.\n\nIt\'s about being genuinely helpful to your audience.\n\n• Answer their questions\n• Solve their problems  \n• Share valuable insights\n• Build real relationships\n\nValue first, sales second. Always. 🧵',
      engagement: { likes: 1204, comments: 89, shares: 156 },
      color: 'border-sky-200 bg-sky-50',
      image: 'https://images.unsplash.com/photo-1752281739029-0594d372b96c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGFkdmVudHVyZSUyMGhpa2luZ3xlbnwxfHx8fDE3NTgyMDQ2MTB8MA&ixlib=rb-4.1.0&q=80&w=600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating Orbs with enhanced animations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-full blur-xl animate-bounce delay-2000" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Geometric Shapes with enhanced animations */}
        <div className="absolute top-1/3 left-5 w-6 h-6 border border-purple-200/30 animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 right-10 w-4 h-4 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full animate-bounce delay-700" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-8 h-8 border-2 border-indigo-200/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        
        {/* Dot Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.015]">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50 opacity-0 animate-pulse" style={{ animation: 'fadeInDown 0.6s ease-out 0.1s forwards' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-6 group-hover:animate-pulse">
                  <Brain className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-bounce shadow-md" style={{ animationDelay: '1s' }}></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
                  PostGenius
                </span>
                <span className="text-xs text-gray-500 font-medium tracking-wider">
                  AI Social Media
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-8">
                <a href="#features" className="relative group text-gray-600 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 font-medium">
                  Features
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#pricing" className="relative group text-gray-600 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 font-medium">
                  Pricing
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#testimonials" className="relative group text-gray-600 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 font-medium">
                  Success Stories
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#about" className="relative group text-gray-600 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 font-medium">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#help" className="relative group text-gray-600 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 font-medium">
                  Help
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <Button 
                  variant="outline" 
                  onClick={() => onLogin(false)} 
                  className="relative bg-white/80 backdrop-blur-sm border-2 border-purple-200 text-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:border-purple-300 hover:scale-105 hover:shadow-xl transform transition-all duration-300 px-6 py-2 font-semibold group-hover:text-purple-800"
                >
                  <span className="flex items-center gap-2">
                    Log In
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 to-pink-100/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2 text-sm opacity-0" style={{ animation: 'fadeInUp 0.6s ease-out 0.1s forwards' }}>
                  🚀 Trusted by 50,000+ creators worldwide
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight opacity-0" style={{ animation: 'fadeInUp 0.6s ease-out 0.2s forwards' }}>
                  Social Media{' '}
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    That Sells
                  </span>{' '}
                  While You Sleep
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed opacity-0" style={{ animation: 'fadeInUp 0.6s ease-out 0.3s forwards' }}>
                  PostGenius creates, schedules, and optimizes your social media content using advanced AI. 
                  Get viral-worthy posts that convert followers into customers, automatically.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 opacity-0" style={{ animation: 'fadeInUp 0.6s ease-out 0.4s forwards' }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg px-8 py-4 text-lg h-14 hover:scale-105 transform transition-all duration-300 hover:shadow-xl group"
                  onClick={() => onLogin(true)}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-gray-200 px-8 py-4 text-lg h-14 hover:scale-105 hover:shadow-lg transform transition-all duration-300 group">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 opacity-0" style={{ animation: 'fadeInUp 0.6s ease-out 0.5s forwards' }}>
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center group hover:scale-105 transform transition-all duration-300">
                      <div className="flex items-center justify-center mb-2">
                        <Icon className="w-5 h-5 text-purple-600 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hero Image & Login Form */}
            <div className="space-y-8 opacity-0" style={{ animation: 'fadeInRight 0.6s ease-out 0.2s forwards' }}>
              {/* Dashboard Preview */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 overflow-hidden hover:shadow-3xl hover:scale-105 transform transition-all duration-500">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1584291527905-f930791fb1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjcmVlbiUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc1ODIwNzEwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="PostGenius Dashboard"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center animate-pulse">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">+347% Engagement This Month</div>
                        <div className="text-sm text-gray-600">Across all platforms</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="hover:scale-110 transform transition-all duration-300">
                        <div className="text-lg font-bold text-purple-600">156</div>
                        <div className="text-xs text-gray-600">Posts Generated</div>
                      </div>
                      <div className="hover:scale-110 transform transition-all duration-300">
                        <div className="text-lg font-bold text-pink-600">24.5K</div>
                        <div className="text-xs text-gray-600">New Followers</div>
                      </div>
                      <div className="hover:scale-110 transform transition-all duration-300">
                        <div className="text-lg font-bold text-orange-600">$12.4K</div>
                        <div className="text-xs text-gray-600">Revenue Generated</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* Sample Posts Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
        {/* Decorative Elements for Sample Posts */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-3 h-3 bg-purple-300/20 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-pink-300/20 rounded-full animate-pulse delay-1500"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-purple-200/30 rounded-xl animate-rotateFloat"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-16 animate-fadeInUp">
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2">
              ✨ AI-Generated Content
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              See{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                PostGenius
              </span>{' '}
              in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These viral posts were created by our AI in seconds. No brainstorming, no writer's block, 
              just high-performing content that drives real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {samplePosts.map((post, index) => (
              <Card key={index} className={`${post.color} border-2 shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 hover:scale-105 overflow-hidden animate-fadeInUp stagger-${index + 1}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="font-medium group-hover:scale-110 transition-transform duration-300">
                      {post.platform}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Sparkles className="w-3 h-3 group-hover:rotate-12 transition-transform duration-300" />
                      AI Generated
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Travel Image */}
                  <div className="relative overflow-hidden rounded-lg">
                    <ImageWithFallback
                      src={post.image}
                      alt={`${post.platform} post image`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-300"></div>
                  </div>

                  <div className="bg-white/80 p-4 rounded-lg border border-white/50 group-hover:bg-white/90 transition-all duration-300">
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{post.content}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-red-500 hover:scale-110 transform transition-all duration-200">
                        <Heart className="w-4 h-4" />
                        <span className="font-medium">{post.engagement.likes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1 text-blue-500 hover:scale-110 transform transition-all duration-200">
                        <MessageCircle className="w-4 h-4" />
                        <span className="font-medium">{post.engagement.comments}</span>
                      </div>
                      <div className="flex items-center gap-1 text-green-500 hover:scale-110 transform transition-all duration-200">
                        <Share2 className="w-4 h-4" />
                        <span className="font-medium">{post.engagement.shares}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-white/50 group-hover:bg-white/80 transition-all duration-300">
                      Viral Post
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center animate-fadeInUp stagger-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg hover:scale-105 hover:shadow-xl transform transition-all duration-300 group"
              onClick={() => onLogin(true)}
            >
              Create Posts Like These
              <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
            <p className="text-sm text-gray-600 mt-3">
              Generate unlimited viral content in seconds
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-16 animate-fadeInUp">
            <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 px-4 py-2">
              🔄 Simple Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              How{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                PostGenius Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From setup to viral content in minutes. Our AI handles the heavy lifting while you focus on growing your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group animate-scaleIn stagger-1">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-600 transition-colors duration-300">Connect Your Brand</h3>
              <p className="text-gray-600 leading-relaxed">
                Tell our AI about your business, voice, and goals. Upload your brand guidelines and let our system learn your unique style.
              </p>
            </div>

            <div className="text-center group animate-scaleIn stagger-2">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">AI Creates Content</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI scans trending topics, analyzes your audience, and generates high-performing content tailored to each platform.
              </p>
            </div>

            <div className="text-center group animate-scaleIn stagger-3">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-green-600 transition-colors duration-300">Watch It Grow</h3>
              <p className="text-gray-600 leading-relaxed">
                Approve, schedule, and watch your engagement soar. Our AI continuously optimizes based on performance data.
              </p>
            </div>
          </div>

          <div className="text-center animate-fadeInUp stagger-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg hover:scale-105 hover:shadow-xl transform transition-all duration-300 group"
              onClick={() => onLogin(true)}
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-16 w-4 h-4 bg-blue-300/30 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-32 left-12 w-6 h-6 border border-slate-200/40 rounded-full animate-float delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-indigo-300/20 rounded-full animate-bounce delay-1500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeInLeft">
              <div>
                <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 px-4 py-2 mb-4">
                  🤖 Advanced AI Technology
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Powered by{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Next-Gen AI
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Our proprietary AI combines natural language processing, trend analysis, and audience insights 
                  to create content that resonates with your specific audience.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">Smart Content Generation</h4>
                    <p className="text-gray-600 text-sm">Advanced language models trained on millions of high-performing social media posts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">Trend Analysis Engine</h4>
                    <p className="text-gray-600 text-sm">Real-time monitoring of viral content, hashtags, and emerging trends across all platforms.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 group-hover:text-green-600 transition-colors duration-300">Audience Intelligence</h4>
                    <p className="text-gray-600 text-sm">Deep understanding of your audience demographics, preferences, and engagement patterns.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 group-hover:text-orange-600 transition-colors duration-300">Optimal Timing AI</h4>
                    <p className="text-gray-600 text-sm">Machine learning algorithms that predict the best times to post for maximum engagement.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-fadeInRight">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-2xl blur-3xl animate-pulse"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgxMzA4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI Technology Visualization"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transform transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-lg font-bold">Advanced AI Engine</div>
                <div className="text-sm opacity-90">Processing millions of data points</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-16 w-8 h-8 border border-purple-200/30 rounded-xl animate-rotateFloat delay-300"></div>
          <div className="absolute bottom-24 right-20 w-5 h-5 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full animate-float delay-800"></div>
          <div className="absolute top-1/3 left-8 w-3 h-3 bg-indigo-300/30 rounded-full animate-pulse delay-1200"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-16 animate-fadeInUp">
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2">
              🔗 Seamless Integrations
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Connect All Your{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Favorite Platforms
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PostGenius works seamlessly with all major social media platforms and marketing tools. 
              One dashboard to rule them all.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
            {[
              { name: 'LinkedIn', color: 'from-blue-600 to-blue-700', icon: '💼' },
              { name: 'Instagram', color: 'from-pink-500 to-purple-600', icon: '📸' },
              { name: 'Twitter', color: 'from-sky-400 to-blue-500', icon: '🐦' },
              { name: 'Facebook', color: 'from-blue-600 to-indigo-700', icon: '👥' },
              { name: 'TikTok', color: 'from-black to-gray-800', icon: '🎵' },
              { name: 'YouTube', color: 'from-red-500 to-red-600', icon: '📺' },
              { name: 'Pinterest', color: 'from-red-500 to-pink-500', icon: '📌' },
              { name: 'Threads', color: 'from-purple-600 to-indigo-600', icon: '🧵' },
              { name: 'Snapchat', color: 'from-yellow-400 to-yellow-500', icon: '👻' },
              { name: 'WhatsApp', color: 'from-green-500 to-green-600', icon: '💬' },
              { name: 'Telegram', color: 'from-blue-400 to-sky-500', icon: '✈️' },
              { name: 'Reddit', color: 'from-orange-500 to-red-500', icon: '🤖' }
            ].map((platform, index) => (
              <div key={index} className={`group animate-scaleIn stagger-${(index % 6) + 1}`}>
                <div className={`w-20 h-20 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:shadow-xl transform transition-all duration-300`}>
                  <span className="text-2xl">{platform.icon}</span>
                </div>
                <p className="text-center mt-3 text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                  {platform.name}
                </p>
              </div>
            ))}
          </div>

          <div className="relative animate-fadeInUp">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-2xl blur-2xl"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1590103514226-48facf4657fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVncmF0aW9uJTIwd29ya2Zsb3d8ZW58MXx8fHwxNzU4MjA1ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Integration Workflow"
              className="relative rounded-2xl shadow-2xl w-full h-64 object-cover hover:scale-105 transform transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="text-lg font-bold">One Dashboard, All Platforms</div>
              <div className="text-sm opacity-90">Streamlined workflow for maximum efficiency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-6 h-6 bg-orange-300/20 rounded-full animate-float delay-700"></div>
          <div className="absolute bottom-32 left-16 w-4 h-4 border border-red-200/30 animate-bounce delay-1100"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 border border-orange-200/20 rounded-xl animate-rotateFloat delay-400"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-16 animate-fadeInUp">
            <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 px-4 py-2">
              🎨 Diverse Content Types
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Every Type of{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Content You Need
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From thought leadership articles to viral memes, our AI creates diverse content 
              that keeps your audience engaged and coming back for more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: PenTool,
                title: 'Thought Leadership',
                description: 'Industry insights, expert opinions, and professional commentary that establishes your authority.',
                examples: ['Industry Analysis', 'Expert Tips', 'Future Predictions'],
                color: 'from-blue-500 to-indigo-600'
              },
              {
                icon: Heart,
                title: 'Engaging Stories',
                description: 'Personal anecdotes, customer success stories, and behind-the-scenes content.',
                examples: ['Customer Stories', 'Company Updates', 'Personal Insights'],
                color: 'from-pink-500 to-red-600'
              },
              {
                icon: TrendingUp,
                title: 'Trending Content',
                description: 'Viral challenges, memes, and trending topics adapted to your brand voice.',
                examples: ['Viral Challenges', 'Trending Hashtags', 'Pop Culture'],
                color: 'from-green-500 to-emerald-600'
              },
              {
                icon: Lightbulb,
                title: 'Educational Posts',
                description: 'How-to guides, tutorials, and educational content that provides real value.',
                examples: ['How-to Guides', 'Tutorials', 'Tips & Tricks'],
                color: 'from-yellow-500 to-orange-600'
              },
              {
                icon: Users,
                title: 'Community Building',
                description: 'Questions, polls, and interactive content that sparks conversations.',
                examples: ['Polls & Surveys', 'Q&A Sessions', 'Discussion Starters'],
                color: 'from-purple-500 to-pink-600'
              },
              {
                icon: Rocket,
                title: 'Promotional Content',
                description: 'Product launches, offers, and promotional content that drives conversions.',
                examples: ['Product Launches', 'Special Offers', 'Event Announcements'],
                color: 'from-cyan-500 to-blue-600'
              }
            ].map((type, index) => (
              <Card key={index} className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:scale-105 hover:-translate-y-1 animate-scaleIn stagger-${index + 1}`}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                      <type.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 transition-colors duration-300">{type.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{type.description}</p>
                      <div className="space-y-1">
                        {type.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            <span>{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fadeInUp stagger-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg hover:scale-105 hover:shadow-xl transform transition-all duration-300 group"
              onClick={() => onLogin(true)}
            >
              Start Creating Content
              <PenTool className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-gray-100 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-20 w-5 h-5 bg-slate-300/30 rounded-full animate-pulse delay-600"></div>
          <div className="absolute bottom-20 right-24 w-3 h-3 border border-gray-300/40 animate-float delay-900"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fadeInLeft">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-300/20 to-gray-300/20 rounded-2xl blur-3xl animate-pulse"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGF0YSUyMHByb3RlY3Rpb258ZW58MXx8fHwxNzU4MjA1ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Security and Data Protection"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transform transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-lg font-bold">Enterprise-Grade Security</div>
                <div className="text-sm opacity-90">Your data is always protected</div>
              </div>
            </div>

            <div className="space-y-8 animate-fadeInRight">
              <div>
                <Badge className="bg-gradient-to-r from-slate-600 to-gray-700 text-white border-0 px-4 py-2 mb-4">
                  🔒 Security & Privacy
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Your Data is{' '}
                  <span className="bg-gradient-to-r from-slate-600 to-gray-700 bg-clip-text text-transparent">
                    Safe & Secure
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  We take security seriously. PostGenius is built with enterprise-grade security measures 
                  to protect your brand and sensitive information.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-green-600 transition-colors duration-300">SOC 2 Compliant</h4>
                    <p className="text-gray-600 text-sm">Industry-standard security certification</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors duration-300">End-to-End Encryption</h4>
                    <p className="text-gray-600 text-sm">Your content is encrypted at rest and in transit</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-purple-600 transition-colors duration-300">GDPR Ready</h4>
                    <p className="text-gray-600 text-sm">Full compliance with privacy regulations</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <RefreshCw className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-orange-600 transition-colors duration-300">Regular Backups</h4>
                    <p className="text-gray-600 text-sm">Automated daily backups across multiple regions</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span>99.9% Uptime SLA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                      <Headphones className="w-4 h-4 text-white" />
                    </div>
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-16 w-24 h-24 border border-purple-100/40 rounded-full animate-float delay-700"></div>
          <div className="absolute bottom-24 left-20 w-6 h-6 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full animate-pulse delay-1200"></div>
          <div className="absolute top-1/3 left-12 w-3 h-3 bg-indigo-200/40 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-16 animate-fadeInUp">
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2">
              ⚡ Powerful Features
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Dominate Social Media
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI-powered content creation to advanced analytics, PostGenius provides all the tools 
              you need to build a massive, engaged following across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:scale-105 hover:-translate-y-2 animate-scaleIn stagger-${index + 1}`}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="relative">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">{feature.description}</p>
                        <div className="text-xs text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded-full inline-block">
                          {feature.stats}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center animate-fadeInUp stagger-5">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg hover:scale-105 hover:shadow-xl transform transition-all duration-300 group"
              onClick={() => onLogin(true)}
            >
              Explore All Features
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-16 w-8 h-8 bg-green-200/30 animate-float delay-400"></div>
          <div className="absolute bottom-24 right-20 w-5 h-5 border border-emerald-200/40 animate-bounce delay-800"></div>
          <div className="absolute top-1/2 right-12 w-3 h-3 bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-16 animate-fadeInUp">
            <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 px-4 py-2">
              💰 Incredible ROI
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              See Your{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Return on Investment
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PostGenius doesn't just save time—it drives real business results. Our users see massive returns 
              within their first month of using the platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 group hover:scale-105 animate-scaleIn stagger-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">3x</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors duration-300">Revenue Growth</h3>
                <p className="text-gray-600 text-sm mb-4">Average revenue increase within 90 days of using PostGenius</p>
                <div className="text-green-600 font-medium text-sm bg-green-50 px-3 py-1 rounded-full inline-block">
                  Based on 10,000+ users
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 group hover:scale-105 animate-scaleIn stagger-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg font-bold text-white">40h</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">Time Saved Monthly</h3>
                <p className="text-gray-600 text-sm mb-4">Hours saved per month that you can reinvest in growing your business</p>
                <div className="text-blue-600 font-medium text-sm bg-blue-50 px-3 py-1 rounded-full inline-block">
                  = $2,000+ in time value
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 group hover:scale-105 animate-scaleIn stagger-3">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg font-bold text-white">85%</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">Cost Reduction</h3>
                <p className="text-gray-600 text-sm mb-4">Less spending on content creation agencies and freelancers</p>
                <div className="text-purple-600 font-medium text-sm bg-purple-50 px-3 py-1 rounded-full inline-block">
                  Typical savings: $5,000/mo
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fadeInUp stagger-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">ROI Calculator</h3>
              <p className="text-gray-600">See how much PostGenius could save your business</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-green-600 mb-2">$97</div>
                <div className="text-sm text-gray-600">Monthly Investment</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">$7,000</div>
                <div className="text-sm text-gray-600">Average Monthly Savings</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">7,115%</div>
                <div className="text-sm text-gray-600">Return on Investment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-20 w-6 h-6 bg-indigo-200/30 rounded-full animate-pulse delay-600"></div>
          <div className="absolute bottom-20 left-16 w-4 h-4 border border-purple-200/40 animate-float delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-16 animate-fadeInUp">
            <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 px-4 py-2">
              🏆 Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Real Results from{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Real Creators
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. See how PostGenius has transformed the social media presence 
              of thousands of creators and businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:scale-105 hover:-translate-y-2 animate-scaleIn stagger-${index + 1}`}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
                    
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <div className="relative">
                        <ImageWithFallback
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-xs text-gray-500">{testimonial.company}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3">
                      <div className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        {testimonial.results}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.timeFrame}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fadeInUp stagger-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg hover:scale-105 hover:shadow-xl transform transition-all duration-300 group"
              onClick={() => onLogin(true)}
            >
              Join Our Success Stories
              <Award className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Animated background particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-white/10 rounded-full animate-bounce delay-500"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-fadeInUp">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight animate-fadeInUp stagger-1">
            Ready to transform your social media?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fadeInUp stagger-2">
            Join thousands of creators who've automated their social media success. 
            Start your free trial today and see the difference AI can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp stagger-3">
            <Button 
              size="lg" 
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold hover:scale-110 hover:shadow-2xl transform transition-all duration-300 group"
              onClick={() => onLogin(true)}
            >
              Start Free Trial
              <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg hover:scale-110 transform transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </div>
          <div className="text-white/80 text-sm animate-fadeInUp stagger-4">
            ✨ 14-day free trial • No credit card required • Cancel anytime
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 animate-fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">PostGenius</span>
              </div>
              <p className="text-gray-400 text-sm">
                The most powerful AI-driven social media automation platform for modern creators.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Features</div>
                <div>Pricing</div>
                <div>API</div>
                <div>Integrations</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Help Center</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Status</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 PostGenius. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}