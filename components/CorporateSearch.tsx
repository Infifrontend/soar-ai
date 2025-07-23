import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';
import { ScrollArea } from './ui/scroll-area';
import { Textarea } from './ui/textarea';
import { Alert, AlertDescription } from './ui/alert';
import { CorporateProfile } from './CorporateProfile';

import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Users, 
  Calendar,
  TrendingUp,
  Award,
  Globe,
  Phone,
  Mail,
  ExternalLink,
  Settings2,
  Building2,
  FileText,
  ArrowRight,
  Eye,

  DollarSign,
  Briefcase,
  Target,
  Activity,
  BarChart3,
  Plane,
  Clock,
  Shield,
  Zap,
  Brain,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  TrendingDown,
  Wallet,
  CreditCard,
  Calendar as CalendarIcon,
  Route,
  PlaneTakeoff,
  Building,
  Factory,
  Banknote,
  Leaf,
  Smartphone,
  LineChart,
  PieChart,
  BarChart4,
  X,
  UserPlus,
  Plus,
  Save,
  AlertCircle as AlertCircleIcon,
  CheckCircle
} from 'lucide-react';

const mockCorporates = [
  {
    id: 1,
    name: "TechCorp International",
    type: "Technology Company",
    industry: "Software & IT Services",
    location: "San Francisco, USA",
    aiScore: 98,
    rating: 4.9,
    established: 2010,
    employees: 2500,
    specialties: ["Enterprise Software", "Cloud Solutions", "AI/ML Services"],
    travelBudget: "2.5M",
    annualTravelVolume: "5,000 trips",
    contracts: 12,
    revenue: 50000000,
    phone: "+1 (555) 123-4567",
    email: "corporate@techcorp.com",
    website: "www.techcorp.com",
    aiRecommendation: "High-value corporate with significant travel needs. Excellent potential for premium airline partnerships and volume discounts.",
    compliance: 95,
    financialStability: 98,
    travelFrequency: "Weekly",
    destinations: ["Global", "North America", "Europe", "Asia-Pacific"],
    preferredClass: "Business",
    teamSize: 150,
    travelManagers: 3,
    currentAirlines: ["United", "Delta", "British Airways"],
    paymentTerms: "Net 30",
    creditRating: "AAA",
    sustainabilityFocus: "High",
    technologyIntegration: ["API", "Mobile App", "Expense Management"],
    seasonality: "Year-round",
    meetingTypes: ["Conferences", "Client Visits", "Team Offsites"],
    companySize: "Enterprise",
    marketSegment: "Technology",
    decisionMakers: 5,
    contractValue: 2800000,
    competitorAirlines: 3,
    loyaltyPotential: 92,
    expansionPlans: "Aggressive",
    riskLevel: "Low"
  },
  {
    id: 2,
    name: "Global Manufacturing Ltd",
    type: "Manufacturing Corporation",
    industry: "Industrial Manufacturing",
    location: "Detroit, USA",
    aiScore: 92,
    rating: 4.7,
    established: 1985,
    employees: 5000,
    specialties: ["Automotive Parts", "Supply Chain", "Quality Control"],
    travelBudget: "1.8M",
    annualTravelVolume: "3,200 trips",
    contracts: 8,
    revenue: 75000000,
    phone: "+1 (555) 234-5678",
    email: "travel@globalmanufacturing.com",
    website: "www.globalmanufacturing.com",
    aiRecommendation: "Established manufacturing giant with consistent travel patterns. Strong potential for long-term partnership with volume commitments.",
    compliance: 88,
    financialStability: 94,
    travelFrequency: "Monthly",
    destinations: ["North America", "Europe", "Asia"],
    preferredClass: "Economy Plus",
    teamSize: 80,
    travelManagers: 2,
    currentAirlines: ["American", "Lufthansa"],
    paymentTerms: "Net 45",
    creditRating: "AA",
    sustainabilityFocus: "Medium",
    technologyIntegration: ["GDS", "Corporate Portal"],
    seasonality: "Q1/Q3 Heavy",
    meetingTypes: ["Supplier Visits", "Trade Shows"],
    companySize: "Large Enterprise",
    marketSegment: "Manufacturing",
    decisionMakers: 3,
    contractValue: 1950000,
    competitorAirlines: 2,
    loyaltyPotential: 85,
    expansionPlans: "Moderate",
    riskLevel: "Low"
  },
  {
    id: 3,
    name: "Sunrise Financial Services",
    type: "Financial Services",
    industry: "Banking & Finance",
    location: "New York, USA",
    aiScore: 95,
    rating: 4.8,
    established: 1995,
    employees: 1200,
    specialties: ["Investment Banking", "Wealth Management", "Corporate Finance"],
    travelBudget: "3.2M",
    annualTravelVolume: "6,800 trips",
    contracts: 15,
    revenue: 120000000,
    phone: "+1 (555) 345-6789",
    email: "corporate.travel@sunrisefinancial.com",
    website: "www.sunrisefinancial.com",
    aiRecommendation: "Premium financial services firm with high-frequency travel. Excellent candidate for business class partnerships and flexible booking options.",
    compliance: 97,
    financialStability: 99,
    travelFrequency: "Daily",
    destinations: ["Global", "Financial Centers"],
    preferredClass: "Business/First",
    teamSize: 200,
    travelManagers: 5,
    currentAirlines: ["Emirates", "Singapore Airlines", "Cathay Pacific"],
    paymentTerms: "Net 15",
    creditRating: "AAA",
    sustainabilityFocus: "High",
    technologyIntegration: ["API", "Mobile App", "Real-time Booking"],
    seasonality: "Year-round Peak",
    meetingTypes: ["Client Meetings", "Deal Closings", "Conferences"],
    companySize: "Large Enterprise",
    marketSegment: "Financial Services",
    decisionMakers: 7,
    contractValue: 4200000,
    competitorAirlines: 4,
    loyaltyPotential: 88,
    expansionPlans: "Aggressive",
    riskLevel: "Very Low"
  },
  {
    id: 4,
    name: "EcoEnergy Solutions",
    type: "Energy Company",
    industry: "Renewable Energy",
    location: "Austin, USA",
    aiScore: 89,
    rating: 4.6,
    established: 2015,
    employees: 800,
    specialties: ["Solar Energy", "Wind Power", "Sustainability Consulting"],
    travelBudget: "1.2M",
    annualTravelVolume: "2,400 trips",
    contracts: 6,
    revenue: 25000000,
    phone: "+1 (555) 456-7890",
    email: "logistics@ecoenergy.com",
    website: "www.ecoenergy.com",
    aiRecommendation: "Fast-growing renewable energy company with sustainability focus. Perfect match for airlines with carbon offset programs.",
    compliance: 85,
    financialStability: 87,
    travelFrequency: "Bi-weekly",
    destinations: ["North America", "Project Sites"],
    preferredClass: "Economy",
    teamSize: 45,
    travelManagers: 1,
    currentAirlines: ["Southwest", "JetBlue"],
    paymentTerms: "Net 30",
    creditRating: "A+",
    sustainabilityFocus: "Very High",
    technologyIntegration: ["Mobile App", "Carbon Tracking"],
    seasonality: "Spring/Summer Peak",
    meetingTypes: ["Site Visits", "Regulatory Meetings"],
    companySize: "Mid-Market",
    marketSegment: "Energy",
    decisionMakers: 2,
    contractValue: 1350000,
    competitorAirlines: 2,
    loyaltyPotential: 78,
    expansionPlans: "Rapid",
    riskLevel: "Medium"
  }
];

