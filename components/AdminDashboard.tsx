import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription } from './ui/alert';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  AreaChart, 
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend,
  ComposedChart,
  ScatterChart,
  Scatter,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import { 
  TrendingUp,
  TrendingDown,
  Users,
  Clock,
  AlertTriangle,
  CheckCircle,
  MessageSquare,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Target,
  Award,
  Zap,
  Activity,
  BarChart3,
  PieChart as PieChartIcon,
  Settings,
  Bell,
  Filter,
  Download,
  RefreshCw,
  Calendar,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Star,
  HelpCircle,
  Flame,
  Shield,
  Timer,
  ArrowUp,
  ArrowDown,
  Minus,
  Hash,
  Percent,
  TrendingUpIcon,
  TrendingDownIcon,
  AlertCircle,
  Info,
  CheckCircle2,
  XCircle,
  User,
  Trophy,
  Gauge,
  Bolt,
  BarChart4,
  TrendingUpDown,
  UserCheck,
  Clock4,
  Target as TargetIcon,
  Crown,
  Medal,
  Sparkles
} from 'lucide-react';

// Enhanced agent performance data
const agentPerformanceData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'SJ',
    email: 'sarah.johnson@company.com',
    department: 'Senior Support',
    status: 'online',
    // Efficiency Metrics
    ticketsResolved: 42,
    ticketsAssigned: 45,
    resolutionRate: 93.3,
    avgResolutionTime: 2.3,
    firstResponseTime: 0.8,
    // Throughput Metrics
    ticketsPerHour: 5.2,
    ticketsPerDay: 42,
    workingHours: 8,
    utilization: 94,
    // Quality Metrics
    customerSatisfaction: 4.8,
    qualityScore: 96,
    escalationRate: 4.4,
    reopenRate: 2.1,
    // Performance Indicators
    slaCompliance: 94,
    responseTimeCompliance: 98,
    activeTickets: 3,
    overdueTasks: 0,
    efficiency: 93,
    productivity: 89,
    weeklyTrend: 5.2,
    monthlyGrowth: 12.3
  },
  {
    id: 2,
    name: 'Mike Davis',
    avatar: 'MD',
    email: 'mike.davis@company.com',
    department: 'General Support',
    status: 'online',
    ticketsResolved: 33,
    ticketsAssigned: 38,
    resolutionRate: 86.8,
    avgResolutionTime: 3.1,
    firstResponseTime: 1.2,
    ticketsPerHour: 4.1,
    ticketsPerDay: 33,
    workingHours: 8,
    utilization: 87,
    customerSatisfaction: 4.5,
    qualityScore: 88,
    escalationRate: 7.9,
    reopenRate: 3.5,
    slaCompliance: 87,
    responseTimeCompliance: 92,
    activeTickets: 5,
    overdueTasks: 1,
    efficiency: 87,
    productivity: 82,
    weeklyTrend: -2.1,
    monthlyGrowth: 7.8
  },
  {
    id: 3,
    name: 'Lisa Wong',
    avatar: 'LW',
    email: 'lisa.wong@company.com',
    department: 'Technical Support',
    status: 'online',
    ticketsResolved: 39,
    ticketsAssigned: 42,
    resolutionRate: 92.9,
    avgResolutionTime: 2.7,
    firstResponseTime: 0.9,
    ticketsPerHour: 4.9,
    ticketsPerDay: 39,
    workingHours: 8,
    utilization: 92,
    customerSatisfaction: 4.7,
    qualityScore: 94,
    escalationRate: 5.2,
    reopenRate: 1.8,
    slaCompliance: 93,
    responseTimeCompliance: 96,
    activeTickets: 3,
    overdueTasks: 0,
    efficiency: 93,
    productivity: 91,
    weeklyTrend: 3.8,
    monthlyGrowth: 15.2
  },
  {
    id: 4,
    name: 'John Smith',
    avatar: 'JS',
    email: 'john.smith@company.com',
    department: 'General Support',
    status: 'away',
    ticketsResolved: 30,
    ticketsAssigned: 35,
    resolutionRate: 85.7,
    avgResolutionTime: 3.5,
    firstResponseTime: 1.5,
    ticketsPerHour: 3.8,
    ticketsPerDay: 30,
    workingHours: 8,
    utilization: 86,
    customerSatisfaction: 4.3,
    qualityScore: 85,
    escalationRate: 8.6,
    reopenRate: 4.2,
    slaCompliance: 86,
    responseTimeCompliance: 89,
    activeTickets: 5,
    overdueTasks: 2,
    efficiency: 86,
    productivity: 78,
    weeklyTrend: -1.5,
    monthlyGrowth: 4.1
  },
  {
    id: 5,
    name: 'Emma Wilson',
    avatar: 'EW',  
    email: 'emma.wilson@company.com',
    department: 'Premium Support',
    status: 'online',
    ticketsResolved: 37,
    ticketsAssigned: 40,
    resolutionRate: 92.5,
    avgResolutionTime: 2.9,
    firstResponseTime: 1.0,
    ticketsPerHour: 4.6,
    ticketsPerDay: 37,
    workingHours: 8,
    utilization: 93,
    customerSatisfaction: 4.6,
    qualityScore: 91,
    escalationRate: 6.0,
    reopenRate: 2.7,
    slaCompliance: 93,
    responseTimeCompliance: 95,
    activeTickets: 3,
    overdueTasks: 0,
    efficiency: 93,
    productivity: 87,
    weeklyTrend: 2.9,
    monthlyGrowth: 9.7
  }
];

