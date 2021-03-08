{

    // record

    type PageInfo = {
        title:string,
    };
    type Page = 'home'|'about'|'contact';

    const nav : Record<Page, PageInfo> = {
        home: {title: 'H'},
        about: {title: "T"},
        contact:{title:"C"},
    }
    
}