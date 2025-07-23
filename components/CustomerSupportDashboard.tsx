import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Alert, AlertDescription } from './ui/alert';
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { 
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Users,
  Target,
  Zap,
  Calendar,
  Phone,
  Mail,
  MessageCircle,
  Globe,
  Star,
  Award,
  Activity,
  BarChart3,
  PieChart as PieChartIcon,
  ArrowRight,
  Filter,
  Download,
  RefreshCw,
  ThumbsUp,
  ThumbsDown,
  AlertTriangle,
  HelpCircle,
  Eye
} from 'lucide-react';

// Mock data for dashboard
const ticketStatusData = [
  { status: 'Open', count: 45, color: '#f59e0b', percentage: 25 },
  { status: 'In Progress', count: 32, color: '#3b82f6', percentage: 18 },
  { status: 'AI to Address', count: 28, color: '#8b5cf6', percentage: 16 },
  { status: 'Moved to Passenger', count: 38, color: '#f97316', percentage: 21 },
  { status: 'Resolved', count: 35, color: '#10b981', percentage: 20 }
];

const agentPerformanceData = [
  { name: 'Assigned', value: 178, color: '#3b82f6' },
  { name: 'Resolved', value: 142, color: '#10b981' }
];

const categoryTrendData = [
  { month: 'Jan', Complaints: 45, Feedback: 32, Suggestions: 28, Requests: 52 },
  { month: 'Feb', Complaints: 38, Feedback: 28, Suggestions: 35, Requests: 48 },
  { month: 'Mar', Complaints: 42, Feedback: 35, Suggestions: 32, Requests: 55 },
  { month: 'Apr', Complaints: 35, Feedback: 42, Suggestions: 38, Requests: 48 },
  { month: 'May', Complaints: 48, Feedback: 38, Suggestions: 42, Requests: 62 },
  { month: 'Jun', Complaints: 52, Feedback: 45, Suggestions: 35, Requests: 58 }
];

const channelDistribution = [
  { channel: 'Email', count: 85, percentage: 35, color: '#3b82f6' },
  { channel: 'WhatsApp', count: 72, percentage: 30, color: '#10b981' },
  { channel: 'Website', count: 58, percentage: 24, color: '#8b5cf6' },
  { channel: 'Chatbot', count: 28, percentage: 11, color: '#f59e0b' }
];

const efficiencyMetrics = [
  { metric: 'Avg Response Time', value: '2.3 hrs', trend: 'down', change: '12%', color: 'text-green-600' },
  { metric: 'Resolution Rate', value: '89%', trend: 'up', change: '5%', color: 'text-green-600' },
  { metric: 'Customer Satisfaction', value: '4.6/5', trend: 'up', change: '3%', color: 'text-green-600' },
  { metric: 'First Contact Resolution', value: '76%', trend: 'up', change: '8%', color: 'text-green-600' }
];

const recentTickets = [
  {
    id: 'TKT-2024-001',
    channel: 'WhatsApp',
    category: 'Complaint',
    priority: 'High',
    status: 'Open',
    customer: 'John Smith',
    subject: 'Flight delay compensation',
    createdAt: '2024-06-17 09:30',
    expectedResolution: '2024-06-17 17:30'
  },
  {
    id: 'TKT-2024-002',
    channel: 'Email',
    category: 'Request',
    priority: 'Medium',
    status: 'In Progress',
    customer: 'Sarah Johnson',
    subject: 'Seat upgrade request',
    createdAt: '2024-06-17 08:15',
    expectedResolution: '2024-06-18 08:15'
  },
  {
    id: 'TKT-2024-003',
    channel: 'Website',
    category: 'Feedback',
    priority: 'Low',
    status: 'Resolved',
    customer: 'Mike Davis',
    subject: 'Service appreciation',
    createdAt: '2024-06-16 15:45',
    expectedResolution: '2024-06-17 15:45'
  }
];

interface CustomerSupportDashboardProps {
  onNavigate?: (screen: string, filters?: any) => void;
}

