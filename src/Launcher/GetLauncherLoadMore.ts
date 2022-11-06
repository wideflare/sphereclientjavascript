import { LauncherItems } from "./LauncherItems";

export interface GetLauncherLoadMore {
      onResult(   totalItemCount: number ,  itemsInThisPage: number ,  itemsPerPage: number ,  items: LauncherItems[]);
      onLoading();
      onLoadfinished();
      onNextPage();
      onEmpty();
      onError(error: any);
      onUnderConstruction();
      onNotActive();
      onNotExist();
      onNotFound();
      onNotAcceptable();
      onBadRequest();
      onNoNextPage();
}