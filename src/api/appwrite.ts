import { Client, Databases, Account, Query } from 'appwrite'
import type { Models } from 'appwrite'
import type { Product } from '@/types/product'
import {
  APPWRITE_ENDPOINT,
  APPWRITE_PROJECT_ID,
  DATABASE_ID,
  COLLECTION_ID_PRODUCTS,
} from '@/app.constants'

const client = new Client()
client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT_ID)

export const account = new Account(client)
export const databases = new Databases(client)

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID_PRODUCTS,
      [Query.limit(1000)],
    )

    const products: Product[] = response.documents.map(
      (doc: Models.Document) => ({
        id: doc.$id,
        name: doc.name,
        description: doc.description,
        price: doc.price,
        image_url: doc.image_url,
        categories_id: doc.categories_id,
      }),
    )
    return products
  } catch (error) {
    console.error('Ошибочка', error)
    return []
  }
}