// Team performance comparison data
const teamPerformanceData = [
  { department: 'Senior Support', efficiency: 93, throughput: 5.2, satisfaction: 4.8, agents: 1 },
  { department: 'Technical Support', efficiency: 93, throughput: 4.9, satisfaction: 4.7, agents: 1 },
  { department: 'Premium Support', efficiency: 93, throughput: 4.6, satisfaction: 4.6, agents: 1 },
  { department: 'General Support', efficiency: 86.5, throughput: 4.0, satisfaction: 4.4, agents: 2 }
];

// Performance trends data
const performanceTrendData = [
  { week: 'Week 1', efficiency: 89, throughput: 4.2, satisfaction: 4.3 },
  { week: 'Week 2', efficiency: 91, throughput: 4.5, satisfaction: 4.4 },
  { week: 'Week 3', efficiency: 88, throughput: 4.1, satisfaction: 4.2 },
  { week: 'Week 4', efficiency: 92, throughput: 4.7, satisfaction: 4.6 }
];

// Enhanced mock data with more comprehensive metrics
const volumeAnalyticsData = [
  { 
    period: 'Week 1', 
    totalTickets: 156, 
    complaints: 89, 
    requests: 45, 
    feedback: 22, 
    escalations: 12,
    avgWaitTime: 2.3,
    peakHour: '14:00',
    lowPoint: '04:00'
  },
  { 
    period: 'Week 2', 
    totalTickets: 134, 
    complaints: 76, 
    requests: 38, 
    feedback: 20, 
    escalations: 8,
    avgWaitTime: 1.9,
    peakHour: '15:00',
    lowPoint: '03:00'
  },
  { 
    period: 'Week 3', 
    totalTickets: 178, 
    complaints: 102, 
    requests: 54, 
    feedback: 22, 
    escalations: 15,
    avgWaitTime: 2.8,
    peakHour: '13:00',
    lowPoint: '05:00'
  },
  { 
    period: 'Week 4', 
    totalTickets: 165, 
    complaints: 94, 
    requests: 48, 
    feedback: 23, 
    escalations: 11,
    avgWaitTime: 2.2,
    peakHour: '14:00',
    lowPoint: '04:00'
  }
];

