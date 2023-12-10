type ComicBook = {
  id: number;
  name: string;
  published: string;
  price: string;
  creator: string;
  page_count: number;
  grade: string;
  thumbnail: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isUnlocked: boolean;
};
interface Purchase {
  id: number;
  content_id: string;
  user_id: string;
  purchase_id: string;
  purchase_date: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  status: string;
  label: string;
}
export { ComicBook, Purchase };
