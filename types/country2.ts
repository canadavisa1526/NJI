export interface Country {
    name: string;
    slug: string;
    flag: string;
    description: string;
    features: string[];
    stats: {
      universities: string;
      students: string;
      success: string;
    };
  }