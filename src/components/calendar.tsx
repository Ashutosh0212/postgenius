import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus,
  Calendar as CalendarIcon,
  Clock,
  Filter,
  Download
} from 'lucide-react';

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Generate calendar days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    for (let i = 0; i < 42; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const mockPosts = [
    {
      id: 1,
      date: new Date(2024, 11, 15, 9, 0),
      platform: 'LinkedIn',
      content: 'AI marketing trends for 2024',
      status: 'scheduled'
    },
    {
      id: 2,
      date: new Date(2024, 11, 15, 14, 30),
      platform: 'Twitter',
      content: 'Quick productivity tip thread',
      status: 'scheduled'
    },
    {
      id: 3,
      date: new Date(2024, 11, 16, 8, 0),
      platform: 'Instagram',
      content: 'Monday motivation post',
      status: 'scheduled'
    },
    {
      id: 4,
      date: new Date(2024, 11, 17, 12, 0),
      platform: 'LinkedIn',
      content: 'Industry insights and analysis',
      status: 'draft'
    },
    {
      id: 5,
      date: new Date(2024, 11, 18, 16, 0),
      platform: 'Twitter',
      content: 'Weekly roundup of tech news',
      status: 'scheduled'
    }
  ];

  const getPostsForDay = (date: Date) => {
    return mockPosts.filter(post => 
      post.date.toDateString() === date.toDateString() &&
      (selectedFilter === 'all' || post.platform.toLowerCase() === selectedFilter)
    );
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
      return newDate;
    });
  };

  const platformColors = {
    LinkedIn: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    Twitter: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200',
    Instagram: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
  };

  return (
    <div className="h-full overflow-auto">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Content Calendar</h1>
            <p className="text-muted-foreground mt-1">
              Visualize and manage your scheduled content across all platforms
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Schedule Post
            </Button>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigateMonth('prev')}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <h2 className="text-xl font-semibold min-w-[200px] text-center">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigateMonth('next')}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <Button variant="outline" size="sm" onClick={() => setCurrentDate(new Date())}>
              Today
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <div className="flex gap-1">
              {['all', 'linkedin', 'twitter', 'instagram'].map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(filter)}
                  className="capitalize"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <Card>
          <CardHeader>
            <div className="grid grid-cols-7 gap-4 text-center text-sm font-medium text-muted-foreground">
              <div>Sunday</div>
              <div>Monday</div>
              <div>Tuesday</div>
              <div>Wednesday</div>
              <div>Thursday</div>
              <div>Friday</div>
              <div>Saturday</div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => {
                const isCurrentMonth = day.getMonth() === currentDate.getMonth();
                const isToday = day.toDateString() === new Date().toDateString();
                const postsForDay = getPostsForDay(day);

                return (
                  <div
                    key={index}
                    className={`min-h-[120px] p-2 border rounded-lg transition-colors hover:bg-muted/50 ${
                      isCurrentMonth ? 'border-border' : 'border-transparent'
                    } ${isToday ? 'bg-primary/5 border-primary' : ''}`}
                  >
                    <div className={`text-sm font-medium mb-2 ${
                      isCurrentMonth ? 'text-foreground' : 'text-muted-foreground'
                    } ${isToday ? 'text-primary' : ''}`}>
                      {day.getDate()}
                    </div>
                    
                    <div className="space-y-1">
                      {postsForDay.slice(0, 3).map((post) => (
                        <div
                          key={post.id}
                          className="text-xs p-1.5 rounded border-l-2 border-l-blue-500 bg-muted/50 cursor-pointer hover:bg-muted transition-colors"
                        >
                          <div className="flex items-center gap-1 mb-1">
                            <Avatar className="w-3 h-3">
                              <AvatarFallback className="text-[10px]">
                                {post.platform.slice(0, 1)}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-[10px] text-muted-foreground">
                              {post.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                          <div className="truncate">{post.content}</div>
                          <Badge 
                            variant={post.status === 'scheduled' ? 'default' : 'secondary'}
                            className="text-[10px] mt-1"
                          >
                            {post.status}
                          </Badge>
                        </div>
                      ))}
                      {postsForDay.length > 3 && (
                        <div className="text-xs text-muted-foreground px-1.5">
                          +{postsForDay.length - 3} more
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">23</div>
              <div className="text-sm text-muted-foreground">This Month</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">12</div>
              <div className="text-sm text-muted-foreground">This Week</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">5</div>
              <div className="text-sm text-muted-foreground">Today</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">8</div>
              <div className="text-sm text-muted-foreground">Drafts</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}