import serviceCatalogJson from "@/data/service-catalog.json";

export type CatalogService = {
  serviceName: string;
  description: string;
  imagePath: string;
  price: number;
};

export type ServiceCategory = {
  categoryName: string;
  categoryImagePath: string;
  services: CatalogService[];
  categoryDescription: string;
};

export type AudienceCatalog = {
  women: ServiceCategory[];
  men: ServiceCategory[];
};

export type FlatCatalogService = CatalogService & {
  id: string;
  categoryName: string;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const dedupeServices = (services: CatalogService[]) => {
  const seen = new Set<string>();
  const result: CatalogService[] = [];

  for (const service of services) {
    const key = `${service.serviceName}::${service.price}`;
    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    result.push(service);
  }

  return result;
};

const mergeCategories = (categories: ServiceCategory[]) => {
  const categoryMap = new Map<string, ServiceCategory>();

  for (const category of categories) {
    const existing = categoryMap.get(category.categoryName);
    if (!existing) {
      categoryMap.set(category.categoryName, {
        ...category,
        services: [...category.services],
      });
      continue;
    }

    existing.services = dedupeServices([...existing.services, ...category.services]);
  }

  return Array.from(categoryMap.values());
};

export const audienceServiceCatalog = serviceCatalogJson as AudienceCatalog;

export const serviceCategories: ServiceCategory[] = mergeCategories([
  ...audienceServiceCatalog.women,
  ...audienceServiceCatalog.men,
]);

export const flatCatalogServices: FlatCatalogService[] = serviceCategories.flatMap((category) =>
  category.services.map((service) => ({
    ...service,
    categoryName: category.categoryName,
    id: `${slugify(category.categoryName)}-${slugify(service.serviceName)}`,
  }))
);

export const mapServiceId = (categoryName: string, serviceName: string) => {
  return `${slugify(categoryName)}-${slugify(serviceName)}`;
};