const channelAnalyticsData = [
  { 
    channel: 'Email', 
    volume: 156, 
    percentage: 42, 
    satisfaction: 4.3, 
    avgResolutionTime: 4.2,
    firstResponseTime: 1.2,
    escalationRate: 8.5,
    costPerTicket: 12.5,
    agentUtilization: 87,
    repeatCustomers: 23
  },
  { 
    channel: 'WhatsApp', 
    volume: 134, 
    percentage: 36, 
    satisfaction: 4.6, 
    avgResolutionTime: 2.8,
    firstResponseTime: 0.8,
    escalationRate: 5.2,
    costPerTicket: 8.3,
    agentUtilization: 92,
    repeatCustomers: 18
  },
  { 
    channel: 'Website Chat', 
    volume: 58, 
    percentage: 16, 
    satisfaction: 4.1, 
    avgResolutionTime: 3.5,
    firstResponseTime: 1.5,
    escalationRate: 12.1,
    costPerTicket: 15.2,
    agentUtilization: 78,
    repeatCustomers: 31
  },
  { 
    channel: 'Phone', 
    volume: 22, 
    percentage: 6, 
    satisfaction: 4.8, 
    avgResolutionTime: 1.2,
    firstResponseTime: 0.3,
    escalationRate: 3.8,
    costPerTicket: 25.7,
    agentUtilization: 95,
    repeatCustomers: 12
  }
];

const sentimentAnalyticsData = [
  { 
    week: 'Week 1', 
    positive: 65, 
    neutral: 25, 
    negative: 10, 
    avgRating: 4.2,
    veryPositive: 28,
    veryNegative: 3,
    emotionalIntensity: 7.2,
    keywordSentiment: { praise: 34, complaint: 8, suggestion: 23 }
  },
  { 
    week: 'Week 2', 
    positive: 68, 
    neutral: 22, 
    negative: 10, 
    avgRating: 4.3,
    veryPositive: 31,
    veryNegative: 2,
    emotionalIntensity: 7.5,
    keywordSentiment: { praise: 38, complaint: 6, suggestion: 24 }
  },
  { 
    week: 'Week 3', 
    positive: 62, 
    neutral: 28, 
    negative: 10, 
    avgRating: 4.1,
    veryPositive: 25,
    veryNegative: 4,
    emotionalIntensity: 6.8,
    keywordSentiment: { praise: 29, complaint: 12, suggestion: 21 }
  },
  { 
    week: 'Week 4', 
    positive: 70, 
    neutral: 20, 
    negative: 10, 
    avgRating: 4.4,
    veryPositive: 35,
    veryNegative: 2,
    emotionalIntensity: 7.8,
    keywordSentiment: { praise: 42, complaint: 5, suggestion: 23 }
  }
];

const slaAnalyticsData = [
  { 
    category: 'Critical Issues', 
    target: 2, 
    current: 1.8, 
    compliance: 94,
    breaches: 3,
    totalTickets: 48,
    avgResolution: 1.8,
    withinTarget: 45,
    escalated: 2
  },
  { 
    category: 'Standard Requests', 
    target: 4, 
    current: 3.2, 
    compliance: 89,
    breaches: 8,
    totalTickets: 156,
    avgResolution: 3.2,
    withinTarget: 139,
    escalated: 9
  },
  { 
    category: 'Low Priority', 
    target: 8, 
    current: 6.8, 
    compliance: 96,
    breaches: 2,
    totalTickets: 89,
    avgResolution: 6.8,
    withinTarget: 85,
    escalated: 2
  },
  { 
    category: 'General Inquiries', 
    target: 6, 
    current: 4.9, 
    compliance: 92,
    breaches: 5,
    totalTickets: 78,
    avgResolution: 4.9,
    withinTarget: 72,
    escalated: 1
  }
];

const volumeTrendData = [
  { time: '00:00', volume: 5, complaints: 2, requests: 2, feedback: 1 },
  { time: '02:00', volume: 3, complaints: 1, requests: 1, feedback: 1 },
  { time: '04:00', volume: 2, complaints: 1, requests: 1, feedback: 0 },
  { time: '06:00', volume: 8, complaints: 4, requests: 3, feedback: 1 },
  { time: '08:00', volume: 25, complaints: 12, requests: 10, feedback: 3 },
  { time: '10:00', volume: 35, complaints: 18, requests: 12, feedback: 5 },
  { time: '12:00', volume: 42, complaints: 22, requests: 15, feedback: 5 },
  { time: '14:00', volume: 38, complaints: 20, requests: 13, feedback: 5 },
  { time: '16:00', volume: 45, complaints: 25, requests: 15, feedback: 5 },
  { time: '18:00', volume: 32, complaints: 18, requests: 10, feedback: 4 },
  { time: '20:00', volume: 18, complaints: 10, requests: 6, feedback: 2 },
  { time: '22:00', volume: 12, complaints: 6, requests: 4, feedback: 2 }
];