interface CorporateSearchProps {
  initialFilters?: any;
  onNavigate?: (section: string, filters?: any) => void;
}

export function CorporateSearch({ initialFilters, onNavigate }: CorporateSearchProps) {
  const [searchParams, setSearchParams] = useState({
    industry: '',
    location: '',
    travelBudget: '',
    companySize: '',
    travelFrequency: '',
    ...initialFilters
  });

  const [filteredCorporates, setFilteredCorporates] = useState(mockCorporates);
  const [isSearching, setIsSearching] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [showCorporateProfile, setShowCorporateProfile] = useState(false);
  const [showAddCompanyDialog, setShowAddCompanyDialog] = useState(false);

  const [selectedCorporate, setSelectedCorporate] = useState(null);
  const [movedAsLeadIds, setMovedAsLeadIds] = useState(new Set());
  const [successMessage, setSuccessMessage] = useState('');
  
  // New company form state
  const [newCompany, setNewCompany] = useState({
    name: '',
    type: '',
    industry: '',
    location: '',
    website: '',
    phone: '',
    email: '',
    established: '',
    employees: '',
    revenue: '',
    travelBudget: '',
    annualTravelVolume: '',
    travelFrequency: '',
    preferredClass: '',
    companySize: '',
    creditRating: '',
    paymentTerms: '',
    sustainabilityFocus: '',
    riskLevel: '',
    expansionPlans: '',
    specialties: '',
    technologyIntegration: '',
    currentAirlines: '',
    notes: ''
  });

  const handleSearch = async () => {
    setIsSearching(true);
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFilteredCorporates(mockCorporates);
    setIsSearching(false);
  };

  const handleViewProfile = (corporate) => {
    setSelectedCorporate(corporate);
    setShowCorporateProfile(true);
  };



  const handleMoveAsLead = (corporate) => {
    // Convert corporate data to lead format
    const leadData = {
      company: corporate.name,
      contact: 'Contact Name', // Would be extracted from corporate data or user input
      title: 'Decision Maker',
      email: corporate.email,
      phone: corporate.phone,
      industry: corporate.industry,
      employees: corporate.employees,
      revenue: `$${corporate.revenue / 1000000}M`,
      location: corporate.location,
      source: 'Corporate Search',
      travelBudget: `$${corporate.travelBudget}`,
      decisionMaker: true,
      notes: `Moved from corporate search. AI Score: ${corporate.aiScore}. ${corporate.aiRecommendation}`,
      tags: ['Corporate Search', 'High Priority', corporate.companySize],
      aiScore: corporate.aiScore,
      contractValue: corporate.contractValue,
      specialties: corporate.specialties,
      travelFrequency: corporate.travelFrequency,
      destinations: corporate.destinations,
      preferredClass: corporate.preferredClass,
      sustainabilityFocus: corporate.sustainabilityFocus,
      technologyIntegration: corporate.technologyIntegration
    };

    // Add to moved leads tracking
    setMovedAsLeadIds(prev => new Set([...prev, corporate.id]));

    // Navigate to leads with the new lead data
    onNavigate('leads', { 
      newLead: leadData,
      message: `${corporate.name} has been successfully moved to leads management`
    });
  };

  const handleBackToSearch = () => {
    setShowCorporateProfile(false);
    setSelectedCorporate(null);
  };

  const handleAddCompany = () => {
    // Generate new company data
    const companyData = {
      id: Math.max(...mockCorporates.map(c => c.id)) + 1,
      name: newCompany.name,
      type: newCompany.type,
      industry: newCompany.industry,
      location: newCompany.location,
      website: newCompany.website,
      phone: newCompany.phone,
      email: newCompany.email,
      established: parseInt(newCompany.established) || 2024,
      employees: parseInt(newCompany.employees) || 100,
      revenue: parseInt(newCompany.revenue) * 1000000 || 1000000,
      travelBudget: newCompany.travelBudget,
      annualTravelVolume: newCompany.annualTravelVolume,
      travelFrequency: newCompany.travelFrequency,
      preferredClass: newCompany.preferredClass,
      companySize: newCompany.companySize,
      creditRating: newCompany.creditRating,
      paymentTerms: newCompany.paymentTerms,
      sustainabilityFocus: newCompany.sustainabilityFocus,
      riskLevel: newCompany.riskLevel,
      expansionPlans: newCompany.expansionPlans,
      specialties: newCompany.specialties.split(',').map(s => s.trim()).filter(s => s),
      technologyIntegration: newCompany.technologyIntegration.split(',').map(s => s.trim()).filter(s => s),
      currentAirlines: newCompany.currentAirlines.split(',').map(s => s.trim()).filter(s => s),
      aiScore: Math.floor(Math.random() * 20) + 80, // Random score between 80-100
      rating: (Math.random() * 1 + 4).toFixed(1), // Random rating between 4.0-5.0
      contracts: 0,
      aiRecommendation: `New corporate client with potential for ${newCompany.travelFrequency.toLowerCase()} travel needs. Consider outreach for partnership opportunities.`,
      compliance: Math.floor(Math.random() * 20) + 80,
      financialStability: Math.floor(Math.random() * 20) + 80,
      destinations: ["North America"], // Default
      teamSize: Math.floor(parseInt(newCompany.employees) * 0.1) || 10,
      travelManagers: 1,
      decisionMakers: 2,
      contractValue: 0,
      competitorAirlines: 1,
      loyaltyPotential: Math.floor(Math.random() * 30) + 70,
      seasonality: "Year-round",
      meetingTypes: ["Business Meetings"]
    };

    // Add to mock data (in a real app, this would be an API call)
    mockCorporates.push(companyData);
    setFilteredCorporates([...mockCorporates]);

    // Reset form
    setNewCompany({
      name: '',
      type: '',
      industry: '',
      location: '',
      website: '',
      phone: '',
      email: '',
      established: '',
      employees: '',
      revenue: '',
      travelBudget: '',
      annualTravelVolume: '',
      travelFrequency: '',
      preferredClass: '',
      companySize: '',
      creditRating: '',
      paymentTerms: '',
      sustainabilityFocus: '',
      riskLevel: '',
      expansionPlans: '',
      specialties: '',
      technologyIntegration: '',
      currentAirlines: '',
      notes: ''
    });

    setShowAddCompanyDialog(false);
    setSuccessMessage(`${companyData.name} has been successfully added to the corporate database.`);
    setTimeout(() => setSuccessMessage(''), 5000);
  };

  const isFormValid = () => {
    return newCompany.name && 
           newCompany.type && 
           newCompany.industry && 
           newCompany.location && 
           newCompany.email &&
           newCompany.employees &&
           newCompany.travelBudget;
  };

  const getScoreColor = (score: number) => {
    if (score >= 95) return "text-green-600";
    if (score >= 90) return "text-blue-600";
    if (score >= 85) return "text-yellow-600";
    return "text-gray-600";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 95) return "default";
    if (score >= 90) return "secondary";
    return "outline";
  };

  // Show specific components based on state
  if (showCorporateProfile && selectedCorporate) {
    return (
      <CorporateProfile 
        corporateData={selectedCorporate}
        onBack={handleBackToSearch}
      />
    );
  }



  return (
    <div className="space-y-6">
      {/* Success Message */}
      {successMessage && (
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            {successMessage}
          </AlertDescription>
        </Alert>
      )}

      {/* Search Parameters */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Corporate Client Discovery
              </CardTitle>
              <CardDescription>
                AI-powered search to discover and evaluate potential corporate travel partnerships
              </CardDescription>
            </div>
            <Button onClick={() => setShowAddCompanyDialog(true)} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Company
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="industry">Industry Sector</Label>
              <Select value={searchParams.industry} onValueChange={(value) => setSearchParams({...searchParams, industry: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology & Software</SelectItem>
                  <SelectItem value="financial">Financial Services</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="healthcare">Healthcare & Pharma</SelectItem>
                  <SelectItem value="energy">Energy & Utilities</SelectItem>
                  <SelectItem value="consulting">Consulting Services</SelectItem>
                  <SelectItem value="retail">Retail & Consumer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="location">Geographic Focus</Label>
              <Select value={searchParams.location} onValueChange={(value) => setSearchParams({...searchParams, location: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="north-america">North America</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="asia-pacific">Asia Pacific</SelectItem>
                  <SelectItem value="global">Global Operations</SelectItem>
                  <SelectItem value="emerging">Emerging Markets</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="travelBudget">Annual Travel Budget</Label>
              <Select value={searchParams.travelBudget} onValueChange={(value) => setSearchParams({...searchParams, travelBudget: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-500k">Under $500K</SelectItem>
                  <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                  <SelectItem value="1m-3m">$1M - $3M</SelectItem>
                  <SelectItem value="3m-5m">$3M - $5M</SelectItem>
                  <SelectItem value="above-5m">Above $5M</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="companySize">Company Size</Label>
              <Select value={searchParams.companySize} onValueChange={(value) => setSearchParams({...searchParams, companySize: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="startup">Startup (1-50)</SelectItem>
                  <SelectItem value="small">Small (51-200)</SelectItem>
                  <SelectItem value="medium">Medium (201-1000)</SelectItem>
                  <SelectItem value="large">Large (1001-5000)</SelectItem>
                  <SelectItem value="enterprise">Enterprise (5000+)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="travelFrequency">Travel Frequency</Label>
              <Select value={searchParams.travelFrequency} onValueChange={(value) => setSearchParams({...searchParams, travelFrequency: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily Travel</SelectItem>
                  <SelectItem value="weekly">Weekly Travel</SelectItem>
                  <SelectItem value="monthly">Monthly Travel</SelectItem>
                  <SelectItem value="quarterly">Quarterly Travel</SelectItem>
                  <SelectItem value="annual">Annual Events</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <Button onClick={handleSearch} disabled={isSearching} className="flex items-center gap-2">
              {isSearching ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  AI Processing...
                </>
              ) : (
                <>
                  <Search className="h-4 w-4" />
                  Search Corporates
                </>
              )}
            </Button>
            
            <Button variant="outline" className="flex items-center gap-2" onClick={() => setShowAdvancedFilters(true)}>
              <Filter className="h-4 w-4" />
              Advanced Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Search Results */}
      <Card>
        <CardHeader>
          <CardTitle>Search Results</CardTitle>
          <CardDescription>
            {filteredCorporates.length} corporate prospects found matching your criteria
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {filteredCorporates.map((corporate) => (
              <Card key={corporate.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg">
                        <Building2 className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{corporate.name}</h3>
                          <Badge variant={getScoreBadge(corporate.aiScore)}>
                            AI Score: {corporate.aiScore}
                          </Badge>
                          {movedAsLeadIds.has(corporate.id) && (
                            <Badge variant="default" className="bg-green-600">
                              ✓ Moved to Leads
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-600 mb-1">{corporate.type} • {corporate.industry}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {corporate.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {corporate.employees.toLocaleString()} employees
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Est. {corporate.established}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{corporate.rating}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        ${corporate.travelBudget} budget
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Revenue: ${(corporate.revenue / 1000000).toFixed(1)}M</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Plane className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Travel: {corporate.annualTravelVolume}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-purple-600" />
                        <span className="text-sm">Frequency: {corporate.travelFrequency}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Credit: {corporate.creditRating}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-orange-600" />
                        <span className="text-sm">Class: {corporate.preferredClass}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Activity className="h-4 w-4 text-red-600" />
                        <span className="text-sm">Risk: {corporate.riskLevel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {corporate.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* AI Recommendation */}
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-2">
                      <Brain className="h-4 w-4 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-blue-900">AI Partnership Recommendation</p>
                        <p className="text-sm text-blue-800 mt-1">{corporate.aiRecommendation}</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {corporate.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {corporate.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Globe className="h-3 w-3" />
                        {corporate.website}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        onClick={() => handleMoveAsLead(corporate)}
                        disabled={movedAsLeadIds.has(corporate.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <UserPlus className="h-4 w-4 mr-2" />
                        {movedAsLeadIds.has(corporate.id) ? 'Moved to Leads' : 'Move as Lead'}
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleViewProfile(corporate)}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Profile
                      </Button>

                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {corporate.companySize}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {corporate.expansionPlans} Growth
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add Company Dialog */}
      <Dialog open={showAddCompanyDialog} onOpenChange={setShowAddCompanyDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Add New Company
            </DialogTitle>
            <DialogDescription>
              Enter comprehensive company information to add to the corporate database
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="business">Business Details</TabsTrigger>
                <TabsTrigger value="travel">Travel Profile</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Company Name *</Label>
                    <Input
                      value={newCompany.name}
                      onChange={(e) => setNewCompany({...newCompany, name: e.target.value})}
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <Label>Company Type *</Label>
                    <Select value={newCompany.type} onValueChange={(value) => setNewCompany({...newCompany, type: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select company type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Technology Company">Technology Company</SelectItem>
                        <SelectItem value="Manufacturing Corporation">Manufacturing Corporation</SelectItem>
                        <SelectItem value="Financial Services">Financial Services</SelectItem>
                        <SelectItem value="Healthcare Organization">Healthcare Organization</SelectItem>
                        <SelectItem value="Consulting Firm">Consulting Firm</SelectItem>
                        <SelectItem value="Energy Company">Energy Company</SelectItem>
                        <SelectItem value="Retail Corporation">Retail Corporation</SelectItem>
                        <SelectItem value="Government Agency">Government Agency</SelectItem>
                        <SelectItem value="Non-Profit Organization">Non-Profit Organization</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Industry *</Label>
                    <Select value={newCompany.industry} onValueChange={(value) => setNewCompany({...newCompany, industry: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Software & IT Services">Software & IT Services</SelectItem>
                        <SelectItem value="Industrial Manufacturing">Industrial Manufacturing</SelectItem>
                        <SelectItem value="Banking & Finance">Banking & Finance</SelectItem>
                        <SelectItem value="Healthcare & Pharma">Healthcare & Pharma</SelectItem>
                        <SelectItem value="Professional Services">Professional Services</SelectItem>
                        <SelectItem value="Renewable Energy">Renewable Energy</SelectItem>
                        <SelectItem value="Retail & E-commerce">Retail & E-commerce</SelectItem>
                        <SelectItem value="Aerospace & Defense">Aerospace & Defense</SelectItem>
                        <SelectItem value="Telecommunications">Telecommunications</SelectItem>
                        <SelectItem value="Real Estate">Real Estate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Location *</Label>
                    <Input
                      value={newCompany.location}
                      onChange={(e) => setNewCompany({...newCompany, location: e.target.value})}
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>Website</Label>
                    <Input
                      value={newCompany.website}
                      onChange={(e) => setNewCompany({...newCompany, website: e.target.value})}
                      placeholder="www.company.com"
                    />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input
                      value={newCompany.phone}
                      onChange={(e) => setNewCompany({...newCompany, phone: e.target.value})}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label>Email *</Label>
                    <Input
                      type="email"
                      value={newCompany.email}
                      onChange={(e) => setNewCompany({...newCompany, email: e.target.value})}
                      placeholder="contact@company.com"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="business" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>Established Year</Label>
                    <Input
                      type="number"
                      value={newCompany.established}
                      onChange={(e) => setNewCompany({...newCompany, established: e.target.value})}
                      placeholder="2020"
                      min="1800"
                      max="2024"
                    />
                  </div>
                  <div>
                    <Label>Number of Employees *</Label>
                    <Input
                      type="number"
                      value={newCompany.employees}
                      onChange={(e) => setNewCompany({...newCompany, employees: e.target.value})}
                      placeholder="1000"
                      min="1"
                    />
                  </div>
                  <div>
                    <Label>Annual Revenue ($ millions)</Label>
                    <Input
                      type="number"
                      value={newCompany.revenue}
                      onChange={(e) => setNewCompany({...newCompany, revenue: e.target.value})}
                      placeholder="50"
                      min="0"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Company Size</Label>
                    <Select value={newCompany.companySize} onValueChange={(value) => setNewCompany({...newCompany, companySize: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Startup">Startup (1-50)</SelectItem>
                        <SelectItem value="Small Business">Small Business (51-200)</SelectItem>
                        <SelectItem value="Mid-Market">Mid-Market (201-1000)</SelectItem>
                        <SelectItem value="Large Enterprise">Large Enterprise (1001-5000)</SelectItem>
                        <SelectItem value="Enterprise">Enterprise (5000+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Credit Rating</Label>
                    <Select value={newCompany.creditRating} onValueChange={(value) => setNewCompany({...newCompany, creditRating: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select credit rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AAA">AAA</SelectItem>
                        <SelectItem value="AA">AA</SelectItem>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A">A</SelectItem>
                        <SelectItem value="BBB">BBB</SelectItem>
                        <SelectItem value="BB">BB</SelectItem>
                        <SelectItem value="B">B</SelectItem>
                        <SelectItem value="Not Rated">Not Rated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>Payment Terms</Label>
                    <Select value={newCompany.paymentTerms} onValueChange={(value) => setNewCompany({...newCompany, paymentTerms: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment terms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Net 15">Net 15</SelectItem>
                        <SelectItem value="Net 30">Net 30</SelectItem>
                        <SelectItem value="Net 45">Net 45</SelectItem>
                        <SelectItem value="Net 60">Net 60</SelectItem>
                        <SelectItem value="COD">Cash on Delivery</SelectItem>
                        <SelectItem value="Prepaid">Prepaid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Risk Level</Label>
                    <Select value={newCompany.riskLevel} onValueChange={(value) => setNewCompany({...newCompany, riskLevel: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select risk level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Very Low">Very Low</SelectItem>
                        <SelectItem value="Low">Low</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                        <SelectItem value="Very High">Very High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Expansion Plans</Label>
                    <Select value={newCompany.expansionPlans} onValueChange={(value) => setNewCompany({...newCompany, expansionPlans: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select expansion plans" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Aggressive">Aggressive</SelectItem>
                        <SelectItem value="Rapid">Rapid</SelectItem>
                        <SelectItem value="Moderate">Moderate</SelectItem>
                        <SelectItem value="Conservative">Conservative</SelectItem>
                        <SelectItem value="Stable">Stable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Specialties</Label>
                  <Input
                    value={newCompany.specialties}
                    onChange={(e) => setNewCompany({...newCompany, specialties: e.target.value})}
                    placeholder="Enter specialties separated by commas"
                  />
                </div>
              </TabsContent>

              <TabsContent value="travel" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Annual Travel Budget *</Label>
                    <Input
                      value={newCompany.travelBudget}
                      onChange={(e) => setNewCompany({...newCompany, travelBudget: e.target.value})}
                      placeholder="$2.5M"
                    />
                  </div>
                  <div>
                    <Label>Annual Travel Volume</Label>
                    <Input
                      value={newCompany.annualTravelVolume}
                      onChange={(e) => setNewCompany({...newCompany, annualTravelVolume: e.target.value})}
                      placeholder="5,000 trips"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Travel Frequency</Label>
                    <Select value={newCompany.travelFrequency} onValueChange={(value) => setNewCompany({...newCompany, travelFrequency: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select travel frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Daily">Daily</SelectItem>
                        <SelectItem value="Weekly">Weekly</SelectItem>
                        <SelectItem value="Bi-weekly">Bi-weekly</SelectItem>
                        <SelectItem value="Monthly">Monthly</SelectItem>
                        <SelectItem value="Quarterly">Quarterly</SelectItem>
                        <SelectItem value="Annual">Annual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Preferred Class</Label>
                    <Select value={newCompany.preferredClass} onValueChange={(value) => setNewCompany({...newCompany, preferredClass: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Economy">Economy</SelectItem>
                        <SelectItem value="Economy Plus">Economy Plus</SelectItem>
                        <SelectItem value="Business">Business</SelectItem>
                        <SelectItem value="Business/First">Business/First</SelectItem>
                        <SelectItem value="First">First Class</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Current Airlines</Label>
                  <Input
                    value={newCompany.currentAirlines}
                    onChange={(e) => setNewCompany({...newCompany, currentAirlines: e.target.value})}
                    placeholder="United, Delta, British Airways (separated by commas)"
                  />
                </div>
              </TabsContent>

              <TabsContent value="preferences" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Sustainability Focus</Label>
                    <Select value={newCompany.sustainabilityFocus} onValueChange={(value) => setNewCompany({...newCompany, sustainabilityFocus: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select sustainability focus" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Very High">Very High</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Low">Low</SelectItem>
                        <SelectItem value="None">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Technology Integration</Label>
                  <Input
                    value={newCompany.technologyIntegration}
                    onChange={(e) => setNewCompany({...newCompany, technologyIntegration: e.target.value})}
                    placeholder="API, Mobile App, Expense Management (separated by commas)"
                  />
                </div>

                <div>
                  <Label>Additional Notes</Label>
                  <Textarea
                    value={newCompany.notes}
                    onChange={(e) => setNewCompany({...newCompany, notes: e.target.value})}
                    placeholder="Enter any additional notes about this company..."
                    rows={4}
                  />
                </div>
              </TabsContent>
            </Tabs>

            {/* Form Validation Alert */}
            {!isFormValid() && (
              <Alert>
                <AlertCircleIcon className="h-4 w-4" />
                <AlertDescription>
                  Please fill in all required fields marked with * to add the company.
                </AlertDescription>
              </Alert>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddCompanyDialog(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleAddCompany} 
              disabled={!isFormValid()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Save className="h-4 w-4 mr-2" />
              Add Company
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}