import fs from 'fs';
import path from 'path';

const SUBMISSIONS_FILE = path.join(process.cwd(), 'data', 'form-submissions.json');

// Ensure the data directory exists
function ensureDirectoryExists() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Initialize the submissions file if it doesn't exist
function initSubmissionsFile() {
  ensureDirectoryExists();
  if (!fs.existsSync(SUBMISSIONS_FILE)) {
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify([], null, 2));
  }
}

// Save a form submission locally
export async function saveSubmissionLocally(data: any) {
  try {
    initSubmissionsFile();
    
    // Read existing submissions
    const submissionsJson = fs.readFileSync(SUBMISSIONS_FILE, 'utf8');
    const submissions = JSON.parse(submissionsJson);
    
    // Add the new submission with a timestamp
    submissions.push({
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...data
    });
    
    // Write back to the file
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
    
    return { success: true };
  } catch (error) {
    console.error('Error saving submission locally:', error);
    return { success: false, error };
  }
}
