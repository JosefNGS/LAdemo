import { Product } from '../types';

export type MarketingAssetType = 'Banner 1' | 'Banner 2' | 'Social Post' | 'Email Template';

/**
 * Generates a banner image URL for a marketing asset
 * @param product - The product to generate assets for
 * @param assetType - The type of marketing asset
 * @returns URL to the banner image
 */
export function getMarketingAssetImage(product: Product, assetType: MarketingAssetType): string {
  const seed = `${assetType.toLowerCase().replace(/\s+/g, '-')}-${product.id}`;
  
  // Different dimensions for different asset types
  const dimensions: Record<MarketingAssetType, string> = {
    'Banner 1': '1200/630', // Standard banner (Facebook/Twitter)
    'Banner 2': '1920/1080', // Wide banner (YouTube/Website)
    'Social Post': '1080/1080', // Square (Instagram)
    'Email Template': '600/400', // Email banner
  };

  const [width, height] = dimensions[assetType].split('/');
  
  // Use picsum.photos with product-specific seed for consistent images
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}

/**
 * Gets all default marketing assets for a product
 */
export function getDefaultMarketingAssets(): MarketingAssetType[] {
  return ['Banner 1', 'Banner 2', 'Social Post', 'Email Template'];
}

/**
 * Downloads a marketing asset image
 */
export function downloadMarketingAsset(product: Product, assetType: MarketingAssetType): void {
  const imageUrl = getMarketingAssetImage(product, assetType);
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = `${product.name.replace(/\s+/g, '-')}-${assetType.replace(/\s+/g, '-')}.jpg`;
  link.target = '_blank';
  link.click();
}

/**
 * Downloads all marketing assets as a zip (simulated - opens all images in new tabs)
 */
export function downloadAllMarketingAssets(product: Product): void {
  const assets = getDefaultMarketingAssets();
  assets.forEach((asset, index) => {
    setTimeout(() => {
      downloadMarketingAsset(product, asset);
    }, index * 200); // Stagger downloads
  });
}

