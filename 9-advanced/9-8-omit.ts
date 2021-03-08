{
    type Video = {
        id:string,
        title: string,
        url: string,
        data: string,
    }

    // type VideoMetaData = Pick<Video,'id'|'title'>;
    type VideoMetaData = Omit<Video,'url'|'data'>;

    // extends와 never
    
    function getVideo(id: string){
        return {
        id,
        title: "video",
        url: 'http://..',
        data: 'data_data',
        };
    }
    function getMetaVideo(id: string):VideoMetaData{
        return {
        id,
        title: "video",
        };
    }
}