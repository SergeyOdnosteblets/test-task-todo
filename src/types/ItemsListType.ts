type Comment = {
  value: string;
  color: string;
};

export type ItemType = {
  id: number;
  value: string;
  count: number;
  comments: Comment[];
};

export interface ItemsListType {
  items: ItemType[];
  setItems: (items: ItemType[]) => void;
  activeItemId: number | null;
  setActiveItemId: (itemId: number | null) => void;
  updateState: boolean;
  setUpdateState: (updateState: boolean) => void;
}

export interface CommentsType {
  data: ItemType[];
  activeItemId: number | null;
  items: ItemType[];
  setItems: (items: ItemType[]) => void;
}
