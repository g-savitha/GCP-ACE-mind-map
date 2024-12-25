const GCP_SERVICES = [
  { key: "GCP", text: "Google Cloud Platform", color: "#4285F4" },

  // General Topics
  { key: "General", text: "General Topics", parent: "GCP", color: "#EA4335" },
  { key: "RegionsZones", text: "Regions and Zones", parent: "General", color: "#FBBC05" },

  // Compute Engine
  { key: "Compute", text: "Compute", parent: "GCP", color: "#EA4335" },
  { key: "ComputeEngine", text: "Compute Engine", parent: "Compute", color: "#FBBC05" },
  { key: "MachineTypes", text: "Machine Types", parent: "ComputeEngine", color: "#34A853" },
  { key: "LoadBalancing", text: "Load Balancing & Auto Scaling", parent: "ComputeEngine", color: "#34A853" },
  { key: "Images", text: "Images", parent: "ComputeEngine", color: "#34A853" },
  { key: "IPAddresses", text: "IP Addresses", parent: "ComputeEngine", color: "#34A853" },
  { key: "StaticIP", text: "Static IP", parent: "IPAddresses", color: "#4285F4" },
  { key: "InstanceTemplates", text: "Instance Templates", parent: "ComputeEngine", color: "#34A853" },
  { key: "CustomImages", text: "Custom Images", parent: "ComputeEngine", color: "#34A853" },
  { key: "PreemptibleVMs", text: "Preemptible VMs", parent: "ComputeEngine", color: "#34A853" },
  { key: "SpotVMs", text: "Spot VMs", parent: "ComputeEngine", color: "#34A853" },
  { key: "ComputeBilling", text: "Compute Engine Billing", parent: "ComputeEngine", color: "#34A853" },
  { key: "LiveMigration", text: "Live Migration", parent: "ComputeEngine", color: "#34A853" },

  // Discounts
  { key: "Discounts", text: "Discounts", parent: "GCP", color: "#EA4335" },
  { key: "SustainedUse", text: "Sustained Use Discounts", parent: "Discounts", color: "#FBBC05" },
  { key: "CommittedUse", text: "Committed Use Discounts", parent: "Discounts", color: "#FBBC05" },
  { key: "PreemptibleDiscount", text: "Preemptible VM Discounts", parent: "Discounts", color: "#FBBC05" },

  // Instance Groups
  { key: "InstanceGroups", text: "Instance Groups", parent: "GCP", color: "#EA4335" },
  { key: "ManagedIG", text: "Managed Instance Groups", parent: "InstanceGroups", color: "#FBBC05" },
  { key: "MIGFeatures", text: "Features", parent: "ManagedIG", color: "#34A853" },
  { key: "SelfHealing", text: "Self Healing", parent: "MIGFeatures", color: "#4285F4" },
  { key: "AutoScaling", text: "Auto Scaling", parent: "MIGFeatures", color: "#4285F4" },
  { key: "RegionalMIGs", text: "Regional MIGs", parent: "MIGFeatures", color: "#4285F4" },
  { key: "UnmanagedIG", text: "Unmanaged Instance Groups", parent: "InstanceGroups", color: "#FBBC05" },

  // Load Balancing
  { key: "LoadBalancingService", text: "Load Balancing", parent: "GCP", color: "#EA4335" },
  { key: "LBFeatures", text: "Features", parent: "LoadBalancingService", color: "#FBBC05" },
  { key: "HealthCheck", text: "Health Check", parent: "LBFeatures", color: "#34A853" },
  { key: "GlobalLB", text: "Global Load Balancing", parent: "LBFeatures", color: "#34A853" },
  { key: "HostPathRules", text: "Host and Path Rules", parent: "LoadBalancingService", color: "#FBBC05" },
  { key: "SSLTermination", text: "SSL/TLS Termination", parent: "LoadBalancingService", color: "#FBBC05" },

  // App Engine
  { key: "AppEngine", text: "App Engine", parent: "GCP", color: "#EA4335" },
  { key: "AEEnvironments", text: "Environments", parent: "AppEngine", color: "#FBBC05" },
  { key: "StandardEnv", text: "Standard", parent: "AEEnvironments", color: "#34A853" },
  { key: "FlexibleEnv", text: "Flexible", parent: "AEEnvironments", color: "#34A853" },
  { key: "AEComponents", text: "Components", parent: "AppEngine", color: "#FBBC05" },
  { key: "AEServices", text: "Services", parent: "AEComponents", color: "#34A853" },
  { key: "AEVersions", text: "Versions", parent: "AEComponents", color: "#34A853" },
  { key: "TrafficSplitting", text: "Traffic Splitting", parent: "AppEngine", color: "#FBBC05" },
  { key: "AEDeployment", text: "Deployment", parent: "AppEngine", color: "#FBBC05" },

  // Kubernetes Engine
  { key: "GKE", text: "Google Kubernetes Engine", parent: "GCP", color: "#EA4335" },
  { key: "GKEClusters", text: "Cluster Types", parent: "GKE", color: "#FBBC05" },
  { key: "ZonalCluster", text: "Zonal", parent: "GKEClusters", color: "#34A853" },
  { key: "RegionalCluster", text: "Regional", parent: "GKEClusters", color: "#34A853" },
  { key: "PrivateCluster", text: "Private", parent: "GKEClusters", color: "#34A853" },
  { key: "GKEWorkloads", text: "Workloads", parent: "GKE", color: "#FBBC05" },
  { key: "Pods", text: "Pods", parent: "GKEWorkloads", color: "#34A853" },
  { key: "Deployments", text: "Deployments", parent: "GKEWorkloads", color: "#34A853" },

  // Cloud Functions
  { key: "CloudFunctions", text: "Cloud Functions", parent: "GCP", color: "#EA4335" },
  { key: "CFBasics", text: "Basics", parent: "CloudFunctions", color: "#FBBC05" },
  { key: "CFEvents", text: "Events", parent: "CFBasics", color: "#34A853" },
  { key: "CFTriggers", text: "Triggers", parent: "CFBasics", color: "#34A853" },
  { key: "CF2ndGen", text: "2nd Gen Features", parent: "CloudFunctions", color: "#FBBC05" },

  // Storage
  { key: "Storage", text: "Storage", parent: "GCP", color: "#EA4335" },
  { key: "CloudStorage", text: "Cloud Storage", parent: "Storage", color: "#FBBC05" },
  { key: "StorageClasses", text: "Storage Classes", parent: "CloudStorage", color: "#34A853" },
  { key: "Standard", text: "Standard", parent: "StorageClasses", color: "#4285F4" },
  { key: "Nearline", text: "Nearline", parent: "StorageClasses", color: "#4285F4" },
  { key: "Coldline", text: "Coldline", parent: "StorageClasses", color: "#4285F4" },
  { key: "Archive", text: "Archive", parent: "StorageClasses", color: "#4285F4" },
  { key: "ObjectOps", text: "Object Operations", parent: "CloudStorage", color: "#34A853" },
  { key: "ObjectVersioning", text: "Object Versioning", parent: "ObjectOps", color: "#4285F4" },
  { key: "ObjectLifecycle", text: "Lifecycle Management", parent: "ObjectOps", color: "#4285F4" },

  // IAM
  { key: "IAM", text: "IAM", parent: "GCP", color: "#EA4335" },
  { key: "IAMRoles", text: "Roles", parent: "IAM", color: "#FBBC05" },
  { key: "BasicRoles", text: "Basic Roles", parent: "IAMRoles", color: "#34A853" },
  { key: "PredefinedRoles", text: "Predefined Roles", parent: "IAMRoles", color: "#34A853" },
  { key: "CustomRoles", text: "Custom Roles", parent: "IAMRoles", color: "#34A853" },
  { key: "ServiceAccounts", text: "Service Accounts", parent: "IAM", color: "#FBBC05" },
  { key: "AccessControl", text: "Access Control", parent: "IAM", color: "#FBBC05" },

  // Databases
  { key: "Databases", text: "Databases", parent: "GCP", color: "#EA4335" },
  { key: "RelationalDB", text: "Relational", parent: "Databases", color: "#FBBC05" },
  { key: "CloudSQL", text: "Cloud SQL", parent: "RelationalDB", color: "#34A853" },
  { key: "CloudSpanner", text: "Cloud Spanner", parent: "RelationalDB", color: "#34A853" },
  { key: "NoSQLDB", text: "NoSQL", parent: "Databases", color: "#FBBC05" },
  { key: "Firestore", text: "Firestore", parent: "NoSQLDB", color: "#34A853" },
  { key: "Bigtable", text: "Cloud Bigtable", parent: "NoSQLDB", color: "#34A853" },
  { key: "BigQuery", text: "BigQuery", parent: "Databases", color: "#FBBC05" },
  { key: "MemoryStore", text: "Memory Store", parent: "Databases", color: "#FBBC05" },

  // Networking
  { key: "Networking", text: "Networking", parent: "GCP", color: "#EA4335" },
  { key: "VPC", text: "VPC", parent: "Networking", color: "#FBBC05" },
  { key: "VPCSubnets", text: "VPC Subnets", parent: "VPC", color: "#34A853" },
  { key: "FirewallRules", text: "Firewall Rules", parent: "VPC", color: "#34A853" },
  { key: "SharedVPC", text: "Shared VPC", parent: "VPC", color: "#34A853" },
  { key: "VPCPeering", text: "VPC Peering", parent: "VPC", color: "#34A853" },

  // Hybrid Cloud
  { key: "HybridCloud", text: "Hybrid Cloud", parent: "GCP", color: "#EA4335" },
  { key: "CloudVPN", text: "Cloud VPN", parent: "HybridCloud", color: "#FBBC05" },
  { key: "CloudInterconnect", text: "Cloud Interconnect", parent: "HybridCloud", color: "#FBBC05" },

  // Operations
  { key: "Operations", text: "Cloud Operations", parent: "GCP", color: "#EA4335" },
  { key: "Monitoring", text: "Cloud Monitoring", parent: "Operations", color: "#FBBC05" },
  { key: "Logging", text: "Cloud Logging", parent: "Operations", color: "#FBBC05" },
  { key: "ErrorReporting", text: "Error Reporting", parent: "Operations", color: "#FBBC05" },
  { key: "Debugger", text: "Cloud Debugger", parent: "Operations", color: "#FBBC05" },
  { key: "Profiler", text: "Cloud Profiler", parent: "Operations", color: "#FBBC05" },

  // Organization
  { key: "Organization", text: "Organization", parent: "GCP", color: "#EA4335" },
  { key: "ResourceHierarchy", text: "Resource Hierarchy", parent: "Organization", color: "#FBBC05" },
  { key: "BillingAccounts", text: "Billing Accounts", parent: "Organization", color: "#FBBC05" },
  { key: "IAMPractices", text: "IAM Best Practices", parent: "Organization", color: "#FBBC05" }
];

export default GCP_SERVICES;