import { SearchProperty } from "../interfaces/property";

export function prepareParametersSearch(profile: SearchProperty) {
    let params: string = "";
    if (profile.bedrooms_min)
        params += `bedrooms_min=${profile.bedrooms_min}`;
    if (profile.bedrooms_max)
        params += `&bedrooms_max=${profile.bedrooms_max}`;
    if (profile.bathrooms_max)
        params += `&bathrooms_max=${profile.bathrooms_max}`;
    if (profile.bathrooms_min)
        params +=`&bathrooms_min=${profile.bathrooms_min}`;
    if (profile.vacancies_max)
        params +=`&vacancies_max=${profile.vacancies_max}`;
    if (profile.vacancies_min)
        params +=`&vacancies_min=${profile.vacancies_min}`;
    if (profile.area_max)
        params += `&area_max=${profile.area_max}`;
    if (profile.area_min)
        params +=`&area_min=${profile.area_min}`;
    if (profile.value_max)
        params +=`&value_max=${profile.value_max}`;
    if (profile.value_min)
        params +=`&value_min=${profile.value_min}`;
    if (profile.neighborhood)
        params += `&neighborhood=${profile.neighborhood}`
    return params;
}
