export interface GetItem {
     onResult(appName: string , appIcon: string  , itemName: string ,extras: object  , body: string ,itemCategoryName: string ,itemImages: object , itemImage: string);
     onLoading();
     onLoadfinished();
     onAnnouncement(announcementBody: string);
     onAppLocation(appLocation: string ,latitude: number ,longitude: number );
     onHomeCover(cover: string);
     onError(error: any);
     onUnderConstruction();
     onNotActive();
     onNotExist();
     onNotFound();
     onNotAcceptable();
     onBadRequest();
}