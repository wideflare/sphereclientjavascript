import {HomeItems} from './HomeItems.js'

 export interface GetHomeLoadMore {
     onResult( totalItemCount : number ,  itemsInThisPage : number ,  itemsPerPage : number ,   items :HomeItems[]);
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