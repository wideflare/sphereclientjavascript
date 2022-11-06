
import { Items } from "./Items";

export interface GetItems {
     onResult(appName: string , appIcon: string  , categoryName: string ,categoryIcon: string  ,totalItemCount: number ,itemsInThisPage: number ,itemsPerPage: number ,items: Items[]);
     onLoading();
     onLoadfinished();
     onAnnouncement(announcementBody: string);
     onAppLocation(appLocation: string ,latitude: number ,longitude: number );
     onNextPage();
     onHomeCover(cover: string);
     onEmpty(appName: string , appIcon: string  , categoryName: string ,categoryIcon: string);
     onError(error: any);
     onUnderConstruction();
     onNotActive();
     onNotExist();
     onNotFound();
     onNotAcceptable();
     onBadRequest();
     onNoNextPage();
}