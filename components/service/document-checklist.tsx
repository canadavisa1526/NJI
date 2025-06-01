'use client';

import { motion } from 'framer-motion';
import { CheckCircle, FileText, AlertCircle, Download } from 'lucide-react';
import { useState } from 'react';

interface DocumentChecklistProps {
  serviceType: string;
}

const documentRequirements = {
  'visitor-visa': {
    essential: [
      'Valid passport (minimum 6 months validity)',
      'Completed visa application form',
      'Recent passport-size photographs',
      'Proof of financial means (bank statements)',
      'Travel itinerary and accommodation bookings',
      'Return flight tickets or reservation'
    ],
    supporting: [
      'Invitation letter (if visiting family/friends)',
      'Employment letter and leave approval',
      'Travel insurance coverage',
      'Property ownership documents',
      'Income tax returns (last 3 years)',
      'Marriage certificate (if applicable)'
    ],
    additional: [
      'Previous visa copies',
      'Educational certificates',
      'Medical insurance',
      'Sponsor documents (if applicable)'
    ]
  },
  'dependent-visa': {
    essential: [
      'Valid passport for all dependents',
      'Marriage certificate (for spouse)',
      'Birth certificates (for children)',
      'Sponsor\'s valid visa/PR documents',
      'Relationship proof documentation',
      'Medical examination reports'
    ],
    supporting: [
      'Financial support evidence',
      'Sponsor\'s employment letter',
      'Accommodation arrangements proof',
      'Police clearance certificates',
      'Educational transcripts (for children)',
      'Insurance coverage documents'
    ],
    additional: [
      'Affidavit of support',
      'Joint bank account statements',
      'Cohabitation proof',
      'Character references'
    ]
  },
  'work-permit': {
    essential: [
      'Valid passport',
      'Job offer letter from employer',
      'Labor Market Impact Assessment (if required)',
      'Educational credential assessment',
      'Language proficiency test results',
      'Work experience letters'
    ],
    supporting: [
      'Medical examination results',
      'Police clearance certificates',
      'Proof of funds',
      'Resume/CV',
      'Professional licenses/certifications',
      'Reference letters'
    ],
    additional: [
      'Settlement funds proof',
      'Family member documents',
      'Previous work permits',
      'Professional memberships'
    ]
  },
  'default': {
    essential: [
      'Valid passport',
      'Application forms',
      'Photographs',
      'Supporting documents'
    ],
    supporting: [
      'Financial documents',
      'Educational certificates',
      'Medical reports',
      'Character certificates'
    ],
    additional: [
      'Additional supporting documents',
      'Translations (if required)',
      'Notarized copies'
    ]
  }
};

export default function DocumentChecklist({ serviceType }: DocumentChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const documents = documentRequirements[serviceType as keyof typeof documentRequirements] || documentRequirements.default;

  const toggleCheck = (item: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const DocumentSection = ({ title, items, icon: Icon, color }: { 
    title: string; 
    items: string[]; 
    icon: any; 
    color: string;
  }) => (
    <div className="mb-6">
      <div className="flex items-center mb-4">
        <Icon className={`w-5 h-5 ${color} mr-2`} />
        <h3 className="text-lg font-semibold text-[#13294E] dark:text-white">{title}</h3>
      </div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            onClick={() => toggleCheck(item)}
          >
            <div className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
              checkedItems[item] 
                ? 'bg-[#FAA71A] border-[#FAA71A]' 
                : 'border-gray-300 dark:border-gray-600'
            }`}>
              {checkedItems[item] && (
                <CheckCircle className="w-3 h-3 text-white" />
              )}
            </div>
            <span className={`text-sm ${checkedItems[item] ? 'line-through text-gray-500' : 'text-gray-700 dark:text-gray-300'}`}>
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const totalItems = documents.essential.length + documents.supporting.length + documents.additional.length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (checkedCount / totalItems) * 100;

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#13294E] dark:text-white border-b border-[#AFC1DB] dark:border-gray-700 pb-2">
            Document Checklist
          </h2>
          <div className="text-right">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Progress: {checkedCount}/{totalItems}
            </div>
            <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-1">
              <div 
                className="h-full bg-[#FAA71A] rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-[#AFC1DB]/20 dark:border-gray-700">
          <DocumentSection 
            title="Essential Documents" 
            items={documents.essential}
            icon={AlertCircle}
            color="text-red-500"
          />
          
          <DocumentSection 
            title="Supporting Documents" 
            items={documents.supporting}
            icon={FileText}
            color="text-blue-500"
          />
          
          <DocumentSection 
            title="Additional Documents" 
            items={documents.additional}
            icon={Download}
            color="text-green-500"
          />

          <div className="mt-6 p-4 bg-[#FAA71A]/10 rounded-lg border border-[#FAA71A]/20">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-[#FAA71A] mt-0.5" />
              <div>
                <h4 className="font-semibold text-[#13294E] dark:text-white mb-1">Important Note</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Document requirements may vary based on your specific situation and country of application. 
                  Our experts will provide you with a personalized checklist during your consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
