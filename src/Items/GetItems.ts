
import { Items } from "./Items";

export interface GetItems {
     onResult(appName: string , appIcon: string  , categoryName: string ,categoryIcon: string  ,totalItemCount: number ,itemsInThisPage: number ,itemsPerPage: number ,items: Items[]);
     onLoading();
     onLoadfinished();
     onAnnouncement(announcementBody: string);
     onAppLocation(appLocation: string ,latitude: number ,longitude: number );
     onNextPage();
     onCover(cover: string);
     onEmpty();
     onError();
     onUnderConstruction();
     onNotActive();
     onNotExist();
     onNotFound();
     onNotAcceptable();
     onBadRequest();
     onNoNextPage();
}