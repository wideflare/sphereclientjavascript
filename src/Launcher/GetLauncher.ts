import { LauncherItems } from "./LauncherItems";


export interface GetLauncher {
      onResult( appName: string ,  appIcon: string  ,  launcherName: string, launcherIcon: string ,   totalItemCount: number ,  itemsInThisPage: number ,  itemsPerPage: number ,  items: LauncherItems[]);
      onLoading();
      onLoadfinished();
      onAnnouncement( announcementBody: string);
      onAppLocation( appLocation: string ,  latitude: number ,  longitude: number );
      onNextPage();
      onLauncherCover( cover: string);
      onEmpty(appName: string ,  appIcon: string  ,  launcherName: string, launcherIcon: string);
      onError(error: any);
      onUnderConstruction();
      onNotActive();
      onNotExist();
      onNotFound();
      onNotAcceptable();
      onBadRequest();
      onNoNextPage();
}