import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';
import { Button } from './ui/button';
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
  FileText, 
  TrendingUp,
  TrendingDown, 
  Users, 
  DollarSign,
  CheckCircle,
  Clock,
  AlertTriangle,
  Calendar,
  Bell,
  Shield,
  Target,
  ExternalLink
} from 'lucide-react';

const monthlyData = [
  { month: 'Jan', contracts: 45, revenue: 2340000, renewals: 8, breaches: 2 },
  { month: 'Feb', contracts: 52, revenue: 2890000, renewals: 12, breaches: 1 },
  { month: 'Mar', contracts: 48, revenue: 2650000, renewals: 15, breaches: 0 },
  { month: 'Apr', contracts: 61, revenue: 3240000, renewals: 9, breaches: 3 },
  { month: 'May', contracts: 55, revenue: 3100000, renewals: 18, breaches: 1 },
  { month: 'Jun', contracts: 67, revenue: 3580000, renewals: 22, breaches: 2 },
];

const contractStatusData = [
  { name: 'Active', value: 156, color: '#22c55e' },
  { name: 'Expiring Soon', value: 18, color: '#f59e0b' },
  { name: 'Breached', value: 4, color: '#ef4444' },
  { name: 'Draft', value: 8, color: '#6b7280' },
];

const renewalTimelineData = [
  { month: 'Jul', upcoming: 15, completed: 12 },
  { month: 'Aug', upcoming: 22, completed: 18 },
  { month: 'Sep', upcoming: 18, completed: 15 },
  { month: 'Oct', upcoming: 25, completed: 20 },
  { month: 'Nov', upcoming: 12, completed: 10 },
  { month: 'Dec', upcoming: 8, completed: 6 },
];

const breachTrendsData = [
  { quarter: 'Q1 2024', breaches: 3, resolved: 2, pending: 1 },
  { quarter: 'Q2 2024', breaches: 6, resolved: 4, pending: 2 },
  { quarter: 'Q3 2024', breaches: 2, resolved: 2, pending: 0 },
  { quarter: 'Q4 2024', breaches: 4, resolved: 3, pending: 1 },
];

const topVendors = [
  { name: 'Global Travel Solutions', score: 98, contracts: 23, revenue: 1250000, riskLevel: 'Low' },
  { name: 'Corporate Journey Ltd', score: 95, contracts: 18, revenue: 980000, riskLevel: 'Low' },
  { name: 'Elite Business Travel', score: 92, contracts: 15, revenue: 750000, riskLevel: 'Medium' },
  { name: 'Premier Voyage Group', score: 89, contracts: 12, revenue: 620000, riskLevel: 'Medium' },
  { name: 'Skyline Travel Partners', score: 87, contracts: 10, revenue: 480000, riskLevel: 'High' },
];

const notifications = [
  {
    id: 1,
    type: 'breach',
    title: 'Contract Breach Detected',
    message: 'Global Travel Solutions missed SLA target for response time',
    time: '2 hours ago',
    severity: 'high',
    action: 'Review Contract',
    navigationTarget: 'breach-monitoring',
    filters: { contractId: 'CTR-2024-001' }
  },
  {
    id: 2,
    type: 'expiring',
    title: 'Contract Expiring Soon',
    message: 'Corporate Journey Ltd contract expires in 30 days',
    time: '1 day ago',
    severity: 'medium',
    action: 'Initiate Renewal',
    navigationTarget: 'contracts',
    filters: { status: 'Expiring Soon' }
  },
  {
    id: 3,
    type: 'ai-recommendation',
    title: 'AI Risk Alert',
    message: 'Skyline Travel Partners showing increased risk indicators',
    time: '2 days ago',
    severity: 'medium',
    action: 'Review Terms',
    navigationTarget: 'vendor-search',
    filters: { vendor: 'Skyline Travel Partners' }
  },
  {
    id: 4,
    type: 'milestone',
    title: 'Contract Milestone',
    message: 'Elite Business Travel reached performance milestone',
    time: '3 days ago',
    severity: 'low',
    action: 'View Details',
    navigationTarget: 'contracts',
    filters: { vendor: 'Elite Business Travel' }
  }
];

interface DashboardProps {
  onNavigate: (section: string, filters?: any) => void;
}

// Custom 3D-style tooltip component
const Custom3DTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gradient-to-br from-white via-gray-50/95 to-white backdrop-blur-xl border-0 shadow-2xl rounded-2xl p-5 transform transition-all duration-200 ease-out border border-white/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl"></div>
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
                {entry.name}: {typeof entry.value === 'number' && entry.value > 1000 
                  ? `$${(entry.value / 1000000).toFixed(1)}M` 
                  : entry.value}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-sm"></div>
      </div>
    );
  }
  return null;
};

