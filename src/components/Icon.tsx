import {
  Home, Compass, Clock, Bookmark, Zap, Cpu, Cog, Car, Plane, Rocket, Ship,
  TrainFront, Building2, Bot, Brain, Monitor, Code, Database, Sun, FlaskConical,
  Layers, Factory, HeartPulse, Antenna, Workflow, Leaf, Recycle, Atom, Orbit,
  Anchor, HardHat, BatteryCharging, Telescope, TrendingUp, Sparkles, Search,
  Menu, X, ChevronLeft, Globe, LogOut, Mail, Lock, User, Eye, EyeOff, Calculator,
  CircuitBoard, GraduationCap, BookOpen, Target, FolderKanban, Settings,
  ShieldCheck, HelpCircle, Package, Folder, FileText, FileSearch, PenTool,
  Route, Save, Lightbulb, ArrowRight, Check, AlertTriangle,
} from "lucide-react";

const map: Record<string, any> = {
  home: Home, compass: Compass, clock: Clock, bookmark: Bookmark,
  zap: Zap, cpu: Cpu, cog: Cog, car: Car, plane: Plane, rocket: Rocket,
  ship: Ship, train: TrainFront, building: Building2, bot: Bot, brain: Brain,
  monitor: Monitor, code: Code, database: Database, sun: Sun, flask: FlaskConical,
  layers: Layers, factory: Factory, heart: HeartPulse, antenna: Antenna,
  workflow: Workflow, leaf: Leaf, recycle: Recycle, atom: Atom, orbit: Orbit,
  anchor: Anchor, hardhat: HardHat, battery: BatteryCharging, telescope: Telescope,
  trending: TrendingUp, sparkles: Sparkles, search: Search, menu: Menu, x: X,
  chevleft: ChevronLeft, globe: Globe, logout: LogOut, mail: Mail, lock: Lock,
  user: User, eye: Eye, eyeoff: EyeOff, calculator: Calculator, circuit: CircuitBoard,
  graduation: GraduationCap, book: BookOpen, target: Target, folderkanban: FolderKanban,
  settings: Settings, shield: ShieldCheck, help: HelpCircle, package: Package,
  folder: Folder, filetext: FileText, filesearch: FileSearch, pentool: PenTool,
  route: Route, save: Save, bulb: Lightbulb, arrow: ArrowRight, check: Check,
  alert: AlertTriangle,
};

export default function Icon({ name, size = 18 }: { name: string; size?: number }) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp size={size} strokeWidth={2} />;
}
