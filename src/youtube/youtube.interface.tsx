export interface YoutubeUploads {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: PageInfo;
    items: Item[];
}

export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export interface Item {
    kind: string;
    etag: string;
    id: Id;
    snippet: Snippet;
}

export interface Id {
    kind: string;
    videoId: string;
}

export interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
}

export interface Thumbnails {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
}

export interface Thumbnail {
    url: string;
    width: number;
    height: number;
}
