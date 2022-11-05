export class LauncherItems {
       itemName: string;
      actionType: number;
       action: string;
      itemImage: string;

     constructor( itemName: string,  actionType: number ,  action: string ,  thumbnail: string){
        this.itemName = itemName;
        this.actionType = actionType;
        this.action = action;
        this.itemImage = thumbnail;
    }
}