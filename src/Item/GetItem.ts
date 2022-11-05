export interface GetItem {
     onResult(appName: string , appIcon: string  , cover: string , itemName: string ,extras: object  , body: string ,itemCategoryName: string ,itemImages: object , itemImage: string);
     onLoading();
     onLoadfinished();
     onAnnouncement(announcementBody: string);
     onAppLocation(appLocation: string ,latitude: number ,longitude: number );
     onCover(cover: string);
     onError();
     onUnderConstruction();
     onNotActive();
     onNotExist();
     onNotFound();
     onNotAcceptable();
     onBadRequest();
}