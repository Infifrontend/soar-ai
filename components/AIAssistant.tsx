import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription } from './ui/alert';
import { Separator } from './ui/separator';
import { 
  MessageCircle, 
  Send, 
  Sparkles, 
  Brain, 
  Search, 
  Building2, 
  FileText, 
  Gift, 
  Users, 
  ArrowRight, 
  Lightbulb,
  Target,
  Zap,
  Clock,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Mail,
  Phone,
  Calendar,
  Settings,
  HelpCircle,
  Star,
  Rocket,
  Bot,
  ChevronRight,
  Eye,
  Edit,
  Plus,
  Filter,
  Shield
} from 'lucide-react';

interface AIAssistantProps {
  onNavigate: (section: string, filters?: any) => void;
}

interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  actions?: Array<{
    label: string;
    action: () => void;
    icon?: any;
    variant?: 'default' | 'outline' | 'secondary';
  }>;
  suggestions?: Array<{
    label: string;
    description: string;
    action: () => void;
    icon?: any;
  }>;
}

const quickActions = [
  {
    id: 'search-corporate',
    title: 'Find Corporate Clients',
    description: 'Search and discover potential corporate travel partners',
    icon: Building2,
    color: 'from-blue-500 to-indigo-600',
    keywords: ['corporate', 'search', 'clients', 'companies', 'partners'],
    action: (onNavigate) => onNavigate('corporate-search')
  },
  {
    id: 'create-contract',
    title: 'Create New Contract',
    description: 'Initiate contract creation process with corporate clients',
    icon: FileText,
    color: 'from-green-500 to-emerald-600',
    keywords: ['contract', 'create', 'agreement', 'legal', 'terms'],
    action: (onNavigate) => onNavigate('contracts')
  },
  {
    id: 'create-offer',
    title: 'Design Travel Offers',
    description: 'Create personalized offers for corporate clients',
    icon: Gift,
    color: 'from-purple-500 to-pink-600',
    keywords: ['offer', 'create', 'deals', 'promotions', 'discounts'],
    action: (onNavigate) => onNavigate('create-offers')
  },
  {
    id: 'support-tickets',
    title: 'Manage Support',
    description: 'Handle customer support tickets and inquiries',
    icon: Users,
    color: 'from-orange-500 to-red-600',
    keywords: ['support', 'tickets', 'help', 'customer', 'issues'],
    action: (onNavigate) => onNavigate('ticket-list')
  },
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',
    description: 'Comprehensive system administration and analytics',
    icon: Shield,
    color: 'from-indigo-500 to-purple-600',
    keywords: ['admin', 'administration', 'comprehensive', 'system', 'management'],
    action: (onNavigate) => onNavigate('admin-dashboard')
  },
  {
    id: 'analytics',
    title: 'View Analytics',
    description: 'Analyze performance metrics and business insights',
    icon: BarChart3,
    color: 'from-cyan-500 to-blue-600',
    keywords: ['analytics', 'reports', 'metrics', 'data', 'insights'],
    action: (onNavigate) => onNavigate('dashboard')
  },
  {
    id: 'breach-monitor',
    title: 'Monitor Contracts',
    description: 'Track contract compliance and breach monitoring',
    icon: Target,
    color: 'from-yellow-500 to-orange-600',
    keywords: ['breach', 'monitor', 'compliance', 'risk', 'contracts'],
    action: (onNavigate) => onNavigate('breach-monitoring')
  }
];

const commonTasks = [
  { text: "Find technology companies with high travel budgets", category: "Corporate Search" },
  { text: "Create a sustainability-focused travel offer", category: "Offer Creation" },
  { text: "Monitor contract compliance for financial services clients", category: "Contract Management" },
  { text: "Send notifications to corporate travel managers", category: "Communication" },
  { text: "Analyze quarterly travel booking trends", category: "Analytics" },
  { text: "Handle urgent customer support tickets", category: "Support" },
  { text: "Access admin dashboard for comprehensive system management", category: "Administration" },
  { text: "View support agent performance and analytics", category: "Administration" }
];