export function Dashboard({ onNavigate }: DashboardProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-0 bg-gradient-to-br from-red-50 via-red-100/80 to-red-50 text-red-800 shadow-lg shadow-red-200/50';
      case 'medium': return 'border-0 bg-gradient-to-br from-yellow-50 via-yellow-100/80 to-yellow-50 text-yellow-800 shadow-lg shadow-yellow-200/50';
      case 'low': return 'border-0 bg-gradient-to-br from-green-50 via-green-100/80 to-green-50 text-green-800 shadow-lg shadow-green-200/50';
      default: return 'border-0 bg-gradient-to-br from-gray-50 via-gray-100/80 to-gray-50 text-gray-800 shadow-lg shadow-gray-200/50';
    }
  };

  const getSeverityIcon = (type: string) => {
    switch (type) {
      case 'breach': return AlertTriangle;
      case 'expiring': return Clock;
      case 'ai-recommendation': return TrendingUp;
      case 'milestone': return CheckCircle;
      default: return Bell;
    }
  };

  const handleNotificationAction = (notification) => {
    console.log('Notification action clicked:', notification);
    console.log('Navigation target:', notification.navigationTarget);
    console.log('Filters:', notification.filters);
    try {
      onNavigate(notification.navigationTarget, notification.filters);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const handleVendorClick = (vendor) => {
    onNavigate('vendor-search', { searchTerm: vendor.name });
  };

  return (
    <div className="space-y-8">
      {/* SVG Gradients and Filters Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          {/* Gradient Definitions */}
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.9} />
            <stop offset="50%" stopColor="#1e40af" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity={0.4} />
          </linearGradient>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity={0.9} />
            <stop offset="50%" stopColor="#047857" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#065f46" stopOpacity={0.4} />
          </linearGradient>
          <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.9} />
            <stop offset="50%" stopColor="#d97706" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#b45309" stopOpacity={0.4} />
          </linearGradient>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity={0.9} />
            <stop offset="50%" stopColor="#dc2626" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#b91c1c" stopOpacity={0.4} />
          </linearGradient>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.9} />
            <stop offset="50%" stopColor="#7c3aed" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity={0.4} />
          </linearGradient>
          <linearGradient id="indigoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity={0.9} />
            <stop offset="50%" stopColor="#4f46e5" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#4338ca" stopOpacity={0.4} />
          </linearGradient>
          <linearGradient id="tealGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.9} />
            <stop offset="50%" stopColor="#0f766e" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#0d544d" stopOpacity={0.4} />
          </linearGradient>
          
          {/* 3D Effect Filters */}
          <filter id="shadow3D" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.3"/>
            <feDropShadow dx="0" dy="4" stdDeviation="12" floodOpacity="0.15"/>
          </filter>
          
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feOffset dx="0" dy="2"/>
            <feGaussianBlur stdDeviation="2" result="offset-blur"/>
            <feFlood floodColor="#000000" floodOpacity="0.1"/>
            <feComposite in2="offset-blur" operator="in"/>
          </filter>
        </defs>
      </svg>

      {/* Enhanced 3D KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card 
          className="cursor-pointer group hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] border-0 shadow-xl bg-gradient-to-br from-blue-50 via-white to-blue-100/50 hover:shadow-blue-200/30 relative overflow-hidden"
          onClick={() => onNavigate('contracts', { status: 'Active' })}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-500/10 rounded-full -translate-y-16 translate-x-16"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 relative z-10">
            <CardTitle className="text-sm font-semibold text-gray-700 flex-1 pr-4">Active Contracts</CardTitle>
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent mb-2">156</div>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
                <TrendingUp className="h-3 w-3" />
                +12%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer group hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] border-0 shadow-xl bg-gradient-to-br from-amber-50 via-white to-orange-100/50 hover:shadow-amber-200/30 relative overflow-hidden"
          onClick={() => onNavigate('contracts', { dateRange: 'expiring-soon' })}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/10 rounded-full -translate-y-16 translate-x-16"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 relative z-10">
            <CardTitle className="text-sm font-semibold text-gray-700 flex-1 pr-4">Expiring Soon</CardTitle>
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="p-3 rounded-xl bg-gradient-to-br from-amber-100 to-orange-200 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Calendar className="h-5 w-5 text-amber-600" />
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-amber-600 transition-colors duration-300" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-amber-700 to-orange-600 bg-clip-text text-transparent mb-2">18</div>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-yellow-600 font-semibold bg-yellow-50 px-2 py-1 rounded-full">
                <Clock className="h-3 w-3" />
                Next 30 days
              </span>
            </p>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer group hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] border-0 shadow-xl bg-gradient-to-br from-red-50 via-white to-pink-100/50 hover:shadow-red-200/30 relative overflow-hidden"
          onClick={() => onNavigate('breach-monitoring')}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-pink-500/10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/20 to-pink-500/10 rounded-full -translate-y-16 translate-x-16"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 relative z-10">
            <CardTitle className="text-sm font-semibold text-gray-700 flex-1 pr-4">Breaches Reported</CardTitle>
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="p-3 rounded-xl bg-gradient-to-br from-red-100 to-pink-200 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-red-600 transition-colors duration-300" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-4xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-pink-600 bg-clip-text text-transparent mb-2">4</div>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
                <TrendingDown className="h-3 w-3" />
                -2
              </span>
              from last month
            </p>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer group hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] border-0 shadow-xl bg-gradient-to-br from-emerald-50 via-white to-teal-100/50 hover:shadow-emerald-200/30 relative overflow-hidden"
          onClick={() => onNavigate('contracts', { tab: 'analytics' })}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/10 rounded-full -translate-y-16 translate-x-16"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 relative z-10">
            <CardTitle className="text-sm font-semibold text-gray-700 flex-1 pr-4">Total Value Under Management</CardTitle>
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-200 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <DollarSign className="h-5 w-5 text-emerald-600" />
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-emerald-600 transition-colors duration-300" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 bg-clip-text text-transparent mb-2">$3.58M</div>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
                <TrendingUp className="h-3 w-3" />
                +18%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced 3D Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card 
          className="cursor-pointer group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-purple-50/30 hover:shadow-purple-200/20 relative overflow-hidden"
          onClick={() => onNavigate('contracts', { tab: 'analytics', focus: 'renewals' })}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 via-transparent to-blue-500/5"></div>
          <CardHeader className="relative z-10 pb-4">
            <CardTitle className="flex items-center justify-between text-lg">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">
                Contract Renewal Timeline
              </span>
              <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors duration-300" />
            </CardTitle>
            <CardDescription className="text-gray-600">Upcoming and completed contract renewals - Click to view details</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/80 via-gray-50/50 to-purple-50/30 backdrop-blur-sm shadow-inner">
              <ResponsiveContainer width="100%" height={320}>
                <AreaChart data={renewalTimelineData}>
                  <defs>
                    <linearGradient id="upcomingGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.8}/>
                      <stop offset="50%" stopColor="#d97706" stopOpacity={0.6}/>
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="completedGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="50%" stopColor="#047857" stopOpacity={0.6}/>
                      <stop offset="100%" stopColor="#10b981" stopOpacity={0.1}/>
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
                    dataKey="upcoming" 
                    stackId="1" 
                    stroke="#f59e0b" 
                    strokeWidth={4}
                    fill="url(#upcomingGradient)"
                    filter="url(#shadow3D)"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="completed" 
                    stackId="1" 
                    stroke="#10b981" 
                    strokeWidth={4}
                    fill="url(#completedGradient)"
                    filter="url(#shadow3D)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-orange-50/30 hover:shadow-orange-200/20 relative overflow-hidden"
          onClick={() => onNavigate('breach-monitoring', { tab: 'analytics' })}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/3 via-transparent to-red-500/5"></div>
          <CardHeader className="relative z-10 pb-4">
            <CardTitle className="flex items-center justify-between text-lg">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent font-bold">
                Breach Trends
              </span>
              <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-orange-600 transition-colors duration-300" />
            </CardTitle>
            <CardDescription className="text-gray-600">Quarterly breach reports and resolution status - Click to view details</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/80 via-gray-50/50 to-orange-50/30 backdrop-blur-sm shadow-inner">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={breachTrendsData} barGap={15}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.6} />
                  <XAxis 
                    dataKey="quarter" 
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
                  <Bar 
                    dataKey="breaches" 
                    fill="url(#redGradient)" 
                    radius={[6, 6, 0, 0]}
                    filter="url(#shadow3D)"
                  />
                  <Bar 
                    dataKey="resolved" 
                    fill="url(#greenGradient)" 
                    radius={[6, 6, 0, 0]}
                    filter="url(#shadow3D)"
                  />
                  <Bar 
                    dataKey="pending" 
                    fill="url(#yellowGradient)" 
                    radius={[6, 6, 0, 0]}
                    filter="url(#shadow3D)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notifications Panel and Enhanced 3D Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-transparent to-purple-500/5"></div>
            <CardHeader className="relative z-10 pb-4">
              <CardTitle className="flex items-center gap-4 text-lg">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-purple-200 shadow-lg flex-shrink-0">
                  <Bell className="h-6 w-6 text-blue-600" />
                </div>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-bold flex-1">
                  Real-time Alerts & Notifications
                </span>
              </CardTitle>
              <CardDescription className="text-gray-600 ml-12">
                Critical alerts, deadlines, and AI recommendations - Click actions to navigate
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-4">
                {notifications.map((notification) => {
                  const Icon = getSeverityIcon(notification.type);
                  return (
                    <Alert 
                      key={notification.id} 
                      className={`${getSeverityColor(notification.severity)} hover:shadow-xl transition-all duration-300 hover:scale-[1.01] relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      <div className="p-2 rounded-lg bg-gradient-to-br from-white/60 to-white/40 shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex items-center justify-between w-full relative z-10">
                        <div className="flex-1 ml-4">
                          <AlertDescription className="font-semibold mb-2 text-sm">
                            {notification.title}
                          </AlertDescription>
                          <AlertDescription className="text-sm opacity-90 leading-relaxed">
                            {notification.message}
                          </AlertDescription>
                        </div>
                        <div className="flex items-center gap-3 ml-6">
                          <span className="text-xs opacity-75 font-medium">{notification.time}</span>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              console.log('Button clicked for notification:', notification.id);
                              handleNotificationAction(notification);
                            }}
                            className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 hover:bg-white font-medium"
                          >
                            {notification.action}
                          </Button>
                        </div>
                      </div>
                    </Alert>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card 
          className="cursor-pointer group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-green-50/30 hover:shadow-green-200/20 relative overflow-hidden"
          onClick={() => onNavigate('contracts', { focus: 'status-overview' })}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/3 via-transparent to-teal-500/5"></div>
          <CardHeader className="relative z-10 pb-4">
            <CardTitle className="flex items-center justify-between text-lg">
              <span className="bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent font-bold">
                Contract Status Overview
              </span>
              <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors duration-300" />
            </CardTitle>
            <CardDescription className="text-gray-600">Current status distribution - Click to view details</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/80 via-gray-50/50 to-green-50/30 backdrop-blur-sm shadow-inner">
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <defs>
                    <filter id="pieShadow3D" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="6" stdDeviation="8" floodOpacity="0.4"/>
                      <feDropShadow dx="0" dy="3" stdDeviation="15" floodOpacity="0.2"/>
                    </filter>
                  </defs>
                  <Pie
                    data={contractStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={95}
                    paddingAngle={8}
                    dataKey="value"
                    filter="url(#pieShadow3D)"
                  >
                    {contractStatusData.map((entry, index) => (
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
              {contractStatusData.map((item) => (
                <div 
                  key={item.name} 
                  className="group/item flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-white cursor-pointer transition-all duration-300 hover:shadow-md border border-gray-100 hover:border-gray-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('contracts', { status: item.name });
                  }}
                >
                  <div 
                    className="w-4 h-4 rounded-full shadow-md group-hover/item:shadow-lg transition-shadow ring-2 ring-white" 
                    style={{ 
                      backgroundColor: item.color,
                      boxShadow: `0 4px 12px ${item.color}40`
                    }}
                  />
                  <span className="text-sm font-semibold text-gray-700">{item.name}: {item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Top Vendors with 3D Effects */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 via-transparent to-pink-500/5"></div>
        <CardHeader className="relative z-10 pb-6">
          <CardTitle className="flex items-center justify-between text-xl">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent font-bold">
              Vendor Performance & Risk Assessment
            </span>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onNavigate('vendor-search')}
              className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 hover:bg-white font-medium"
            >
              View All Vendors
            </Button>
          </CardTitle>
          <CardDescription className="text-gray-600">AI-powered vendor ranking with risk indicators - Click vendors for details</CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="space-y-4">
            {topVendors.map((vendor, index) => {
              const gradientColors = [
                'from-blue-500 to-purple-600',
                'from-green-500 to-teal-600', 
                'from-orange-500 to-red-600',
                'from-purple-500 to-pink-600',
                'from-indigo-500 to-blue-600'
              ];
              return (
                <div 
                  key={vendor.name} 
                  className="group flex items-center justify-between p-6 border-0 rounded-2xl cursor-pointer hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white/90 via-gray-50/50 to-white/90 backdrop-blur-sm shadow-lg hover:scale-[1.01] relative overflow-hidden"
                  onClick={() => handleVendorClick(vendor)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-center gap-6 relative z-10">
                    <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${gradientColors[index]} text-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <span className="font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 text-lg">{vendor.name}</h4>
                      <p className="text-sm text-gray-600 font-medium">
                        {vendor.contracts} contracts • ${(vendor.revenue / 1000).toFixed(0)}K revenue
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 relative z-10">
                    <div className="text-center">
                      <div className="text-sm font-semibold mb-2 text-gray-700">Risk Level</div>
                      <Badge 
                        variant={
                          vendor.riskLevel === 'Low' ? 'default' :
                          vendor.riskLevel === 'Medium' ? 'secondary' : 'destructive'
                        } 
                        className="shadow-md px-3 py-1 font-medium"
                      >
                        {vendor.riskLevel}
                      </Badge>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold mb-2 text-gray-700">AI Score</div>
                      <Badge 
                        variant={vendor.score >= 95 ? "default" : vendor.score >= 90 ? "secondary" : "outline"}
                        className="shadow-md bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-3 py-1 font-medium"
                      >
                        {vendor.score}/100
                      </Badge>
                    </div>
                    <div className="relative">
                      <Progress value={vendor.score} className="w-28 h-3 bg-gray-200" />
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 rounded-full shadow-sm" 
                        style={{ width: `${vendor.score}%` }}
                      ></div>
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Smart AI Recommendations */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/3 via-transparent to-purple-500/5"></div>
        <CardHeader className="relative z-10 pb-6">
          <CardTitle className="flex items-center gap-4 text-xl">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-200 shadow-lg flex-shrink-0">
              <Target className="h-6 w-6 text-indigo-600" />
            </div>
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold flex-1">
              AI-Powered Smart Recommendations
            </span>
          </CardTitle>
          <CardDescription className="text-gray-600 ml-12">Proactive insights and risk management suggestions - Click recommendations to take action</CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                gradient: 'from-blue-50 via-blue-100/80 to-cyan-50',
                iconGradient: 'from-blue-400 to-cyan-500',
                textColor: 'text-blue-800',
                icon: TrendingUp,
                title: 'Renewal Opportunity:',
                content: 'Elite Business Travel contract shows strong performance metrics. Consider early renewal with improved terms.',
                onClick: () => onNavigate('contracts', { vendor: 'Elite Business Travel', focus: 'renewal' })
              },
              {
                gradient: 'from-yellow-50 via-amber-100/80 to-orange-50',
                iconGradient: 'from-yellow-400 to-orange-500',
                textColor: 'text-yellow-800',
                icon: Shield,
                title: 'Risk Mitigation:',
                content: 'Skyline Travel Partners showing declining performance indicators. Recommend contract review within 30 days.',
                onClick: () => onNavigate('vendor-search', { vendor: 'Skyline Travel Partners', focus: 'risk' })
              },
              {
                gradient: 'from-green-50 via-emerald-100/80 to-teal-50',
                iconGradient: 'from-green-400 to-teal-500',
                textColor: 'text-green-800',
                icon: CheckCircle,
                title: 'Cost Optimization:',
                content: 'Consolidating contracts with Global Travel Solutions could save an estimated $150K annually.',
                onClick: () => onNavigate('contracts', { focus: 'cost-optimization' })
              },
              {
                gradient: 'from-purple-50 via-purple-100/80 to-pink-50',
                iconGradient: 'from-purple-400 to-pink-500',
                textColor: 'text-purple-800',
                icon: Calendar,
                title: 'Market Intelligence:',
                content: 'New vendors in Asia-Pacific region showing competitive rates. Consider RFP process for route expansion.',
                onClick: () => onNavigate('vendor-search', { region: 'Asia-Pacific', focus: 'market-expansion' })
              }
            ].map((item, index) => (
              <Alert 
                key={index}
                className={`border-0 bg-gradient-to-br ${item.gradient} cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] shadow-lg relative overflow-hidden`}
                onClick={item.onClick}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10"></div>
                <div className={`p-3 rounded-xl bg-gradient-to-br ${item.iconGradient} shadow-md`}>
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <AlertDescription className={`${item.textColor} relative z-10 ml-4`}>
                  <div className="flex items-center justify-between">
                    <div className="leading-relaxed">
                      <span className="font-bold">{item.title}</span> {item.content}
                    </div>
                    <ExternalLink className="h-5 w-5 ml-4 flex-shrink-0" />
                  </div>
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}