interface AdminDashboardProps {
  onNavigate?: (screen: string, params?: any) => void;
}

// Enhanced 3D Tooltip
const Custom3DTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gradient-to-br from-white via-purple-50/95 to-white backdrop-blur-xl border-0 shadow-2xl rounded-2xl p-5 transform transition-all duration-200 ease-out border border-white/20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5 rounded-2xl"></div>
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
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-sm"></div>
      </div>
    );
  }
  return null;
};

// Agent performance helper functions
const getPerformanceColor = (value: number, threshold: { excellent: number, good: number }) => {
  if (value >= threshold.excellent) return 'text-green-600';
  if (value >= threshold.good) return 'text-yellow-600';
  return 'text-red-600';
};

const getPerformanceBadge = (value: number, threshold: { excellent: number, good: number }) => {
  if (value >= threshold.excellent) return 'default';
  if (value >= threshold.good) return 'secondary';
  return 'destructive';
};

const getEfficiencyRank = (agents: typeof agentPerformanceData) => {
  return agents
    .sort((a, b) => b.efficiency - a.efficiency)
    .map((agent, index) => ({ ...agent, rank: index + 1 }));
};

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');
  const [selectedMetric, setSelectedMetric] = useState('all');
  const [selectedAgent, setSelectedAgent] = useState<string>('all');

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  const rankedAgents = getEfficiencyRank(agentPerformanceData);
  const topPerformer = rankedAgents[0];
  const teamAvgEfficiency = agentPerformanceData.reduce((sum, agent) => sum + agent.efficiency, 0) / agentPerformanceData.length;
  const teamAvgThroughput = agentPerformanceData.reduce((sum, agent) => sum + agent.ticketsPerHour, 0) / agentPerformanceData.length;
  const teamAvgSatisfaction = agentPerformanceData.reduce((sum, agent) => sum + agent.customerSatisfaction, 0) / agentPerformanceData.length;

  return (
    <div className="space-y-8">
      {/* Enhanced Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Comprehensive analytics for volume, channels, sentiment, SLA management, and agent performance</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <SelectTrigger className="w-36 border-0 shadow-lg bg-gradient-to-r from-white to-gray-50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="border-0 shadow-lg bg-gradient-to-r from-white to-gray-50">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" size="sm" className="border-0 shadow-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="agents" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-gradient-to-r from-gray-50 via-white to-gray-50 shadow-xl border-0 p-2 rounded-2xl">
          <TabsTrigger value="agents" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl font-semibold">Agent Performance</TabsTrigger>
          <TabsTrigger value="volumes" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl font-semibold">Volume Analytics</TabsTrigger>
          <TabsTrigger value="channels" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl font-semibold">Channel Analysis</TabsTrigger>
          <TabsTrigger value="sentiment" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl font-semibold">Sentiment Trends</TabsTrigger>
          <TabsTrigger value="sla" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-cyan-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl font-semibold">SLA Management</TabsTrigger>
        </TabsList>

        {/* Agent Performance Tab */}
        <TabsContent value="agents" className="space-y-8">
          {/* Team Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Team Efficiency</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-200 shadow-lg">
                  <Gauge className="h-5 w-5 text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {teamAvgEfficiency.toFixed(1)}%
                </div>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
                    <TrendingUp className="h-3 w-3" />
                    +2.3%
                  </span>
                  <span className="text-xs">vs last week</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 via-white to-emerald-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Avg Throughput</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-100 to-emerald-200 shadow-lg">
                  <Bolt className="h-5 w-5 text-green-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {teamAvgThroughput.toFixed(1)}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">tickets/hour</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-yellow-50 via-white to-amber-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Team Satisfaction</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-100 to-amber-200 shadow-lg">
                  <Star className="h-5 w-5 text-yellow-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                  {teamAvgSatisfaction.toFixed(1)}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">out of 5.0</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 via-white to-pink-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Top Performer</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-pink-200 shadow-lg">
                  <Crown className="h-5 w-5 text-purple-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold mb-1 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {topPerformer.name}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">{topPerformer.efficiency}% efficiency</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Agent Performance Table */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-purple-200 shadow-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                Individual Agent Performance
              </CardTitle>
              <CardDescription>Comprehensive performance metrics for each team member</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left p-4 font-semibold text-gray-700">Agent</th>
                      <th className="text-center p-4 font-semibold text-gray-700">Efficiency</th>
                      <th className="text-center p-4 font-semibold text-gray-700">Throughput</th>
                      <th className="text-center p-4 font-semibold text-gray-700">Satisfaction</th>
                      <th className="text-center p-4 font-semibold text-gray-700">Resolution Rate</th>
                      <th className="text-center p-4 font-semibold text-gray-700">Avg Time</th>
                      <th className="text-center p-4 font-semibold text-gray-700">Active</th>
                      <th className="text-center p-4 font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rankedAgents.map((agent, index) => (
                      <tr key={agent.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <Avatar className="h-10 w-10">
                                <AvatarFallback className="bg-gradient-to-br from-blue-100 to-purple-200 text-blue-700 font-semibold">
                                  {agent.avatar}
                                </AvatarFallback>
                              </Avatar>
                              <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                                agent.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                              }`}></div>
                              {agent.rank <= 3 && (
                                <div className="absolute -top-2 -left-2">
                                  {agent.rank === 1 && <Crown className="h-4 w-4 text-yellow-500" />}
                                  {agent.rank === 2 && <Medal className="h-4 w-4 text-gray-400" />}
                                  {agent.rank === 3 && <Medal className="h-4 w-4 text-orange-600" />}
                                </div>
                              )}
                            </div>
                            <div>
                              <div className="font-semibold">{agent.name}</div>
                              <div className="text-sm text-gray-500">{agent.department}</div>
                            </div>
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <div className="flex flex-col items-center gap-1">
                            <div className={`font-bold text-lg ${getPerformanceColor(agent.efficiency, { excellent: 90, good: 80 })}`}>
                              {agent.efficiency}%
                            </div>
                            <Progress value={agent.efficiency} className="w-16 h-2" />
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <div className="font-semibold text-lg">{agent.ticketsPerHour}</div>
                          <div className="text-sm text-gray-500">tickets/hr</div>
                        </td>
                        <td className="text-center p-4">
                          <div className="flex items-center justify-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="font-semibold">{agent.customerSatisfaction}</span>
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <Badge variant={getPerformanceBadge(agent.resolutionRate, { excellent: 90, good: 80 })}>
                            {agent.resolutionRate.toFixed(1)}%
                          </Badge>
                        </td>
                        <td className="text-center p-4">
                          <span className="font-semibold">{agent.avgResolutionTime}h</span>
                        </td>
                        <td className="text-center p-4">
                          <div className="flex flex-col items-center">
                            <span className="font-bold">{agent.activeTickets}</span>
                            {agent.overdueTasks > 0 && (
                              <span className="text-xs text-red-600">
                                {agent.overdueTasks} overdue
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <div className="flex items-center justify-center">
                            {agent.status === 'online' ? (
                              <CheckCircle2 className="h-5 w-5 text-green-600" />
                            ) : (
                              <Clock className="h-5 w-5 text-yellow-600" />
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Performance Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-green-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-100 to-emerald-200 shadow-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  Performance Trends
                </CardTitle>
                <CardDescription>Weekly team performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip content={<Custom3DTooltip />} />
                    <Legend />
                    <Line type="monotone" dataKey="efficiency" stroke="#10b981" strokeWidth={3} name="Efficiency %" />
                    <Line type="monotone" dataKey="throughput" stroke="#3b82f6" strokeWidth={3} name="Throughput" />
                    <Line type="monotone" dataKey="satisfaction" stroke="#f59e0b" strokeWidth={3} name="Satisfaction" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-pink-200 shadow-lg">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  Department Comparison
                </CardTitle>
                <CardDescription>Performance metrics by department</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={teamPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="department" />
                    <YAxis />
                    <Tooltip content={<Custom3DTooltip />} />
                    <Legend />
                    <Bar dataKey="efficiency" fill="#8b5cf6" name="Efficiency %" />
                    <Bar dataKey="throughput" fill="#06b6d4" name="Throughput" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Volume Analytics Tab */}
        <TabsContent value="volumes" className="space-y-8">
          {/* Volume Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 via-white to-red-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Total Volume</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-100 to-red-200 shadow-lg">
                  <BarChart3 className="h-5 w-5 text-orange-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">633</div>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
                    <TrendingUp className="h-3 w-3" />
                    +8.2%
                  </span>
                  <span className="text-xs">vs last month</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Daily Average</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-200 shadow-lg">
                  <Activity className="h-5 w-5 text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">158</div>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-red-600 font-semibold bg-red-50 px-2 py-1 rounded-full">
                    <TrendingDown className="h-3 w-3" />
                    -2.1%
                  </span>
                  <span className="text-xs">vs last week</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 via-white to-pink-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Peak Hour</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-pink-200 shadow-lg">
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">14:00</div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">45 tickets</span> at peak
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 via-white to-emerald-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Escalation Rate</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-100 to-emerald-200 shadow-lg">
                  <AlertTriangle className="h-5 w-5 text-green-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">7.2%</div>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
                    <TrendingDown className="h-3 w-3" />
                    -1.8%
                  </span>
                  <span className="text-xs">improvement</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Volume Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-100 to-red-200 shadow-lg">
                    <Activity className="h-6 w-6 text-orange-600" />
                  </div>
                  24-Hour Volume Distribution
                </CardTitle>
                <CardDescription>Hourly ticket volume breakdown by category</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={volumeTrendData}>
                    <defs>
                      <linearGradient id="volumeArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f97316" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="#f97316" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip content={<Custom3DTooltip />} />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="volume" 
                      stroke="#f97316" 
                      strokeWidth={3}
                      fill="url(#volumeArea)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-200 shadow-lg">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  Category Breakdown
                </CardTitle>
                <CardDescription>Volume distribution by ticket category</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={volumeAnalyticsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="period" />
                    <YAxis />
                    <Tooltip content={<Custom3DTooltip />} />
                    <Legend />
                    <Bar dataKey="complaints" fill="#ef4444" name="Complaints" />
                    <Bar dataKey="requests" fill="#3b82f6" name="Requests" />
                    <Bar dataKey="feedback" fill="#10b981" name="Feedback" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Channel Analysis Tab */}
        <TabsContent value="channels" className="space-y-8">
          {/* Channel Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 via-white to-pink-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Top Channel</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-pink-200 shadow-lg">
                  <Mail className="h-5 w-5 text-purple-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Email</div>
                <div className="text-lg font-semibold text-gray-700">42% of volume</div>
                <p className="text-sm text-gray-600">156 tickets this week</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 via-white to-teal-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Best Satisfaction</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-100 to-teal-200 shadow-lg">
                  <Star className="h-5 w-5 text-green-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Phone</div>
                <div className="text-lg font-semibold text-gray-700">4.8/5 rating</div>
                <p className="text-sm text-gray-600">Fastest resolution</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 via-white to-cyan-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Most Efficient</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-200 shadow-lg">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">WhatsApp</div>
                <div className="text-lg font-semibold text-gray-700">2.8h avg time</div>
                <p className="text-sm text-gray-600">92% utilization</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-yellow-50 via-white to-orange-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Cost Leader</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-100 to-orange-200 shadow-lg">
                  <Target className="h-5 w-5 text-yellow-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">WhatsApp</div>
                <div className="text-lg font-semibold text-gray-700">$8.30 per ticket</div>
                <p className="text-sm text-gray-600">Lowest cost channel</p>
              </CardContent>
            </Card>
          </div>

          {/* Channel Performance Table */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-pink-200 shadow-lg">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                Channel Performance Analysis
              </CardTitle>
              <CardDescription>Comprehensive metrics across all communication channels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left p-4 font-semibold text-gray-700">Channel</th>
                      <th className="text-center p-4 font-semibold text-gray-700">Volume</th>
                      <th className="text-center p-4 font-semibold text-gray-700">Satisfaction</th>
                      <th className="text-center p-4 font-semibold text-gray-700">Avg Resolution</th>
                      <th className="text-center p-4 font-semibold text-gray-700">First Response</th>
                      <th className="text-center p-4 font-semibold text-gray-700">Escalation Rate</th>
                      <th className="text-center p-4 font-semibold text-gray-700">Cost/Ticket</th>
                    </tr>
                  </thead>
                  <tbody>
                    {channelAnalyticsData.map((channel, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-purple-200">
                              {channel.channel === 'Email' && <Mail className="h-4 w-4 text-blue-600" />}
                              {channel.channel === 'WhatsApp' && <MessageCircle className="h-4 w-4 text-green-600" />}
                              {channel.channel === 'Website Chat' && <Globe className="h-4 w-4 text-purple-600" />}
                              {channel.channel === 'Phone' && <Phone className="h-4 w-4 text-orange-600" />}
                            </div>
                            <span className="font-semibold">{channel.channel}</span>
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <div className="font-bold text-lg">{channel.volume}</div>
                          <div className="text-sm text-gray-600">{channel.percentage}%</div>
                        </td>
                        <td className="text-center p-4">
                          <div className="flex items-center justify-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="font-semibold">{channel.satisfaction}</span>
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <span className="font-semibold">{channel.avgResolutionTime}h</span>
                        </td>
                        <td className="text-center p-4">
                          <span className="font-semibold">{channel.firstResponseTime}h</span>
                        </td>
                        <td className="text-center p-4">
                          <Badge variant={channel.escalationRate > 10 ? "destructive" : channel.escalationRate > 5 ? "secondary" : "default"}>
                            {channel.escalationRate}%
                          </Badge>
                        </td>
                        <td className="text-center p-4">
                          <span className="font-semibold">${channel.costPerTicket}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sentiment Trends Tab */}
        <TabsContent value="sentiment" className="space-y-8">
          {/* Sentiment Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 via-white to-emerald-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Positive Sentiment</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-100 to-emerald-200 shadow-lg">
                  <ThumbsUp className="h-5 w-5 text-green-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">68%</div>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
                    <TrendingUp className="h-3 w-3" />
                    +3.2%
                  </span>
                  <span className="text-xs">vs last month</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-50 via-white to-slate-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Neutral Sentiment</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-gray-100 to-slate-200 shadow-lg">
                  <Minus className="h-5 w-5 text-gray-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">22%</div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Stable range</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-red-50 via-white to-pink-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Negative Sentiment</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-red-100 to-pink-200 shadow-lg">
                  <ThumbsDown className="h-5 w-5 text-red-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">10%</div>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
                    <TrendingDown className="h-3 w-3" />
                    -1.1%
                  </span>
                  <span className="text-xs">improvement</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-yellow-50 via-white to-amber-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Avg Rating</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-100 to-amber-200 shadow-lg">
                  <Star className="h-5 w-5 text-yellow-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">4.3</div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Out of 5.0</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sentiment Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-200 shadow-lg">
                    <TrendingUp className="h-6 w-6 text-indigo-600" />
                  </div>
                  Sentiment Trends Over Time
                </CardTitle>
                <CardDescription>Weekly sentiment analysis tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={sentimentAnalyticsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip content={<Custom3DTooltip />} />
                    <Legend />
                    <Line type="monotone" dataKey="positive" stroke="#10b981" strokeWidth={3} name="Positive" />
                    <Line type="monotone" dataKey="neutral" stroke="#6b7280" strokeWidth={3} name="Neutral" />
                    <Line type="monotone" dataKey="negative" stroke="#ef4444" strokeWidth={3} name="Negative" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-green-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-100 to-emerald-200 shadow-lg">
                    <PieChartIcon className="h-6 w-6 text-green-600" />
                  </div>
                  Current Sentiment Distribution
                </CardTitle>
                <CardDescription>This week's sentiment breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Positive', value: 70, fill: '#10b981' },
                        { name: 'Neutral', value: 20, fill: '#6b7280' },
                        { name: 'Negative', value: 10, fill: '#ef4444' }
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {[{ name: 'Positive', value: 70, fill: '#10b981' },
                        { name: 'Neutral', value: 20, fill: '#6b7280' },
                        { name: 'Negative', value: 10, fill: '#ef4444' }].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip content={<Custom3DTooltip />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* SLA Management Tab */}
        <TabsContent value="sla" className="space-y-8">
          {/* SLA Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Overall Compliance</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-200 shadow-lg">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">92%</div>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-red-600 font-semibold bg-red-50 px-2 py-1 rounded-full">
                    <TrendingDown className="h-3 w-3" />
                    -2.3%
                  </span>
                  <span className="text-xs">vs last month</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-red-50 via-white to-orange-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Total Breaches</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-red-100 to-orange-200 shadow-lg">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">18</div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">This week</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 via-white to-cyan-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Avg Resolution</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-200 shadow-lg">
                  <Timer className="h-5 w-5 text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">3.2h</div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Across all categories</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 via-white to-indigo-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Critical Issues</CardTitle>
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-200 shadow-lg">
                  <Flame className="h-5 w-5 text-purple-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">94%</div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Within 2h target</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* SLA Performance Table */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-200 shadow-lg">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
                SLA Performance by Category
              </CardTitle>
              <CardDescription>Detailed breakdown of service level agreement compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left p-4 font-semibold text-gray-700">Category</th>
                      <th className="text-center p-4 font-semibold text-gray-700">Target</th>
                      <th className="text-center p-4 font-semibold text-gray-700">Current Avg</th>
                      <th className="text-center p-4 font-semibold text-gray-700">Compliance</th>
                      <th className="text-center p-4 font-semibold text-gray-700">Breaches</th>
                      <th className="text-center p-4 font-semibold text-gray-700">Total Tickets</th>
                      <th className="text-center p-4 font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slaAnalyticsData.map((sla, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${
                              sla.category === 'Critical Issues' ? 'from-red-100 to-orange-200' :
                              sla.category === 'Standard Requests' ? 'from-blue-100 to-cyan-200' :
                              sla.category === 'Low Priority' ? 'from-green-100 to-emerald-200' :
                              'from-purple-100 to-pink-200'
                            }`}>
                              {sla.category === 'Critical Issues' && <Flame className="h-4 w-4 text-red-600" />}
                              {sla.category === 'Standard Requests' && <MessageSquare className="h-4 w-4 text-blue-600" />}
                              {sla.category === 'Low Priority' && <Info className="h-4 w-4 text-green-600" />}
                              {sla.category === 'General Inquiries' && <HelpCircle className="h-4 w-4 text-purple-600" />}
                            </div>
                            <span className="font-semibold">{sla.category}</span>
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <span className="font-bold text-lg">{sla.target}h</span>
                        </td>
                        <td className="text-center p-4">
                          <div className={`font-semibold ${sla.current <= sla.target ? 'text-green-600' : 'text-red-600'}`}>
                            {sla.current}h
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <div className="flex items-center justify-center gap-2">
                            <Progress value={sla.compliance} className="w-16 h-2" />
                            <span className="font-semibold">{sla.compliance}%</span>
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <Badge variant={sla.breaches > 5 ? "destructive" : sla.breaches > 2 ? "secondary" : "default"}>
                            {sla.breaches}
                          </Badge>
                        </td>
                        <td className="text-center p-4">
                          <span className="font-semibold">{sla.totalTickets}</span>
                        </td>
                        <td className="text-center p-4">
                          <div className="flex items-center justify-center">
                            {sla.compliance >= 95 ? (
                              <CheckCircle2 className="h-5 w-5 text-green-600" />
                            ) : sla.compliance >= 90 ? (
                              <AlertCircle className="h-5 w-5 text-yellow-600" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-600" />
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}