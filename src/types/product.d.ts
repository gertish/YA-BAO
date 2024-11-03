export interface CategoryId {
    $id: string;
    $collectionId: string;
    $databaseId: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
    categories_id: CategoryId; // Изменено на объект CategoryId
}

export interface Category {
    id: string;
    name: string;
}
