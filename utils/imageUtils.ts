/**
 * Image utility functions for handling fallbacks and ensuring proper image loading
 */

// Fallback images for different types of content
export const FALLBACK_IMAGES = {
  // University/College building - professional academic architecture
  institution: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  
  // Student/person placeholder - professional headshot style
  student: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  
  // General education/study image
  education: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  
  // Country/flag placeholder
  country: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  
  // Service/business image
  service: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
} as const;

/**
 * Get fallback image URL for a specific type
 */
export function getFallbackImage(type: keyof typeof FALLBACK_IMAGES): string {
  return FALLBACK_IMAGES[type];
}

/**
 * Validate if an image URL is properly formatted
 */
export function isValidImageUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  
  // Check if it's a valid URL
  try {
    new URL(url);
  } catch {
    return false;
  }
  
  // Check if it has proper image extensions or is from trusted sources
  const trustedDomains = [
    'images.unsplash.com',
    'images.pexels.com',
    'res.cloudinary.com',
    'cdn.pixabay.com'
  ];
  
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
  
  const urlObj = new URL(url);
  const isDomainTrusted = trustedDomains.some(domain => urlObj.hostname.includes(domain));
  const hasImageExtension = imageExtensions.some(ext => url.toLowerCase().includes(ext));
  
  return isDomainTrusted || hasImageExtension;
}

/**
 * Get a safe image URL with fallback
 */
export function getSafeImageUrl(
  imageUrl: string | undefined | null, 
  fallbackType: keyof typeof FALLBACK_IMAGES = 'education'
): string {
  // If no image URL provided, return fallback
  if (!imageUrl) {
    return getFallbackImage(fallbackType);
  }
  
  // If image URL is invalid, return fallback
  if (!isValidImageUrl(imageUrl)) {
    return getFallbackImage(fallbackType);
  }
  
  return imageUrl;
}

/**
 * Ensure Unsplash URLs have proper parameters for optimization
 */
export function optimizeUnsplashUrl(url: string, width = 400, height = 300): string {
  if (!url.includes('images.unsplash.com')) {
    return url;
  }
  
  // Remove existing parameters
  const baseUrl = url.split('?')[0];
  
  // Add optimized parameters
  return `${baseUrl}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${width}&h=${height}`;
}

/**
 * Handle image error by providing fallback
 */
export function handleImageError(
  originalUrl: string,
  fallbackType: keyof typeof FALLBACK_IMAGES = 'education'
): string {
  console.warn(`Image failed to load: ${originalUrl}`);
  return getFallbackImage(fallbackType);
}

/**
 * Preload an image to check if it's valid
 */
export function preloadImage(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

/**
 * Get optimized image URL with proper sizing and fallback
 */
export function getOptimizedImageUrl(
  imageUrl: string | undefined | null,
  fallbackType: keyof typeof FALLBACK_IMAGES = 'education',
  width = 400,
  height = 300
): string {
  const safeUrl = getSafeImageUrl(imageUrl, fallbackType);
  return optimizeUnsplashUrl(safeUrl, width, height);
}
