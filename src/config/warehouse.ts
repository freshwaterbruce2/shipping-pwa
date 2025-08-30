// Warehouse Configuration System
// This allows the app to be customized for different businesses and warehouses

export interface WarehouseConfig {
  // Business Information
  companyName: string;
  warehouseName: string;
  warehouseCode: string;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  
  // App Configuration
  appName: string;
  appShortName: string;
  appDescription: string;
  
  // Branding
  brandColors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  
  // Business Logic Configuration
  destinationDCs: string[];
  freightTypes: string[];
  doorNumberRange: {
    min: number;
    max: number;
  };
  
  // Feature Toggles
  features: {
    voiceCommands: boolean;
    palletTracking: boolean;
    tcrManagement: boolean;
    multiShift: boolean;
    barcodeScanning: boolean;
  };
  
  // Voice Command Configuration
  voiceCommands?: {
    doorTerms: string[];
    dcTerms: string[];
    customCommands: Array<{
      pattern: string;
      action: string;
      description: string;
    }>;
  };
}

// Default Walmart DC 8980 Configuration
export const defaultWarehouseConfig: WarehouseConfig = {
  companyName: "Walmart Inc.",
  warehouseName: "Distribution Center 8980",
  warehouseCode: "DC8980",
  location: {
    address: "123 Warehouse Blvd",
    city: "Distribution City",
    state: "TX",
    zipCode: "75001"
  },
  
  appName: "DC8980 Shipping Department",
  appShortName: "DC8980 Shipping",
  appDescription: "Door scheduling and pallet tracking system for Walmart DC 8980",
  
  brandColors: {
    primary: "#0071CE",
    secondary: "#FFC220", 
    accent: "#004C91",
    background: "#FFFFFF",
    text: "#333333"
  },
  
  destinationDCs: ["6024", "6070", "6039", "6040", "7045"],
  freightTypes: ["23/43", "28", "XD", "AIB"],
  doorNumberRange: {
    min: 332,
    max: 454
  },
  
  features: {
    voiceCommands: true,
    palletTracking: true,
    tcrManagement: true,
    multiShift: false,
    barcodeScanning: false
  },
  
  voiceCommands: {
    doorTerms: ["door", "dock", "bay", "trailer", "spot"],
    dcTerms: ["dc", "distribution center", "destination"],
    customCommands: [
      {
        pattern: "emergency door",
        action: "add_priority_door",
        description: "Adds high-priority door entry"
      }
    ]
  }
};

// Configuration management functions
class WarehouseConfigManager {
  private static instance: WarehouseConfigManager;
  private config: WarehouseConfig;
  
  private constructor() {
    this.config = this.loadConfig();
  }
  
  public static getInstance(): WarehouseConfigManager {
    if (!WarehouseConfigManager.instance) {
      WarehouseConfigManager.instance = new WarehouseConfigManager();
    }
    return WarehouseConfigManager.instance;
  }
  
  private loadConfig(): WarehouseConfig {
    try {
      const savedConfig = localStorage.getItem('warehouse-config');
      if (savedConfig) {
        return { ...defaultWarehouseConfig, ...JSON.parse(savedConfig) };
      }
    } catch (error) {
      console.warn('Failed to load warehouse config from localStorage:', error);
    }
    return defaultWarehouseConfig;
  }
  
  public getConfig(): WarehouseConfig {
    return this.config;
  }
  
  public updateConfig(updates: Partial<WarehouseConfig>): void {
    this.config = { ...this.config, ...updates };
    this.saveConfig();
  }
  
  public resetToDefault(): void {
    this.config = { ...defaultWarehouseConfig };
    this.saveConfig();
  }
  
  private saveConfig(): void {
    try {
      localStorage.setItem('warehouse-config', JSON.stringify(this.config));
    } catch (error) {
      console.error('Failed to save warehouse config to localStorage:', error);
    }
  }
  
  // Utility methods for common operations
  public getAppName(): string {
    return this.config.appName;
  }
  
  public getCompanyName(): string {
    return this.config.companyName;
  }
  
  public getWarehouseName(): string {
    return this.config.warehouseName;
  }
  
  public getDestinationDCs(): string[] {
    return this.config.destinationDCs;
  }
  
  public getFreightTypes(): string[] {
    return this.config.freightTypes;
  }
  
  public getDoorRange(): { min: number; max: number } {
    return this.config.doorNumberRange;
  }
  
  public isFeatureEnabled(feature: keyof WarehouseConfig['features']): boolean {
    return this.config.features[feature];
  }
  
  public getBrandColors(): WarehouseConfig['brandColors'] {
    return this.config.brandColors;
  }
}

// Export singleton instance
export const warehouseConfig = WarehouseConfigManager.getInstance();

// Hook for React components
export const useWarehouseConfig = () => {
  return {
    config: warehouseConfig.getConfig(),
    updateConfig: (updates: Partial<WarehouseConfig>) => warehouseConfig.updateConfig(updates),
    resetConfig: () => warehouseConfig.resetToDefault(),
    isFeatureEnabled: (feature: keyof WarehouseConfig['features']) => warehouseConfig.isFeatureEnabled(feature)
  };
};