// Custom 3D Tooltip
const Custom3DTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gradient-to-br from-white via-gray-50/95 to-white backdrop-blur-xl border-0 shadow-2xl rounded-2xl p-5 transform transition-all duration-200 ease-out border border-white/20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl"></div>
        <div className="relative z-10">
          <p className="font-bold text-gray-800 mb-3 text-sm tracking-wide">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-3 text-sm mb-2 last:mb-0">
              <div 
                className="w-4 h-4 rounded-full shadow-lg ring-2 ring-white/50" 
                style={{ 
                  background: `linear-gradient(135deg, ${entry.color}, ${entry.color}DD)`,
                  boxShadow: `0 4px 12px ${entry.color}40`
                }}
              />
              <span className="font-semibold text-gray-700">
                {entry.name}: {entry.value}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-sm"></div>
      </div>
    );
  }
  return null;
};

export function CustomerSupportDashboard({ onNavigate }: CustomerSupportDashboardProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState('today');
  const [selectedMetric, setSelectedMetric] = useState('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'secondary';
      case 'In Progress': return 'default';
      case 'AI to Address': return 'secondary';
      case 'Moved to Passenger': return 'outline';
      case 'Resolved': return 'default';
      default: return 'outline';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'destructive';
      case 'Medium': return 'secondary';
      case 'Low': return 'outline';
      default: return 'outline';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Complaint': return AlertTriangle;
      case 'Feedback': return ThumbsUp;
      case 'Suggestion': return HelpCircle;
      case 'Request': return MessageCircle;
      default: return MessageSquare;
    }
  };

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'WhatsApp': return Phone;
      case 'Email': return Mail;
      case 'Website': return Globe;
      case 'Chatbot': return MessageCircle;
      default: return MessageSquare;
    }
  };

  const handleStatusClick = (status: string) => {
    if (onNavigate) {
      onNavigate('ticket-list', { status });
    }
  };

  const handleTicketClick = (ticketId: string) => {
    if (onNavigate) {
      onNavigate('ticket-details', { ticketId });
    }
  };

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div className="space-y-8">
      {/* SVG Gradients and Filters Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          {/* Gradient Definitions */}
          <linearGradient id="blueGradientSupport" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.9} />
            <stop offset="50%" stopColor="#1e40af" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity={0.4} />
          </linearGradient>
          <linearGradient id="greenGradientSupport" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity={0.9} />
            <stop offset="50%" stopColor="#047857" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#065f46" stopOpacity={0.4} />
          </linearGradient>
          <linearGradient id="yellowGradientSupport" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.9} />
            <stop offset="50%" stopColor="#d97706" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#b45309" stopOpacity={0.4} />
          </linearGradient>
          <linearGradient id="redGradientSupport" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity={0.9} />
            <stop offset="50%" stopColor="#dc2626" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#b91c1c" stopOpacity={0.4} />
          </linearGradient>
          <linearGradient id="purpleGradientSupport" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.9} />
            <stop offset="50%" stopColor="#7c3aed" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity={0.4} />
          </linearGradient>
          <linearGradient id="orangeGradientSupport" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity={0.9} />
            <stop offset="50%" stopColor="#ea580c" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#c2410c" stopOpacity={0.4} />
          </linearGradient>
          <linearGradient id="cyanGradientSupport" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.9} />
            <stop offset="50%" stopColor="#0891b2" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#0e7490" stopOpacity={0.4} />
          </linearGradient>
          
          {/* 3D Effect Filters */}
          <filter id="shadow3DSupport" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.3"/>
            <feDropShadow dx="0" dy="4" stdDeviation="12" floodOpacity="0.15"/>
          </filter>
          
          <filter id="glowSupport" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Enhanced Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Customer Support Dashboard</h1>
          <p className="text-gray-600 mt-1">Monitor and manage customer tickets efficiently with AI-powered insights</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <SelectTrigger className="w-36 border-0 shadow-lg bg-gradient-to-r from-white to-gray-50 hover:shadow-xl transition-all duration-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="border-0 shadow-lg bg-gradient-to-r from-white to-gray-50 hover:shadow-xl transition-all duration-300">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" size="sm" className="border-0 shadow-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-xl transition-all duration-300">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Enhanced 3D Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {ticketStatusData.map((item, index) => {
          const gradientMaps = {
            'Open': 'from-amber-50 via-white to-orange-100/50',
            'In Progress': 'from-blue-50 via-white to-indigo-100/50',
            'AI to Address': 'from-purple-50 via-white to-violet-100/50',
            'Moved to Passenger': 'from-orange-50 via-white to-red-100/50',
            'Resolved': 'from-green-50 via-white to-emerald-100/50'
          };
          return (
            <Card 
              key={item.status} 
              className={`cursor-pointer group hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] border-0 shadow-xl bg-gradient-to-br ${gradientMaps[item.status]} relative overflow-hidden`}
              onClick={() => handleStatusClick(item.status)}
            >
              <div 
                className="absolute inset-0 opacity-10 rounded-xl"
                style={{ background: `linear-gradient(135deg, ${item.color}22, ${item.color}05)` }}
              ></div>
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full -translate-y-12 translate-x-12" 
                   style={{ background: `linear-gradient(135deg, ${item.color}20, transparent)` }}></div>
              
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative z-10">
                <CardTitle className="text-sm font-semibold text-gray-700">{item.status}</CardTitle>
                <div 
                  className="w-5 h-5 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 ring-2 ring-white/50" 
                  style={{ 
                    backgroundColor: item.color,
                    boxShadow: `0 4px 15px ${item.color}50`
                  }} 
                />
              </CardHeader>
              <CardContent className="relative z-10">
                <div 
                  className="text-4xl font-bold mb-3 bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(135deg, ${item.color}, ${item.color}AA)` }}
                >
                  {item.count}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 font-medium">{item.percentage}% of total</p>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Enhanced Performance Alert */}
      <Alert className="border-0 bg-gradient-to-r from-blue-50 via-cyan-50/80 to-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/10 to-blue-500/5"></div>
        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-200 shadow-lg">
          <Activity className="h-5 w-5 text-blue-600" />
        </div>
        <AlertDescription className="text-blue-800 relative z-10 leading-relaxed ml-4">
          <strong className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Performance Update:</strong> 
          You've resolved 142 out of 178 assigned tickets (79.8% resolution rate). 
          <Button variant="link" className="p-0 ml-2 text-blue-800 underline hover:text-cyan-600 transition-colors font-semibold">
            View detailed analytics
          </Button>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Enhanced 3D Pie Chart */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-blue-50/30 hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-transparent to-green-500/5"></div>
          <CardHeader className="relative z-10 pb-4">
            <CardTitle className="flex items-center gap-4 text-lg">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-green-200 shadow-lg flex-shrink-0">
                <PieChartIcon className="h-6 w-6 text-blue-600" />
              </div>
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-green-600 bg-clip-text text-transparent font-bold flex-1">
                Assigned vs Resolved Tickets
              </span>
            </CardTitle>
            <CardDescription className="text-gray-600 ml-12">Your ticket assignment and resolution performance with 3D visualization</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/80 via-gray-50/50 to-blue-50/30 backdrop-blur-sm shadow-inner">
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <defs>
                    <filter id="pieShadow3DSupport" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="8" stdDeviation="10" floodOpacity="0.4"/>
                      <feDropShadow dx="0" dy="4" stdDeviation="20" floodOpacity="0.2"/>
                    </filter>
                    <linearGradient id="assignedGradSupport" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                    <linearGradient id="resolvedGradSupport" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                  </defs>
                  <Pie
                    data={agentPerformanceData}
                    cx="50%"
                    cy="50%"
                    outerRadius={95}
                    innerRadius={50}
                    paddingAngle={10}
                    dataKey="value"
                    filter="url(#pieShadow3DSupport)"
                  >
                    <Cell fill="url(#assignedGradSupport)" stroke="#ffffff" strokeWidth={4} />
                    <Cell fill="url(#resolvedGradSupport)" stroke="#ffffff" strokeWidth={4} />
                  </Pie>
                  <Tooltip content={<Custom3DTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-8 mt-6">
              {agentPerformanceData.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white shadow-lg border border-gray-100">
                  <div 
                    className="w-5 h-5 rounded-full shadow-lg ring-2 ring-white" 
                    style={{ 
                      backgroundColor: item.color,
                      boxShadow: `0 4px 12px ${item.color}40`
                    }}
                  />
                  <span className="text-sm font-semibold text-gray-700">{item.name}: {item.value}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 p-6 rounded-2xl bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 shadow-inner border border-green-100">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent mb-2">79.8%</div>
              <div className="text-sm text-gray-600 font-semibold">Resolution Rate</div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced 3D Area Chart */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-purple-50/30 hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 via-transparent to-orange-500/5"></div>
          <CardHeader className="relative z-10 pb-4">
            <CardTitle className="flex items-center gap-4 text-lg">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-orange-200 shadow-lg flex-shrink-0">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent font-bold flex-1">
                Ticket Category Trends
              </span>
            </CardTitle>
            <CardDescription className="text-gray-600 ml-12">Monthly ticket distribution by category with gradient overlays</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/80 via-gray-50/50 to-purple-50/30 backdrop-blur-sm shadow-inner">
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={categoryTrendData}>
                  <defs>
                    <linearGradient id="complaintsGradSupport" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity={0.8}/>
                      <stop offset="50%" stopColor="#dc2626" stopOpacity={0.6}/>
                      <stop offset="100%" stopColor="#ef4444" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="feedbackGradSupport" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="50%" stopColor="#047857" stopOpacity={0.6}/>
                      <stop offset="100%" stopColor="#10b981" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="suggestionsGradSupport" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="50%" stopColor="#1e40af" stopOpacity={0.6}/>
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="requestsGradSupport" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.8}/>
                      <stop offset="50%" stopColor="#d97706" stopOpacity={0.6}/>
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.6} />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 13, fontWeight: 500 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 13, fontWeight: 500 }}
                  />
                  <Tooltip content={<Custom3DTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="Complaints" 
                    stackId="1" 
                    stroke="#ef4444" 
                    strokeWidth={4}
                    fill="url(#complaintsGradSupport)" 
                    filter="url(#shadow3DSupport)"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="Feedback" 
                    stackId="1" 
                    stroke="#10b981" 
                    strokeWidth={4}
                    fill="url(#feedbackGradSupport)" 
                    filter="url(#shadow3DSupport)"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="Suggestions" 
                    stackId="1" 
                    stroke="#3b82f6" 
                    strokeWidth={4}
                    fill="url(#suggestionsGradSupport)" 
                    filter="url(#shadow3DSupport)"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="Requests" 
                    stackId="1" 
                    stroke="#f59e0b" 
                    strokeWidth={4}
                    fill="url(#requestsGradSupport)" 
                    filter="url(#shadow3DSupport)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Enhanced Channel Distribution with 3D Pie Chart */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-transparent to-blue-500/5"></div>
          <CardHeader className="relative z-10 pb-4">
            <CardTitle className="flex items-center gap-4 text-lg">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-200 shadow-lg flex-shrink-0">
                <PieChartIcon className="h-6 w-6 text-cyan-600" />
              </div>
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-bold flex-1">
                Channel Distribution
              </span>
            </CardTitle>
            <CardDescription className="text-gray-600 ml-12">Communication channels with 3D visualization</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/80 via-gray-50/50 to-cyan-50/30 backdrop-blur-sm shadow-inner">
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <defs>
                    <filter id="channelShadow3D" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="6" stdDeviation="8" floodOpacity="0.4"/>
                      <feDropShadow dx="0" dy="3" stdDeviation="15" floodOpacity="0.2"/>
                    </filter>
                  </defs>
                  <Pie
                    data={channelDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={40}
                    paddingAngle={8}
                    dataKey="count"
                    filter="url(#channelShadow3D)"
                  >
                    {channelDistribution.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        stroke="#ffffff"
                        strokeWidth={3}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<Custom3DTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {channelDistribution.map((channel, index) => {
                const ChannelIcon = getChannelIcon(channel.channel);
                return (
                  <div key={channel.channel} className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-white/90 to-gray-50/80 shadow-lg border border-gray-100">
                    <div className="p-2 rounded-lg shadow-sm" style={{ backgroundColor: `${channel.color}20` }}>
                      <ChannelIcon className="h-4 w-4" style={{ color: channel.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-gray-800 truncate">{channel.channel}</div>
                      <div className="text-xs text-gray-600">{channel.count} tickets ({channel.percentage}%)</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Efficiency Metrics */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-transparent to-teal-500/5"></div>
          <CardHeader className="relative z-10 pb-4">
            <CardTitle className="flex items-center gap-4 text-lg">
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-200 shadow-lg flex-shrink-0">
                <Target className="h-6 w-6 text-emerald-600" />
              </div>
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-bold flex-1">
                Efficiency Metrics
              </span>
            </CardTitle>
            <CardDescription className="text-gray-600 ml-12">Your performance indicators with enhanced visuals</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 relative z-10">
            {efficiencyMetrics.map((metric, index) => {
              const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
              const metricGradients = [
                'from-blue-50 to-blue-100',
                'from-green-50 to-green-100',
                'from-purple-50 to-purple-100',
                'from-orange-50 to-orange-100'
              ];
              return (
                <div key={index} className={`space-y-4 p-5 rounded-2xl bg-gradient-to-r ${metricGradients[index]} shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-800">{metric.metric}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-bold text-gray-800">{metric.value}</span>
                      <div className="flex items-center gap-1 p-2 rounded-full bg-green-100">
                        <TrendIcon className={`h-4 w-4 ${metric.color}`} />
                        <span className={`text-sm font-bold ${metric.color}`}>{metric.change}</span>
                      </div>
                    </div>
                  </div>
                  {metric.metric === 'Resolution Rate' && (
                    <div className="relative">
                      <div className="w-full bg-white/80 rounded-full h-4 shadow-inner overflow-hidden">
                        <div className="h-4 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 transition-all duration-700 shadow-sm rounded-full" style={{ width: '89%' }}></div>
                      </div>
                    </div>
                  )}
                  {metric.metric === 'First Contact Resolution' && (
                    <div className="relative">
                      <div className="w-full bg-white/80 rounded-full h-4 shadow-inner overflow-hidden">
                        <div className="h-4 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 transition-all duration-700 shadow-sm rounded-full" style={{ width: '76%' }}></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Enhanced AI Insights */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-purple-50/30 hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 via-transparent to-pink-500/5"></div>
          <CardHeader className="relative z-10 pb-4">
            <CardTitle className="flex items-center gap-4 text-lg">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-pink-200 shadow-lg flex-shrink-0">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold flex-1">
                AI Insights
              </span>
            </CardTitle>
            <CardDescription className="text-gray-600 ml-12">Smart recommendations with enhanced visual appeal</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 relative z-10">
            {[
              {
                gradient: 'from-yellow-50 via-amber-100/80 to-yellow-50',
                shadowColor: 'shadow-yellow-200/50',
                iconGradient: 'from-yellow-400 to-amber-500',
                textColor: 'text-yellow-800',
                icon: AlertCircle,
                title: 'Priority Alert',
                content: '3 high-priority complaints require immediate attention'
              },
              {
                gradient: 'from-blue-50 via-cyan-100/80 to-blue-50',
                shadowColor: 'shadow-blue-200/50',
                iconGradient: 'from-blue-400 to-cyan-500',
                textColor: 'text-blue-800',
                icon: Star,
                title: 'Opportunity',
                content: '12 tickets can be auto-resolved using AI suggestions'
              },
              {
                gradient: 'from-green-50 via-emerald-100/80 to-green-50',
                shadowColor: 'shadow-green-200/50',
                iconGradient: 'from-green-400 to-emerald-500',
                textColor: 'text-green-800',
                icon: Award,
                title: 'Achievement',
                content: "You're performing 15% above team average this week"
              }
            ].map((item, index) => (
              <div key={index} className={`p-5 bg-gradient-to-br ${item.gradient} rounded-2xl shadow-xl ${item.shadowColor} hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-2xl"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.iconGradient} shadow-lg`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-bold ${item.textColor} mb-2`}>{item.title}</p>
                    <p className={`text-sm ${item.textColor} leading-relaxed opacity-90`}>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Recent Tickets */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/3 via-transparent to-blue-500/5"></div>
        <CardHeader className="relative z-10 pb-6">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent font-bold text-xl">Recent Tickets</CardTitle>
              <CardDescription className="text-gray-600 mt-1">Latest customer support tickets with enhanced visual presentation</CardDescription>
            </div>
            <Button 
              variant="outline" 
              onClick={() => onNavigate && onNavigate('ticket-list')}
              className="border-0 shadow-lg bg-gradient-to-r from-indigo-500 to-blue-600 text-white hover:shadow-xl transition-all duration-300"
            >
              View All Tickets
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="space-y-5">
            {recentTickets.map((ticket, index) => {
              const CategoryIcon = getCategoryIcon(ticket.category);
              const ChannelIcon = getChannelIcon(ticket.channel);
              const gradientColors = [
                'from-blue-500 to-purple-600', 
                'from-green-500 to-teal-600', 
                'from-orange-500 to-red-600'
              ];
              
              return (
                <div 
                  key={ticket.id} 
                  className="group p-6 border-0 rounded-2xl cursor-pointer hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white/90 via-gray-50/50 to-white/90 backdrop-blur-sm shadow-lg hover:scale-[1.01] relative overflow-hidden"
                  onClick={() => handleTicketClick(ticket.id)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradientColors[index]} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                  
                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${gradientColors[index]} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <span className="text-white font-bold text-sm">{ticket.id.split('-')[2]}</span>
                      </div>
                      <h4 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{ticket.id}</h4>
                      <Badge variant={getStatusColor(ticket.status)} className="shadow-md px-3 py-1 font-medium">
                        {ticket.status}
                      </Badge>
                      <Badge variant={getPriorityColor(ticket.priority)} className="shadow-md px-3 py-1 font-medium">
                        {ticket.priority}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm" className="hover:bg-blue-50 transition-colors">
                      <Eye className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm relative z-10 mb-4">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 shadow-sm border border-gray-100">
                      <ChannelIcon className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold text-gray-700">{ticket.channel}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 shadow-sm border border-gray-100">
                      <CategoryIcon className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-gray-700">{ticket.category}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 shadow-sm border border-gray-100">
                      <Users className="h-5 w-5 text-purple-600" />
                      <span className="font-semibold text-gray-700">{ticket.customer}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 shadow-sm border border-gray-100">
                      <Clock className="h-5 w-5 text-orange-600" />
                      <span className="font-semibold text-gray-700 text-xs">{ticket.expectedResolution}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 font-semibold p-4 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-xl shadow-inner relative z-10 border border-gray-100">
                    {ticket.subject}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            gradient: 'from-blue-500 to-purple-600',
            icon: BarChart3,
            label: 'Ticket Board',
            onClick: () => onNavigate && onNavigate('ticket-kanban')
          },
          {
            gradient: 'from-green-500 to-teal-600',
            icon: MessageSquare,
            label: 'All Tickets',
            onClick: () => onNavigate && onNavigate('ticket-list')
          },
          {
            gradient: 'from-purple-500 to-pink-600',
            icon: Zap,
            label: 'AI Suggestions',
            onClick: () => {}
          },
          {
            gradient: 'from-orange-500 to-red-600',
            icon: Calendar,
            label: 'Schedule',
            onClick: () => {}
          }
        ].map((action, index) => (
          <Button 
            key={index}
            className={`h-24 flex flex-col items-center justify-center bg-gradient-to-br ${action.gradient} text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] border-0 relative overflow-hidden group`}
            onClick={action.onClick}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm mb-3 group-hover:scale-110 transition-transform duration-300">
              <action.icon className="h-6 w-6" />
            </div>
            <span className="font-bold">{action.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}