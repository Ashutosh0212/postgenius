import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Brain, 
  ArrowLeft,
  Eye,
  EyeOff,
  Mail,
  Lock,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Users,
  Star,
  Shield
} from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
  onBack: () => void;
  isSignUp?: boolean;
}

export function Login({ onLogin, onBack, isSignUp = false }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(isSignUp);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  const features = [
    { icon: TrendingUp, text: 'AI-powered content generation' },
    { icon: Users, text: '50,000+ creators trust us' },
    { icon: Star, text: '4.9★ average rating' },
    { icon: Shield, text: 'Enterprise-grade security' }
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
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-full blur-xl animate-float"></div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                PostGenius
              </span>
            </div>
            <div className="w-16"></div> {/* Spacer for centering */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Branding & Features */}
          <div className="space-y-8 opacity-0" style={{ animation: 'fadeInLeft 0.6s ease-out 0.2s forwards' }}>
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2">
                🚀 Welcome to the Future of Social Media
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {isSignUpMode ? 'Start Your' : 'Welcome Back to'}{' '}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Success Story
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {isSignUpMode 
                  ? 'Join thousands of creators who are automating their social media success with AI-powered content generation.'
                  : 'Continue building your social media empire with AI that never sleeps.'
                }
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3 opacity-0" style={{ animation: `fadeInUp 0.6s ease-out ${0.4 + index * 0.1}s forwards` }}>
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Social Proof */}
            <div className="opacity-0" style={{ animation: 'fadeInUp 0.6s ease-out 0.8s forwards' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl blur-2xl"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzU4MTc4OTgxfDA&ixlib=rb-4.1.0&q=80&w=500"
                  alt="Team celebrating success"
                  className="relative rounded-2xl shadow-xl w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="font-semibold">Join the Success</div>
                  <div className="text-sm opacity-90">50,000+ creators growing daily</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="opacity-0" style={{ animation: 'fadeInRight 0.6s ease-out 0.3s forwards' }}>
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="space-y-4 pb-6">
                <div className="text-center">
                  <CardTitle className="text-3xl">
                    {isSignUpMode ? 'Create Account' : 'Sign In'}
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    {isSignUpMode 
                      ? 'Get started with your free trial today' 
                      : 'Welcome back! Please sign in to continue'
                    }
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {isSignUpMode && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Full Name</label>
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="Enter your full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="h-12 text-base pl-4 hover:scale-[1.02] focus:scale-[1.02] transform transition-all duration-200"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 text-base pl-11 hover:scale-[1.02] focus:scale-[1.02] transform transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-12 text-base pl-11 pr-11 hover:scale-[1.02] focus:scale-[1.02] transform transition-all duration-200"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {isSignUpMode && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="h-12 text-base pl-11 pr-11 hover:scale-[1.02] focus:scale-[1.02] transform transition-all duration-200"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                  )}

                  {!isSignUpMode && (
                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm text-gray-600">Remember me</span>
                      </label>
                      <a href="#" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                        Forgot password?
                      </a>
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg text-base hover:scale-105 hover:shadow-xl transform transition-all duration-300 group"
                  >
                    {isSignUpMode ? (
                      <>
                        Start Free Trial
                        <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      </>
                    ) : (
                      <>
                        Sign In to Dashboard
                        <CheckCircle className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      </>
                    )}
                  </Button>

                  {isSignUpMode && (
                    <div className="text-xs text-gray-500 text-center leading-relaxed p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
                      By signing up, you agree to our Terms of Service and Privacy Policy. 
                      <br />✨ 14-day free trial • No credit card required • Cancel anytime
                    </div>
                  )}
                  
                  <div className="text-center pt-4">
                    <button
                      type="button"
                      onClick={() => setIsSignUpMode(!isSignUpMode)}
                      className="text-purple-600 hover:text-purple-700 font-medium hover:scale-105 transform transition-all duration-200"
                    >
                      {isSignUpMode 
                        ? 'Already have an account? Sign in' 
                        : "Don't have an account? Start free trial"
                      }
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}