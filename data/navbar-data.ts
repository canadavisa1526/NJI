import { NavItem } from "@/types/navbar";
import {
  GraduationCap,
  BookOpen,
  Globe2,
  Building2,
  Phone,
  Sun,
  Moon,
  School,
  Library,
  Award,
  Users,
  FileText,
  BarChart,
  Menu,
  X,
  ChevronDown,
  Lightbulb,
  Rocket,
  Target,
  Sparkles,
  MapPin,
  Info,
  Banknote,
} from "lucide-react";
const navItems: NavItem[] = [
  // {
  //   title: "Study Programs",
  //   icon: GraduationCap,
  //   submenu: [
  //     {
  //       title: "Undergraduate",
  //       icon: School,
  //       href: "/programs/undergraduate",
  //       description: "Bachelor's degree programs for high school graduates",
  //     },
  //     {
  //       title: "Postgraduate",
  //       icon: BookOpen,
  //       href: "/programs/postgraduate",
  //       description: "Master's and doctoral programs for graduates",
  //     },
  //     {
  //       title: "Research",
  //       icon: Lightbulb,
  //       href: "/programs/research",
  //       description: "Research opportunities and PhD programs",
  //     },
  //     {
  //       title: "Professional",
  //       icon: Target,
  //       href: "/programs/professional",
  //       description: "Career-focused certification programs",
  //     },
  //     {
  //       title: "Short Courses",
  //       icon: Rocket,
  //       href: "/programs/short-courses",
  //       description: "Intensive short-term learning programs",
  //     },
  //   ],
  // },
  {
    title: "Destinations",
    icon: Globe2,
    submenu: [
      {
        title: "Study in Canada",
        icon: MapPin,
        href: "/country/canada",
        description: "World-class education in a multicultural environment",
      },
      {
        title: "Study in USA",
        icon: MapPin,
        href: "/country/usa",
        description: "Top-ranked universities and diverse opportunities",
      },
      {
        title: "Study in UK",
        icon: MapPin,
        href: "/country/uk",
        description: "Traditional excellence in education",
      },
      {
        title: "Study in Australia",
        icon: MapPin,
        href: "/country/australia",
        description: "Quality education in a beautiful setting",
      },
      {
        title: "Study in Germany",
        icon: MapPin,
        href: "/country/germany",
        description: "Innovation and engineering excellence",
      },
      {
        title: "Study in New Zealand",
        icon: MapPin,
        href: "/country/new-zealand",
        description: "Quality education in a scenic environment",
      },
    ],
  },
  {
    title: "About Us",
    icon: Info,
    href: "/about",
  },

  {
    title: "Other Services",
    icon: Building2,
    submenu: [
      {
        title: "Visitor Visa",
        icon: FileText,
        href: "/services/visitor-visa",
      },
      {
        title: "Dependent Visa",
        icon: FileText,
        href: "/services/dependent-visa",
      },
      { title: "Insurance", icon: FileText, href: "/services/insurance" },
      { title: "Air Ticket", icon: FileText, href: "/services/air-ticket" },
      {
        title: "Finance (Forex and Loan)",
        icon: Banknote,
        href: "/services/finance",
      },
      { title: "Work Permit", icon: FileText, href: "/services/work-permit" },
      {
        title: "Permanent Residency",
        icon: FileText,
        href: "/services/permanent-residency",
      },
      { title: "Coaching", icon: Users, href: "/services/coaching" },
    ],
  },

  {
    title: "Contact",
    icon: Phone,
    onClick: () => setIsConsultationOpen(true),
    href: "/contact",
  },
];
function setIsConsultationOpen(isOpen: boolean): void {
    // You can implement the logic to open a consultation modal or navigate to a consultation page here.
    // For example, if you are using a state management library like React Context or Redux,
    // you can dispatch an action to update the state and open the consultation modal.
    // Or, if you are using a simple React component, you can update the component's state directly.
    // Here's a simple example using React's useState hook:
    // const [isConsultationOpen, setIsConsultationOpen] = useState(false);
    // ...
    // <button onClick={() => setIsConsultationOpen(true)}>Contact</button>
    // ...
    // In this case, you would need to ensure that the setIsConsultationOpen function is available in the scope where the Contact button is rendered.
    // Another approach is to use a global event listener to trigger the consultation modal.
    // For example:
    // window.dispatchEvent(new CustomEvent('open-consultation', { detail: isOpen }));
    // And then, in your consultation modal component, you can listen for this event:
    // useEffect(() => {
    //   const handleOpenConsultation = (event) => {
    //     setIsConsultationOpen(event.detail);
    //   };
    //   window.addEventListener('open-consultation', handleOpenConsultation);
    //   return () => {
    //     window.removeEventListener('open-consultation', handleOpenConsultation);
    //   };
    // }, []);
    //
    // For now, I'll just log a message to the console.
    console.log("setIsConsultationOpen called with:", isOpen);
}

