export class Property {
    db_id: string;
    address: string;
    finality: string;
    city: string;
    description: string;
    site: string;
    neighborhood: string;
    value: number;
    bedrooms: number;
    bathrooms: number;
    vacancies: number;
    area: number;
}

export class PropertyProfile {
    deal_id: string;
    bedrooms: number;
    bathrooms: number;
    vacancies: number;
    area: number;
    neighborhood: number;
    value: number;
}

export class SearchProperty {
    bedrooms_min: number;
    bedrooms_max: number;
    bathrooms_min: number;
    bathrooms_max: number;
    vacancies_min: number;
    vacancies_max: number;
    area_min: number;
    area_max: number;
    value_min: number;
    value_max: number;
    neighborhood: string;
}