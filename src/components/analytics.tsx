import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown,
  Users, 
  Heart, 
  MessageCircle, 
  Share,
  Download,
  Calendar,
  Target,
  Award
} from 'lucide-react';

export function Analytics() {
  const [dateRange, setDateRange] = useState('30d');

  const engagementData = [
    { name: 'Mon', likes: 120, comments: 25, shares: 15, reach: 2400 },
    { name: 'Tue', likes: 98, comments: 18, shares: 12, reach: 2100 },
    { name: 'Wed', likes: 156, comments: 32, shares: 28, reach: 3200 },
    { name: 'Thu', likes: 134, comments: 28, shares: 22, reach: 2800 },
    { name: 'Fri', likes: 189, comments: 45, shares: 35, reach: 3800 },
    { name: 'Sat', likes: 167, comments: 38, shares: 30, reach: 3400 },
    { name: 'Sun', likes: 145, comments: 30, shares: 24, reach: 2900 },
  ];

  const platformData = [
    { name: 'LinkedIn', value: 45, posts: 23, engagement: '4.2%' },
    { name: 'Twitter', value: 35, posts: 18, engagement: '3.8%' },
    { name: 'Instagram', value: 20, posts: 12, engagement: '5.1%' },
  ];

  const performanceData = [
    { date: '2024-11-01', aiPosts: 12, manualPosts: 8, aiEngagement: 4.2, manualEngagement: 3.1 },
    { date: '2024-11-08', aiPosts: 15, manualPosts: 6, aiEngagement: 4.8, manualEngagement: 2.9 },
    { date: '2024-11-15', aiPosts: 18, manualPosts: 7, aiEngagement: 5.2, manualEngagement: 3.3 },
    { date: '2024-11-22', aiPosts: 21, manualPosts: 5, aiEngagement: 5.6, manualEngagement: 3.0 },
  ];

  const topPosts = [
    {
      id: 1,
      content: "AI is revolutionizing content creation...",
      platform: 'LinkedIn',
      engagement: 1248,
      likes: 234,
      comments: 45,
      shares: 67,
      type: 'AI Generated'
    },
    {
      id: 2,
      content: "5 productivity tips that actually work...",
      platform: 'Twitter',
      engagement: 892,
      likes: 156,
      comments: 23,
      shares: 89,
      type: 'AI Generated'
    },
    {
      id: 3,
      content: "Behind the scenes of our startup journey...",
      platform: 'Instagram',
      engagement: 674,
      likes: 187,
      comments: 34,
      shares: 12,
      type: 'Manual'
    }
  ];

  const COLORS = ['#3b82f6', '#06b6d4', '#8b5cf6'];

  const stats = [
    {
      title: 'Total Engagement',
      value: '18.4K',
      change: '+23.5%',
      trend: 'up',
      icon: Heart,
      description: 'vs last month'
    },
    {
      title: 'Reach',
      value: '124.2K',
      change: '+18.2%',
      trend: 'up',
      icon: Users,
      description: 'unique accounts'
    },
    {
      title: 'Avg. Engagement Rate',
      value: '4.8%',
      change: '+0.8%',
      trend: 'up',
      icon: Target,
      description: 'across all platforms'
    },
    {
      title: 'AI Performance Boost',
      value: '+67%',
      change: '+12%',
      trend: 'up',
      icon: Award,
      description: 'vs manual posts'
    }
  ];

  return (
    <div className="h-full overflow-auto">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-muted-foreground mt-1">
              Track your social media performance and AI content effectiveness
            </p>
          </div>
          <div className="flex gap-3">
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    {stat.trend === 'up' ? (
                      <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-red-600 mr-1" />
                    )}
                    <span className={stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                      {stat.change}
                    </span>
                    <span className="ml-1">{stat.description}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="engagement" className="space-y-6">
          <TabsList>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
            <TabsTrigger value="ai-performance">AI Performance</TabsTrigger>
            <TabsTrigger value="top-posts">Top Posts</TabsTrigger>
          </TabsList>

          <TabsContent value="engagement" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Engagement Chart */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Engagement Overview</CardTitle>
                  <CardDescription>Daily engagement metrics across all platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={engagementData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="likes" stackId="1" stroke="#3b82f6" fill="#3b82f6" />
                      <Area type="monotone" dataKey="comments" stackId="1" stroke="#06b6d4" fill="#06b6d4" />
                      <Area type="monotone" dataKey="shares" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Reach Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Reach</CardTitle>
                  <CardDescription>Total accounts reached</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={engagementData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="reach" stroke="#3b82f6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Engagement Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Engagement Breakdown</CardTitle>
                  <CardDescription>Distribution of engagement types</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm">Likes</span>
                    </div>
                    <span className="font-medium">1,209</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">Comments</span>
                    </div>
                    <span className="font-medium">216</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Share className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Shares</span>
                    </div>
                    <span className="font-medium">166</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="platforms" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Platform Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Platform Distribution</CardTitle>
                  <CardDescription>Engagement by platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={platformData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name} ${value}%`}
                      >
                        {platformData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Platform Performance */}
              <Card>
                <CardHeader>
                  <CardTitle>Platform Performance</CardTitle>
                  <CardDescription>Detailed metrics by platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {platformData.map((platform, index) => (
                    <div key={platform.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{platform.name}</span>
                        <Badge variant="outline">{platform.engagement} avg. rate</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{platform.posts} posts</span>
                        <span>{platform.value}% of total engagement</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="h-2 rounded-full" 
                          style={{ 
                            width: `${platform.value}%`, 
                            backgroundColor: COLORS[index % COLORS.length] 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ai-performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI vs Manual Content Performance</CardTitle>
                <CardDescription>Comparing AI-generated content with manually created posts</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Bar yAxisId="left" dataKey="aiPosts" fill="#3b82f6" name="AI Posts" />
                    <Bar yAxisId="left" dataKey="manualPosts" fill="#06b6d4" name="Manual Posts" />
                    <Line yAxisId="right" type="monotone" dataKey="aiEngagement" stroke="#8b5cf6" name="AI Engagement %" />
                    <Line yAxisId="right" type="monotone" dataKey="manualEngagement" stroke="#f59e0b" name="Manual Engagement %" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="top-posts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Posts</CardTitle>
                <CardDescription>Your highest engagement content this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topPosts.map((post, index) => (
                  <div key={post.id} className="flex gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full font-bold">
                      #{index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{post.platform}</Badge>
                        <Badge variant={post.type === 'AI Generated' ? 'default' : 'secondary'}>
                          {post.type}
                        </Badge>
                      </div>
                      <p className="text-sm mb-2 line-clamp-2">{post.content}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {post.comments}
                        </span>
                        <span className="flex items-center gap-1">
                          <Share className="w-3 h-3" />
                          {post.shares}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{post.engagement.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">total engagement</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}