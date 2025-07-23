import { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger, SidebarInset } from './components/ui/sidebar';
import { TooltipProvider } from './components/ui/tooltip';
import { AIAssistant } from './components/AIAssistant';
import { Dashboard } from './components/Dashboard';
import { CorporateSearch } from './components/CorporateSearch';
import { LeadManagement } from './components/LeadManagement';
import { LeadsList } from './components/LeadsList';
import { EmailCampaigns } from './components/EmailCampaigns';
import { Opportunities } from './components/Opportunities';
import { RevenuePrediction } from './components/RevenuePrediction';
import { ContractManagement } from './components/ContractManagement';
import { BreachMonitoring } from './components/BreachMonitoring';
import { OfferManagement } from './components/OfferManagement';
import { CustomerSupportDashboard } from './components/CustomerSupportDashboard';
import { TicketList } from './components/TicketList';
import { TicketKanban } from './components/TicketKanban';
import { TicketDetails } from './components/TicketDetails';
import { AdminDashboard } from './components/AdminDashboard';
import { Settings } from './components/Settings';
import { 
  Bot,
  LayoutDashboard, 
  Search, 
  FileText, 
  Building2,
  TrendingUp,
  Users,
  AlertTriangle,
  Shield,
  Target,
  Settings as SettingsIcon,
  Package,
  Plus,
  ShoppingCart,
  Gift,
  MessageSquare,
  Headphones,
  BarChart3,
  List,
  Eye,
  Activity,
  Zap,
  Sparkles,
  CheckCircle,
  Clock,
  Menu,
  X,
  ArrowLeft,
  Home,
  UserCheck,
  Presentation,
  Mail,
  UserX,
  UsersIcon,
  Brain,
  Calculator,
  LineChart,
  PieChart,
  TrendingDown,
  BarChart2,
  Analytics
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('ai-assistant');
  const [sectionFilters, setSectionFilters] = useState({});

  const navigateToSection = (sectionId: string, filters = {}) => {
    console.log('navigateToSection called:', { sectionId, filters });
    setActiveSection(sectionId);
    setSectionFilters(filters);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'ai-assistant':
        return <AIAssistant onNavigate={navigateToSection} />;
      case 'dashboard':
        return <Dashboard onNavigate={navigateToSection} />;
      case 'corporate-search':
        return <CorporateSearch initialFilters={sectionFilters} onNavigate={navigateToSection} />;
      case 'lead-management':
        return <LeadManagement onNavigate={navigateToSection} />;
      case 'leads-list':
      case 'leads':
        return <LeadsList initialFilters={sectionFilters} onNavigate={navigateToSection} />;
      case 'qualified-leads':
        return <LeadsList initialFilters={{...sectionFilters, status: 'qualified'}} onNavigate={navigateToSection} />;
      case 'unqualified-leads':
        return <LeadsList initialFilters={{...sectionFilters, status: 'unqualified'}} onNavigate={navigateToSection} />;
      case 'email-campaigns':
        return <EmailCampaigns onNavigate={navigateToSection} />;
      case 'opportunities':
        return <Opportunities initialFilters={sectionFilters} onNavigate={navigateToSection} />;
      case 'revenue-prediction':
        return <RevenuePrediction onNavigate={navigateToSection} />;
      case 'contracts':
        return <ContractManagement initialFilters={sectionFilters} />;
      case 'breach-monitoring':
        return <BreachMonitoring initialFilters={sectionFilters} />;
      case 'design-travel-offers':
        return <OfferManagement initialTab="dashboard" initialFilters={sectionFilters} />;
      case 'agent-dashboard':
        return <CustomerSupportDashboard onNavigate={navigateToSection} />;
      case 'support-dashboard':
        return <CustomerSupportDashboard onNavigate={navigateToSection} />;
      case 'admin-dashboard':
        return <AdminDashboard onNavigate={navigateToSection} />;
      case 'ticket-list':
        return <TicketList initialFilters={sectionFilters} onNavigate={navigateToSection} />;
      case 'ticket-kanban':
        return <TicketKanban onNavigate={navigateToSection} />;
      case 'ticket-details':
        return <TicketDetails ticketId={sectionFilters.ticketId} onNavigate={navigateToSection} />;
      case 'settings':
        return <Settings onScreenVisibilityChange={() => {}} />;
      default:
        return <AIAssistant onNavigate={navigateToSection} />;
    }
  };

  const getActiveLabel = () => {
    switch (activeSection) {
      case 'ai-assistant':
        return 'AI Assistant';
      case 'dashboard':
        return 'Dashboard';
      case 'corporate-search':
        return 'Corporate Search';
      case 'lead-management':
        return 'Lead Management';
      case 'leads-list':
      case 'leads':
        return 'All Leads';
      case 'qualified-leads':
        return 'Qualified Leads';
      case 'unqualified-leads':
        return 'Unqualified Leads';
      case 'email-campaigns':
        return 'Email Campaigns';
      case 'opportunities':
        return 'Opportunities';
      case 'revenue-prediction':
        return 'Revenue Prediction';
      case 'contracts':
        return 'Contract Management';
      case 'breach-monitoring':
        return 'Breach Monitoring';
      case 'design-travel-offers':
        return 'Travel Offers Management';
      case 'agent-dashboard':
        return 'Agent Dashboard';
      case 'support-dashboard':
        return 'Support Dashboard';
      case 'admin-dashboard':
        return 'Admin Dashboard';
      case 'ticket-list':
        return 'Ticket List';
      case 'ticket-kanban':
        return 'Workflow Board';
      case 'ticket-details':
        return 'Ticket Details';
      case 'settings':
        return 'Settings';
      default:
        return 'AI Assistant';
    }
  };

  const getActiveDescription = () => {
    switch (activeSection) {
      case 'ai-assistant':
        return 'Your intelligent assistant for corporate travel management';
      case 'dashboard':
        return 'System overview and key metrics';
      case 'corporate-search':
        return 'AI-powered corporate client discovery and engagement';
      case 'lead-management':
        return 'Lead pipeline management with qualification tracking';
      case 'leads-list':
      case 'leads':
        return 'Comprehensive lead list with status and suggestions';
      case 'qualified-leads':
        return 'High-potential leads ready for conversion';
      case 'unqualified-leads':
        return 'Leads requiring nurturing and re-engagement';
      case 'email-campaigns':
        return 'Automated email outreach and nurturing campaigns';
      case 'opportunities':
        return 'Sales pipeline management with deal tracking and forecasting';
      case 'revenue-prediction':
        return 'AI-powered revenue forecasting and sales predictions';
      case 'contracts':
        return 'Contract lifecycle management';
      case 'breach-monitoring':
        return 'Contract breach tracking and risk assessment';
      case 'design-travel-offers':
        return 'Comprehensive offer lifecycle management with analytics and ATPCO integration';
      case 'agent-dashboard':
        return 'Customer support agent workspace and performance metrics';
      case 'support-dashboard':
        return 'Customer support agent dashboard and analytics';
      case 'admin-dashboard':
        return 'Comprehensive customer support administration and analytics';
      case 'ticket-list':
        return 'View and manage customer support tickets';
      case 'ticket-kanban':
        return 'Visual workflow management with drag and drop';
      case 'ticket-details':
        return 'Detailed ticket view and conversation history';
      case 'settings':
        return 'System administration and configuration';
      default:
        return 'Your intelligent assistant for corporate travel management';
    }
  };

  const menuGroups = [
    {
      label: "Highlights",
      items: [
        { id: 'ai-assistant', label: 'AI Assistant', icon: Bot, description: 'Natural language interface' },
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, description: 'System overview' },
      ]
    },
    {
      label: "COINHUB",
      items: [
        { id: 'corporate-search', label: 'Corporate Search', icon: Search, description: 'Find corporate clients' },
        { id: 'lead-management', label: 'Lead Dashboard', icon: Target, description: 'Lead pipeline overview' },
        { id: 'leads-list', label: 'All Leads', icon: UsersIcon, description: 'Complete lead management' },
        { id: 'qualified-leads', label: 'Qualified Leads', icon: UserCheck, description: 'High-potential prospects' },
        { id: 'unqualified-leads', label: 'Unqualified Leads', icon: UserX, description: 'Nurturing opportunities' },
        { id: 'email-campaigns', label: 'Email Campaigns', icon: Mail, description: 'Automated outreach' },
        { id: 'opportunities', label: 'Opportunities', icon: TrendingUp, description: 'Sales pipeline tracking' },
      ]
    },
    {
      label: "COCAST",
      subtitle: "Corporate Commercial Analytics & Sales Trend",
      items: [
        { id: 'revenue-prediction', label: 'Revenue Prediction', icon: Brain, description: 'AI revenue forecasting & sales predictions' },
      ]
    },
    {
      label: "CONTRAQ",
      items: [
        { id: 'contracts', label: 'Contracts', icon: FileText, description: 'Manage agreements' },
        { id: 'breach-monitoring', label: 'Risk Monitoring', icon: AlertTriangle, description: 'Contract compliance' },
      ]
    },
    {
      label: "Travel Offers",
      items: [
        { id: 'design-travel-offers', label: 'Travel Offers', icon: Presentation, description: 'Comprehensive offer management & creation' },
      ]
    },
    {
      label: "CONVOY",
      items: [
        { id: 'agent-dashboard', label: 'Agent Dashboard', icon: UserCheck, description: 'Agent workspace' },
        { id: 'ticket-list', label: 'Support Tickets', icon: Users, description: 'Customer support' },
        { id: 'admin-dashboard', label: 'Admin Dashboard', icon: Shield, description: 'System administration' },
      ]
    },
    {
      label: "System",
      items: [
        { id: 'settings', label: 'Settings', icon: SettingsIcon, description: 'System configuration' },
      ]
    }
  ];

  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex">
          {/* Sidebar */}
          <Sidebar className="border-r">
            <SidebarHeader className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    SOAR-AI
                  </h1>
                  <p className="text-xs text-muted-foreground">Corporate Intelligence Platform</p>
                </div>
              </div>
            </SidebarHeader>

            <SidebarContent>
              {menuGroups.map((group) => (
                <SidebarGroup key={group.label}>
                  <SidebarGroupLabel>
                    <div className="flex flex-col">
                      <span>{group.label}</span>
                      {group.subtitle && (
                        <span className="text-[10px] text-muted-foreground font-normal leading-tight">
                          {group.subtitle}
                        </span>
                      )}
                    </div>
                  </SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;
                        
                        return (
                          <SidebarMenuItem key={item.id}>
                            <SidebarMenuButton
                              onClick={() => navigateToSection(item.id)}
                              isActive={isActive}
                              className="w-full justify-start gap-3 p-3"
                            >
                              <Icon className="h-4 w-4" />
                              <div className="flex-1 text-left">
                                <div className="font-medium text-sm">{item.label}</div>
                                <div className="text-xs text-muted-foreground truncate">
                                  {item.description}
                                </div>
                              </div>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        );
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ))}

              {/* System Status */}
              <div className="mt-auto p-4 border-t">
                <div className="text-sm text-muted-foreground space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span>System Online</span>
                  </div>
                  <div className="text-xs space-y-1">
                    <div>1,247 Corporates</div>
                    <div>324 Qualified Leads</div>
                    <div>156 Contracts</div>
                    <div>24 Active Offers</div>
                  </div>
                </div>
              </div>
            </SidebarContent>
          </Sidebar>

          {/* Main Content Area */}
          <SidebarInset className="flex-1">
            {/* Header */}
            <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm">
              <div className="flex h-16 items-center justify-between px-6">
                {/* Left Side - Sidebar Trigger and Current Section */}
                <div className="flex items-center gap-4">
                  <SidebarTrigger className="lg:hidden" />
                  
                  {/* Current Section Indicator */}
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="font-medium text-sm">{getActiveLabel()}</p>
                      <p className="text-xs text-muted-foreground">{getActiveDescription()}</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Actions */}
                <div className="flex items-center gap-3">
                  {/* Back to AI Assistant (if not already there) */}
                  {activeSection !== 'ai-assistant' && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigateToSection('ai-assistant')}
                      className="hidden sm:flex items-center gap-2"
                    >
                      <Home className="h-4 w-4" />
                      AI Assistant
                    </Button>
                  )}

                  {/* System Status */}
                  <div className="hidden lg:flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs text-muted-foreground">All Systems Operational</span>
                  </div>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="p-6">
              {renderContent()}
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}