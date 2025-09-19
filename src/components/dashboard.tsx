import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  Zap, 
  ArrowRight,
  Clock,
  CheckCircle,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

export function Dashboard() {
  const stats = [
    {
      title: 'Posts This Month',
      value: '247',
      change: '+12%',
      icon: Calendar,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      iconBg: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Total Engagement',
      value: '18.4K',
      change: '+23%',
      icon: TrendingUp,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      iconBg: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Followers Gained',
      value: '1,284',
      change: '+8%',
      icon: Users,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      iconBg: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Posts Generated',
      value: '89',
      change: '+45%',
      icon: Zap,
      gradient: 'from-orange-500 to-yellow-500',
      bgGradient: 'from-orange-50 to-yellow-50',
      iconBg: 'from-orange-500 to-yellow-500'
    }
  ];

  const recentPosts = [
    {
      id: 1,
      content: "🚀 The future of AI in content creation is here! Our latest research shows that AI-generated content can boost engagement by up to 40%...",
      platform: 'LinkedIn',
      status: 'published',
      engagement: '234 likes, 12 comments',
      time: '2 hours ago'
    },
    {
      id: 2,
      content: "Breaking: New social media trends that will dominate 2024. Thread 🧵 1/5",
      platform: 'Twitter',
      status: 'published',
      engagement: '89 retweets, 156 likes',
      time: '4 hours ago'
    },
    {
      id: 3,
      content: "Behind the scenes of our AI content creation process ✨ #ContentStrategy #AI",
      platform: 'Instagram',
      status: 'scheduled',
      engagement: 'Scheduled for 6 PM',
      time: 'Today at 6:00 PM'
    }
  ];

  const upcomingPosts = [
    {
      content: "Weekly roundup: Top 5 marketing insights from this week",
      platform: 'LinkedIn',
      time: 'Today, 3:00 PM'
    },
    {
      content: "Quick tip: How to increase your organic reach by 300%",
      platform: 'Twitter',
      time: 'Tomorrow, 9:00 AM'
    },
    {
      content: "Monday motivation post with inspiring quote + visual",
      platform: 'Instagram',
      time: 'Monday, 8:00 AM'
    }
  ];

  return (
    <div className="h-full overflow-auto">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Welcome back! Here's your social media performance overview.
            </p>
          </div>
          <Button className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-sm px-6">
            <Zap className="w-4 h-4" />
            Generate AI Content
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className={`border-0 shadow-sm bg-gradient-to-br ${stat.bgGradient} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full -mr-10 -mt-10"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-700">{stat.title}</CardTitle>
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.iconBg} flex items-center justify-center shadow-sm`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <p className="text-xs text-gray-600 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3 text-green-600" />
                    <span className="text-green-600 font-medium">{stat.change}</span> 
                    <span>from last month</span>
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Posts</CardTitle>
              <CardDescription>Your latest published and scheduled content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="text-xs">
                      {post.platform.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                        {post.platform}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.time}</span>
                      {post.status === 'published' ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : (
                        <Clock className="w-4 h-4 text-orange-600" />
                      )}
                    </div>
                    <p className="text-sm mb-2 line-clamp-2">{post.content}</p>
                    <p className="text-xs text-muted-foreground">{post.engagement}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Posts
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Sidebar Cards */}
          <div className="space-y-6">
            {/* AI Generation Status */}
            <Card className="border-0 shadow-sm bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/30 to-transparent rounded-full -mr-8 -mt-8"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-sm">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  AI Generation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2 text-gray-700">
                    <span>Daily Quota</span>
                    <span className="font-medium">23/30</span>
                  </div>
                  <div className="w-full bg-white/60 rounded-full h-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full shadow-sm" style={{ width: '76%' }}></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <AlertCircle className="w-4 h-4 text-indigo-500" />
                  <span>7 posts remaining today</span>
                </div>
                <Button size="sm" className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-sm">
                  <Zap className="w-4 h-4 mr-2" />
                  Generate Now
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Posts */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Posts</CardTitle>
                <CardDescription>Your next scheduled content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingPosts.map((post, index) => (
                  <div key={index} className="flex gap-3 p-3 rounded-lg bg-muted/30">
                    <Clock className="w-4 h-4 text-muted-foreground mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{post.platform}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-1">
                        {post.content}
                      </p>
                      <p className="text-xs text-muted-foreground">{post.time}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View Calendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}