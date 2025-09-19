import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Textarea } from './ui/textarea';
import { Separator } from './ui/separator';
import { 
  CheckCircle, 
  X, 
  Edit3, 
  Calendar,
  Sparkles,
  Image as ImageIcon,
  TrendingUp,
  Clock,
  RefreshCw
} from 'lucide-react';

export function ApprovalQueue() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [editingPost, setEditingPost] = useState<number | null>(null);

  const queuedPosts = [
    {
      id: 1,
      content: "🚀 The AI revolution in marketing is here! Studies show that businesses using AI for content creation see 40% higher engagement rates. Here's how AI is transforming the marketing landscape:\n\n• Personalized content at scale\n• Predictive analytics for better targeting\n• Automated A/B testing\n• Real-time optimization\n\nWhat's your experience with AI marketing tools? Share in the comments! 👇\n\n#AIMarketing #ContentStrategy #DigitalMarketing #Innovation",
      platform: 'LinkedIn',
      aiSource: 'TechCrunch Article: "AI Marketing Tools See Record Adoption"',
      suggestedTime: 'Today, 2:00 PM',
      engagement_prediction: '85% likely to perform well',
      tags: ['AI', 'Marketing', 'Innovation'],
      hasImage: true,
      imageDescription: 'Modern office with AI dashboard on computer screen'
    },
    {
      id: 2,
      content: "Quick tip thread: 5 ways to boost your organic reach 🧵\n\n1/ Post consistently at optimal times\n2/ Use trending hashtags strategically\n3/ Engage authentically with your community\n4/ Share valuable insights, not just promotion\n5/ Collaborate with other creators\n\nWhich tip will you try first? 💭",
      platform: 'Twitter',
      aiSource: 'Social Media Examiner Blog: "Organic Reach Strategies 2024"',
      suggestedTime: 'Tomorrow, 9:00 AM',
      engagement_prediction: '92% likely to perform well',
      tags: ['SocialMedia', 'Tips', 'Engagement'],
      hasImage: false
    },
    {
      id: 3,
      content: "Monday motivation ✨\n\n\"Success is not final, failure is not fatal: it is the courage to continue that counts.\" - Winston Churchill\n\nStarting this week with intention and purpose. What's one goal you're focusing on this week?\n\n#MondayMotivation #Goals #Success #Mindset",
      platform: 'Instagram',
      aiSource: 'Motivational Quotes Database + Trending Format Analysis',
      suggestedTime: 'Monday, 8:00 AM',
      engagement_prediction: '78% likely to perform well',
      tags: ['Motivation', 'Quote', 'Monday'],
      hasImage: true,
      imageDescription: 'Inspirational sunrise over mountains with quote overlay'
    },
    {
      id: 4,
      content: "Breaking: New study reveals that video content generates 1200% more shares than text and image content combined!\n\n📹 Key insights from the research:\n• Short-form videos (15-30s) perform best\n• Authentic, behind-the-scenes content drives engagement\n• Mobile-first video strategy is essential\n• Captions increase completion rates by 40%\n\nTime to level up your video game! What type of video content works best for your brand?",
      platform: 'LinkedIn',
      aiSource: 'Wistia Video Marketing Report 2024',
      suggestedTime: 'Tomorrow, 11:00 AM',
      engagement_prediction: '89% likely to perform well',
      tags: ['Video', 'Marketing', 'ContentStrategy'],
      hasImage: false
    }
  ];

  const handleApprove = (postId: number) => {
    console.log('Approved post:', postId);
    // In a real app, this would schedule the post
  };

  const handleReject = (postId: number) => {
    console.log('Rejected post:', postId);
    // In a real app, this would remove the post from queue
  };

  const handleEdit = (postId: number) => {
    setEditingPost(postId);
    setSelectedPost(postId);
  };

  const saveEdit = () => {
    setEditingPost(null);
    // In a real app, this would save the edited content
  };

  return (
    <div className="h-full overflow-auto">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Approval Queue</h1>
            <p className="text-muted-foreground mt-1">
              Review and approve AI-generated content before publishing
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2 border-orange-200 text-orange-600 hover:bg-orange-50">
              <RefreshCw className="w-4 h-4" />
              Generate More
            </Button>
            <Button className="gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 shadow-sm">
              <CheckCircle className="w-4 h-4" />
              Approve All
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-700">12</div>
              <div className="text-sm text-blue-600">Pending Approval</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-700">89%</div>
              <div className="text-sm text-green-600">Avg. Quality Score</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-purple-700">4.2h</div>
              <div className="text-sm text-purple-600">Avg. Review Time</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-50 to-yellow-50">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-orange-700">95%</div>
              <div className="text-sm text-orange-600">Approval Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Posts Grid */}
        <div className="space-y-6">
          {queuedPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs">
                        {post.platform.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{post.platform}</Badge>
                        <Badge variant="outline" className="gap-1">
                          <Sparkles className="w-3 h-3" />
                          AI Generated
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Suggested for {post.suggestedTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleEdit(post.id)}
                      className="gap-1"
                    >
                      <Edit3 className="w-4 h-4" />
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleReject(post.id)}
                      className="gap-1 text-destructive hover:text-destructive"
                    >
                      <X className="w-4 h-4" />
                      Reject
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleApprove(post.id)}
                      className="gap-1"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Approve
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Content */}
                <div className="bg-muted/30 p-4 rounded-lg">
                  {editingPost === post.id ? (
                    <div className="space-y-3">
                      <Textarea 
                        defaultValue={post.content}
                        className="min-h-[120px] resize-none"
                      />
                      <div className="flex gap-2">
                        <Button size="sm" onClick={saveEdit}>Save Changes</Button>
                        <Button variant="outline" size="sm" onClick={() => setEditingPost(null)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap text-sm">{post.content}</p>
                  )}
                </div>

                {/* Image Placeholder */}
                {post.hasImage && (
                  <div className="bg-muted/50 p-6 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                    <div className="text-center">
                      <ImageIcon className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">{post.imageDescription}</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Generate Image
                      </Button>
                    </div>
                  </div>
                )}

                <Separator />

                {/* Metadata */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-medium mb-1">AI Source</div>
                    <div className="text-muted-foreground">{post.aiSource}</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1 flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      Performance Prediction
                    </div>
                    <div className="text-green-600">{post.engagement_prediction}</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Tags</div>
                    <div className="flex gap-1 flex-wrap">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Scheduling */}
                <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">Scheduled for {post.suggestedTime}</span>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Calendar className="w-4 h-4" />
                    Reschedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}