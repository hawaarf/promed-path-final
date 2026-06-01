const fs = require('fs');
let content = fs.readFileSync('src/app/components/StudioDetailView.tsx', 'utf-8');
const oldStr = `import { 
  ArrowLeft, Instagram, PlayCircle, Rocket, Briefcase, 
  CheckCircle2, GraduationCap, Building, Users, MessageSquare, 
  Linkedin, X as XIcon 
} from 'lucide-react';`;
const newStr = `import { 
  ArrowLeft, ArrowRight, Instagram, PlayCircle, Rocket, Briefcase, 
  CheckCircle2, GraduationCap, Building, Users, MessageSquare, 
  Linkedin, X as XIcon 
} from 'lucide-react';`;
content = content.replace(oldStr, newStr);
content = content.replace(oldStr.replace(/\\n/g, '\r\n'), newStr);
fs.writeFileSync('src/app/components/StudioDetailView.tsx', content, 'utf-8');
