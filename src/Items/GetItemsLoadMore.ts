import { Items } from "./Items";

export interface GetItemsLoadMore {
     onResult(totalItemCount: number ,itemsInThisPage: number ,itemsPerPage: number ,items: Items[]);
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