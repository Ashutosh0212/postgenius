import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback } from './ui/avatar';
import { 
  Calendar,
  Clock,
  Image as ImageIcon,
  Sparkles,
  Send,
  Save,
  Eye,
  RefreshCw,
  Edit3,
  Check,
  Wand2,
  TrendingUp,
  Users,
  Play
} from 'lucide-react';

export function Compose() {
  const [selectedPlatforms, setSelectedPlatforms] = useState(['linkedin']);
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [editingContent, setEditingContent] = useState('');
  const [scheduleType, setScheduleType] = useState('now');
  const [contentCategory, setContentCategory] = useState('marketing');

  const platforms = [
    { id: 'linkedin', name: 'LinkedIn', color: 'bg-blue-600', limit: 3000 },
    { id: 'instagram', name: 'Instagram', color: 'bg-pink-600', limit: 2200 }
  ];

  const contentCategories = [
    { id: 'marketing', name: 'Marketing Tips', color: 'text-blue-600' },
    { id: 'industry', name: 'Industry News', color: 'text-green-600' },
    { id: 'motivation', name: 'Motivation', color: 'text-purple-600' },
    { id: 'education', name: 'Educational', color: 'text-orange-600' },
    { id: 'company', name: 'Company Updates', color: 'text-cyan-600' }
  ];

  const aiGeneratedPosts = [
    {
      id: 1,
      category: 'marketing',
      platform: 'LinkedIn',
      content: "🚀 The AI revolution in content marketing is here!\n\nRecent studies show businesses using AI for content creation see:\n• 40% higher engagement rates\n• 60% reduction in content creation time\n• 3x more consistent brand voice\n• 25% increase in lead generation\n\nThe key? Finding the right balance between automation and human creativity.\n\nWhat's your experience with AI-powered content tools? Share your insights below! 👇\n\n#AIMarketing #ContentStrategy #DigitalMarketing #MarketingTips",
      engagement_score: 92,
      trending_topics: ['AI', 'Marketing', 'Automation'],
      optimal_time: '2:00 PM',
      hasImage: true,
      imageDescription: 'Modern AI dashboard with analytics charts and marketing metrics'
    },
    {
      id: 2,
      category: 'industry',
      platform: 'LinkedIn',
      content: "Breaking: New research reveals the future of remote work 📊\n\nKey findings from the 2024 Remote Work Survey:\n• 78% of companies plan to maintain hybrid models\n• Employee productivity up 23% in remote settings\n• Work-life balance scores highest in company history\n• 67% reduction in office space requirements\n\nThe data is clear - flexible work isn't just a trend, it's the new standard.\n\nHow has remote work transformed your industry? Let's discuss! 💼\n\n#RemoteWork #FutureOfWork #WorkplaceTrends #Leadership",
      engagement_score: 88,
      trending_topics: ['Remote Work', 'Workplace', 'Leadership'],
      optimal_time: '11:00 AM',
      hasImage: true,
      imageDescription: 'Professional working from home setup with charts showing productivity metrics'
    },
    {
      id: 3,
      category: 'motivation',
      platform: 'Instagram',
      content: "Monday motivation ✨\n\n\"Success is not final, failure is not fatal: it is the courage to continue that counts.\" - Winston Churchill\n\nStarting this week with intention:\n🎯 Clear goals\n💪 Determined mindset \n🚀 Consistent action\n🌟 Positive energy\n\nWhat's one goal you're crushing this week? Drop it in the comments and let's cheer each other on! 👇\n\n#MondayMotivation #Goals #Success #Mindset #Productivity",
      engagement_score: 85,
      trending_topics: ['Motivation', 'Goals', 'Success'],
      optimal_time: '8:00 AM',
      hasImage: true,
      imageDescription: 'Inspirational sunrise over mountains with motivational quote overlay'
    },
    {
      id: 4,
      category: 'education',
      platform: 'LinkedIn',
      content: "5 Essential Skills Every Professional Needs in 2024 🧠\n\n1. Digital Literacy\n→ Understanding AI tools and automation\n→ Data analysis and interpretation\n\n2. Emotional Intelligence\n→ Remote team collaboration\n→ Cross-cultural communication\n\n3. Adaptability\n→ Embracing change and uncertainty\n→ Continuous learning mindset\n\n4. Critical Thinking\n→ Problem-solving in complex scenarios\n→ Information validation skills\n\n5. Creative Problem-Solving\n→ Innovation in traditional processes\n→ Strategic thinking\n\nWhich skill are you focusing on developing? Share your learning journey! 📚\n\n#ProfessionalDevelopment #Skills2024 #CareerGrowth #Learning",
      engagement_score: 90,
      trending_topics: ['Skills', 'Professional Development', 'Learning'],
      optimal_time: '10:00 AM',
      hasImage: false
    }
  ];

  const filteredPosts = aiGeneratedPosts.filter(post => 
    contentCategory === 'all' || post.category === contentCategory
  );

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  const selectPost = (post: any) => {
    setSelectedPost(post.id);
    setEditingContent(post.content);
  };

  const generateMorePosts = () => {
    // In real app, this would call AI API
    console.log('Generating more posts for category:', contentCategory);
  };

  return (
    <div className="h-full overflow-auto">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">AI Content Studio</h1>
            <p className="text-muted-foreground mt-1">
              Select from AI-generated posts and customize them for your brand
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="gap-2 border-purple-200 text-purple-600 hover:bg-purple-50">
              <RefreshCw className="w-4 h-4" />
              Generate More
            </Button>
            <Button className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-sm">
              <Send className="w-4 h-4" />
              Publish Selected
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* AI Generated Posts Selection */}
          <div className="xl:col-span-3 space-y-6">
            {/* Content Category Filter */}
            <Card className="border-0 shadow-sm bg-gradient-to-br from-indigo-50 to-purple-50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-sm">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle>Choose Content Type</CardTitle>
                    <CardDescription>Select the type of content you want to generate</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {contentCategories.map((category) => (
                    <Button
                      key={category.id}
                      variant={contentCategory === category.id ? "default" : "outline"}
                      className={`justify-start gap-2 h-auto py-3 px-4 ${
                        contentCategory === category.id 
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm' 
                          : 'hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100'
                      }`}
                      onClick={() => setContentCategory(category.id)}
                    >
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        contentCategory === category.id ? 'bg-white' : category.color.replace('text-', 'bg-')
                      }`} />
                      <span className="text-sm font-medium">{category.name}</span>
                    </Button>
                  ))}
                </div>
                <Button 
                  onClick={generateMorePosts}
                  className="w-full h-11 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0 shadow-sm"
                >
                  <Wand2 className="w-4 h-4 mr-2" />
                  Generate New Posts for {contentCategories.find(c => c.id === contentCategory)?.name}
                </Button>
              </CardContent>
            </Card>

            {/* Generated Posts Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">AI-Generated Posts</h3>
                <Badge variant="secondary" className="gap-1 px-3 py-1">
                  <Sparkles className="w-3 h-3" />
                  {filteredPosts.length} posts available
                </Badge>
              </div>
              
              <div className="space-y-4">
                {filteredPosts.map((post) => (
                  <Card 
                    key={post.id} 
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedPost === post.id 
                        ? 'ring-2 ring-indigo-500 border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-md' 
                        : 'hover:shadow-md hover:border-gray-200'
                    }`}
                    onClick={() => selectPost(post)}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <Avatar className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0">
                            <AvatarFallback className="text-white text-sm font-medium">
                              {post.platform.slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-xs">{post.platform}</Badge>
                              <Badge variant="outline" className={`gap-1 text-xs ${
                                contentCategories.find(c => c.id === post.category)?.color
                              }`}>
                                {contentCategories.find(c => c.id === post.category)?.name}
                              </Badge>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <TrendingUp className="w-3 h-3 text-green-600" />
                                <span className="text-green-600 font-medium">{post.engagement_score}% score</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>Best: {post.optimal_time}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          {selectedPost === post.id && (
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                              <Check className="w-4 h-4 text-green-600" />
                            </div>
                          )}
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit3 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="bg-white/80 p-4 rounded-lg border border-gray-100">
                        <p className="text-sm whitespace-pre-wrap line-clamp-4 leading-relaxed">{post.content}</p>
                      </div>

                      {post.hasImage && (
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border-2 border-dashed border-gray-200">
                          <div className="text-center">
                            <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                            <p className="text-sm text-gray-600 mb-3 font-medium">{post.imageDescription}</p>
                            <Button variant="outline" size="sm" className="gap-2 h-9">
                              <Wand2 className="w-3 h-3" />
                              Customize Image
                            </Button>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {post.trending_topics.map((topic, index) => (
                          <Badge key={index} variant="outline" className="text-xs h-6">
                            #{topic}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Editor Sidebar */}
          <div className="xl:col-span-1 space-y-6">
            {/* Platform Selection */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Select Platforms</CardTitle>
                <CardDescription>Choose where to publish</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {platforms.map((platform) => (
                    <div
                      key={platform.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedPlatforms.includes(platform.id) 
                          ? 'border-indigo-500 bg-indigo-50 shadow-sm' 
                          : 'border-border hover:border-indigo-200 hover:bg-gray-50'
                      }`}
                      onClick={() => togglePlatform(platform.id)}
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className={`w-8 h-8 ${platform.color} flex-shrink-0`}>
                          <AvatarFallback className="text-white text-xs font-medium">
                            {platform.name.slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm">{platform.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {platform.limit.toLocaleString()} characters max
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Content Editor */}
            {selectedPost && (
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Edit3 className="w-4 h-4" />
                    Edit Content
                  </CardTitle>
                  <CardDescription>Customize the selected post</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    value={editingContent}
                    onChange={(e) => setEditingContent(e.target.value)}
                    className="min-h-[180px] resize-none text-sm leading-relaxed"
                    placeholder="Edit your content here..."
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Characters: {editingContent.length.toLocaleString()}
                    </span>
                    <Button size="sm" variant="outline" className="gap-2 h-8">
                      <Wand2 className="w-3 h-3" />
                      AI Enhance
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Schedule Options */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Publishing Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs value={scheduleType} onValueChange={setScheduleType}>
                  <TabsList className="grid w-full grid-cols-2 h-10">
                    <TabsTrigger value="now" className="text-sm">Publish Now</TabsTrigger>
                    <TabsTrigger value="optimal" className="text-sm">Optimal Time</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="optimal" className="mt-4">
                    <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-green-700 font-medium">AI suggests: Today at 2:00 PM</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-10">
                    <Save className="w-4 h-4 mr-2" />
                    Save Draft
                  </Button>
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 h-10">
                    <Play className="w-4 h-4 mr-2" />
                    Publish
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}