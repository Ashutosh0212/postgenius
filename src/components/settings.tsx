import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { 
  Plus,
  Settings as SettingsIcon,
  Bell,
  Shield,
  CreditCard,
  Users,
  Zap,
  Link2,
  CheckCircle,
  AlertTriangle,
  Trash2,
  Edit3,
  ExternalLink,
  LogOut
} from 'lucide-react';

interface SettingsProps {
  onLogout?: () => void;
}

export function Settings({ onLogout }: SettingsProps) {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weeklyReport: true,
    aiSuggestions: true
  });

  const connectedAccounts = [
    {
      id: 1,
      platform: 'LinkedIn',
      account: '@johnsmith',
      status: 'connected',
      followers: '2.4K',
      lastSync: '2 hours ago',
      color: 'bg-blue-600'
    },
    {
      id: 2,
      platform: 'Twitter',
      account: '@johnsmith_biz',
      status: 'connected',
      followers: '1.8K',
      lastSync: '1 hour ago',
      color: 'bg-sky-500'
    },
    {
      id: 3,
      platform: 'Instagram',
      account: '@johnsmithco',
      status: 'error',
      followers: '945',
      lastSync: 'Failed',
      color: 'bg-pink-600'
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Wilson',
      email: 'sarah@company.com',
      role: 'Content Manager',
      status: 'active',
      avatar: '/avatar1.jpg'
    },
    {
      id: 2,
      name: 'Mike Johnson',
      email: 'mike@company.com',
      role: 'Social Media Specialist',
      status: 'pending',
      avatar: '/avatar2.jpg'
    }
  ];

  const billingHistory = [
    { date: '2024-11-01', amount: '$49.00', plan: 'Pro Plan', status: 'paid' },
    { date: '2024-10-01', amount: '$49.00', plan: 'Pro Plan', status: 'paid' },
    { date: '2024-09-01', amount: '$49.00', plan: 'Pro Plan', status: 'paid' }
  ];

  return (
    <div className="h-full overflow-auto">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground mt-1">
              Manage your account, connected platforms, and preferences
            </p>
          </div>
        </div>

        <Tabs defaultValue="accounts" className="space-y-6">
          <TabsList>
            <TabsTrigger value="accounts">Connected Accounts</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>

          <TabsContent value="accounts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Social Media Accounts</CardTitle>
                <CardDescription>
                  Connect and manage your social media platforms for automated posting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {connectedAccounts.map((account) => (
                  <div key={account.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Avatar className={`w-10 h-10 ${account.color}`}>
                        <AvatarFallback className="text-white">
                          {account.platform.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{account.platform}</span>
                          <Badge variant={account.status === 'connected' ? 'default' : 'destructive'}>
                            {account.status === 'connected' ? (
                              <CheckCircle className="w-3 h-3 mr-1" />
                            ) : (
                              <AlertTriangle className="w-3 h-3 mr-1" />
                            )}
                            {account.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {account.account} • {account.followers} followers
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Last sync: {account.lastSync}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {account.status === 'error' ? (
                        <Button size="sm" variant="outline">
                          Reconnect
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline">
                          <SettingsIcon className="w-4 h-4" />
                        </Button>
                      )}
                      <Button size="sm" variant="outline" className="text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <Button className="w-full gap-2" variant="outline">
                  <Plus className="w-4 h-4" />
                  Connect New Account
                </Button>
              </CardContent>
            </Card>

            {/* AI Content Sources */}
            <Card>
              <CardHeader>
                <CardTitle>AI Content Sources</CardTitle>
                <CardDescription>
                  Configure where AutoPost AI discovers trending content for your industry
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    { name: 'TechCrunch', url: 'techcrunch.com', enabled: true, category: 'Technology' },
                    { name: 'Harvard Business Review', url: 'hbr.org', enabled: true, category: 'Business' },
                    { name: 'Social Media Examiner', url: 'socialmediaexaminer.com', enabled: false, category: 'Marketing' },
                    { name: 'Wired', url: 'wired.com', enabled: true, category: 'Technology' }
                  ].map((source, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Switch checked={source.enabled} />
                        <div>
                          <div className="font-medium">{source.name}</div>
                          <div className="text-sm text-muted-foreground">{source.url}</div>
                        </div>
                        <Badge variant="outline">{source.category}</Badge>
                      </div>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full gap-2">
                  <Plus className="w-4 h-4" />
                  Add Custom Source
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your account details and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline">Change Avatar</Button>
                    <p className="text-sm text-muted-foreground">
                      JPG, PNG or GIF. Max size 2MB.
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john@company.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" defaultValue="John's Business" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="pst">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                      <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                      <SelectItem value="utc">Coordinated Universal Time (UTC)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button>Save Changes</Button>
                
                <Separator />
                
                {/* Logout Section */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-destructive">Danger Zone</h4>
                    <p className="text-sm text-muted-foreground">Actions that cannot be undone.</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground gap-2"
                    onClick={onLogout}
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to be notified about important updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Get notified about post performance and AI suggestions</p>
                    </div>
                    <Switch 
                      id="email-notifications"
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, email: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-notifications">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Real-time alerts for urgent updates</p>
                    </div>
                    <Switch 
                      id="push-notifications"
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, push: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="weekly-report">Weekly Performance Report</Label>
                      <p className="text-sm text-muted-foreground">Summary of your social media performance</p>
                    </div>
                    <Switch 
                      id="weekly-report"
                      checked={notifications.weeklyReport}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, weeklyReport: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="ai-suggestions">AI Content Suggestions</Label>
                      <p className="text-sm text-muted-foreground">Get notified when new AI-generated content is ready</p>
                    </div>
                    <Switch 
                      id="ai-suggestions"
                      checked={notifications.aiSuggestions}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, aiSuggestions: checked }))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            {/* Current Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>Manage your subscription and billing information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">Pro Plan</h3>
                      <Badge>Current</Badge>
                    </div>
                    <p className="text-muted-foreground">$49/month • Billed monthly</p>
                    <p className="text-sm text-muted-foreground mt-1">Next billing date: December 1, 2024</p>
                  </div>
                  <div className="text-right">
                    <Button variant="outline" className="mb-2">Change Plan</Button>
                    <br />
                    <Button variant="outline" size="sm">Cancel Subscription</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Usage */}
            <Card>
              <CardHeader>
                <CardTitle>Usage This Month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>AI Posts Generated</span>
                      <span>23/30</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '76%' }} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Social Accounts</span>
                      <span>3/5</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Team Members</span>
                      <span>2/10</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '20%' }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Billing History */}
            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {billingHistory.map((bill, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">{bill.plan}</div>
                        <div className="text-sm text-muted-foreground">{bill.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{bill.amount}</div>
                        <Badge variant="outline" className="text-xs">
                          {bill.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Manage who has access to your AutoPost AI account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-muted-foreground">{member.email}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">{member.role}</Badge>
                          <Badge variant={member.status === 'active' ? 'default' : 'secondary'}>
                            {member.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <Button className="w-full gap-2" variant="outline">
                  <Plus className="w-4 h-4" />
                  Invite Team Member
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}