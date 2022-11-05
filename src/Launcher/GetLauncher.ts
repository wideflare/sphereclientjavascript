import { LauncherItems } from "./LauncherItems";


export interface GetLauncher {
      onResult( appName: string ,  appIcon: string  ,  launcherName: string, launcherIcon: string ,   totalItemCount: number ,  itemsInThisPage: number ,  itemsPerPage: number ,  items: LauncherItems[]);
      onLoading();
      onLoadfinished();
      onAnnouncement( announcementBody: string);
      onAppLocation( appLocation: string ,  latitude: number ,  longitude: number );
      onNextPage();
      onCover( cover: string);
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