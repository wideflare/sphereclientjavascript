import {HomeItems} from './HomeItems.js';

export interface GetHome {
     onResult( appName : string ,  appIcon : string ,  totalItemCount : number ,  itemsInThisPage : number ,  itemsPerPage : number ,   items :  HomeItems[]);
     onLoading();
     onLoadfinished();
     onPopup( popupTitle : string ,  popupMessage : string);
     onAnnouncement( announcementBody : string);
     onMessage( messageTitle : string ,  messageBody : string);
     onAppLocation( appLocation : string ,  latitude : number ,  longitude  : number);
     onNextPage();
     onCover( cover : string);
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