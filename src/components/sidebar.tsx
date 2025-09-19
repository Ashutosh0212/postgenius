import React, { useState } from 'react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  LayoutDashboard, 
  Clock, 
  Calendar, 
  BarChart3, 
  PenTool, 
  Settings, 
  Brain,
  ChevronDown,
  User,
  LogOut,
  Crown
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

type PageType = 'dashboard' | 'queue' | 'calendar' | 'analytics' | 'compose' | 'settings';

interface SidebarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
  onLogout?: () => void;
}

export function Sidebar({ currentPage, onPageChange, onLogout }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard' as PageType, label: 'Dashboard', icon: LayoutDashboard, color: 'text-blue-600' },
    { id: 'queue' as PageType, label: 'Approval Queue', icon: Clock, color: 'text-orange-600' },
    { id: 'calendar' as PageType, label: 'Calendar', icon: Calendar, color: 'text-green-600' },
    { id: 'analytics' as PageType, label: 'Analytics', icon: BarChart3, color: 'text-purple-600' },
    { id: 'compose' as PageType, label: 'Compose', icon: PenTool, color: 'text-pink-600' },
    { id: 'settings' as PageType, label: 'Settings', icon: Settings, color: 'text-gray-600' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-100 flex flex-col shadow-sm">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">PostGenius</span>
        </div>
        
        {/* Account Selector with Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 cursor-pointer hover:from-purple-100 hover:to-pink-100 transition-all duration-200 border border-purple-100">
              <Avatar className="w-8 h-8 ring-2 ring-purple-200">
                <AvatarImage src="/avatar.jpg" />
                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-600 text-white">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-gray-900 truncate">John Doe</div>
                <div className="text-xs text-purple-600 font-medium flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  Pro Plan
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-purple-500" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start" sideOffset={8}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => onPageChange('settings')}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onPageChange('settings')}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Preferences</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={onLogout}
              className="text-red-600 focus:text-red-600 focus:bg-red-50"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sign Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={`w-full justify-start gap-3 h-11 transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border border-purple-200 shadow-sm' 
                    : 'hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => onPageChange(item.id)}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-purple-600' : item.color}`} />
                <span className="font-medium">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-100">
        <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl p-4 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative">
            <div className="text-sm font-semibold mb-1">Unlock More Power</div>
            <div className="text-xs opacity-90 mb-3">Get unlimited AI posts, advanced analytics, and team features</div>
            <Button size="sm" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm">
              Upgrade Plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}