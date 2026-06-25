/**
 * Utility helper functions for the Astro project
 */

/**
 * Format a URL with query parameters
 */
export function formatWhatsAppMessage(baseUrl: string, message: string): string {
  const encoded = encodeURIComponent(message);
  return `${baseUrl}?text=${encoded}`;
}

/**
 * Merge CSS classes conditionally
 */
export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format currency for Indonesian Rupiah
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function (...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