export function AIAssistant({ onNavigate }: AIAssistantProps) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hello! I'm your SOAR-AI assistant. I can help you find corporate clients, create contracts, manage offers, handle support tickets, and much more. What would you like to do today?",
      timestamp: new Date(),
      suggestions: [
        {
          label: "Find Corporate Clients",
          description: "Search for potential travel partners",
          action: () => onNavigate('corporate-search'),
          icon: Building2
        },
        {
          label: "Create Travel Offers",
          description: "Design personalized offers",
          action: () => onNavigate('create-offers'),
          icon: Gift
        },
        {
          label: "View Dashboard",
          description: "See system overview",
          action: () => onNavigate('dashboard'),
          icon: BarChart3
        },
        {
          label: "Admin Dashboard",
          description: "Comprehensive administration panel",
          action: () => onNavigate('admin-dashboard'),
          icon: Shield
        }
      ]
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  // AI-like processing function
  const processUserInput = (userInput: string): ChatMessage => {
    const input = userInput.toLowerCase();
    const timestamp = new Date();
    
    // Corporate search related
    if (input.includes('corporate') || input.includes('company') || input.includes('client') || input.includes('search') || input.includes('find')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "I'll help you find corporate clients! Based on your request, I can search for companies that match specific criteria like industry, travel budget, and location.",
        timestamp,
        actions: [
          {
            label: "Open Corporate Search",
            action: () => onNavigate('corporate-search'),
            icon: Building2,
            variant: 'default' as const
          },
          {
            label: "View Recent Prospects",
            action: () => onNavigate('corporate-search', { recent: true }),
            icon: Eye,
            variant: 'outline' as const
          }
        ],
        suggestions: [
          {
            label: "Technology Companies",
            description: "Search for tech companies with high travel needs",
            action: () => onNavigate('corporate-search', { industry: 'technology' }),
            icon: Building2
          },
          {
            label: "Financial Services",
            description: "Find financial firms with global operations",
            action: () => onNavigate('corporate-search', { industry: 'financial' }),
            icon: TrendingUp
          }
        ]
      };
    }
    
    // Contract related
    if (input.includes('contract') || input.includes('agreement') || input.includes('legal') || input.includes('terms')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "I can help you with contract management! You can create new contracts, review existing agreements, or monitor compliance.",
        timestamp,
        actions: [
          {
            label: "Contract Management",
            action: () => onNavigate('contracts'),
            icon: FileText,
            variant: 'default' as const
          },
          {
            label: "Monitor Breaches",
            action: () => onNavigate('breach-monitoring'),
            icon: Target,
            variant: 'outline' as const
          }
        ]
      };
    }
    
    // Offers related
    if (input.includes('offer') || input.includes('deal') || input.includes('promotion') || input.includes('discount') || input.includes('create')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "Let me help you create compelling travel offers! I can generate AI-suggested offers based on corporate profiles or help you design custom offers.",
        timestamp,
        actions: [
          {
            label: "Create New Offer",
            action: () => onNavigate('create-offers'),
            icon: Gift,
            variant: 'default' as const
          },
          {
            label: "View Active Offers",
            action: () => onNavigate('active-offers'),
            icon: Star,
            variant: 'outline' as const
          }
        ]
      };
    }
    
    // Support related
    if (input.includes('support') || input.includes('ticket') || input.includes('help') || input.includes('customer') || input.includes('issue')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "I'll guide you to customer support management. You can view tickets, manage customer inquiries, or access support analytics.",
        timestamp,
        actions: [
          {
            label: "Support Dashboard",
            action: () => onNavigate('support-dashboard'),
            icon: Users,
            variant: 'default' as const
          },
          {
            label: "Admin Dashboard",
            action: () => onNavigate('admin-dashboard'),
            icon: Shield,
            variant: 'default' as const
          },
          {
            label: "Ticket List",
            action: () => onNavigate('ticket-list'),
            icon: Target,
            variant: 'outline' as const
          }
        ]
      };
    }
    
    // Admin related
    if (input.includes('admin') || input.includes('administration') || input.includes('manage system') || input.includes('comprehensive') || input.includes('full dashboard')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "I'll take you to the comprehensive admin dashboard where you can access advanced support analytics, system administration, and full customer support management capabilities.",
        timestamp,
        actions: [
          {
            label: "Admin Dashboard",
            action: () => onNavigate('admin-dashboard'),
            icon: Shield,
            variant: 'default' as const
          },
          {
            label: "System Settings",
            action: () => onNavigate('settings'),
            icon: Settings,
            variant: 'outline' as const
          }
        ],
        suggestions: [
          {
            label: "Support Analytics",
            description: "View comprehensive support metrics and reports",
            action: () => onNavigate('admin-dashboard'),
            icon: BarChart3
          },
          {
            label: "Agent Performance",
            description: "Monitor support agent performance and KPIs",
            action: () => onNavigate('admin-dashboard'),
            icon: Users
          }
        ]
      };
    }
    
    // Analytics/Reports related
    if (input.includes('analytics') || input.includes('report') || input.includes('data') || input.includes('insight') || input.includes('dashboard') || input.includes('metrics')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "I can show you comprehensive analytics and insights! Access dashboards, reports, and key performance metrics across all your operations.",
        timestamp,
        actions: [
          {
            label: "Main Dashboard",
            action: () => onNavigate('dashboard'),
            icon: BarChart3,
            variant: 'default' as const
          },
          {
            label: "Offer Analytics",
            action: () => onNavigate('offer-analytics'),
            icon: TrendingUp,
            variant: 'outline' as const
          }
        ]
      };
    }
    
    // Communication related
    if (input.includes('email') || input.includes('notify') || input.includes('send') || input.includes('communicate') || input.includes('message')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "I can help you with communications! Send notifications, email templates, or set up automated communications with corporate clients.",
        timestamp,
        actions: [
          {
            label: "Find Corporates First",
            action: () => onNavigate('corporate-search'),
            icon: Building2,
            variant: 'default' as const
          }
        ],
        suggestions: [
          {
            label: "Partnership Emails",
            description: "Send partnership invitations to prospects",
            action: () => onNavigate('corporate-search'),
            icon: Mail
          }
        ]
      };
    }
    
    // Settings related
    if (input.includes('setting') || input.includes('config') || input.includes('setup') || input.includes('admin')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "I'll take you to system settings where you can configure screens, manage preferences, and adjust system parameters.",
        timestamp,
        actions: [
          {
            label: "Open Settings",
            action: () => onNavigate('settings'),
            icon: Settings,
            variant: 'default' as const
          }
        ]
      };
    }
    
    // Default response
    return {
      id: Date.now().toString(),
      type: 'assistant',
      content: "I understand you're looking for help with that task. Here are some popular actions you might want to take:",
      timestamp,
      suggestions: [
        {
          label: "Corporate Search",
          description: "Find and analyze potential corporate clients",
          action: () => onNavigate('corporate-search'),
          icon: Building2
        },
        {
          label: "Create Offers",
          description: "Design travel offers for corporate clients",
          action: () => onNavigate('create-offers'),
          icon: Gift
        },
        {
          label: "View Dashboard",
          description: "See system overview and analytics",
          action: () => onNavigate('dashboard'),
          icon: BarChart3
        },
        {
          label: "Support Tickets",
          description: "Manage customer support and inquiries",
          action: () => onNavigate('ticket-list'),
          icon: Users
        },
        {
          label: "Admin Dashboard",
          description: "Comprehensive system administration",
          action: () => onNavigate('admin-dashboard'),
          icon: Shield
        }
      ]
    };
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const assistantResponse = processUserInput(input);
    setMessages(prev => [...prev, assistantResponse]);
    setIsProcessing(false);
  };

  const handleQuickTask = (task: string) => {
    setInput(task);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Welcome Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
            <Bot className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SOAR-AI Assistant
            </h1>
            <p className="text-muted-foreground">Your intelligent corporate travel management companion</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                AI Assistant Chat
              </CardTitle>
              <CardDescription>
                Describe what you'd like to do in natural language, and I'll guide you there
              </CardDescription>
            </CardHeader>
            
            {/* Messages Area */}
            <CardContent className="flex-1 overflow-y-auto p-0">
              <div className="space-y-4 p-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] ${
                      message.type === 'user' 
                        ? 'bg-primary text-primary-foreground rounded-l-lg rounded-tr-lg' 
                        : 'bg-muted rounded-r-lg rounded-tl-lg'
                    } p-4`}>
                      <div className="flex items-start gap-2 mb-2">
                        {message.type === 'assistant' && (
                          <div className="p-1 rounded-full bg-blue-100">
                            <Brain className="h-3 w-3 text-blue-600" />
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      {message.actions && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {message.actions.map((action, index) => {
                            const ActionIcon = action.icon;
                            return (
                              <Button 
                                key={index}
                                size="sm" 
                                variant={action.variant || 'default'}
                                onClick={action.action}
                                className="h-8"
                              >
                                {ActionIcon && <ActionIcon className="h-3 w-3 mr-1" />}
                                {action.label}
                              </Button>
                            );
                          })}
                        </div>
                      )}
                      
                      {/* Suggestions */}
                      {message.suggestions && (
                        <div className="mt-3 space-y-2">
                          <p className="text-xs font-medium opacity-70">Quick suggestions:</p>
                          {message.suggestions.map((suggestion, index) => {
                            const SuggestionIcon = suggestion.icon;
                            return (
                              <button
                                key={index}
                                onClick={suggestion.action}
                                className="flex items-center gap-2 w-full p-2 text-left text-xs rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                              >
                                {SuggestionIcon && <SuggestionIcon className="h-3 w-3" />}
                                <div>
                                  <div className="font-medium">{suggestion.label}</div>
                                  <div className="opacity-70">{suggestion.description}</div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {isProcessing && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-r-lg rounded-tl-lg p-4 max-w-[80%]">
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent"></div>
                        <span className="text-sm">Processing your request...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            
            {/* Input Area */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type what you'd like to do... (e.g., 'find technology companies with high travel budgets')"
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} disabled={!input.trim() || isProcessing}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Quick Actions
              </CardTitle>
              <CardDescription>Jump directly to common tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickActions.map((action) => {
                const ActionIcon = action.icon;
                return (
                  <button
                    key={action.id}
                    onClick={() => action.action(onNavigate)}
                    className={`w-full p-3 rounded-lg text-left transition-all duration-200 hover:shadow-md bg-gradient-to-r ${action.color} text-white group`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                        <ActionIcon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{action.title}</div>
                        <div className="text-xs opacity-90 truncate">{action.description}</div>
                      </div>
                      <ChevronRight className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                );
              })}
            </CardContent>
          </Card>

          {/* Common Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Try These Tasks
              </CardTitle>
              <CardDescription>Click to quickly fill the chat input</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {commonTasks.map((task, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickTask(task.text)}
                  className="w-full p-3 text-left rounded-lg border border-border hover:bg-muted/50 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium group-hover:text-primary transition-colors truncate">
                        "{task.text}"
                      </p>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {task.category}
                      </Badge>
                    </div>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-70 transition-opacity flex-shrink-0 mt-1" />
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* System Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">AI Assistant</span>
                  <Badge variant="default" className="bg-green-100 text-green-700">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Corporate Database</span>
                  <Badge variant="default" className="bg-green-100 text-green-700">Connected</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Contract System</span>
                  <Badge variant="default" className="bg-green-100 text-green-700">Active</Badge>
                </div>
                <Separator />
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>Last updated 2 minutes ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}