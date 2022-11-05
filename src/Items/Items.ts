export class Items {
      itemName: string;
      itemId: string;
      extras: object;
      itemImage: string;

     constructor( itemName: string , itemId: string , extras: object ,  itemImage: string){
        this.itemName = itemName;
        this.itemId = itemId;
        this.extras = extras;
        this.itemImage = itemImage;
    }
}